'use client';

import Image from 'next/image';
import FormPendaftaran from '@/components/FormPendaftaran';

export default function DaftarPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-t from-[#F97316] to-[#FAF9F6] text-black px-4 py-10 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col items-center text-center space-y-2">
          <Image
            src="/images/logos/PinusPintar.png"
            alt="Logo Pinus Pintar"
            width={200}
            height={200}
            className="mx-auto"
          />
          <h1 className="text-2xl font-bold tracking-wide">Pinus Pintar</h1>
          <p className="text-sm text-gray-600">
            Formulir Pendaftaran Program Beasiswa & Pengajaran
          </p>
        </div>

        <FormPendaftaran />
      </div>
    </div>
  );
}
