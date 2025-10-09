'use client';

import NavBar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import CourseCard from '@/components/ui/CourseCard';
import { courses } from '@/lib/courses';
import UpcomingCard from '@/components/ui/UpcomingCard';
import { upcoming } from '@/lib/upcoming';

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
    <div className="flex flex-col min-h-screen bg-white-primary">
      <NavBar />
      {/* Hero Section */}
      <div>
        <div className="flex flex-col-reverse p-8 w-full max-w-8xl mx-auto items-center lg:flex-row">
          <div className="flex-1">
            <h1 className="flex flex-col text-nowrap gap-2 mt-4 text-4xl text-shadow-lg lg:text-6xl font-bold mb-6 text-green-primary">
              <span>
                Upgrade Your Skills
              </span>
              <span>
                Boost Your Career
              </span>
            </h1>
            <p className="text-lg mb-7 text-green-primary">
              PinusPintar offers intensive bootcamps in tech, design,
              <br />
              and digital marketing. Learn from industry experts
              <br />
              through hands-on projects and real-world applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" className="px-10" onClick={scrollToFeaturedCourses}>Explore</Button>
            </div>
          </div>
          <Image src="/Vector (1).png" width={507} height={478} alt="Students learning" className="w-full sm:w-1/2 h-auto object-contain mx-auto" />
        </div>
      </div>

      {/* Bootcamp Program Section */}
      <div className="p-8 w-full max-w-8xl mx-auto">
        <div id="featured-courses" className="px-4 py-8 w-full max-w-8xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-primary text-center sm:text-left">
            Bootcamp Programs
          </h2>
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

      {/* Upcoming Events Section */}
      <div className="p-8 mb-16 w-full max-w-8xl mx-auto">
        <div id="upcoming-events" className="px-4 py-8 w-full max-w-8xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-primary text-center sm:text-left">
            Upcoming Events
          </h2>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredUpcoming.map(upcoming => (
              <UpcomingCard
                key={upcoming.id}
                {...upcoming}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PinusPintarHomepage;