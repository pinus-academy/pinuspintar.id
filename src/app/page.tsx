'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';
import CourseCard from '@/components/ui/CourseCard';
import { courses } from '@/lib/courses';
import UpcomingCard from '@/components/ui/UpcomingCard';
import { upcoming } from '@/lib/upcoming';
import Link from "next/link";

const PinusPintarHomepage = () => {

  const scrollToFeaturedCourses = () => {
    const featuredSection = document.getElementById('featured-courses');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredCourses = courses;
  const filteredUpcoming = upcoming;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <div>
        <div className="flex flex-col-reverse lg:flex-row items-center p-4 sm:p-8 w-full max-w-8xl mx-auto">
          <div className="flex-1 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="flex flex-col gap-2 mt-4 text-2xl sm:text-4xl lg:text-6xl font-bold mb-6 text-green-primary text-shadow-lg">
              <span>
                Tingkatkan Keahlianmu,
              </span>
              <span>
                Majukan Kariermu
              </span>
            </h1>
            <p className="text-sm text-left sm:text-lg mb-7 text-black max-w-xl">
              PinusPintar menawarkan bootcamp intensif di bidang teknologi, desain,
              dan pemasaran digital. Belajar langsung dari para ahli industri
              melalui proyek praktis dan aplikasi dunia nyata.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
              <Button variant="primary" className="px-10 py-7 w-full  sm:w-auto text-[18px] font-medium" onClick={scrollToFeaturedCourses}>
                Jelajahi
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center mb-8 lg:mb-0">
            <Image
              src="/Vector.png"
              width={507}
              height={478}
              alt="Students learning"
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Bootcamp Program Section */}
      <div className="p-8 w-full max-w-8xl mx-auto">
        <div id="featured-courses" className="px-4 py-8 w-full max-w-8xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-primary text-center sm:text-left">
        Program Bootcamp
          </h2>
        </div>
        <div>
          <div>
        {filteredCourses.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredCourses.slice(0, 4).map(course => (
            <div
              key={course.id}
              className="w-full max-w-xs mx-auto sm:max-w-none"
            >
              <CourseCard {...course} />
            </div>
          ))}
            </div>
            {filteredCourses.length > 4 && (
          <div className="flex justify-center mt-8">
            <Link href="/events">
              <Button variant="primary" className="px-15 py-6 w-full sm:w-auto text-[18px] font-medium">
            Lihat Semua Bootcamp
              </Button>
            </Link>
          </div>
            )}
          </>
        ) : (
          <p className="text-center text-gray-500 py-10 font-medium text-[20px]">
            Belum ada kursus yang tersedia saat ini — nantikan pembaruan selanjutnya!
          </p>
        )}
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="p-8 mb-16 w-full max-w-8xl mx-auto">
        <div id="upcoming-events" className="px-4 py-8 w-full max-w-8xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-primary text-center sm:text-left">
            Acara Mendatang
          </h2>
        </div>
        <div>
          {filteredUpcoming.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredUpcoming.map(upcoming => (
                <UpcomingCard key={upcoming.id} {...upcoming} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-10 font-medium text-[20px]">
              Belum ada acara yang tersedia saat ini — nantikan pembaruan selanjutnya!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PinusPintarHomepage;