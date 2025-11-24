
import React from 'react';
import Image from 'next/image';
import Header from '@/components/about/Header';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami - PinusPintar.id",
  description: "Intensive bootcamps in tech, design, and digital marketing.",
};

const AboutUsPage = () => {

  return (
    <section className=''>
      <Header />
      <div className=' bg-[#F9F9F9] py-14 lg:py-20'>
        <h1 className='text-center font-bold text-3xl text-green-text'>Kolaborasi & Kontribusi</h1>
      </div>

      <div className='py-16 max-w-8xl mx-auto px-6 md:py-28'>
        <div className='flex flex-col lg:flex-row gap-8 justify-center '>
          <div className='flex-1/2'>
            <h2 className='text-[#566A61] text-3xl font-bold py-4'>Program Kolaboratif</h2>
            <p className='text-justify text-lg text-black leading-relaxed'>
              Program Kolaborasi adalah inisiatif yang dirancang untuk
              menghubungkan peserta dengan dunia industri secara langsung. Melalui program ini, peserta tidak hanya mendapatkan
              pelatihan coding yang disusun bersama mitra industri, tetapi juga berkesempatan mengikuti berbagai kompetisi inovasi
              seperti hackathon dan ideathon untuk mengasah kreativitas serta kemampuan problem-solving. Selain itu, program ini juga
              membuka peluang pertukaran mentor dengan profesional di bidangnya sehingga peserta dapat memperoleh wawasan dan pengalaman
              nyata dari praktisi industri.
            </p>
          </div>
          <div className='flex-1/2 order-first lg:order-last'>
            <Image src={'/Frame Kolaboratif.png'} loading='lazy' alt='gambar3' width={630} height={390} className='w-full'/>
          </div>
        </div>
        <div className='pt-10 flex flex-col lg:flex-row gap-8 justify-center'>
          <div className='flex-1/2 order-first'>
            <Image src={'/gambar7.png'} loading='lazy' alt='gambar 7' width={630} height={390} className='w-full' />
          </div>
          <div className='flex-1/2'>
            <h3 className='font-bold text-[#566A61] text-3xl py-4 lg:text-right'>Kontribusi Pinus Pintar</h3>
            <p className='lg:text-justify text-lg text-black leading-relaxed'>
              PinusPintar telah memberikan dampak nyata dalam pengembangan
              talenta digital di Indonesia. Saat ini, lebih dari 200 anggota aktif tersebar di berbagai daerah, dengan 80% di antaranya
              berhasil meningkatkan keterampilan digital melalui program-program kami. Program dan komunitas PinusPintar sudah menjangkau
              lebih dari 20 kota di seluruh Indonesia,sehingga semakin banyak anak muda dapat mengakses pelatihan teknologi berkualitas.
            </p>
          </div>
        </div>
        <div className='text-center mb-8 py-20'>
          <h1 className='font-bold text-[32px] text-[#374F44] mb-10 lg:mb-20 '>Galeri Kami</h1>
          <div className='flex flex-wrap gap-8 justify-center lg:justify-start'>
            <Image src={'/gambar8.png'} loading='lazy' alt='gambar 8' width={305} height={381} className='w-40 md:w-80' />
            <Image src={'/gambar9.png'} loading='lazy' alt='gambar 9' width={305} height={381} className='w-40 md:w-80' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage; 