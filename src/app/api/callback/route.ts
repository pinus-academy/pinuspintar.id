import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import CryptoJS from 'crypto-js';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("--- DUITKU CALLBACK RECEIVED ---");
    console.log(JSON.stringify(body, null, 2));

    const { merchantOrderId, resultCode, signature } = body;
    const amount = parseInt(body.amount, 10);

    const merchantCode = process.env.DUITKU_MERCHANT_CODE!;
    const apiKey = process.env.DUITKU_API_KEY!;
    
    const expectedSignature = CryptoJS.MD5(merchantCode + amount + merchantOrderId + apiKey).toString();

    if (signature !== expectedSignature) {
      console.error("Signature tidak valid!");
      return NextResponse.json({ message: "Invalid request" }, { status: 400 });
    }

    // --- PROSES UPDATE DATABASE ---
    const donation = await prisma.donation.findUnique({
      where: { id: merchantOrderId },
    });

    if (!donation) {
      console.error(`Donasi dengan ID ${merchantOrderId} tidak ditemukan.`);
      return NextResponse.json({ status: "01", message: "Order id not found" });
    }

    let newStatus = 'FAILED';
    if (resultCode === '00') {
      newStatus = 'PAID';
    } else if (resultCode === '01') {
      newStatus = 'PENDING';
    }

    await prisma.donation.update({
      where: { id: merchantOrderId },
      data: { status: newStatus },
    });

    console.log(`Status donasi ${merchantOrderId} berhasil diupdate menjadi ${newStatus}`);

    return NextResponse.json({ status: "00", message: "SUCCESS" });

  } catch (error) {
    console.error("Error di API Callback:", error);
    return NextResponse.json({ message: "Terjadi kesalahan pada server" }, { status: 500 });
  }
}
