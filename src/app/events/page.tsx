"use client";

import Image from 'next/image';
import { upcoming } from '@/lib/upcoming';
import { courses } from '@/lib/courses';
import UpcomingCard from '@/components/ui/UpcomingCard';
import CourseCard from '@/components/ui/CourseCard';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const EventPage = () => {
  // Refs for scroll animations
  const heroRef = useRef(null);
  const coursesRef = useRef(null);
  const upcomingRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const coursesInView = useInView(coursesRef, { once: true, margin: "-100px" });
  const upcomingInView = useInView(upcomingRef, { once: true, margin: "-100px" });

  const filteredCourses = courses;
  const filteredUpcoming = upcoming;

  return (
    <section className="relative min-h-screen">
      {/* Hero Section */}
      <div ref={heroRef} className="relative flex max-w-8xl mx-auto flex-col-reverse lg:flex-row gap-6 lg:gap-10 justify-evenly items-center lg:items-start pt-12 sm:pt-16 lg:pt-20 mb-8 lg:mb-10 px-4 lg:px-0">
        <motion.div 
          className="space-y-4 sm:space-y-5 lg:space-y-7 lg:mt-20 w-full lg:w-auto"
          initial={{ opacity: 0, x: -50 }}
          animate={heroInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-green-primary text-2xl sm:text-3xl md:text-[36px] font-bold leading-tight max-w-full lg:max-w-[630px]"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Temukan Potensimu: Ikuti Acara-Acara Seru Bersama PinusPintar!
          </motion.h1>
          <motion.p 
            className="text-green-primary text-base sm:text-lg md:text-[20px] text-justify max-w-full lg:max-w-[630px]"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Raih kesempatan belajar langsung dari mentor berpengalaman melalui
            bootcamp, workshop, dan webinar interaktif kami. Tingkatkan skill-mu,
            perluas koneksi, dan wujudkan karier impianmu!
          </motion.p>
        </motion.div>

        <motion.div 
          className="shadow-lg rounded-2xl overflow-hidden flex items-center justify-center w-full max-w-[640px] aspect-[16/9] bg-white shrink-0"
          initial={{ opacity: 0, x: 50 }}
          animate={heroInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <Image
              src="/galleries/zizal.jpg"
              alt="gambar acara"
              width={640}
              height={360}
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Section Bootcamp */}
      <div ref={coursesRef} className="px-4 sm:px-6 lg:px-8 py-6 lg:py-8 w-full max-w-8xl mx-auto">
        <motion.div 
          id="featured-courses" 
          className="mb-6 lg:mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={coursesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-primary text-center sm:text-left">
            Program Bootcamp
          </h2>
        </motion.div>

        {filteredCourses.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 justify-items-center"
            initial="hidden"
            animate={coursesInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut"
                    }
                  }
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
              >
                <CourseCard {...course} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.p 
            className="text-center text-gray-500 py-10 font-medium text-base sm:text-lg"
            initial={{ opacity: 0 }}
            animate={coursesInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            Belum ada kursus yang tersedia untuk kategori ini.
          </motion.p>
        )}
      </div>

      {/* Section Upcoming Events */}
      <div ref={upcomingRef} className="px-4 sm:px-6 lg:px-8 py-6 lg:py-8 pb-12 lg:pb-16 w-full max-w-8xl mx-auto">
        <motion.div 
          id="upcoming-events" 
          className="mb-6 lg:mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={upcomingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-primary text-center sm:text-left">
            Acara Mendatang
          </h2>
        </motion.div>

        {filteredUpcoming.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 justify-items-center"
            initial="hidden"
            animate={upcomingInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {filteredUpcoming.map((item, index) => (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut"
                    }
                  }
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
              >
                <UpcomingCard {...item} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.p 
            className="text-center text-gray-500 py-10 font-medium text-base sm:text-lg"
            initial={{ opacity: 0 }}
            animate={upcomingInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            Belum ada acara yang tersedia saat ini — nantikan pembaruan selanjutnya!
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default EventPage;