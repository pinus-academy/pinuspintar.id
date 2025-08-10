'use client'

import Image from 'next/image'
import Link from 'next/link'
import { mediaItems } from "@/data/mediaData";
import MediaCard from "@/components/MediaCard";
import BenefitItem from "@/components/ui/BenefitItem";
import { benefits } from "@/data/Benefits";


export default function LandingPage() {
    return (
        <main className="bg-[#FAF9F6]">
        
            <section className=" relative max-w-7xl min-h-screen w-full grid grid-cols-1 md:grid-cols-[70%_30%] gap-8 md:pl-12">
                <div className="flex flex-col  space-y-10">
                    <div className="flex items-center mt-10">
                        <Image src="/images/logos/logo2.svg" alt="Logo Pinus Pintar" width={60} height={60} />
                        <span className="text-2xl font-sm  text-gray-700">PinusPintar</span>
                    </div>
                    <h1 className=" mt-6 text-3xl md:text-5xl font-md text-gray-700 leading-none"> Beasiswa :<br />Mustahiq menjadi Muzakki</h1>
                    <Link href="/daftar"> <button className="bg-green-700 hover:bg-green-800 text-white py-4 px-12 rounded-xl mt-6 font-bold">Daftar Beasiswa </button></Link>

                </div>
                <div className="bg-green-800"></div>
                <div className="absolute right-[30%] translate-x-1/2 top-1/2 -translate-y-[46%]  w-[400px] h-[600px] ">
                        <Image src="/images/backgrounds/background.png" alt="Beasiswa" fill className=" object-cover object-center" priority />    
                </div>
                
            </section>

            
             <section className="min-h-screen bg-[#FAF9F6] py-20 px-4 md:px-12">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-lg font-medium tracking-widest border border-orange-300 inline-block px-6 py-2 mb-12 text-gray-800"> APA YANG AKAN DI DAPAT</h2>

                    <div className="space-y-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center justify-items-center">
                            {benefits.slice(0, 4).map((item, idx) => (
                                <BenefitItem
                                    key={idx}
                                    src={item.src}
                                    alt={item.alt}
                                    label={item.label}
                                    imgWidth={250}
                                    imgHeight={250}
                                />
                            ))}
                        </div>

  
                        <div className="flex justify-center gap-10">
                            {benefits.slice(4).map((item, idx) => (
                                <BenefitItem
                                    key={idx + 4}
                                    src={item.src}
                                    alt={item.alt}
                                    label={item.label}
                                    imgWidth={250}
                                    imgHeight={250}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="min-h-screen bg-[#FAF9F6] py-20 px-4 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-6xl font-medium text-left mb-8 text-gray-800"> Kegiatan </h2>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                        {mediaItems.map((item, index) => (
                        <MediaCard key={index} {...item} type={item.type as "video" | "image"} />
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="min-h-screen bg-[#FAF9F6] py-20 px-4 md:px-12">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-green-700 mb-12">Success Story</h2>
                    <div className="grid gridcols-1 md:grid-cols-3 gap-8">
                        {[  { src: '/images/logos/logo2.svg', title: 'ISYA', desc: 'Rest and retire in a home with the best community',},
                            { src: '/images/logos/logo2.svg', title: 'BEACH BONANZA', desc: 'See the ocean, hear the waves, and enjoy the cool sea breeze',},
                            { src: '/images/logos/logo2.svg', title: 'SUBURBAN SANCTUARY', desc: 'Find your dream home near schools and your office',},
                        ].map((item, idx) => (
                                <div key={idx} className="bg-[#375A48] rounded-lg overflow-hidden text-white shadow-md">
                                    <Image src={item.src} alt={item.title} width={500} height={300} className="w-full h-48 object-cover"/>
                                    <div className="p-6">
                                        <h3 className="font-bold text-lg mb-2 uppercase">{item.title}</h3>
                                        <p className="text-sm mb-4">{item.desc}</p>
                                        <span className="text-xl">⌄</span>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
