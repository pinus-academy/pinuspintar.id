'use client';

import React from 'react';
import Image from 'next/image';
import NavBar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';

const AboutUsPage = () => {

  return (
    <section className='bg-gray-100 '>
        <NavBar />
      <div className='flex gap-8  bg-gray-100 space-y-7 py-20 justify-center '>
        <div className='relative'>
          <div>
            <Image src={'/gambar1.png'} alt='gambar 1' width={620} height={761} className='z-0' />
          </div>
          <div className='absolute flex gap-10 justify-center backdrop-blur-sm bg-[#26323899]  rounded-3xl w-[1000px] h-[183px] -bottom-7 left-6 '>
            <div className='relative w-[220px] h-[167] mx-6 pt-3'>
              <Image src={'/elip.png'} alt='elip' width={100} height={100} className='absolute z-10' />
              <p className=' text-[36px] px-14 pt-15 -20 w-[250px] h-[108px]'>200+ <br />Peserta</p>
            </div>
            <div className='relative w-[220px] h-[167] mx-6 pt-3'>
              <Image src={'/elip.png'} alt='elip' width={100} height={100} className='absolute z-10' />
              <p className=' text-[36px] px-14 pt-15 -20 w-[330px] h-[108px]'>80% Peserta Skill Up</p>
            </div>
            <div className='relative w-[220px] h-[167] mx-6 pt-3'>
              <Image src={'/elip.png'} alt='elip' width={100} height={100} className='absolute z-10' />
              <p className=' text-[36px] px-14 pt-15 -20 w-[330px] h-[108px] '>20+ Kota Terjangkau</p>
            </div>
          </div>
        </div>
        <div className='space-y-7 pt-30 text-justify w-[445px]  h-[360px]'>
          <h1 className='text-green-900 font-bold text-[36px] '>About Us</h1>
          <h2 className='text-[#75857E] font-bold text-[36px]'>BOOTCAMP COODING</h2>
          <p className='text-black text-[16px] '> <span className='font-bold text-[#183428]'>PINUS PINTAR TEKNOLOGI</span> adalah komunitas belajar pengembangan talenta teknologi. Berdiri sejak empat  tahun lalu.</p>
          <p className='text-black text-[16px] '>Kami telah memberdayakan lebih dari <span className='font-bold text-[#183428]'>250 peserta </span> ,terdiri dari 49 peserta tatap muka dan lebih dari 220 peserta online, untuk mempelajari coding, devops, cloud engineer dari tingkat dasar hingga siap kerja.</p>
          <p className='text-black text-[16px]'> <span className=' text-[#183428] font-bold'>Semua pembelajaran diberikan secara gratis </span>, termasuk akses ke fasilitas laptop bagi peserta. Pendekatan kami berbasis proyek nyata dan didukung oleh mentor industri, untuk memastikan pesertamemiliki keterampilan yang dibutuhkan dunia kerja saat ini.</p>
        </div>
      </div>
      <div className=' bg-[#F9F9F9] w-[144opx] justify-center h-[215px] top-[1118px]'>
        <h1 className='text-center text-[#374F44] pt-[80px] font-bold text-[32px]'>Kolaborasi & Kontribusi</h1>
      </div>
      <div className='flex gap-8 justify-center'>
        <div className=''>
          <h2 className='text-[#566A61] text-[32px] font-bold py-4'>Program Kolaboratif</h2>
          <p className='w-[606px] h-[270px] text-justify text-black '>Program Kolaborasi adalah inisiatif yang dirancang untuk
            menghubungkan peserta dengan dunia industri secara langsung. Melalui program ini, peserta tidak hanya mendapatkan
            pelatihan coding yang disusun bersama mitra industri, tetapi juga berkesempatan mengikuti berbagai kompetisi inovasi
            seperti hackathon dan ideathon untuk mengasah kreativitas serta kemampuan problem-solving. Selain itu, program ini juga
            membuka peluang pertukaran mentor dengan profesional di bidangnya sehingga peserta dapat memperoleh wawasan dan pengalaman
            nyata dari praktisi industri.</p>
        </div>
        <div className='pt-8'>
          <Image src={'/Frame Kolaboratif.png'} alt='gambar3' width={630} height={390} />
        </div>
      </div>
      <div className='pt-10 flex gap-8 justify-center'>
        <div>
          <Image src={'/gambar7.png'} alt='gambar 7' width={630} height={390} className='pt-3' />
        </div>
        <div>
          <h1 className='font-bold text-[#566A61] text-[32px]'>Kontribusi Pinus Pintar</h1>
          <p className='w-[606px] h-[270px] text-justify text-black '>PinusPintar telah memberikan dampak nyata dalam pengembangan
            talenta digital di Indonesia. Saat ini, lebih dari 200 anggota aktif tersebar di berbagai daerah, dengan 80% di antaranya
            berhasil meningkatkan keterampilan digital melalui program-program kami. Program dan komunitas PinusPintar sudah menjangkau
            lebih dari 20 kota di seluruh Indonesia,
            sehingga semakin banyak anak muda dapat mengakses pelatihan teknologi berkualitas.</p>
        </div>
      </div>
      <div className='text-center mb-8 pt-40'>
        <h1 className='font-bold text-[32px] text-[#374F44] mb-20 '>Our Galleries</h1>
        <div className='flex gap-8 px-10 mb-40'>
          <Image src={'/gambar8.png'} alt='gambar 8' width={305} height={381} />
          <Image src={'/gambar9.png'} alt='gambar 9' width={305} height={381} />
        </div>
      </div>
     <Footer />
    </section>
  );
};

export default AboutUsPage; 