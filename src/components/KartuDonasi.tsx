import { Registration } from '@/app/donasi/page';

interface KartuDonasiProps {
  pendaftar: Registration;
  onDonasiClick: (id: string) => void;
  onShowDetailsClick: (pendaftar: Registration) => void; // Prop baru
}

export default function KartuDonasi({ pendaftar, onDonasiClick, onShowDetailsClick }: KartuDonasiProps) {
  const sudahDidanai = pendaftar.statusDonasi === 'terdanai';

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group flex flex-col h-full">
      <div className="relative">
        <img
          src={pendaftar.foto || 'https://placehold.co/600x400/e2e8f0/e2e8f0'} // Fallback image
          alt={`Foto ${pendaftar.nama}`}
          className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/e2e8f0/e2e8f0?text=Gagal+Muat'; }} // Handle broken image link
        />
        <div
          className={`absolute top-3 right-3 text-xs font-semibold py-1 px-3 rounded-full text-white ${
            sudahDidanai ? 'bg-gray-500' : 'bg-emerald-700'
          }`}
        >
          {sudahDidanai ? 'Terdanai' : 'Butuh Bantuan'}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-1 truncate">{pendaftar.nama}</h3>
        <p className="text-sm text-gray-500 mb-3">{pendaftar.lulusan}</p>
        <p className="text-gray-600 text-sm mb-5 h-20 overflow-hidden text-ellipsis">
          {pendaftar.tujuan}
        </p>
        
        <div className="mt-auto space-y-2">
          <button
            onClick={() => onShowDetailsClick(pendaftar)}
            className="w-full py-2.5 px-4 rounded-lg font-semibold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 transition-colors duration-300"
          >
            Selengkapnya
          </button>

          <button
            onClick={() => onDonasiClick(pendaftar.id)}
            disabled={sudahDidanai}
            className={`w-full py-2.5 px-4 rounded-lg font-semibold text-white transition-all duration-300 ${
              sudahDidanai
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-emerald-700 hover:bg-emerald-800 hover:shadow-md hover:-translate-y-0.5'
            }`}
          >
            {sudahDidanai ? 'Terima Kasih!' : 'Beri Donasi'}
          </button>
        </div>
      </div>
    </div>
  );
}
