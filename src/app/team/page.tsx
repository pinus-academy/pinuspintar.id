'use client';

import React from 'react';
import Image from 'next/image';
import NavBar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';


const teamPage = () => {

  return (
    <section>
        <NavBar/>
    <div className='flex gap-20 bg-white justify-evenly x-5 pb-10 pt-10'>
        <Image src={'/gambar00.png'} alt='gambar kosong' width={542} height={360}/>
        <div className='space-y-3 '>
            <h1 className='text-[#374F44] text-[36px] font-[poppins] font-bold'>Our Team</h1>
            <h2 className='text-black text-[24px] font-[poppins] '>Kenali Tim Hebat di Balik PinusPintar</h2>
            <p className='text-black text-[18px] font-[poppins] w-[630] h-[108] text-justify'>Kami adalah tim profesional yang berpengalaman di bidang teknologi, desain, dan pendidikan.
                 Bersama-sama kami berkomitmen untuk menghadirkan pengalaman belajar terbaik bagi peserta bootcamp, workshop, dan webinar kami.</p>
        </div>
    </div>  
    <div className='relative bg-[#FFFFFF] px-10 items-center pt-10 '>
        <ul className='text-black flex flex-wrap gap-5'>
            <li className=' text-justify'>
                <p className=' bg-[#374F44] w-[85px]  h-[30px] text-[18px] font-semibold rounded-4xl text-white text-center items-center'>View All</p>
                </li>
            <li><a href='' className='text-[18px] font-[poppins] '>Dev Ops</a></li>
            <li><a href='' className='text-[18px] font-[poppins] '>Dev Ops</a></li>
            <li><a href='' className='text-[18px] font-[poppins] '>Dev Ops</a></li>
            <li><a href='' className='text-[18px] font-[poppins] '>Dev Ops</a></li>
            <li><a href='' className='text-[18px] font-[poppins] '>Dev Ops</a></li>
        </ul>
    </div> 
    <div className='grid grid-cols-3 grid-rows-6 gap-5 justify-center pb-30 pt-30 items-center px-10 bg-[#FFFFFF]'>
        <div className='relative'>
            <Image src={'/gambar00.png'} alt='gambar 0' width={542} height={360}/>
            <div className='absolute backdrop-blur-sm bg-white/30 rounded-lg  space-y-3 pt-5 items-center text-center  left-3 bottom-4 w-[387.06280517578125px] h-[138px]'>
                <h1 className='text-black text-[32px] font-semibold font-[poppins] '>Name</h1>
                <p className='text-black text-[20px] font-[poppins] '>Divisi/ Role</p>
            </div>
        </div>
        <div className='relative'>
            <Image src={'/gambar00.png'} alt='gambar 0' width={542} height={360}/>
            <div className='absolute backdrop-blur-sm bg-white/30 rounded-lg pt-5 items-center text-center  left-3 bottom-4 w-[387.06280517578125px] h-[138px]'>
                <h1 className='text-black text-[32px] font-semibold font-[poppins] '>Name</h1>
                <p className='text-black text-[20px] font-[poppins] '>Divisi/ Role</p>
            </div>
        </div>
        <div className='relative'>
            <Image src={'/gambar00.png'} alt='gambar 0' width={542} height={360}/>
            <div className='absolute backdrop-blur-sm bg-white/30 rounded-lg pt-5 items-center text-center  left-3 bottom-4 w-[387.06280517578125px] h-[138px]'>
                <h1 className='text-black text-[32px] font-semibold font-[poppins] '>Name</h1>
                <p className='text-black text-[20px] font-[poppins] '>Divisi/ Role</p>
            </div>
        </div>
        <div className='relative'>
            <Image src={'/gambar00.png'} alt='gambar 0' width={542} height={360}/>
            <div className='absolute backdrop-blur-sm bg-white/30 rounded-lg pt-5 items-center text-center  left-3 bottom-4 w-[387.06280517578125px] h-[138px]'>
                <h1 className='text-black text-[32px] font-semibold font-[poppins] '>Name</h1>
                <p className='text-black text-[20px] font-[poppins] '>Divisi/ Role</p>
            </div>
        </div>
        <div className='relative'>
            <Image src={'/gambar00.png'} alt='gambar 0' width={542} height={360}/>
            <div className='absolute backdrop-blur-sm bg-white/30 rounded-lg pt-5 items-center text-center  left-3 bottom-4 w-[387.06280517578125px] h-[138px]'>
                <h1 className='text-black text-[32px] font-semibold font-[poppins] '>Name</h1>
                <p className='text-black text-[20px] font-[poppins] '>Divisi/ Role</p>
            </div>
        </div>
        <div className='relative'>
            <Image src={'/gambar00.png'} alt='gambar 0' width={542} height={360}/>
            <div className='absolute backdrop-blur-sm bg-white/30 rounded-lg pt-5 items-center text-center  left-3 bottom-4 w-[387.06280517578125px] h-[138px]'>
                <h1 className='text-black text-[32px] font-semibold font-[poppins] '>Name</h1>
                <p className='text-black text-[20px] font-[poppins] '>Divisi/ Role</p>
            </div>
        </div>
        <div className='relative'>
            <Image src={'/gambar00.png'} alt='gambar 0' width={542} height={360}/>
            <div className='absolute backdrop-blur-sm bg-white/30 rounded-lg pt-5 items-center text-center  left-3 bottom-4 w-[387.06280517578125px] h-[138px]'>
                <h1 className='text-black text-[32px] font-semibold font-[poppins] '>Name</h1>
                <p className='text-black text-[20px] font-[poppins] '>Divisi/ Role</p>
            </div>
        </div>
        <div className='relative'>
            <Image src={'/gambar00.png'} alt='gambar 0' width={542} height={360}/>
            <div className='absolute backdrop-blur-sm bg-white/30 rounded-lg pt-5 items-center text-center  left-3 bottom-4 w-[387.06280517578125px] h-[138px]'>
                <h1 className='text-black text-[32px] font-semibold font-[poppins] '>Name</h1>
                <p className='text-black text-[20px] font-[poppins] '>Divisi/ Role</p>
            </div>
        </div>
        <div className='relative'>
            <Image src={'/gambar00.png'} alt='gambar 0' width={542} height={360}/>
            <div className='absolute backdrop-blur-sm bg-white/30 rounded-lg pt-5 items-center text-center  left-3 bottom-4 w-[387.06280517578125px] h-[138px]'>
                <h1 className='text-black text-[32px] font-semibold font-[poppins] '>Name</h1>
                <p className='text-black text-[20px] font-[poppins] '>Divisi/ Role</p>
            </div>
        </div>
        <div className='relative'>
            <Image src={'/gambar00.png'} alt='gambar 0' width={542} height={360}/>
            <div className='absolute backdrop-blur-sm bg-white/30 rounded-lg pt-5 items-center text-center  left-3 bottom-4 w-[387.06280517578125px] h-[138px]'>
                <h1 className='text-black text-[32px] font-semibold font-[poppins] '>Name</h1>
                <p className='text-black text-[20px] font-[poppins] '>Divisi/ Role</p>
            </div>
        </div>
        <div className='relative'>
            <Image src={'/gambar00.png'} alt='gambar 0' width={542} height={360}/>
            <div className='absolute backdrop-blur-sm bg-white/30 rounded-lg pt-5 items-center text-center  left-3 bottom-4 w-[387.06280517578125px] h-[138px]'>
                <h1 className='text-black text-[32px] font-semibold font-[poppins] '>Name</h1>
                <p className='text-black text-[20px] font-[poppins] '>Divisi/ Role</p>
            </div>
        </div>
        <div className='relative'>
            <Image src={'/gambar00.png'} alt='gambar 0' width={542} height={360}/>
            <div className='absolute backdrop-blur-sm bg-white/30 rounded-lg pt-5 items-center text-center  left-3 bottom-4 w-[387.06280517578125px] h-[138px]'>
                <h1 className='text-black text-[32px] font-semibold font-[poppins] '>Name</h1>
                <p className='text-black text-[20px] font-[poppins] '>Divisi/ Role</p>
            </div>
        </div>
        <div className='relative'>
            <Image src={'/gambar00.png'} alt='gambar 0' width={542} height={360}/>
            <div className='absolute backdrop-blur-sm bg-white/30 rounded-lg pt-5 items-center text-center  left-3 bottom-4 w-[387.06280517578125px] h-[138px]'>
                <h1 className='text-black text-[32px] font-semibold font-[poppins] '>Name</h1>
                <p className='text-black text-[20px] font-[poppins] '>Divisi/ Role</p>
            </div>
        </div>
        <div className='relative'>
            <Image src={'/gambar00.png'} alt='gambar 0' width={542} height={360}/>
            <div className='absolute backdrop-blur-sm bg-white/30 rounded-lg pt-5 items-center text-center  left-3 bottom-4 w-[387.06280517578125px] h-[138px]'>
                <h1 className='text-black text-[32px] font-semibold font-[poppins] '>Name</h1>
                <p className='text-black text-[20px] font-[poppins] '>Divisi/ Role</p>
            </div>
        </div>
        <div className='relative'>
            <Image src={'/gambar00.png'} alt='gambar 0' width={542} height={360}/>
            <div className='absolute backdrop-blur-sm bg-white/30 rounded-lg pt-5 items-center text-center  left-3 bottom-4 w-[387.06280517578125px] h-[138px]'>
                <h1 className='text-black text-[32px] font-semibold font-[poppins] '>Name</h1>
                <p className='text-black text-[20px] font-[poppins] '>Divisi/ Role</p>
            </div>
        </div>
        <div className='relative'>
            <Image src={'/gambar00.png'} alt='gambar 0' width={542} height={360}/>
            <div className='absolute backdrop-blur-sm bg-white/30 rounded-lg pt-5 items-center text-center  left-3 bottom-4 w-[387.06280517578125px] h-[138px]'>
                <h1 className='text-black text-[32px] font-semibold font-[poppins] '>Name</h1>
                <p className='text-black text-[20px] font-[poppins] '>Divisi/ Role</p>
            </div>
        </div>
        <div className='relative'>
            <Image src={'/gambar00.png'} alt='gambar 0' width={542} height={360}/>
            <div className='absolute backdrop-blur-sm bg-white/30 rounded-lg pt-5 items-center text-center  left-3 bottom-4 w-[387.06280517578125px] h-[138px]'>
                <h1 className='text-black text-[32px] font-semibold font-[poppins] '>Name</h1>
                <p className='text-black text-[20px] font-[poppins] '>Divisi/ Role</p>
            </div>
        </div>
        <div className='relative'>
            <Image src={'/gambar00.png'} alt='gambar 0' width={542} height={360}/>
            <div className='absolute backdrop-blur-sm bg-white/30 rounded-lg pt-5 items-center text-center  left-3 bottom-4 w-[387.06280517578125px] h-[138px]'>
                <h1 className='text-black text-[32px] font-semibold font-[poppins] '>Name</h1>
                <p className='text-black text-[20px] font-[poppins] '>Divisi/ Role</p>
            </div>
        </div>
       


    </div>
        <Footer/>
    </section>

    




  )
 }
 export default teamPage; 