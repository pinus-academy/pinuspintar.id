"use client";

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import CourseCard from '@/components/ui/CourseCard';
import { courses } from '@/lib/courses';
import UpcomingCard from '@/components/ui/UpcomingCard';
import { upcoming } from '@/lib/upcoming';
import Link from "next/link";
import { news, events } from '@/lib/news';
import NewsCard from '@/components/ui/NewsCard';
import EventsCard from '@/components/ui/EventCard';
import Header from '@/components/about/Header';

const PinusPintarHomepage = () => {
  const [showAllNews, setShowAllNews] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const [showAllProgram, setShowAllProgram] = React.useState(false);
  const [isAnimatingProgram, setIsAnimatingProgram] = React.useState(false);

  const scrollToFeaturedCourses = () => {
    const featuredSection = document.getElementById('featured-courses');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleNews = () => {
    if (!showAllNews) {
      // Expanding - wait for grid to expand, then show items
      setIsAnimating(true);
      setTimeout(() => {
        setShowAllNews(true);
        setTimeout(() => {
          setIsAnimating(false);
        }, 100);
      }, 50);
    } else {
      // Collapsing - hide items first, then collapse grid
      setIsAnimating(true);
      setShowAllNews(false);
      setTimeout(() => {
        setIsAnimating(false);
        // Smooth scroll to top of media section when collapsing
        const mediaSection = document.getElementById('media-coverage');
        if (mediaSection) {
          mediaSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 400);
    }
  };
  const toggleProgram = () => {
    if (!showAllProgram) {
      setIsAnimatingProgram(true);
      setTimeout(() => {
        setShowAllProgram(true);
        setTimeout(() => setIsAnimatingProgram(false), 100);
      }, 50);
    } else {
      setIsAnimatingProgram(true);
      setShowAllProgram(false);
      setTimeout(() => {
        setIsAnimatingProgram(false);
        const section = document.getElementById('last-program');
        if (section) section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 400);
    }
  };

  const filteredCourses = courses;
  const filteredUpcoming = upcoming;
  const filteredNews = [...news,]
    .sort((a, b) => b.id - a.id)
    .slice(0, 6);
  const filteredEvent = [...events]
    .sort((c, d) => c.id - d.id)
    .slice(0, 6);

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
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
                {filteredCourses.length > 4 && (
                  <div className="flex justify-center mt-8">
                    <Button variant="primary" className="px-15 py-6 w-full sm:w-auto text-[18px] font-medium transition-all duration-300">
                      <Link href="/events">
                        Lihat Semua
                      </Link>
                    </Button>
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

      {/* Media Coverage Section */}
      <div className="p-8 mb-16 w-full max-w-8xl mx-auto">
        <div id="media-coverage" className="px-4 py-8 w-full max-w-8xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-primary text-center sm:text-left">
            Liputan Media
          </h2>
        </div>
        <div>
          {filteredNews.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* First 3 items - always visible */}
                {filteredNews.slice(0, 3).map((newsItem) => (
                  <div key={newsItem.id} className="opacity-100">
                    <NewsCard {...newsItem} />
                  </div>
                ))}

                {/* Additional items 4-6 with smooth expansion */}
                <div
                  className={`col-span-full transition-all duration-700 ease-in-out ${showAllNews ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  style={{
                    overflow: showAllNews ? 'visible' : 'hidden',
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-6">
                    {filteredNews.slice(3, 6).map((newsItem, index) => (
                      <div
                        key={newsItem.id}
                        className={`transition-all duration-600 ease-out ${showAllNews && !isAnimating
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-8'
                          }`}
                        style={{
                          transitionDelay: showAllNews ? `${300 + (index * 150)}ms` : '0ms',
                        }}
                      >
                        <NewsCard {...newsItem} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {filteredNews.length > 3 && (
                <div className="flex justify-center mt-8 transition-all duration-300">
                  <Button
                    variant="primary"
                    className="px-15 py-6 w-full sm:w-auto text-[18px] font-medium transition-all duration-300"
                    onClick={handleToggleNews}
                    disabled={isAnimating}
                  >
                    {showAllNews ? 'Lihat Lebih Sedikit' : 'Lihat Semua'}
                  </Button>
                </div>
              )}
            </>
          ) : (
            <p className="text-center text-gray-500 py-10 font-medium text-[20px]">
              Belum ada acara yang tersedia saat ini — nantikan pembaruan selanjutnya!
            </p>
          )}
        </div>
      </div>
      <div className='p-8 mb-16 w-full max-w-8xl mx-auto'>
        <div id="media-coverage" className="px-4 py-8 w-full max-w-8xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-primary text-center sm:text-left">
            Progam Terakhir
          </h2>
        </div>
        <div>
          {filteredNews.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* First 3 items - always visible */}
                {filteredEvent.slice(0, 3).map((item) => (
                  <div key={item.id} className="opacity-100">
                    <EventsCard {...item} />
                  </div>
                ))}

                {/* Additional items 4-6 with smooth expansion */}
                <div
                  className={`col-span-full transition-all duration-700 ease-in-out ${showAllProgram ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  style={{
                    overflow: showAllNews ? 'visible' : 'hidden',
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-6">
                    {filteredEvent.slice(3, 6).map((item, index) => (
                      <div
                        key={item.id}
                        className={`transition-all duration-600 ease-out ${showAllProgram && !isAnimatingProgram
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-8'
                          }`}
                        style={{
                          transitionDelay: showAllProgram ? `${300 + (index * 150)}ms` : '0ms',
                        }}
                      >
                        <EventsCard {...item} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {filteredEvent.length > 3 && (
                <div className="flex justify-center mt-8 transition-all duration-300">
                  <Button
                    variant="primary"
                    className="px-15 py-6 w-full sm:w-auto text-[18px] font-medium transition-all duration-300"
                    onClick={toggleProgram}
                    disabled={isAnimatingProgram}
                  >
                    {showAllProgram ? 'Lihat Lebih Sedikit' : 'Lihat Semua'}
                  </Button>
                </div>
              )}
            </>
          ) : (
            <p className="text-center text-gray-500 py-10 font-medium text-[20px]">
              Belum ada acara yang tersedia saat ini — nantikan pembaruan selanjutnya!
            </p>
          )}
        </div>
      </div>

      <div className='relative'>
        <Header />
      </div>
    </div>
  );
};

export default PinusPintarHomepage;