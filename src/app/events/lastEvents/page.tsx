import { events } from '@/lib/news'
import Image from 'next/image';
import type { Metadata } from "next";
import { spawn } from 'child_process';

export const metadata: Metadata = {
    metadataBase: new URL("https://pinuspintar.id"),
    title: "Bootcamp Fullstack Developer - PinusPintar x Kitabisa",
    description: "Program Bootcamp Fullstack Developer intensif bersama PT. PinusPintar Technology dan Kitabisa. Kuasai Next.js dan teknologi modern untuk karir di industri tech.",
    keywords: ["bootcamp", "fullstack developer", "next.js", "pinuspintar", "kitabisa", "programming"],
    authors: [{ name: "PinusPintar Technology" }],
    openGraph: {
        type: "website",
        url: "https://pinuspintar.id/events/lastEvents",
        title: "Bootcamp Fullstack Developer - PinusPintar x Kitabisa",
        description: "Program Bootcamp Fullstack Developer intensif bersama PT. PinusPintar Technology dan Kitabisa.",
        siteName: "PinusPintar",
        images: [
            {
                url: "https://pinuspintar.id/og-image-v2.png?v=2",
                width: 1200,
                height: 630,
                alt: "PinusPintar x Kitabisa Bootcamp",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Bootcamp Fullstack Developer - PinusPintar x Kitabisa",
        description: "Program Bootcamp Fullstack Developer intensif bersama PT. PinusPintar Technology dan Kitabisa.",
        images: ["https://pinuspintar.id/og-image-v2.png?v=2"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function BootcampLanding() {
    const bootcampData = events.find(event => event.id === 5) || events[0];

    const images = [
        '/event/img1.jpg',
        '/event/img2.jpg',
        '/event/img3.jpg',
        '/event/img4.jpg',
        '/event/img5.jpeg',
        '/event/img6.jpeg',
        '/event/img7.jpeg',
        '/event/img8.jpeg',
        '/event/img9.jpeg',
        '/event/img10.jpeg',
    ];


    return (
        <section className="relative bg-white">
            <div className="max-w-8xl mx-auto p-4 sm:p-6 lg:p-10 flex flex-col lg:flex-row gap-10 pt-10 sm:pt-16 lg:pt-20">
                <div className="w-full space-y-10">
                    <div className="space-y-10">
                        <h1 className="font-poppins font-semibold text-3xl sm:text-4xl text-[#183428]">
                            {bootcampData.title}
                        </h1>
                        <div className="w-full relative">
                            <Image
                                src={bootcampData.image}
                                alt="event image"
                                width={2000}
                                height={1000}
                                className="w-full h-56 sm:h-72 md:h-80 lg:h-[420px] rounded-2xl object-cover"
                            />
                            <div className="absolute top-3 right-4 z-10 flex gap-3 bg-white text-black px-3 py-1 rounded-md shadow-lg text-sm h-10 items-center ">
                                <Image src="/icon/calendar.svg" width={20} height={20} alt="Calendar" />
                                {bootcampData.startDate} - {bootcampData.endDate}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#F2F2F2] space-y-8">
                        <div className="text-black">
                            <p className="font-poppins font-bold text-xl mb-3">
                                Tentang Program
                            </p>
                            <p className="text-base sm:text-lg leading-relaxed text-justify">
                                {bootcampData.description.split("\n").map((line, i) => (
                                    <span key={i}>
                                        {line}
                                        <br />
                                    </span>
                                ))}
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center text-center mb-8 py-20'>
                        <div className='flex flex-wrap gap-8 justify-center'>
                            {images.map((src, index) => (
                                <Image
                                    key={index}
                                    src={src}
                                    loading='lazy'
                                    alt={`gambar-${index}`}
                                    width={305}
                                    height={381}
                                    className="w-40 h-100 md:w-80 object-cover"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}