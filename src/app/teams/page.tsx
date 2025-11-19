'use client';

import TeamsCard from '@/components/ui/TeamsCard';
import { teams } from '@/lib/teams';
import Image from 'next/image';
import { useState } from 'react';

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

    return (
        <div className="flex flex-col min-h-screen bg-gray-primary">

            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row items-center justify-start p-4 sm:p-8 w-full max-w-8xl mx-auto gap-8">
                <div className="flex-shrink-0 w-full max-w-[542px] h-[360px] sm:h-[300px] md:h-[360px] lg:w-1/2">
                    <Image
                        src="/teams.JPEG"
                        alt="Tim Kami"
                        width={600}
                        height={400}
                        className="object-cover rounded-lg shadow-md w-full h-full"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                    />
                </div>

                <div className="flex flex-col text-center lg:text-left w-full lg:w-1/2">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-green-primary text-shadow-lg">
                        Tim Kami
                    </h1>
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-green-primary">
                        Kenali Tim Hebat di Balik PinusPintar
                    </h2>
                    <p className="text-lg mb-10 text-green-primary text-justify">
                        Kami adalah tim profesional yang berpengalaman di bidang teknologi, desain, dan pendidikan.
                        Bersama-sama kami berkomitmen untuk menghadirkan pengalaman belajar terbaik bagi peserta bootcamp,
                        workshop, dan webinar kami.
                    </p>
                </div>
            </div>

            {/* Teams Member Section */}
            <div className="px-8 py-4 w-full max-w-8xl mx-auto mt-8 mb-12 flex-grow">
                {/* Filter Section */}
                <div className="px-4 py-4 flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 mb-4">
                    {roleGroupKeys.map((role) => (
                        <button
                            key={role}
                            onClick={() => setSelectedRole(role)}
                            className={`px-3 sm:px-4 py-2 text-sm sm:text-base rounded-2xl shadow-md font-medium transition-all duration-200 
                                ${selectedRole === role
                                    ? "bg-green-primary text-white scale-105"
                                    : "bg-white text-gray-700 hover:bg-green-50"
                                }`}
                        >
                            {role}
                        </button>
                    ))}
                </div>

                {/* Teams Grid */}
                <div className="px-4">
                    {filteredTeams.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4">
                            {filteredTeams.map((team) => (
                                <TeamsCard key={team.id} {...team} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-500 py-10 font-medium text-[20px]">
                            Belum ada posisi yang tersedia untuk kategori ini — nantikan pembaruan selanjutnya!
                        </p>
                    )}
                </div>
            </div>

        </div>
    );
}
