'use client';

import { useState, useEffect } from 'react';
import KartuDonasi from '@/components/KartuDonasi';
import Image from 'next/image';

export interface Registration {
  id: string;
  nama: string;
  lulusan: string; 
  tujuan: string;
  foto: string;
  statusDonasi: 'membutuhkan' | 'terdanai';
  alamatLengkap?: string;
  tanggalLahir?: string;
}

function ModalDetail({ pendaftar, onClose }: { pendaftar: Registration; onClose: () => void; }) {
  if (!pendaftar) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 animate-fade-in-fast" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl relative transform transition-all duration-300 scale-95 animate-slide-up overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 bg-white bg-opacity-50 rounded-full p-1 hover:bg-opacity-100 hover:text-gray-800 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <div className="md:flex">
          <div className="md:w-1/3 p-6 flex items-center justify-center">
            <div className="w-full aspect-[3/4] rounded-lg overflow-hidden shadow-md">
              <img src={pendaftar.foto} alt={`Foto ${pendaftar.nama}`} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = 'https://placehold.co/300x400/e2e8f0/e2e8f0?text=Gagal+Muat'; }}/>
            </div>
          </div>
          <div className="p-6 md:py-8 md-pr-8 md:w-2/3 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-1">{pendaftar.nama}</h2>
            <p className="text-md text-gray-500 mb-4 font-medium">{pendaftar.lulusan}</p>
            <div className="border-t my-4"></div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Motivasi</h3>
            <div className="text-gray-700 leading-relaxed text-sm break-words"><p>{pendaftar.tujuan}</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- MODAL DONASI ---
function ModalDonasi({ pendaftar, onClose, onProceed, isProcessing }: { pendaftar: Registration; onClose: () => void; onProceed: (amount: number) => void; isProcessing: boolean; }) {
  const [amount, setAmount] = useState(100000);
  const [customAmount, setCustomAmount] = useState('');
  const presets = [100000, 300000, 500000];

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d]/g, '');
    setCustomAmount(value);
    setAmount(0);
  };

  const finalAmount = customAmount ? parseInt(customAmount, 10) : amount;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 animate-fade-in-fast" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-8 transform transition-all duration-300 scale-95 animate-slide-up" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl font-bold text-gray-800 text-center">Donasi untuk {pendaftar.nama}</h2>
        <p className="text-center text-gray-500 mb-6">Pilih nominal atau masukkan jumlah lain.</p>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {presets.map((preset) => (
            <button
              key={preset}
              onClick={() => { setAmount(preset); setCustomAmount(''); }}
              className={`p-3 rounded-lg font-semibold border-2 transition-colors ${amount === preset && !customAmount ? 'bg-emerald-700 text-white border-emerald-700' : 'bg-gray-100 text-gray-700 border-gray-200 hover:border-emerald-500'}`}
            >
              {new Intl.NumberFormat('id-ID').format(preset)}
            </button>
          ))}
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-1">Atau masukkan nominal lain (Rp)</label>
          <input
            type="text"
            value={customAmount ? new Intl.NumberFormat('id-ID').format(parseInt(customAmount, 10)) : ''}
            onChange={handleCustomAmountChange}
            placeholder="Contoh: 700.000"
            className="w-full p-3 rounded-lg border-2 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
          />
        </div>
        <button
          onClick={() => onProceed(finalAmount)}
          disabled={!finalAmount || finalAmount < 1 || isProcessing}
          className="w-full py-3 px-4 rounded-lg font-semibold text-white bg-emerald-700 hover:bg-emerald-800 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isProcessing ? 'Memproses...' : 'Lanjut Pembayaran'}
        </button>
      </div>
    </div>
  );
}


// --- KOMPONEN UTAMA: PageDonasi ---
export default function PageDonasi() {
  const [daftarPendaftar, setDaftarPendaftar] = useState<Registration[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPendaftar, setSelectedPendaftar] = useState<Registration | null>(null);
  const [donationTarget, setDonationTarget] = useState<Registration | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const fetchPendaftar = async () => {
      try {
        const response = await fetch('/api/registration', { cache: 'no-store' });
        if (!response.ok) throw new Error('Gagal mengambil data pendaftar');
        const data: Registration[] = await response.json();
        setDaftarPendaftar(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPendaftar();
  }, []);

  const handleDonasi = (pendaftar: Registration) => {
    setDonationTarget(pendaftar);
  };

  const handleProceedToPayment = async (amount: number) => {
    if (!donationTarget) return;
    
    setIsProcessing(true);

    try {
      const response = await fetch('/api/donasi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          registrationId: donationTarget.id,
          amount: amount,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || 'Gagal memproses pembayaran.');
      }

      window.location.href = result.data.paymentUrl;

    } catch (err: any) {
      alert(`Terjadi kesalahan: ${err.message}`);
      setIsProcessing(false); 
    }
  };
  
  const handleShowDetails = (pendaftar: Registration) => {
    setSelectedPendaftar(pendaftar);
  };
  
  const handleCloseModal = () => {
    setSelectedPendaftar(null);
  };

  if (isLoading) return <div className="flex justify-center items-center min-h-screen"><p>Memuat data...</p></div>;
  if (error) return <div className="flex justify-center items-center min-h-screen"><p>Terjadi kesalahan: {error}</p></div>;

  return (
    <div className="relative min-h-screen bg-gradient-to-t from-[#03681e] to-[#FAF9F6] text-black px-4 py-10 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col items-center text-center space-y-2">
          <Image
            src="/images/logos/logo hitam pp.png"
            alt="Logo Pinus Pintar"
            width={90}
            height={90}
            className="mx-auto"
          />
          <h1 className="text-2xl font-bold tracking-wide">Pinus Pintar</h1>
          <h2 className="text-xl font-bold text-gray-600 mb-15">Donasi Beasiswa Bootcamp</h2>
        </div>
      </div>

      <main className="container mx-auto px-6 pb-12">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-shadow-md text-gray-800">Pilih Penerima Donasi</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {daftarPendaftar.map((pendaftar, index) => (
            <div key={pendaftar.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <KartuDonasi 
                  pendaftar={pendaftar} 
                  onDonasiClick={() => handleDonasi(pendaftar)}
                  onShowDetailsClick={() => handleShowDetails(pendaftar)}
                />
            </div>
          ))}
        </div>
      </main>
      
      {selectedPendaftar && (
        <ModalDetail pendaftar={selectedPendaftar} onClose={handleCloseModal} />
      )}

      {donationTarget && (
        <ModalDonasi
          pendaftar={donationTarget}
          onClose={() => setDonationTarget(null)}
          onProceed={handleProceedToPayment}
          isProcessing={isProcessing}
        />
      )}
    </div>
  );
}
