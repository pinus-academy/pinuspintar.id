import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="px-8 py-12 bg-green-primary text-white-primary mt-auto">
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
                        <Link href="#"><Image src="/social/Tiktok - Negative.svg" alt="Tiktok" width={24} height={24} className="w-6 h-6" /></Link>
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
                        <li><Link href="#" className="text-gray-400 hover:text-white-primary">Tentang Kami</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:text-white-primary">Acara</Link></li>
                        <li><Link href="/teams" className="text-gray-400 hover:text-white-primary">Tim Kami</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:text-white-primary">Kemitraan</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-4">Kontak</h3>
                    <ul className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Image src="/social/directbox-default.svg" alt="Email" width={20} height={20} />
                            <li className="text-gray-400">info@pinuspintar.id</li>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image src="/social/call.svg" alt="Phone" width={20} height={20} />
                            <li className="text-gray-400">+62 21 5678 9012</li>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image src="/social/location.svg" alt="Location" width={20} height={20} />
                            <li className="text-gray-400">Jl. Teknologi No. 123, Jakarta Selatan, Indonesia</li>
                        </div>
                    </ul>
                </div>
            </div>
        </footer>
    );
}