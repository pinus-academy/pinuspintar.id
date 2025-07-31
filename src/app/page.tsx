'use client';

import React, { useState, useEffect } from 'react';

import { courses } from '@/lib/courses';
import { ArrowRight, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import CourseCard from '@/components/ui/CourseCard';


const PinusPintarHomepage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [windowWidth, setWindowWidth] = useState(0);

  const scrollToFeaturedCourses = () => {
    const featuredSection = document.getElementById('featured-courses');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' }); // gulir dengan efek 
    }
  };

  const colors = {
    greenArmy: '#4B5320',
    lightGreenArmy: '#5A6324',
    yellow: '#FFD700',
    lightYellow: '#FFEB99',
    darkText: '#222222',
    lightText: '#666666',
    white: '#FFFFFF',
    lightGray: '#F5F5F5'
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getCardWidth = () => {
    const breakpoints = {
      '1536': '16.666%',
      '1280': '20%',
      '1024': '25%',
      '800': '33.333%',
      '640': '50%'
    };

    return Object.entries(breakpoints)
      .sort((a, b) => Number(b[0]) - Number(a[0]))
      .find(([width]) => windowWidth >= Number(width))?.[1] || '100%';
  };


  const extendedCourses = [...courses.map(course => ({ ...course, id: course.id + 4 }))];

  const filteredCourses = activeTab === 'all'
    ? extendedCourses
    : extendedCourses.filter(course => course.type === activeTab);

  const cardStyle = {
    width: getCardWidth(),
    paddingLeft: '8px',
    paddingRight: '8px',
    marginBottom: '16px',
    float: 'left' as const,
    boxSizing: 'border-box' as const
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <nav className=" bg-green-primary w-full ">
        <div className='flex items-center justify-between p-8 max-w-8xl mx-auto'>
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Logo" width={35} height={35} />
            <span className='font-bold text-2xl'>PinusPintar</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a
              href="#"
              className="font-medium text-white relative 
              after:content-[''] after:absolute after:bottom-0 after:left-0 
              after:w-0 after:h-[2px] after:bg-white 
              hover:after:w-full after:transition-all after:duration-300"
            >
              Home
            </a>
            <a
              href="/about"
              className="font-medium text-white relative 
              after:content-[''] after:absolute after:bottom-0 after:left-0 
              after:w-0 after:h-[2px] after:bg-white 
              hover:after:w-full after:transition-all after:duration-300"
            >
              About Us
            </a>
          </div>
          <Button variant="primary">Join Now</Button>
        </div>
      </nav>
      <div className="bg-linear-to-b -mt-1 from-green-primary to-green-primary-2">
        <div className="flex flex-col-reverse px-4 py-16 w-full max-w-8xl mx-auto items-center lg:flex-row">
          <div className="flex-1">
            <h1 className="flex flex-col text-nowrap gap-2 mt-4 text-4xl lg:text-5xl font-bold mb-6">
              <span>
                Upgrade Your Skills
              </span>
              <span>
                Boost Your Career
              </span>
            </h1>
            <p className="text-lg mb-7 text-gray-200">
              PinusPintar offers intensive bootcamps in tech, design, and digital marketing.
              Learn from industry experts through hands-on projects and real-world applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" className="px-6" onClick={scrollToFeaturedCourses}>Explore Courses</Button>
            </div>
          </div>
          <div className="flex-1 aspect-video w-full bg-linear-to-bl to-green-primary-2 from-green-secondary p-3 rounded-xl shadow-lg">
            <div className='overflow-hidden max-h-96 rounded-lg bg-center'>
              <Image src="/bg.jpeg" width={1000} height={1000} alt="Students learning" className="min-w-full" />
            </div>
          </div>

        </div>
      </div>

      <div className="px-4 py-16 w-full max-w-8xl mx-auto">
        <div id="featured-courses" className="px-4 py-16 w-full max-w-8xl mx-auto">
          <h2 className="text-3xl font-bold text-green-primary">Featured Courses</h2>
        </div>

        <div className="flex overflow-x-auto gap-4 mb-6 text-black">
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer ${activeTab === 'all' ? 'text-white bg-green-primary-2' : 'bg-gray-300'}`}
            onClick={() => setActiveTab('all')}
          >
            All Courses
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer ${activeTab === 'online' ? 'text-white bg-green-primary-2' : 'bg-gray-300'}`}
            onClick={() => setActiveTab('online')}
          >
            Online
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer ${activeTab === 'offline' ? 'text-white bg-green-primary-2' : 'bg-gray-300'}`}
            onClick={() => setActiveTab('offline')}
          >
            Offline
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer ${activeTab === 'hybrid' ? 'text-white bg-green-primary-2' : 'bg-gray-300'}`}
            onClick={() => setActiveTab('hybrid')}
          >
            Hybrid
          </button>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredCourses.map(course => (
              <CourseCard
                key={course.id}
                {...course}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="px-4 py-16" style={{ maxWidth: '100%' }}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold" style={{ color: colors.greenArmy }}>Upcoming Events</h2>
          <a href="#" className="flex items-center font-medium" style={{ color: colors.greenArmy }}>
            View Calendar <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div style={{ margin: '0 -8px' }}>
          <div style={cardStyle}>
            <div className="bg-white rounded-lg overflow-hidden shadow-md h-full hover:scale-105 transition-transform cursor-pointer">
              <Image src="/js.png" width={500} height={500} alt="Tech Talk" className="w-full h-48 object-cover" />
              <div className="p-5">
                <div
                  className="inline-block px-3 py-1 rounded text-xs font-medium uppercase mb-3"
                  style={{ backgroundColor: colors.lightYellow, color: colors.greenArmy }}
                >
                  WEBINAR
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: colors.darkText }}>
                  Building Modern Web Apps with Next.js
                </h3>
                <p className="text-sm mb-4" style={{ color: colors.lightText }}>
                  Learn how to create fast, SEO-friendly applications with Next.js
                </p>
                <div className="flex items-center mb-4">
                  <Clock className="h-4 w-4 mr-2" style={{ color: colors.lightText }} />
                  <span className="text-sm" style={{ color: colors.lightText }}>May 25, 2025 • 19:00 WIB</span>
                </div>
              </div>
            </div>
          </div>

          <div style={cardStyle}>
            <div className="bg-white rounded-lg overflow-hidden shadow-md h-full hover:scale-105 transition-transform cursor-pointer">
              <Image src="/cloud.png" width={500} height={500} alt="Workshop" className="w-full h-48 object-cover" />
              <div className="p-5">
                <div
                  className="inline-block px-3 py-1 rounded text-xs font-medium uppercase mb-3"
                  style={{ backgroundColor: '#E5F6FD', color: '#0287C3' }}
                >
                  WORKSHOP
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: colors.darkText }}>
                  UI Design Creating Design Systems
                </h3>
                <p className="text-sm mb-4" style={{ color: colors.lightText }}>
                  Hands-on workshop on building scalable design systems
                </p>
                <div className="flex items-center mb-4">
                  <Clock className="h-4 w-4 mr-2" style={{ color: colors.lightText }} />
                  <span className="text-sm" style={{ color: colors.lightText }}>June 5, 2025 • 10:00 WIB</span>
                </div>

              </div>
            </div>
          </div>

          <div style={cardStyle}>
            <div className="bg-white rounded-lg overflow-hidden shadow-md h-full hover:scale-105 transition-transform cursor-pointer">
              <Image src="/cloud.png" width={500} height={500} alt="Bootcamp" className="w-full h-48 object-cover" />
              <div className="p-5">
                <div
                  className="inline-block px-3 py-1 rounded text-xs font-medium uppercase mb-3"
                  style={{ backgroundColor: '#F0E5FD', color: '#7B2CBF' }}
                >
                  BOOTCAMP
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: colors.darkText }}>
                  5-Day Data Science Intensive Bootcamp
                </h3>
                <p className="text-sm mb-4" style={{ color: colors.lightText }}>
                  Immersive training in Python, data analysis, and visualization
                </p>
                <div className="flex items-center mb-4">
                  <Clock className="h-4 w-4 mr-2" style={{ color: colors.lightText }} />
                  <span className="text-sm" style={{ color: colors.lightText }}>June 12, 2025 • 09:00 WIB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-16" style={{ backgroundColor: colors.greenArmy }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.yellow }}>
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-lg mb-8" style={{ color: colors.white }}>
            Join PinusPintar bootcamp today and gain the skills employers are looking for.
            Get 20% off on all courses with code LAUNCH20.
          </p>
          <button
            className="px-8 py-3 rounded-lg font-semibold text-lg cursor-pointer"
            style={{ backgroundColor: colors.yellow, color: colors.greenArmy }}
          >
            Join Bootcamp Now
          </button>
        </div>
      </div>

      <footer className="px-8 py-12 bg-gray-900 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="font-bold text-2xl mb-4" style={{ color: colors.white }}>
              Pinus<span style={{ color: colors.yellow }}>Pintar</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering tech talents through intensive bootcamps and expert-led training.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/pinuspintar/" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" /> 
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" /> 
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Courses</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Data Science</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Mobile Development</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Instructors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Partners</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href='#' className="text-gray-400">info@pinuspintar.id</a></li>
              <li><a href='#' className="text-gray-400">+62 21 5678 9012</a></li>
              <li className="text-gray-400">Jl. Teknologi No. 123, Jakarta Selatan, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500">
          <p>© 2025 PinusPintar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PinusPintarHomepage;