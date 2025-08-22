// src/app/api/donasi/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { createDuitkuPayment } from '../../../lib/duitku.services';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { registrationId, amount } = body;

    if (!registrationId || !amount || amount < 1) {
      return NextResponse.json({ success: false, error: 'Data tidak valid' }, { status: 400 });
    }

    const pendaftar = await prisma.registration.findUnique({
      where: { id: registrationId },
    });

    if (!pendaftar) {
      return NextResponse.json({ success: false, error: 'Penerima donasi tidak ditemukan' }, { status: 404 });
    }

    const newDonation = await prisma.donation.create({
      data: {
        amount: amount,
        status: 'PENDING',
        registrationId: registrationId,
      },
    });
    
    const orderId = newDonation.id;

    const paymentResponse = await createDuitkuPayment(
      {
        nama: 'Donatur Pinus Pintar',
        whatsapp: '08123456789',
        alamat: 'Indonesia',
        email: `donasi-${orderId}@pinuspintar.com`
      },
      orderId,
      amount,
      `Donasi untuk ${pendaftar.nama}`,
      'SP' // Kode untuk QRIS, bisa dibuat dinamis
    );

    return NextResponse.json({
      success: true,
      data: {
        paymentUrl: paymentResponse.paymentUrl,
      },
    });

  } catch (error) {
    console.error('Error membuat donasi:', error);
    return NextResponse.json({ success: false, error: 'Terjadi kesalahan di server' }, { status: 500 });
  }
}