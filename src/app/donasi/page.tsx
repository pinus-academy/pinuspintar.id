'use client';

import { useState, useEffect } from 'react';
import KartuDonasi from '@/components/KartuDonasi';

export interface Pendaftar {
  id: string;
  nama: string;
  sekolah: string;
  deskripsi: string;
  fotoUrl: string;
  statusDonasi: 'membutuhkan' | 'terdanai';
}

export default function HalamanDonasi() {
  const [daftarPendaftar, setDaftarPendaftar] = useState<Pendaftar[]>([]);

  useEffect(() => {
    const dataDummy: Pendaftar[] = [
        { id: '1', nama: 'Wisnu', sekolah: 'SMK Pelayaran', deskripsi: 'Butuh dana untuk buku pelajaran dan seragam sekolah agar bisa terus belajar dengan baik.', fotoUrl: 'https://i.pravatar.cc/400?u=wisnu', statusDonasi: 'membutuhkan' },
        { id: '2', nama: 'Ani Lestari', sekolah: 'SMA Negeri 2 Cita-Cita', deskripsi: 'Ingin mengikuti olimpiade sains tingkat nasional dan butuh biaya akomodasi serta pendaftaran.', fotoUrl: 'https://i.pravatar.cc/400?u=ani', statusDonasi: 'terdanai' },
        { id: '3', nama: 'Cahyo Wibowo', sekolah: 'SMK Berkarya', deskripsi: 'Memerlukan biaya untuk alat-alat praktik kejuruan agar bisa lulus dengan kompeten.', fotoUrl: 'https://i.pravatar.cc/400?u=cahyo', statusDonasi: 'membutuhkan' },
        { id: '4', nama: 'Dewi Anggraini', sekolah: 'Universitas Impian Bangsa', deskripsi: 'Mahasiswa berprestasi yang terkendala biaya Uang Kuliah Tunggal (UKT) semester ini.', fotoUrl: 'https://i.pravatar.cc/400?u=dewi', statusDonasi: 'membutuhkan' },
        { id: '5', nama: 'Risal', sekolah: 'Universitas Impian Papah', deskripsi: 'Mahasiswa berprestasi yang terkendala biaya Uang Kuliah Tunggal (UKT) semester ini.', fotoUrl: 'https://i.pravatar.cc/400?u=risal', statusDonasi: 'membutuhkan' },
        { id: '6', nama: 'Dewi Anggraini', sekolah: 'Universitas Impian Bangsa', deskripsi: 'Mahasiswa berprestasi yang terkendala biaya Uang Kuliah Tunggal (UKT) semester ini.', fotoUrl: 'https://i.pravatar.cc/400?u=dewi', statusDonasi: 'membutuhkan' },
        { id: '7', nama: 'Risal', sekolah: 'Universitas Impian Papah', deskripsi: 'Mahasiswa berprestasi yang terkendala biaya Uang Kuliah Tunggal (UKT) semester ini.', fotoUrl: 'https://i.pravatar.cc/400?u=risal', statusDonasi: 'membutuhkan' },
        { id: '8', nama: 'Dewi Anggraini', sekolah: 'Universitas Impian Bangsa', deskripsi: 'Mahasiswa berprestasi yang terkendala biaya Uang Kuliah Tunggal (UKT) semester ini.', fotoUrl: 'https://i.pravatar.cc/400?u=dewi', statusDonasi: 'membutuhkan' },
        { id: '9', nama: 'Risal', sekolah: 'Universitas Impian Papah', deskripsi: 'Mahasiswa berprestasi yang terkendala biaya Uang Kuliah Tunggal (UKT) semester ini.', fotoUrl: 'https://i.pravatar.cc/400?u=risal', statusDonasi: 'membutuhkan' },
        { id: '10', nama: 'Dewi Anggraini', sekolah: 'Universitas Impian Bangsa', deskripsi: 'Mahasiswa berprestasi yang terkendala biaya Uang Kuliah Tunggal (UKT) semester ini.', fotoUrl: 'https://i.pravatar.cc/400?u=dewi', statusDonasi: 'membutuhkan' },
        { id: '11', nama: 'Risal', sekolah: 'Universitas Impian Papah', deskripsi: 'Mahasiswa berprestasi yang terkendala biaya Uang Kuliah Tunggal (UKT) semester ini.', fotoUrl: 'https://i.pravatar.cc/400?u=risal', statusDonasi: 'membutuhkan' },
        { id: '12', nama: 'Dewi Anggraini', sekolah: 'Universitas Impian Bangsa', deskripsi: 'Mahasiswa berprestasi yang terkendala biaya Uang Kuliah Tunggal (UKT) semester ini.', fotoUrl: 'https://i.pravatar.cc/400?u=dewi', statusDonasi: 'membutuhkan' },
        { id: '13', nama: 'Risal', sekolah: 'Universitas Impian Papah', deskripsi: 'Mahasiswa berprestasi yang terkendala biaya Uang Kuliah Tunggal (UKT) semester ini.', fotoUrl: 'https://i.pravatar.cc/400?u=risal', statusDonasi: 'membutuhkan' },
        { id: '14', nama: 'Dewi Anggraini', sekolah: 'Universitas Impian Bangsa', deskripsi: 'Mahasiswa berprestasi yang terkendala biaya Uang Kuliah Tunggal (UKT) semester ini.', fotoUrl: 'https://i.pravatar.cc/400?u=dewi', statusDonasi: 'membutuhkan' },
        { id: '15', nama: 'Risal', sekolah: 'Universitas Impian Papah', deskripsi: 'Mahasiswa berprestasi yang terkendala biaya Uang Kuliah Tunggal (UKT) semester ini.', fotoUrl: 'https://i.pravatar.cc/400?u=risal', statusDonasi: 'terdanai' },
      
      ];
    setDaftarPendaftar(dataDummy);
  }, []);

  const handleDonasi = (id: string) => {
    console.log(`Pengguna ingin donasi untuk pendaftar ID: ${id}`);
    const urlPembayaranDuitku = `https://duitku.com/payment-method/sandbox?id=${id}`; // Contoh URL Sandbox Duitku
    window.open(urlPembayaranDuitku, '_blank');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative text-center bg-gradient-to-r from-green-700 to-emerald-700 text-white overflow-hidden">
        <div className="relative z-10 py-24 px-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-shadow">Satu Kebaikan, Sejuta Harapan</h1>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-shadow-sm">Donasi Beasiswa S1</h2>
        </div>
        {/* Menambahkan bentuk gelombang di bawah hero section */}
        <div className="absolute bottom-0 left-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#f9fafb" fillOpacity="1" d="M0,160L48,181.3C96,203,192,245,288,245.3C384,245,480,203,576,192C672,181,768,203,864,224C960,245,1056,267,1152,256C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </div>
      </div>

      {/* Konten Utama - Grid Donasi */}
      <main className="container mx-auto px-6 py-12 -mt-16 md:-mt-24"> {/* Margin atas negatif agar naik ke area gelombang */}
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Pilih Penerima Donasi</h2>
            <p className="text-gray-600 mt-2 max-w-xl mx-auto">Setiap individu di bawah ini memiliki cerita dan potensi luar biasa. Bantuan Anda akan sangat berarti.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {daftarPendaftar.map((pendaftar, index) => (
            <div key={pendaftar.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <KartuDonasi 
                pendaftar={pendaftar} 
                onDonasiClick={handleDonasi} 
                />
            </div>
          ))}
        </div>
      </main>
      
    </div>
  );
}