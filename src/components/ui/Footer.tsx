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
                        <a href="#"><Image src="/social/Tiktok - Negative.svg" alt="Tiktok" width={24} height={24} className="w-6 h-6" /></a>
                        <a href="#"><Image src="/social/Instagram - Negative.svg" alt="Instagram" width={24} height={24} className="w-6 h-6" /></a>
                        <a href="#"><Image src="/social/YouTube - Negative.svg" alt="YouTube" width={24} height={24} className="w-6 h-6" /></a>
                        <a href="#"><Image src="/social/LinkedIn - Negative.svg" alt="LinkedIn" width={24} height={24} className="w-6 h-6" /></a>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-4">Courses</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white-primary">Web Development</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white-primary">UI/UX Design</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white-primary">Data Science</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white-primary">Digital Marketing</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white-primary">Mobile Development</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-4">Company</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white-primary">About Us</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white-primary">Instructors</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white-primary">Careers</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white-primary">Partners</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white-primary">Blog</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-4">Contact</h3>
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