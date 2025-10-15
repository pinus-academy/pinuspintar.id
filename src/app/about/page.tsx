'use client';

import React from 'react';
import Image from 'next/image';

const AboutUsPage = () => {

  return (
    <section className=''>
      <div className='flex flex-col lg:flex-row gap-8 py-20 justify-center max-w-8xl mx-auto px-6'>
        <div className='relative flex justify-center lg:justify-end flex-1/2 text-white text-xl lg:text-4xl'>
          <div>
            <Image src={'/gambar1.png'} alt='gambar 1' width={620} height={5} className=' rounded-2xl' />
          </div>
          <div className='hidden xl:block absolute top-36 left-20 -z-10'>
            <Image src={'assets/square-pattern.svg'} alt='square' width={150} height={150} />
          </div>
          <div className='absolute hidden xl:flex gap-4 xl:gap-10 justify-center backdrop-blur-sm bg-[#26323899] w-full rounded-4xl md:w-[50.5rem] lg:w-[68.5rem] h-44 -bottom-7 left-0 md:left-14 xl:left-52 '>
            <div className='relative w-52 mx-6 pt-3 xl:w-80'>
              <Image src={'/elip.png'} alt='elip' width={100} height={100} className='size-20 absolute z-10' />
              <p className='pl-12 xl:pl-14 pt-15'>200+ <br />Peserta</p>
            </div>
            <div className='relative w-52 mx-6 pt-3 xl:w-80'>
              <Image src={'/elip.png'} alt='elip' width={100} height={100} className='size-20 absolute z-10' />
              <p className='pl-12 xl:pl-14 pt-15'>80% Peserta Skill Up</p>
            </div>
            <div className='relative w-52 mx-6 pt-3 xl:w-80'>
              <Image src={'/elip.png'} alt='elip' width={100} height={100} className='size-20 absolute z-10' />
              <p className='pl-12 xl:pl-14 pt-15 '>20+ Kota Terjangkau</p>
            </div>
          </div>
        </div>
        <div className='flex-1/3 space-y-4 md:space-y-7 lg:pt-12 text-justify'>
          <h1 className='text-green-900 font-bold text-4xl '>About Us</h1>
          <h2 className='text-[#75857E] font-bold text-3xl md:text-4xl'>BOOTCAMP COODING</h2>
          <p className='text-black '> <span className='font-bold text-[#183428]'>PINUS PINTAR TEKNOLOGI</span> adalah komunitas belajar pengembangan talenta teknologi. Berdiri sejak empat  tahun lalu.</p>
          <p className='text-black '>Kami telah memberdayakan lebih dari <span className='font-bold text-[#183428]'>250 peserta </span> ,terdiri dari 49 peserta tatap muka dan lebih dari 220 peserta online, untuk mempelajari coding, devops, cloud engineer dari tingkat dasar hingga siap kerja.</p>
          <p className='text-black '> <span className=' text-[#183428] font-bold'>Semua pembelajaran diberikan secara gratis </span>, termasuk akses ke fasilitas laptop bagi peserta. Pendekatan kami berbasis proyek nyata dan didukung oleh mentor industri, untuk memastikan pesertamemiliki keterampilan yang dibutuhkan dunia kerja saat ini.</p>
        </div>
      </div>
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
            <Image src={'/Frame Kolaboratif.png'} alt='gambar3' width={630} height={390} className='w-full'/>
          </div>
        </div>
        <div className='pt-10 flex flex-col lg:flex-row gap-8 justify-center'>
          <div className='flex-1/2 order-first'>
            <Image src={'/gambar7.png'} alt='gambar 7' width={630} height={390} className='w-full' />
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
          <h1 className='font-bold text-[32px] text-[#374F44] mb-10 lg:mb-20 '>Our Galleries</h1>
          <div className='flex flex-wrap gap-8 justify-center lg:justify-start'>
            <Image src={'/gambar8.png'} alt='gambar 8' width={305} height={381} className='w-40 md:w-80' />
            <Image src={'/gambar9.png'} alt='gambar 9' width={305} height={381} className='w-40 md:w-80' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage; 