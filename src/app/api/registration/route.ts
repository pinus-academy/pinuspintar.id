import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export interface Registration {
  id: string;
  nama: string;
  lulusan: string; 
  tujuan: string;
  foto: string;
  statusDonasi: 'membutuhkan' | 'terdanai';
}

export async function GET() {
  try {
    const pendaftarDariDb = await prisma.registration.findMany({
      select: {
        id: true,
        nama: true,
        lulusan: true,
        tujuan: true,
        foto: true,
      },
    });

    const dataYangSudahDimapping: Registration[] = pendaftarDariDb.map((item) => ({
      id: item.id,
      nama: item.nama,
      lulusan: item.lulusan,
      tujuan: item.tujuan,
      foto: item.foto,
      statusDonasi: 'membutuhkan' 
    }));

    return NextResponse.json(dataYangSudahDimapping);

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ message: "Terjadi kesalahan pada server" }, { status: 500 });
  }
}
