'use client';

import React from 'react';
import { Users, Award, Clock, Target, Heart, Lightbulb } from 'lucide-react';

const AboutUsPage = () => {
  // Color palette (matching the homepage)
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

  // Team members data
  const teamMembers = [
    {
      name: 'Budi Santoso',
      role: 'Founder & CEO',
      image: '/avatar.png',
      bio: 'Former tech lead at Gojek with 10+ years of experience in software development.'
    },
    {
      name: 'Siti Rahayu',
      role: 'Head of Education',
      image: '/avatar.png',
      bio: 'Education specialist with a passion for creating impactful learning experiences.'
    },
    {
      name: 'Agus Wijaya',
      role: 'Lead Instructor',
      image: '/avatar.png',
      bio: 'Full-stack developer with expertise in modern web technologies.'
    },
    {
      name: 'Dewi Pratiwi',
      role: 'Career Coach',
      image: '/avatar.png',
      bio: 'HR professional specializing in tech recruitment and career development.'
    }
  ];

  // Values data
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from curriculum design to student support.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Passion',
      description: 'We  are passionate about technology and helping others succeed in their tech careers.'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation',
      description: 'We continuously innovate our teaching methods and curriculum to stay ahead of industry trends.'
    }
  ];

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: colors.white }} className="min-h-screen">
      {/* Hero Section */}
      <div className="px-8 py-20" style={{ backgroundColor: colors.lightYellow }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: colors.greenArmy }}>
            About PinusPintar
          </h1>
          <p className="text-lg mb-8" style={{ color: colors.darkText }}>
            We're on a mission to bridge the digital skills gap in Indonesia by providing 
            high-quality tech education that prepares students for real-world challenges.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-8 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users className="h-12 w-12" style={{ color: colors.greenArmy }} />
            </div>
            <h3 className="text-3xl font-bold mb-2" style={{ color: colors.greenArmy }}>5,000+</h3>
            <p className="text-lg" style={{ color: colors.lightText }}>Graduates</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Award className="h-12 w-12" style={{ color: colors.greenArmy }} />
            </div>
            <h3 className="text-3xl font-bold mb-2" style={{ color: colors.greenArmy }}>85%</h3>
            <p className="text-lg" style={{ color: colors.lightText }}>Employment Rate</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Clock className="h-12 w-12" style={{ color: colors.greenArmy }} />
            </div>
            <h3 className="text-3xl font-bold mb-2" style={{ color: colors.greenArmy }}>3 Years</h3>
            <p className="text-lg" style={{ color: colors.lightText }}>Industry Experience</p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="px-8 py-16" style={{ backgroundColor: colors.lightGray }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: colors.greenArmy }}>
            Our Story
          </h2>
          <div className="space-y-6" style={{ color: colors.darkText }}>
            <p>
              Founded in 2022, PinusPintar emerged from a simple observation: there was a growing gap 
              between the demand for tech talent in Indonesia and the availability of skilled professionals.
            </p>
            <p>
              Our founder, Budi Santoso, a former tech lead at Gojek, recognized that traditional 
              education wasn't keeping pace with the rapidly evolving tech industry. This realization 
              led to the creation of PinusPintar, a bootcamp designed to provide practical, 
              industry-relevant education.
            </p>
            <p>
              Today, we've grown into a leading tech education provider, helping thousands of 
              students launch their careers in technology. Our success is measured not just in 
              numbers, but in the success stories of our graduates who are now making an impact 
              in Indonesia's tech industry.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: colors.greenArmy }}>
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg" style={{ backgroundColor: colors.lightGray }}>
                <div className="flex justify-center mb-4" style={{ color: colors.greenArmy }}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: colors.greenArmy }}>
                  {value.title}
                </h3>
                <p style={{ color: colors.lightText }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="px-8 py-16" style={{ backgroundColor: colors.lightGray }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: colors.greenArmy }}>
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1" style={{ color: colors.greenArmy }}>
                    {member.name}
                  </h3>
                  <p className="text-sm mb-3" style={{ color: colors.yellow }}>
                    {member.role}
                  </p>
                  <p className="text-sm" style={{ color: colors.lightText }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-8 py-16" style={{ backgroundColor: colors.greenArmy }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.yellow }}>
            Join Our Mission
          </h2>
          <p className="text-lg mb-8" style={{ color: colors.white }}>
            Be part of our journey to transform tech education in Indonesia.
            Whether you're a student, instructor, or partner, we'd love to hear from you.
          </p>
          <button 
            className="px-8 py-3 rounded-lg font-semibold text-lg cursor-pointer"
            style={{ backgroundColor: colors.yellow, color: colors.greenArmy }}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage; 