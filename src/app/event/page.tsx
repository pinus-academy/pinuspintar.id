'use client';

import React from 'react';
import Image from 'next/image';
import NavBar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';


const eventPage = () => {

  return (
    <section className='relative bg-gray-100'>
      <NavBar />
      <div className='absolute w-[200px] h-[370px] top-193 right-60 z-10'>
        <Image src={'/kotak2.png'} alt='kotak hijau' width={200} height={370} />
      </div>
      <div className='relative flex gap-20 justify-center pt-20 mb-30'>

        <div className='space-y-7 pt-30 font-[poppins]'>
          <h1 className="bg-gray-100 text-[#374F44] text-[36px] w-[630px] h-[108] font-bold">Temukan Potensimu: Ikuti Event Seru Bersama PinusPintar!</h1>
          <p className='text-[#374F44] w-[630px] h-[120] text-[20px] text-justify'>Raih kesempatan belajar langsung dari mentor berpengalaman melalui bootcamp, workshop, dan webinar
            interaktif kami. Tingkatkan skill-mu, perluas koneksi, dan wujudkan karier impianmu!</p>
        </div>
        <div className='shadow-lg'>
          <Image src={'/gambar00.png'} alt='gambar kosong' width={542} height={360} />
        </div>
      </div>
      <div className='relative bg-[#F9F9F9]'>

        <div className=' flex gap-5 mx-20 pt-20'>
          <div className='relative group '>
          <a href="" className='flex justify-between bg-[#FFFFFF] w-[433px] h-[64px] text-black items-center rounded-lg shadow-md px-5'>Pilih Kategori Event
            <svg className="ml-2 fill-current text-black " width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.99999 14.9C7.84999 14.9 7.72499 14.85 7.59999 14.75L1.84999 9.10005C1.62499 8.87505 1.62499 8.52505 1.84999 8.30005C2.07499 8.07505 2.42499 8.07505 2.64999 8.30005L7.99999 13.525L13.35 8.25005C13.575 8.02505 13.925 8.02505 14.15 8.25005C14.375 8.47505 14.375 8.82505 14.15 9.05005L8.39999 14.7C8.27499 14.825 8.14999 14.9 7.99999 14.9Z"></path>
            </svg>
          </a>
          <div className='absolute group w-[250px] h-[270px] items-center backdrop-blur-sm bg-white/30 flex flex-wrap text-black left-70 top-18 rounded-xl shadow-lg opacity-0  group-hover:opacity-100  transition-all duration-500 z-10 transform translate-y-4 group-hover:translate-y-0 px-7" '>
            <ul className='mx-auto space-y-2 text-[18px] font-[poppins]'>
            <li><a href="" className='hover:text-[#479A76] duration-300 '>Web Programming</a></li>
            <li><a href="" className='hover:text-[#479A76] duration-500 '>Mobile Programming</a></li>
            <li><a href="" className='hover:text-[#479A76] duration-500 '>Fullstack Development</a></li>
            <li><a href="" className='hover:text-[#479A76] duration-500 '>Backend Development</a></li>
            <li><a href="" className='hover:text-[#479A76] duration-500 '>Frontend Development</a></li>
            <li><a href="" className='hover:text-[#479A76] duration-500 '>UI / UX</a></li>
            <li><a href="" className='hover:text-[#479A76] duration-500 '>Dev Ops</a></li>
            </ul>
          </div>
          </div>
          <a href="" className='flex justify-between bg-[#FFFFFF]  w-[345px] h-[64px] rounded-lg shadow-md '></a>
        </div>
        <div className='flex gap-6 justify-center '>
          <div className='relative bg-[#FFFFFF] font-[poppins] w-[413px] h-[565px] space-y-4 mt-10 rounded-lg shadow-lg mb-20 '>
            <Image src={'/gambar00.png'} alt='gambar kosong' width={413} height={413} className='rounded-lg' />
            <h1 className='text-[#000000] text-[16px] w-[320px] h-[24px]  mx-3'>Building Modern Web Apps with Next.js</h1>
            <p className='text-[14px] text-[#4C4C4CB2]/70 w-[384] h-[42px] mx-3 '>Learn how to create fast, SEO-friendly applications with Next.js.</p>

            <div className='absolute flex gap-3 bottom-44'>
              <div className='flex justify-center gap-2 mx-2 items-center w-[130px] h-[46px] bg-[#FFFFFF] rounded-md shadow-md'>
                <Image src={'/calendar.png'} alt='kalender' width={24} height={24} />
                <p className='text-[12px] font-[poppins] text-[#000000] '>31 Des 2025</p>
              </div>
              <div className='flex justify-center gap-2 items-center w-[130px] h-[46px] bg-[#FFFFFF] rounded-md shadow-md '>
                <p className='text-[12px] font-[poppins] text-[#000000] '>19:00 WIB</p>
              </div>
            </div>
            <div className=' absolute flex justify-center items-center bg-[#6C63FF] gap-2  w-[94px] h-[32px] rounded-md top-8 right-8 shadow-md  shadow-[#6C63FF]'>
              <p className='text-[#FFFFFF] font-bold text-[12px] font[poppins]'>Webinar</p>
            </div>
          </div>
          <div className='relative bg-[#FFFFFF] font-[poppins] w-[413px] h-[565px] space-y-4 mt-10 rounded-lg shadow-lg'>
            <Image src={'/gambar00.png'} alt='gambar kosong' width={413} height={413} className='rounded-lg' />
            <h1 className='text-[#000000] text-[16px] w-[400px] h-[24px] mx-2' >UI Design Masterclass:Creating DesignSystems</h1>
            <p className='text-[14px] text-[#4C4C4CB2]/70 w-[384px] h-[42px] mx-3 '>Hands-on workshop on building scalable design systems.</p>

            <div className='absolute flex gap-3 bottom-44'>
              <div className='flex justify-center gap-2 mx-2 items-center w-[130px] h-[46px] bg-[#FFFFFF] rounded-md shadow-md'>
                <Image src={'/calendar.png'} alt='kalender' width={24} height={24} />
                <p className='text-[12px] font-[poppins] text-[#000000] '>31 Des 2025</p>
              </div>
              <div className='flex justify-center gap-2 items-center w-[130px] h-[46px] bg-[#FFFFFF] rounded-md shadow-md '>
                <p className='text-[12px] font-[poppins] text-[#000000] '>19:00 WIB</p>
              </div>
            </div>
            <div className=' absolute flex justify-center items-center bg-[#00B4D8] gap-2  w-[94px] h-[32px] rounded-md top-8 right-8 shadow-md  shadow-[#00B4D8]'>
              <p className='text-[#FFFFFF] font-bold text-[12px] font[poppins]'>Webinar</p>
            </div>
          </div>
          <div className='relative bg-[#FFFFFF] font-[poppins] w-[413px] h-[565px] space-y-4 mt-10 rounded-lg shadow-lg'>
            <Image src={'/gambar00.png'} alt='gambar kosong' width={413} height={413} className='rounded-lg' />
            <h1 className='text-[#000000] text-[16px] w-[400px] h-[24px]  mx-3'>5-Day Data Science Intensive Bootcamp</h1>
            <p className='text-[14px] text-[#4C4C4CB2]/70 w-[384] h-[42px] mx-3'>Immersive training in Python, data analysis, and visualization.</p>

            <div className='absolute flex gap-3 bottom-44'>
              <div className='flex justify-center gap-2 mx-2  items-center w-[130px] h-[46px] bg-[#FFFFFF] rounded-md shadow-md'>
                <Image src={'/calendar.png'} alt='kalender' width={24} height={24} />
                <p className='text-[12px] font-[poppins] text-[#000000] '>31 Des 2025</p>
              </div>
              <div className='flex justify-center gap-2 items-center w-[130px] h-[46px] bg-[#FFFFFF] rounded-md shadow-md '>
                <p className='text-[12px] font-[poppins] text-[#000000] '>19:00 WIB</p>
              </div>
            </div>
            <div className=' absolute flex justify-center items-center bg-[#2ECC71] gap-2  w-[94px] h-[32px] rounded-md top-8 right-8 shadow-md  shadow-[#2ECC71]'>
              <p className='text-[#FFFFFF] font-bold text-[12px] font[poppins]'>Webinar</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-10">
          <button id="prev" className="border border-gray-400 text-gray-400 rounded-lg px-3 py-1 duration-500 hover:text-[#183428] " disabled>
            &lt;
          </button>

          <button id="page1" className="w-10 h-10 rounded-full bg-gray-200 text-gray-600 duration-500 hover:bg-[#183428] hover:text-white">1</button>
          <button id="page2" className="w-10 h-10 rounded-full bg-gray-200 text-gray-600 duration-500 hover:bg-[#183428] hover:text-white">2</button>
          <button id="next" className="text-gray-400 border border-gray-400 rounded-lg px-3 py-1 duration-500 hover:text-[#183428]">
            &gt;
          </button>
        </div>
        <div id="content" className="mt-6 text-center text-xl font-semibold">
        </div>
      </div>
      <Footer />
    </section>
  )
}
export default eventPage; 