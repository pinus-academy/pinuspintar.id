'use client';

import React, { useState, useEffect } from 'react';
import { Search, Award, ArrowRight, Clock, Users } from 'lucide-react';

const PinusPintarHomepage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [windowWidth, setWindowWidth] = useState(0);

  // Color palette
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

  // Update window width when resized
  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate card width based on window width
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

  // Sample course data
  const courses = [
    {
      id: 1,
      title: 'Full-Stack Web Development',
      description: 'Master modern web development with JavaScript, React, and Node.js',
      instructor: 'Budi Santoso',
      price: 2500000,
      discountPrice: 1999000,
      duration: '12 weeks',
      level: 'Intermediate',
      type: 'online',
      category: 'development',
      featured: true,
      image: 'js.png'
    },
    {
      id: 2,
      title: 'UI/UX Design Fundamentals',
      description: 'Learn the principles of user-centered design and create stunning interfaces',
      instructor: 'Siti Rahayu',
      price: 1800000,
      discountPrice: 1499000,
      duration: '8 weeks',
      level: 'Beginner',
      type: 'hybrid',
      category: 'design',
      featured: true,
      image: 'js.png'
    },
    {
      id: 3,
      title: 'Data Science Bootcamp',
      description: 'Analytics, machine learning, and AI fundamentals for real-world applications',
      instructor: 'Agus Wijaya',
      price: 3000000,
      discountPrice: 2499000,
      duration: '16 weeks',
      level: 'Advanced',
      type: 'offline',
      category: 'data',
      featured: false,
      image: 'cloud.png'
    },
    {
      id: 4,
      title: 'Java Programming',
      description: 'Learn the fundamentals of Java programming and build your first Java application',
      instructor: 'Dewi Pratiwi',
      price: 1500000,
      discountPrice: 1299000,
      duration: '6 weeks',
      level: 'Beginner',
      type: 'online',
      category: 'marketing',
      featured: true,
      image: 'java.png'
    }
  ];

  // Add more courses to create a better visual of multiple rows
  const extendedCourses = [...courses, ...courses.map(course => ({...course, id: course.id + 4}))];

  // Filter courses based on active tab
  const filteredCourses = activeTab === 'all' 
    ? extendedCourses 
    : extendedCourses.filter(course => course.type === activeTab);

  // Format currency to IDR
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const cardStyle = {
    width: getCardWidth(),
    paddingLeft: '8px',
    paddingRight: '8px',
    marginBottom: '16px',
    float: 'left' as const,
    boxSizing: 'border-box' as const
  };

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: colors.white }} className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-200" style={{ backgroundColor: colors.white }}>
        <div className="flex items-center">
          <div className="mr-8 font-bold text-2xl" style={{ color: colors.greenArmy }}>
            Pinus<span style={{ color: colors.yellow }}>Pintar</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="font-medium" style={{ color: colors.greenArmy }}>Home</a>
            <a href="/about" className="font-medium" style={{ color: colors.darkText }}>About Us</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search courses..."
              className="py-2 pl-10 pr-4 rounded-lg text-sm"
              style={{ backgroundColor: colors.lightGray, width: '240px' }}
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
          <button 
            className="px-4 py-2 rounded-lg text-sm font-medium text-white cursor-pointer"
            style={{ backgroundColor: colors.greenArmy }}
          >
            Join Bootcamp
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row px-8 py-16" style={{ backgroundColor: colors.lightYellow }}>
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: colors.greenArmy }}>
            Upgrade Your Skills<br />Boost Your Career
          </h1>
          <p className="text-lg mb-8 max-w-xl" style={{ color: colors.darkText }}>
            PinusPintar offers intensive bootcamps in tech, design, and digital marketing. 
            Learn from industry experts through hands-on projects and real-world applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              className="px-6 py-3 rounded-lg font-semibold text-white cursor-pointer"
              style={{ backgroundColor: colors.greenArmy }}
            >
              Explore Courses
            </button>
            <button 
              className="px-6 py-3 rounded-lg font-semibold cursor-pointer"
              style={{ backgroundColor: colors.white, color: colors.greenArmy, border: `2px solid ${colors.greenArmy}` }}
            >
              View Learning Paths
            </button>
          </div>
          <div className="flex mt-12 gap-8">
            <div className="flex items-center">
              <div className="p-2 rounded-full mr-3" style={{ backgroundColor: colors.yellow }}>
                <Users size={20} style={{ color: colors.greenArmy }} />
              </div>
              <div>
                <p className="font-bold text-xl" style={{ color: colors.greenArmy }}>5,000+</p>
                <p className="text-sm" style={{ color: colors.lightText }}>Students</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="p-2 rounded-full mr-3" style={{ backgroundColor: colors.yellow }}>
                <Award size={20} style={{ color: colors.greenArmy }} />
              </div>
              <div>
                <p className="font-bold text-xl" style={{ color: colors.greenArmy }}>15+</p>
                <p className="text-sm" style={{ color: colors.lightText }}>Expert Instructors</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 mt-8 md:mt-0 flex justify-center">
          <img src="bg.jpeg" style={{ width: 'auto', height: '300px' }} alt="Students learning" className="rounded-lg" />
        </div>
      </div>

      {/* Featured Courses Section */}
      <div className="px-4 py-16" style={{ maxWidth: '100%' }}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold" style={{ color: colors.greenArmy }}>Featured Courses</h2>
        </div>

        <div className="flex overflow-x-auto gap-4 mb-12 pb-4">
          <button 
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer ${activeTab === 'all' ? 'text-white' : ''}`}
            style={{ 
              backgroundColor: activeTab === 'all' ? colors.greenArmy : colors.lightGray,
              color: activeTab === 'all' ? colors.white : colors.darkText
            }}
            onClick={() => setActiveTab('all')}
          >
            All Courses
          </button>
          <button 
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer ${activeTab === 'online' ? 'text-white' : ''}`}
            style={{ 
              backgroundColor: activeTab === 'online' ? colors.greenArmy : colors.lightGray,
              color: activeTab === 'online' ? colors.white : colors.darkText
            }}
            onClick={() => setActiveTab('online')}
          >
            Online
          </button>
          <button 
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer ${activeTab === 'offline' ? 'text-white' : ''}`}
            style={{ 
              backgroundColor: activeTab === 'offline' ? colors.greenArmy : colors.lightGray,
              color: activeTab === 'offline' ? colors.white : colors.darkText
            }}
            onClick={() => setActiveTab('offline')}
          >
            Offline
          </button>
          <button 
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer ${activeTab === 'hybrid' ? 'text-white' : ''}`}
            style={{ 
              backgroundColor: activeTab === 'hybrid' ? colors.greenArmy : colors.lightGray,
              color: activeTab === 'hybrid' ? colors.white : colors.darkText
            }}
            onClick={() => setActiveTab('hybrid')}
          >
            Hybrid
          </button>
        </div>

        <div style={{ margin: '0 -8px', overflow: 'hidden' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
            {filteredCourses.map(course => (
              <div key={course.id} className="w-full">
                <a href={`/courses/${course.id}`} className="block">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md h-full transition-transform hover:scale-105 hover:shadow-lg">
                    <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                    
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <div 
                          className="px-3 py-1 rounded text-xs font-medium uppercase"
                          style={{ 
                            backgroundColor: 
                              course.type === 'online' 
                                ? `${colors.lightYellow}` 
                                : course.type === 'offline' 
                                  ? '#E5F6FD' 
                                  : '#F0E5FD',
                            color: 
                              course.type === 'online' 
                                ? colors.greenArmy 
                                : course.type === 'offline' 
                                  ? '#0287C3' 
                                  : '#7B2CBF'
                          }}
                        >
                          {course.type}
                        </div>
                        <div 
                          className="px-3 py-1 rounded text-xs font-medium"
                          style={{ backgroundColor: colors.lightGray }}
                        >
                          {course.level}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-2" style={{ color: colors.darkText }}>
                        {course.title}
                      </h3>
                      <p className="text-sm mb-4" style={{ color: colors.lightText }}>
                        {course.description}
                      </p>
                      
                      <div className="flex items-center mb-4">
                        <img src="/api/placeholder/32/32" alt={course.instructor} className="w-8 h-8 rounded-full mr-2" />
                        <span className="text-sm" style={{ color: colors.lightText }}>By {course.instructor}</span>
                      </div>
                      
                      <div className="flex items-center mb-4">
                        <Clock className="h-4 w-4 mr-2" style={{ color: colors.lightText }} />
                        <span className="text-sm" style={{ color: colors.lightText }}>{course.duration}</span>
                      </div>
                      
                      <div className="mb-4">
                        <span className="text-sm line-through mr-2" style={{ color: colors.lightText }}>
                          {formatCurrency(course.price)}
                        </span>
                        <span className="text-lg font-bold" style={{ color: colors.greenArmy }}>
                          {formatCurrency(course.discountPrice)}
                        </span>
                      </div>
                      <button 
                        className="w-full px-4 py-2 rounded text-xs font-semibold cursor-pointer"
                        style={{ backgroundColor: colors.yellow, color: colors.greenArmy }}
                        onClick={(e) => e.preventDefault()}
                      >
                        Daftar Sekarang
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Paths Section */}
      <div className="px-4 py-16" style={{ backgroundColor: colors.lightGray, maxWidth: '100%' }}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold" style={{ color: colors.greenArmy }}>Learning Paths</h2>
          <a href="#" className="flex items-center font-medium" style={{ color: colors.greenArmy }}>
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div style={{ margin: '0 -8px', overflow: 'hidden' }}>
          {/* Web Development Path */}
          <div style={cardStyle}>
            <div className="bg-white rounded-lg overflow-hidden shadow-md p-6 h-full">
              <div 
                className="h-16 w-16 flex items-center justify-center rounded-full mb-4"
                style={{ backgroundColor: colors.lightYellow }}
              >
                <span className="text-2xl font-bold" style={{ color: colors.greenArmy }}>WD</span>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: colors.greenArmy }}>
                Web Development
              </h3>
              <p className="text-sm mb-4" style={{ color: colors.lightText }}>
                From HTML basics to advanced React and Node.js applications
              </p>
              <div className="flex items-center mb-4">
                <span className="text-sm font-medium mr-2" style={{ color: colors.darkText }}>5 Courses</span>
                <span className="text-sm" style={{ color: colors.lightText }}>• 24 weeks</span>
              </div>
              <button 
                className="w-full py-2 rounded font-medium cursor-pointer"
                style={{ backgroundColor: colors.lightYellow, color: colors.greenArmy }}
              >
                View Path
              </button>
            </div>
          </div>

          {/* UI/UX Design Path */}
          <div style={cardStyle}>
            <div className="bg-white rounded-lg overflow-hidden shadow-md p-6 h-full">
              <div 
                className="h-16 w-16 flex items-center justify-center rounded-full mb-4"
                style={{ backgroundColor: colors.lightYellow }}
              >
                <span className="text-2xl font-bold" style={{ color: colors.greenArmy }}>UX</span>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: colors.greenArmy }}>
                UI/UX Design
              </h3>
              <p className="text-sm mb-4" style={{ color: colors.lightText }}>
                Master user research, wireframing, prototyping, and design systems
              </p>
              <div className="flex items-center mb-4">
                <span className="text-sm font-medium mr-2" style={{ color: colors.darkText }}>4 Courses</span>
                <span className="text-sm" style={{ color: colors.lightText }}>• 16 weeks</span>
              </div>
              <button 
                className="w-full py-2 rounded font-medium cursor-pointer"
                style={{ backgroundColor: colors.lightYellow, color: colors.greenArmy }}
              >
                View Path
              </button>
            </div>
          </div>

          {/* Data Science Path */}
          <div style={cardStyle}>
            <div className="bg-white rounded-lg overflow-hidden shadow-md p-6 h-full">
              <div 
                className="h-16 w-16 flex items-center justify-center rounded-full mb-4"
                style={{ backgroundColor: colors.lightYellow }}
              >
                <span className="text-2xl font-bold" style={{ color: colors.greenArmy }}>DS</span>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: colors.greenArmy }}>
                Data Science
              </h3>
              <p className="text-sm mb-4" style={{ color: colors.lightText }}>
                From statistics fundamentals to advanced machine learning models
              </p>
              <div className="flex items-center mb-4">
                <span className="text-sm font-medium mr-2" style={{ color: colors.darkText }}>6 Courses</span>
                <span className="text-sm" style={{ color: colors.lightText }}>• 32 weeks</span>
              </div>
              <button 
                className="w-full py-2 rounded font-medium cursor-pointer"
                style={{ backgroundColor: colors.lightYellow, color: colors.greenArmy }}
              >
                View Path
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="px-4 py-16" style={{ maxWidth: '100%' }}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold" style={{ color: colors.greenArmy }}>Upcoming Events</h2>
          <a href="#" className="flex items-center font-medium" style={{ color: colors.greenArmy }}>
            View Calendar <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div style={{ margin: '0 -8px', overflow: 'hidden' }}>
          {/* Event 1 */}
          <div style={cardStyle}>
            <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
              <img src="js.png" alt="Tech Talk" className="w-full h-48 object-cover" />
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
                <button 
                  className="w-full py-2 rounded font-medium cursor-pointer"
                  style={{ backgroundColor: colors.greenArmy, color: colors.white }}
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>

          {/* Event 2 */}
          <div style={cardStyle}>
            <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
              <img src="cloud.png" alt="Workshop" className="w-full h-48 object-cover" />
              <div className="p-5">
                <div 
                  className="inline-block px-3 py-1 rounded text-xs font-medium uppercase mb-3"
                  style={{ backgroundColor: '#E5F6FD', color: '#0287C3' }}
                >
                  WORKSHOP
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: colors.darkText }}>
                  UI Design Masterclass: Creating Design Systems
                </h3>
                <p className="text-sm mb-4" style={{ color: colors.lightText }}>
                  Hands-on workshop on building scalable design systems
                </p>
                <div className="flex items-center mb-4">
                  <Clock className="h-4 w-4 mr-2" style={{ color: colors.lightText }} />
                  <span className="text-sm" style={{ color: colors.lightText }}>June 5, 2025 • 10:00 WIB</span>
                </div>
                <button 
                  className="w-full py-2 rounded font-medium cursor-pointer"
                  style={{ backgroundColor: colors.greenArmy, color: colors.white }}
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>

          {/* Event 3 */}
          <div style={cardStyle}>
            <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
              <img src="cloud.png" alt="Bootcamp" className="w-full h-48 object-cover" />
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
                  <span className="text-sm" style={{ color: colors.lightText }}>June 12-16, 2025 • 09:00 WIB</span>
                </div>
                <button 
                  className="w-full py-2 rounded font-medium cursor-pointer"
                  style={{ backgroundColor: colors.greenArmy, color: colors.white }}
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
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

      {/* Footer */}
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
              <a href="#" className="text-gray-400 hover:text-white">FB</a>
              <a href="#" className="text-gray-400 hover:text-white">IG</a>
              <a href="#" className="text-gray-400 hover:text-white">TW</a>
              <a href="#" className="text-gray-400 hover:text-white">LI</a>
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
              <li className="text-gray-400">info@pinuspintar.id</li>
              <li className="text-gray-400">+62 21 5678 9012</li>
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