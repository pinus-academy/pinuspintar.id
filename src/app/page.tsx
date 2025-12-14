"use client";

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import CourseCard from '@/components/ui/CourseCard';
import { courses } from '@/lib/courses';
import UpcomingCard from '@/components/ui/UpcomingCard';
import { upcoming } from '@/lib/upcoming';
import Link from "next/link";
import { news } from '@/lib/news';
import { events } from '@/lib/events';
import NewsCard from '@/components/ui/NewsCard';
import EventsCard from '@/components/ui/EventCard';
import Header from '@/components/about/Header';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const PinusPintarHomepage = () => {
  const [showAllNews, setShowAllNews] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const [showAllProgram, setShowAllProgram] = React.useState(false);
  const [isAnimatingProgram, setIsAnimatingProgram] = React.useState(false);

  // Refs for scroll animations
  const coursesRef = useRef(null);
  const upcomingRef = useRef(null);
  const newsRef = useRef(null);
  const eventsRef = useRef(null);

  const coursesInView = useInView(coursesRef, { once: true, margin: "-100px" });
  const upcomingInView = useInView(upcomingRef, { once: true, margin: "-100px" });
  const newsInView = useInView(newsRef, { once: true, margin: "-100px" });
  const eventsInView = useInView(eventsRef, { once: true, margin: "-100px" });

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
          <motion.div 
            className="flex-1 w-full flex flex-col items-center lg:items-start text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h1 
              className="flex flex-col gap-2 mt-4 text-2xl sm:text-4xl lg:text-6xl font-bold mb-6 text-green-primary text-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Tingkatkan Keahlianmu,
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Majukan Kariermu
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-sm text-left sm:text-lg mb-7 text-black max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              PinusPintar menawarkan bootcamp intensif di bidang teknologi, desain,
              dan pemasaran digital. Belajar langsung dari para ahli industri
              melalui proyek praktis dan aplikasi dunia nyata.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="primary" className="px-10 py-7 w-full  sm:w-auto text-[18px] font-medium" onClick={scrollToFeaturedCourses}>
                  Jelajahi
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="flex-1 flex justify-center items-center mb-8 lg:mb-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image
                src="/Vector.png"
                width={507}
                height={478}
                alt="Students learning"
                className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bootcamp Program Section */}
      <div className="p-8 w-full max-w-8xl mx-auto" ref={coursesRef}>
        <motion.div 
          id="featured-courses" 
          className="px-4 py-8 w-full max-w-8xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={coursesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-primary text-center sm:text-left">
            Program Bootcamp
          </h2>
        </motion.div>
        <div>
          <div>
            {filteredCourses.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredCourses.slice(0, 4).map((course, index) => (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={coursesInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                      whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    >
                      <CourseCard {...course} />
                    </motion.div>
                  ))}
                </div>
                {filteredCourses.length > 4 && (
                  <motion.div 
                    className="flex justify-center mt-8"
                    initial={{ opacity: 0 }}
                    animate={coursesInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="primary" className="px-15 py-6 w-full sm:w-auto text-[18px] font-medium transition-all duration-300">
                        <Link href="/events">
                          Lihat Semua
                        </Link>
                      </Button>
                    </motion.div>
                  </motion.div>
                )}
              </>
            ) : (
              <motion.p 
                className="text-center text-gray-500 py-10 font-medium text-[20px]"
                initial={{ opacity: 0 }}
                animate={coursesInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6 }}
              >
                Belum ada kursus yang tersedia saat ini — nantikan pembaruan selanjutnya!
              </motion.p>
            )}
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="p-8 mb-16 w-full max-w-8xl mx-auto" ref={upcomingRef}>
        <motion.div 
          id="upcoming-events" 
          className="px-4 py-8 w-full max-w-8xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={upcomingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-primary text-center sm:text-left">
            Acara Mendatang
          </h2>
        </motion.div>
        <div>
          {filteredUpcoming.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredUpcoming.map((upcoming, index) => (
                <motion.div
                  key={upcoming.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={upcomingInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <UpcomingCard {...upcoming} />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.p 
              className="text-center text-gray-500 py-10 font-medium text-[20px]"
              initial={{ opacity: 0 }}
              animate={upcomingInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Belum ada acara yang tersedia saat ini — nantikan pembaruan selanjutnya!
            </motion.p>
          )}
        </div>
      </div>

      {/* Media Coverage Section */}
      <div className="p-8 mb-16 w-full max-w-8xl mx-auto" ref={newsRef}>
        <motion.div 
          id="media-coverage" 
          className="px-4 py-8 w-full max-w-8xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={newsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-primary text-center sm:text-left">
            Liputan Media
          </h2>
        </motion.div>
        <div>
          {filteredNews.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* First 3 items - always visible */}
                {filteredNews.slice(0, 3).map((newsItem, index) => (
                  <motion.div 
                    key={newsItem.id} 
                    initial={{ opacity: 0, y: 50 }}
                    animate={newsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  >
                    <NewsCard {...newsItem} />
                  </motion.div>
                ))}

                {/* Additional items 4-6 with smooth expansion */}
                <motion.div
                  className="col-span-full"
                  initial={false}
                  animate={{
                    height: showAllNews ? 'auto' : 0,
                    opacity: showAllNews ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{
                    overflow: 'hidden',
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-6">
                    {filteredNews.slice(3, 6).map((newsItem, index) => (
                      <motion.div
                        key={newsItem.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={showAllNews ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ 
                          duration: 0.4,
                          delay: showAllNews ? index * 0.1 : 0,
                          ease: "easeOut"
                        }}
                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                      >
                        <NewsCard {...newsItem} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {filteredNews.length > 3 && (
                <motion.div 
                  className="flex justify-center mt-8 transition-all duration-300"
                  initial={{ opacity: 0 }}
                  animate={newsInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="primary"
                      className="px-15 py-6 w-full sm:w-auto text-[18px] font-medium transition-all duration-300"
                      onClick={handleToggleNews}
                      disabled={isAnimating}
                    >
                      {showAllNews ? 'Lihat Lebih Sedikit' : 'Lihat Semua'}
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </>
          ) : (
            <motion.p 
              className="text-center text-gray-500 py-10 font-medium text-[20px]"
              initial={{ opacity: 0 }}
              animate={newsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Belum ada acara yang tersedia saat ini — nantikan pembaruan selanjutnya!
            </motion.p>
          )}
        </div>
      </div>
      <div className='p-8 mb-16 w-full max-w-8xl mx-auto' ref={eventsRef}>
        <motion.div 
          id="last-program" 
          className="px-4 py-8 w-full max-w-8xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={eventsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-primary text-center sm:text-left">
            Progam Terakhir
          </h2>
        </motion.div>
        <div>
          {filteredNews.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* First 3 items - always visible */}
                {filteredEvent.slice(0, 3).map((item, index) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={eventsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  >
                    <EventsCard {...item} />
                  </motion.div>
                ))}

                {/* Additional items 4-6 with smooth expansion */}
                <motion.div
                  className="col-span-full"
                  initial={false}
                  animate={{
                    height: showAllProgram ? 'auto' : 0,
                    opacity: showAllProgram ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{
                    overflow: 'hidden',
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-6">
                    {filteredEvent.slice(3, 6).map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={showAllProgram ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ 
                          duration: 0.4,
                          delay: showAllProgram ? index * 0.1 : 0,
                          ease: "easeOut"
                        }}
                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                      >
                        <EventsCard {...item} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {filteredEvent.length > 3 && (
                <motion.div 
                  className="flex justify-center mt-8 transition-all duration-300"
                  initial={{ opacity: 0 }}
                  animate={eventsInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="primary"
                      className="px-15 py-6 w-full sm:w-auto text-[18px] font-medium transition-all duration-300"
                      onClick={toggleProgram}
                      disabled={isAnimatingProgram}
                    >
                      {showAllProgram ? 'Lihat Lebih Sedikit' : 'Lihat Semua'}
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </>
          ) : (
            <motion.p 
              className="text-center text-gray-500 py-10 font-medium text-[20px]"
              initial={{ opacity: 0 }}
              animate={eventsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Belum ada acara yang tersedia saat ini — nantikan pembaruan selanjutnya!
            </motion.p>
          )}
        </div>
      </div>

      <motion.div 
        className='relative'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <Header />
      </motion.div>
    </div>
  );
};

export default PinusPintarHomepage;