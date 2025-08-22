'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';

// Komponen kecil untuk menampilkan konten berdasarkan status
function PaymentStatusContent() {
  const searchParams = useSearchParams();
  const resultCode = searchParams.get('resultCode');
  const orderId = searchParams.get('merchantOrderId');
  const amount = searchParams.get('amount');

  // Format Rupiah
  const formattedAmount = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(Number(amount));

  if (resultCode === '00') {
    return (
      <div className="text-center">
        <svg className="w-20 h-20 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <h1 className="text-3xl font-bold text-gray-800">Pembayaran Berhasil!</h1>
        <p className="text-gray-600 mt-2">Terima kasih atas donasi Anda sebesar <strong>{formattedAmount}</strong>.</p>
        <p className="text-sm text-gray-500 mt-1">ID Pesanan: {orderId}</p>
      </div>
    );
  }

  if (resultCode === '01') {
    return (
      <div className="text-center">
        <svg className="w-20 h-20 text-yellow-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <h1 className="text-3xl font-bold text-gray-800">Pembayaran Tertunda</h1>
        <p className="text-gray-600 mt-2">Kami masih menunggu konfirmasi pembayaran Anda. Silakan selesaikan pembayaran di aplikasi yang Anda pilih.</p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <svg className="w-20 h-20 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <h1 className="text-3xl font-bold text-gray-800">Pembayaran Gagal</h1>
      <p className="text-gray-600 mt-2">Maaf, terjadi masalah saat memproses pembayaran Anda. Silakan coba lagi.</p>
    </div>
  );
}

export default function PaymentStatusPage() {
  return (
    // Suspense diperlukan karena useSearchParams membaca data saat rendering
    <Suspense fallback={<div className="text-center p-10">Memuat...</div>}>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <PaymentStatusContent />
          <div className="mt-8 text-center">
            <Link href="/donasi" className="px-6 py-3 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors">
              Kembali ke Halaman Donasi
            </Link>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
