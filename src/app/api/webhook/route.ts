import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

// PENTING: Di aplikasi nyata, Anda harus mengamankan webhook ini
// agar hanya bisa diakses oleh layanan pembayaran yang sah.

export async function POST(req: Request) {
  try {
    // Layanan pembayaran biasanya mengirim data dalam format JSON.
    // Kita asumsikan mereka mengirim 'orderId' (ID donasi kita) dan 'status'.
    const body = await req.json();
    const { orderId, transaction_status } = body;

    // Validasi data yang masuk
    if (!orderId || !transaction_status) {
      return NextResponse.json({ message: "Data tidak lengkap" }, { status: 400 });
    }

    // Logika untuk menangani status pembayaran
    // Layanan pembayaran yang berbeda memiliki nama status yang berbeda.
    // 'settlement' atau 'capture' biasanya berarti pembayaran berhasil.
    if (transaction_status === 'settlement' || transaction_status === 'capture') {
      
      // Cari donasi di database berdasarkan ID yang dikirim oleh webhook
      const donation = await prisma.donation.findUnique({
        where: { id: orderId },
      });

      // Jika donasi ditemukan dan statusnya masih PENDING, update menjadi PAID
      if (donation && donation.status === 'PENDING') {
        await prisma.donation.update({
          where: { id: orderId },
          data: { status: 'PAID' },
        });

        console.log(`Donasi ${orderId} berhasil diupdate menjadi PAID.`);
      }
    }

    // Selalu kirim respons 'OK' (status 200) ke layanan pembayaran
    // agar mereka tahu notifikasinya sudah diterima.
    return NextResponse.json({ message: "Webhook diterima" }, { status: 200 });

  } catch (error) {
    console.error("Webhook Error:", error);
    return NextResponse.json({ message: "Terjadi kesalahan pada server" }, { status: 500 });
  }
}
