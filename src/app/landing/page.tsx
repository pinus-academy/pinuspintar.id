'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function LandingPage() {
    return (
        <main className="bg-[#FAF9F6]">
            {/* Hero Section */}
            <section className="max-w-7xl min-h-screen w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:pl-12">
                <div className="flex flex-col justify-center space-y-6">
                    <div className="flex items-center">
                        <Image src="/PinusPintar.png" alt="Pinus Pintar" width={80} height={80} />
                        <span className="text-sm font-medium text-gray-700">PinusPintar</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-semibold text-gray-800 leading-snug"> Beasiswa :<br />Mustahiq menjadi Muzakki</h1>
                    <Link href="/daftar">
                        <button className="bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded-md">Daftar Beasiswa </button>
                    </Link>
                </div>
                <div className="bg-green-800 flex items-center justify-end">
                    <div className="relative w-full h-[380px] md:h-[500px] md:w-[90%] overflow-hidden">
                        <Image src="/background.png" alt="Beasiswa" fill className="object-cover object-center" priority />
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="min-h-screen bg-[#FAF9F6] py-20 px-4 md:px-12">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-lg font-medium tracking-widest border border-orange-300 inline-block px-6 py-2 mb-12 text-gray-800">
                        APA YANG AKAN DI DAPAT
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-center justify-items-center">
                        {[
                            { src: '/benefit-laptop.png', alt: 'Laptop', label: 'Laptop' },
                            { src: '/benefit-mentor.png', alt: 'Mentor', label: 'Mentor' },
                            { src: '/benefit-bootcamp.png', alt: 'Bootcamp', label: 'Beasiswa Bootcamp' },
                            { src: '/benefit-softskill.png', alt: 'Soft Skill', label: 'Pendidikan Soft Skill' },
                            { src: '/benefit-kerja.png', alt: 'Penyaluran Kerja', label: 'Penyaluran Kerja' },
                            { src: '/benefit-internet.png', alt: 'Internet', label: 'Internet' },
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center space-y-2">
                                <Image src={item.src} alt={item.alt} width={80} height={80} />
                                <span className="text-sm text-gray-700 font-medium">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Activities Section */}
            <section className="min-h-screen bg-[#FAF9F6] py-20 px-4 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-lg font-medium text-left mb-8 text-gray-800">Kegiatan</h2>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                        <div className="aspect-square bg-gray-200">
                            <Image src="/kegiatan-1.jpg" alt="Kegiatan 1" width={500} height={500} className="object-cover w-full h-full" />
                        </div>
                        <div className="aspect-square relative">
                            <Image src="/kegiatan-2.jpg" alt="Kegiatan 2" width={500} height={500} className="object-cover w-full h-full" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-10 h-10 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                                    ▶
                                </div>
                            </div>
                        </div>
                        {['/kegiatan-3.jpg', '/kegiatan-4.jpg', '/kegiatan-5.jpg'].map((src, idx) => (
                            <div key={src} className="aspect-square">
                                <Image src={src} alt={`Kegiatan ${idx + 3}`} width={500} height={500} className="object-cover w-full h-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Success Story Section */}
            <section className="min-h-screen bg-[#FAF9F6] py-20 px-4 md:px-12">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold text-green-700 mb-12">Success Story</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[  { src: '/success-1.jpg', title: 'ISYA', desc: 'Rest and retire in a home with the best community',},
                            { src: '/success-2.jpg', title: 'BEACH BONANZA', desc: 'See the ocean, hear the waves, and enjoy the cool sea breeze',},
                            { src: '/success-3.jpg', title: 'SUBURBAN SANCTUARY', desc: 'Find your dream home near schools and your office',},
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
