'use client';

import React, { useState } from 'react';
import { formatCurrency } from '@/lib/utils';
import { error } from 'console';

export default function FormPendaftaran() {
  const [gajiOrtu, setGajiOrtu] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const form = e.currentTarget;

    setLoading(true);
    setMessage('');

    const formData = new FormData(form);

    const gajiOrtuValue = formData.get('gajiOrtu');
    if (typeof gajiOrtuValue === 'string') {
      formData.set('gajiOrtu', gajiOrtuValue.replace(/[^\d]/g, ''));
    }

    formData.set('bersedia', formData.get('bersedia') ? 'true' : 'false');

    try {
      const res = await fetch('/api/daftar', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setMessage('✅ Pendaftaran berhasil disimpan!');
        form.reset(); 
        setGajiOrtu('');
      } else {
        const errorData = await res.json();
        setMessage(`❌ Gagal menyimpan data: ${errorData.message || 'Silakan coba lagi.'}`);
      }
    } catch (err) {
      console.error(err);
      setMessage('❌ Terjadi kesalahan pada koneksi. Mohon periksa internet Anda.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 ">
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-10 border border-gray-200 rounded-lg shadow ">
        {/* Grid 2 kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kolom kiri */}
          <div className="space-y-6">
            {/* Nama Lengkap */}
            <div>
              <label className="block mb-1 text-sm font-medium">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Contoh: Pak Ahmad"
              />
            </div>

            {/* Alamat Email */}
            <div>
              <label className="block mb-1 text-sm font-medium">Alamat Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Contoh: ahmadganteng@gmail.com"
              />
            </div>

            {/* Nomor Telepon */}
            <div>
              <label className="block mb-1 text-sm font-medium">Nomor Telepon</label>
              <input
                type="tel"
                name="telepon"
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Contoh: 081234567890"
              />
            </div>

            {/* Alamat Lengkap */}
            <div>
              <label className="block mb-1 text-sm font-medium">Alamat Lengkap</label>
              <textarea
                name="alamatLengkap"
                required
                rows={3}
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Contoh: Jl. Melati No. 12, RT 01 RW 02, Kel. Mulyorejo, Kec. Tembalang, Semarang"
              />
            </div>

            {/* Tanggal Lahir */}
            <div>
              <label className="block mb-1 text-sm font-medium">Tanggal Lahir</label>
              <input
                type="date"
                name="tanggalLahir"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 uppercase"
              />
            </div>
          </div>

          {/* Kolom kanan */}
          <div className="space-y-6">
            {/* Lulusan Terakhir */}
            <div>
              <label className="block mb-1 text-sm font-medium">Lulusan Terakhir</label>
              <input
                type="text"
                name="lulusan"
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Contoh: SMK Muhammadiyah Semarang"
              />
            </div>

            {/* Upload Foto */}
            <div>
              <label className="block mb-1 text-sm font-medium">Upload Foto Diri</label>
              <input
                type="file"
                name="foto"
                required
                accept="image/png, image/jpeg, image/jpg"
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
              />
              <p className="mt-1 text-xs text-gray-500">Format: JPG atau PNG. Maksimal 2MB.</p>
            </div>

            {/* Gaji Orang Tua */}
            <div>
              <label className="block mb-1 text-sm font-medium">Gaji Terakhir Orang Tua</label>
              <input
                type="text"
                name="gajiOrtu"
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Contoh: 1.500.000"
                value={gajiOrtu}
                onChange={(e) => {
                  const raw = e.target.value.replace(/[^\d]/g, '');
                  const formatted = raw ? formatCurrency(Number(raw)) : '';
                  setGajiOrtu(formatted);
                }}
              />
            </div>

            {/* Nama Orang Tua */}
            <div>
              <label className="block mb-1 text-sm font-medium">Nama Orang Tua</label>
              <input
                type="text"
                name="namaOrtu"
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Contoh: Bapak Gonjali"
              />
            </div>

            {/* Tujuan */}
            <div>
              <label className="block mb-1 text-sm font-medium">
                Apa motivasi kamu bergabung di PinusPintar?
              </label>
              <textarea
                name="tujuan"
                required
                rows={3}
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Contoh: Saya ingin meningkatkan kemampuan akademik dan berbagi ilmu kepada orang lain di masa depan."
              />
            </div>
          </div>
        </div>

        {/* Checkbox & Submit */}
        <div className="space-y-4 pt-4">
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="bersedia"
              name="bersedia"
              required
              className="mt-1"
            />
            <label htmlFor="bersedia" className="text-sm">
              Saya bersedia, jika sudah lulus, untuk kembali dan mengajar adik kelas atau mustahiq lainnya.
            </label>
          </div>
          <div className="flex justify-center">
            <button type="submit" disabled={loading} className="bg-green-700 hover:bg-green-800 text-white py-2 px-6 shadow-md rounded-md disabled:bg-gray-400">
              {loading ? 'Mengirim...' : 'Kirim Pendaftaran'}
            </button>
          </div>
          {message && <p className="text-center text-sm mt-2">{message}</p>}
        </div>
      </form>
    </div>
  );
}
