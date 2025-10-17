'use client';

import Image from 'next/image';
import { upcoming } from '@/lib/upcoming';
import { courses } from '@/lib/courses';
import UpcomingCard from '@/components/ui/UpcomingCard';
import CourseCard from '@/components/ui/CourseCard';

const EventPage = () => {

  const filteredCourses = courses;
  const filteredUpcoming = upcoming;

  return (
    <section className="relative bg-white-primary min-h-screen">
      {/* Hero Section */}
      <div className="relative flex flex-col-reverse lg:flex-row gap-6 lg:gap-10 justify-center items-center lg:items-start pt-12 sm:pt-16 lg:pt-20 mb-8 lg:mb-10 px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 sm:space-y-5 lg:space-y-7 lg:mt-20 w-full lg:w-auto">
          <h1 className="text-green-primary text-2xl sm:text-3xl md:text-[36px] font-bold leading-tight max-w-full lg:max-w-[630px]">
            Temukan Potensimu: Ikuti Acara-Acara Seru Bersama PinusPintar!
          </h1>
          <p className="text-green-primary text-base sm:text-lg md:text-[20px] text-justify max-w-full lg:max-w-[630px]">
            Raih kesempatan belajar langsung dari mentor berpengalaman melalui
            bootcamp, workshop, dan webinar interaktif kami. Tingkatkan skill-mu,
            perluas koneksi, dan wujudkan karier impianmu!
          </p>
        </div>

        <div className="shadow-lg rounded-2xl overflow-hidden flex items-center justify-center w-full max-w-[320px] sm:max-w-[360px] h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px] bg-white shrink-0">
          <Image
            src="/galleries/zizal.jpg"
            alt="gambar acara"
            width={360}
            height={480}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>

      {/* Section Bootcamp */}
      <div className="px-4 sm:px-6 lg:px-8 py-6 lg:py-8 w-full max-w-8xl mx-auto">
        <div id="featured-courses" className="mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-primary text-center sm:text-left">
            Program Bootcamp
          </h2>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 justify-items-center">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-10 font-medium text-base sm:text-lg">
            Belum ada kursus yang tersedia untuk kategori ini.
          </p>
        )}
      </div>

      {/* Section Upcoming Events */}
      <div className="px-4 sm:px-6 lg:px-8 py-6 lg:py-8 pb-12 lg:pb-16 w-full max-w-8xl mx-auto">
        <div id="upcoming-events" className="mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-primary text-center sm:text-left">
            Acara Mendatang
          </h2>
        </div>

        {filteredUpcoming.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 justify-items-center">
            {filteredUpcoming.map((item) => (
              <UpcomingCard key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-10 font-medium text-base sm:text-lg">
            Belum ada acara yang tersedia saat ini — nantikan pembaruan selanjutnya!
          </p>
        )}
      </div>
    </section>
  );
};

export default EventPage;