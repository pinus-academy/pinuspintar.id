"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav className="w-full fixed top-0 z-20 bg-white" ref={menuRef}>
      <div className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
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
        </Link>

        {/* Menu desktop */}
        <div className="hidden md:flex space-x-10">
          <Link href="/" className="font-medium text-green-primary hover:text-green-700">
            Beranda
          </Link>
          <Link href="/about" className="font-medium text-green-primary hover:text-green-700">
            Tentang Kami
          </Link>
          <Link href="/events" className="font-medium text-green-primary hover:text-green-700">
            Acara
          </Link>
          <Link href="/teams" className="font-medium text-green-primary hover:text-green-700">
            Tim Kami
          </Link>
          <Link href="#" className="font-medium text-green-primary hover:text-green-700">
            Kemitraan
          </Link>
        </div>

        {/* Tombol menu (mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-green-primary focus:outline-none z-50 relative transition-transform duration-200 hover:scale-110"
          aria-label="Toggle menu"
        >
          <div className="relative">
            <Menu 
              size={28} 
              className={`transition-all duration-300 ${isOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'}`}
            />
            <X 
              size={28} 
              className={`absolute top-0 left-0 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-75'}`}
            />
          </div>
        </button>
      </div>

      {/* Menu dropdown (mobile) with smooth animation */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out transform origin-top z-40 ${
          isOpen 
            ? 'opacity-100 scale-y-100 translate-y-0' 
            : 'opacity-0 scale-y-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-6 px-4">
          {[
            { href: "/", label: "Beranda" },
            { href: "/about", label: "Tentang Kami" },
            { href: "/events", label: "Acara" },
            { href: "/teams", label: "Tim Kami" },
            { href: "#", label: "Kemitraan" }
          ].map((item, index) => (
            <Link 
              key={item.label}
              href={item.href} 
              className={`font-medium text-green-primary hover:text-green-700 transition-all duration-200 hover:scale-105 transform ${
                isOpen 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
              }}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
