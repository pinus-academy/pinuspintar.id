'use client';

import React, { useState } from 'react';
import { formatCurrency } from '@/lib/utils';

export default function FormPendaftaran() {
  const [gajiOrtu, setGajiOrtu] = useState('');

  return (
    
      <div className="max-w-screen-xl mx-auto px-4 ">
        <form className="space-y-6 bg-white p-8 md:p-10 border border-gray-200 rounded-lg shadow ">
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
                  placeholder="Contoh: Pinus Pintar"
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
                  placeholder="Contoh: pinuspintar@gmail.com"
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
                  placeholder="Contoh: SMA Negeri 1 Semarang"
                />
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
                  placeholder="Contoh: Bapak Ahmad Gonjali"
                />
              </div>

              {/* Tujuan */}
              <div>
                <label className="block mb-1 text-sm font-medium">
                  Apa tujuan kamu bergabung di PinusPintar?
                </label>
                <textarea
                  name="tujuan"
                  required
                  rows={4}
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
                required
                className="mt-1"
              />
              <label htmlFor="bersedia" className="text-sm">
                Saya bersedia, jika sudah lulus, untuk kembali dan mengajar adik kelas atau mustahiq lainnya.
              </label>
            </div>
            <div className= "flex justify-center">
                <button type="submit" className="bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded-md ">Kirim Pendaftaran</button>
            </div>
          </div>
        </form>
      </div>
   
  );
}
