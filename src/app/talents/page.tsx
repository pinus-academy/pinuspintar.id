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
        <section className=" relative px-4 sm:px-6 lg:px-8 py-6 lg:py-8 w-full max-w-8xl mx-auto">
            <div className="mb-6 lg:mb-8 mt-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-primary text-center sm:text-left">
                    Talent Pool
                </h2>
                <div className=' mx-auto flex flex-col gap-5 pt-8 space-x-5 sm:gap-4 md:flex-row'>
                    <form className="relative w-full md:w-1/2" action="">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-6 py-5 pointer-events-none">
                                <svg className="size-6 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>

                            <input
                                type="text"
                                placeholder='Search'
                                className=' text-gray-900 py-4 pr-6 pl-15  rounded-lg shadow-lg w-full  focus:outline-0'
                            />
                    </form>
                    <div className='w-full flex gap-4 md:gap-8 md:w-1/2'>
                        <select
                            id="skill-select"
                            name="skill"
                            defaultValue=""
                            className="block w-1/2 max-w-44 py-4 pl-3 pr-10 text-base text-gray-900 border-gray-300 rounded-lg  focus:outline-none shadow-lg md:w-full"
                        >
                            <option value="" disabled>Skill</option>
                            <option value="beginner">Front-End Developer</option>
                            <option value="intermediate">Back-End Developer</option>
                            <option value="advanced">Full-Stack Developer</option>
                            <option value="expert">DevOps Engineer</option>
                            <option value="expert">Mobile Developer</option>
                        </select>
                        <select
                            id="level-select"
                            name="level"
                            defaultValue=""
                            className="block w-1/2 max-w-44 py-4 pl-3 pr-10 text-base text-gray-900  border-gray-300 rounded-lg focus:outline-none shadow-lg md:w-full"
                        >
                            <option value="" disabled>Level</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                            <option value="expert">Expert</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventPage;