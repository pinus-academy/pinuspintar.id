import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="px-8 py-12 bg-[#183428] text-white-primary mt-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <Image src="icon/white.svg" alt="Logo" width={35} height={35} className='size-15' />
                        <span className='font-bold text-2xl text-white-primary'>PinusPintar</span>
                    </div>
                    <p className="text-gray-400 mb-6">
                        Empowering tech talents through intensive bootcamps and expert-led training.
                    </p>
                    <div className="flex space-x-6 mt-4">
                        <Link href="#"><Image src="/social/TikTok - Negative.svg" alt="Tiktok" width={24} height={24} className="w-6 h-6" /></Link>
                        <Link href="#"><Image src="/social/Instagram - Negative.svg" alt="Instagram" width={24} height={24} className="w-6 h-6" /></Link>
                        <Link href="#"><Image src="/social/YouTube - Negative.svg" alt="YouTube" width={24} height={24} className="w-6 h-6" /></Link>
                        <Link href="#"><Image src="/social/LinkedIn - Negative.svg" alt="LinkedIn" width={24} height={24} className="w-6 h-6" /></Link>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-4">Program</h3>
                    <ul className="space-y-2">
                        <li><Link href="#" className="text-gray-400 hover:text-white-primary">Web Development</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:text-white-primary">Frontend Development</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:text-white-primary">Backend Development</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:text-white-primary">Fullstack Development</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:text-white-primary">DevOps</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:text-white-primary">IT Monitoring</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:text-white-primary">Quality Assurance (QA)</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:text-white-primary">UI/UX Design</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-4">Menu</h3>
                    <ul className="space-y-2">
                        <li><Link href="/" className="text-gray-400 hover:text-white-primary">Beranda</Link></li>
                        <li><Link href="/about" className="text-gray-400 hover:text-white-primary">Tentang Kami</Link></li>
                        <li><Link href="/events" className="text-gray-400 hover:text-white-primary">Acara</Link></li>
                        <li><Link href="/teams" className="text-gray-400 hover:text-white-primary">Tim Kami</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:text-white-primary">Kemitraan</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-4">Kontak</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-3 text-gray-400">
                            <Image src="/social/directbox-default.svg" alt="Email" width={20} height={20} />
                            admin@pinuspintar.id
                        </li>
                        <li className="flex items-center gap-3 text-gray-400">
                            <Image src="/social/call.svg" alt="Phone" width={20} height={20} />
                            +62 852 9003 5500
                        </li>
                        <li className="flex items-center gap-3 text-gray-400 text-justify">
                            <Image src="/social/location.svg" alt="Location" width={20} height={20} className="shrink-0" />
                            RT.5/RW.1, Krajan, Campurejo, Kec. Boja, Kabupaten Kendal, Jawa Tengah 51381
                        </li>

                    </ul>
                </div>
            </div>
        </footer>
    );
}