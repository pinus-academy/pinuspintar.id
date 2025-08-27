import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
// Impor tipe data dari file terpusat
import { Registration } from '@/types';

// Definisikan target donasi di sini
const TARGET_DONASI = 5000000; 

export async function GET() {
  try {
    const pendaftarDariDb = await prisma.registration.findMany({
      select: {
        id: true,
        nama: true,
        lulusan: true,
        tujuan: true,
        foto: true,
        donations: {
          where: { status: 'PAID' },
          select: { amount: true },
        },
      },
    });

    const dataYangSudahDimapping: Registration[] = pendaftarDariDb.map(item => {

      const donasiTerkumpul = item.donations.reduce((sum, donation) => sum + donation.amount, 0);
      
      const statusDonasi = donasiTerkumpul >= TARGET_DONASI ? 'terdanai' : 'membutuhkan';

      return {
        id: item.id,
        nama: item.nama,
        lulusan: item.lulusan,
        tujuan: item.tujuan,
        foto: item.foto || `https://i.pravatar.cc/400?u=${item.id}`,
        statusDonasi: statusDonasi,
        donasiTerkumpul: donasiTerkumpul,
        targetDonasi: TARGET_DONASI,
      };
    });

    return NextResponse.json(dataYangSudahDimapping);

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ message: "Terjadi kesalahan pada server" }, { status: 500 });
  }
}
