"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white-primary w-full shadow-sm">
      <div className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="icon/green.svg"
            alt="Logo"
            width={35}
            height={35}
            className="size-10"
          />
          <span className="font-bold text-2xl text-green-primary">
            PinusPintar
          </span>
        </div>

        {/* Menu desktop */}
        <div className="hidden md:flex space-x-10">
          <a href="#" className="font-medium text-green-primary hover:text-green-700">
            Home
          </a>
          <a href="#" className="font-medium text-green-primary hover:text-green-700">
            About Us
          </a>
          <a href="#" className="font-medium text-green-primary hover:text-green-700">
            Event
          </a>
          <a href="#" className="font-medium text-green-primary hover:text-green-700">
            Our Team
          </a>
          <a href="#" className="font-medium text-green-primary hover:text-green-700">
            Partnership
          </a>
        </div>

        {/* Tombol menu (mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-green-primary focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu dropdown (mobile) */}
      {isOpen && (
        <div className="md:hidden bg-white-primary border-t border-gray-200 transition-all duration-300">
          <div className="flex flex-col items-center space-y-4 py-4">
            <a href="#" className="font-medium text-green-primary hover:text-green-700">
              Home
            </a>
            <a href="#" className="font-medium text-green-primary hover:text-green-700">
              About Us
            </a>
            <a href="#" className="font-medium text-green-primary hover:text-green-700">
              Event
            </a>
            <a href="#" className="font-medium text-green-primary hover:text-green-700">
              Our Team
            </a>
            <a href="#" className="font-medium text-green-primary hover:text-green-700">
              Partnership
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
