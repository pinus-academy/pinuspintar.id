import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      nama,
      email,
      telepon,
      alamatLengkap,
      tanggalLahir,
      lulusan,
      gajiOrtu,
      namaOrtu,
      tujuan,
      bersedia,
    } = body;

    const newRegistration = await prisma.registration.create({
      data: {
        nama,
        email,
        telepon,
        alamatLengkap,
        tanggalLahir: new Date(tanggalLahir),
        lulusan,
        gajiOrtu: parseInt(gajiOrtu),
        namaOrtu,
        tujuan,
        bersedia,
      },
    });

    return NextResponse.json(newRegistration, { status: 201 });
  } catch (error) {
    console.error('Error saat menyimpan data:', error);
    return NextResponse.json({ error: 'Gagal menyimpan data' }, { status: 500 });
  }
}
