"use client";

import TeamsCard from '@/components/ui/TeamsCard';
import { teams } from '@/lib/teams';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

const roleGroupKeys = [
    "All",
    "Developer",
    // "UI/UX & Design",
    "Infra & DevOps",
    "Quality",
    "Growth & Branding",
    "People & Ops",
] as const;

type RoleGroupKey = typeof roleGroupKeys[number];

const roleGroups: Record<RoleGroupKey, string[]> = {
    All: [
        "Frontend Developer", "Backend Developer", "Fullstack Developer",
        // "UI/UX Designer", "Graphic Designer", "Illustrator",
        "DevOps Engineer", "IT Security Specialist", "SysAdmin", "Cloud Engineer",
        "QA Engineer", "Tester",
        "Product Manager",
        "HR Manager", "Direktur",
    ],
    Developer: ["Frontend Developer", "Backend Developer", "Fullstack Developer"],
    // "UI/UX & Design": ["UI/UX Designer", "Graphic Designer", "Illustrator"],
    "Infra & DevOps": ["DevOps Engineer", "IT Security Specialist", "SysAdmin", "Cloud Engineer"],
    Quality: ["QA Engineer", "Tester"],
    "Growth & Branding": ["Product Manager", "VP of Strategy"],
    "People & Ops": ["Community Coordinator", "Director"],
};

export default function OurTeamsPage() {
    const [selectedRole, setSelectedRole] = useState<RoleGroupKey>("All");

    const filteredTeams =
        selectedRole === "All"
            ? teams
            : teams.filter((team) =>
                roleGroups[selectedRole].includes(team.role)
            );

    // Refs for scroll animations
    const heroRef = useRef(null);
    const filterRef = useRef(null);
    const teamsRef = useRef(null);

    const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
    const filterInView = useInView(filterRef, { once: true, margin: "-50px" });
    const teamsInView = useInView(teamsRef, { once: true, margin: "-100px" });

    return (
        <div className="flex flex-col min-h-screen bg-gray-primary">

            {/* Hero Section */}
            <div ref={heroRef} className="flex flex-col lg:flex-row items-center justify-start p-4 sm:p-8 w-full max-w-8xl mx-auto gap-8">
                <motion.div 
                    className="flex-shrink-0 w-full max-w-[542px] h-[360px] sm:h-[300px] md:h-[360px] lg:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={heroInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <Image
                        src="/teams.JPEG"
                        alt="Tim Kami"
                        width={600}
                        height={400}
                        className="object-cover rounded-lg shadow-md w-full h-full"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                    />
                </motion.div>

                <motion.div 
                    className="flex flex-col text-center lg:text-left w-full lg:w-1/2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={heroInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                    <motion.h1 
                        className="text-4xl sm:text-5xl font-bold mb-6 text-green-primary text-shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Tim Kami
                    </motion.h1>
                    <motion.h2 
                        className="text-2xl sm:text-3xl font-semibold mb-4 text-green-primary"
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Kenali Tim Hebat di Balik PinusPintar
                    </motion.h2>
                    <motion.p 
                        className="text-lg mb-10 text-green-primary text-justify"
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        Kami adalah tim profesional yang berpengalaman di bidang teknologi, desain, dan pendidikan.
                        Bersama-sama kami berkomitmen untuk menghadirkan pengalaman belajar terbaik bagi peserta bootcamp,
                        workshop, dan webinar kami.
                    </motion.p>
                </motion.div>
            </div>

            {/* Teams Member Section */}
            <div className="px-8 py-4 w-full max-w-8xl mx-auto mt-8 mb-12 flex-grow">
                {/* Filter Section */}
                <motion.div 
                    ref={filterRef}
                    className="px-4 py-4 flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={filterInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {roleGroupKeys.map((role, index) => (
                        <motion.button
                            key={role}
                            onClick={() => setSelectedRole(role)}
                            className={`px-3 sm:px-4 py-2 text-sm sm:text-base rounded-2xl shadow-md font-medium transition-all duration-200 
                                ${selectedRole === role
                                    ? "bg-green-primary text-white scale-105"
                                    : "bg-white text-gray-700 hover:bg-green-50"
                                }`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={filterInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ 
                                duration: 0.3, 
                                delay: index * 0.1,
                                ease: "easeOut"
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {role}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Teams Grid */}
                <div ref={teamsRef} className="px-4">
                    {filteredTeams.length > 0 ? (
                        <motion.div 
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                            initial="hidden"
                            animate={teamsInView ? "visible" : "hidden"}
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.1
                                    }
                                }
                            }}
                        >
                            {filteredTeams.map((team, index) => (
                                <motion.div
                                    key={team.id}
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
                                    <TeamsCard {...team} />
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.p 
                            className="text-center text-gray-500 py-10 font-medium text-[20px]"
                            initial={{ opacity: 0 }}
                            animate={teamsInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.6 }}
                        >
                            Belum ada posisi yang tersedia untuk kategori ini — nantikan pembaruan selanjutnya!
                        </motion.p>
                    )}
                </div>
            </div>

        </div>
    );
}
