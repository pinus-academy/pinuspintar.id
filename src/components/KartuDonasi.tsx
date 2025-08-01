// components/KartuDonasi.tsx

import { Pendaftar } from '@/app/donasi/page';

interface KartuDonasiProps {
  pendaftar: Pendaftar;
  onDonasiClick: (id: string) => void;
}

export default function KartuDonasi({ pendaftar, onDonasiClick }: KartuDonasiProps) {
  const sudahDidanai = pendaftar.statusDonasi === 'terdanai';

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
      <div className="relative">
        {pendaftar.fotoUrl && (
          <img
            src={pendaftar.fotoUrl}
            alt={`Foto ${pendaftar.nama}`}
            className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <div
          className={`absolute top-3 right-3 text-xs font-semibold py-1 px-3 rounded-full text-white ${
            sudahDidanai ? 'bg-gray-500' : 'bg-emerald-700'
          }`}
        >
          {sudahDidanai ? 'Terdanai' : 'Butuh Bantuan'}
        </div>
      </div>
      
      {/* ===== BAGIAN INI KEMUNGKINAN BESAR HILANG DARI KODE ANDA ===== */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-1 truncate">{pendaftar.nama}</h3>
        <p className="text-sm text-gray-500 mb-3">{pendaftar.sekolah}</p>
        <p className="text-gray-600 text-sm mb-5 h-20">{pendaftar.deskripsi}</p>
        
        <button
          onClick={() => onDonasiClick(pendaftar.id)}
          disabled={sudahDidanai}
          className={`w-full py-2.5 px-4 rounded-lg font-semibold text-white transition-all duration-300 ${
            sudahDidanai
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-emerald-700 hover:bg-emerald-700 hover:shadow-md hover:-translate-y-0.5'
          }`}
        >
          {sudahDidanai ? 'Terima Kasih!' : 'Beri Donasi'}
        </button>
      </div>
       {/* ============================================================= */}

    </div>
  );
}