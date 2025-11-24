import { talents } from '@/lib/talents';
import TalentCard from '@/components/ui/TalentCard';
import { useState, useMemo, Suspense } from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bakat - PinusPintar.id",
  description: "Intensive bootcamps in tech, design, and digital marketing.",
};

type SelectChangeEvent = React.ChangeEvent<HTMLSelectElement>;
type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;


const TalentPage = () => {
    const [selectedLevel, setSelectedLevel] = useState('');
    const [selectedRole, setSelectedRole] = useState('');
    const [searchTerm, setSearchTerm] = useState('');


    const uniqueRoles = useMemo(() => {
        const roles = talents.map(talent => talent.role);
        return [...new Set(roles)].sort(); 
    }, []);

    const filteredTalents = talents.filter(talent => {
        const talentTypeLower = talent.type.toLowerCase();
        const talentRoleLower = talent.role.toLowerCase();
        const talentNameLower = talent.name.toLowerCase();
        const talentSkillLower = talent.skill?.toLowerCase() || '';

        const levelMatch = 
            selectedLevel === '' || 
            talentTypeLower.includes(selectedLevel.toLowerCase());

        const roleMatch = 
            selectedRole === '' || 
            talentRoleLower === selectedRole.toLowerCase();

        const searchMatch =
            searchTerm === '' ||
            talentNameLower.includes(searchTerm.toLowerCase()) ||
            talentSkillLower.includes(searchTerm.toLowerCase()) ||
            talentRoleLower.includes(searchTerm.toLowerCase());

        return levelMatch && roleMatch && searchMatch;
    });

    const handleLevelChange = (event: SelectChangeEvent) => {
        setSelectedLevel(event.target.value);
    };

    const handleRoleChange = (event: SelectChangeEvent) => {
        setSelectedRole(event.target.value);
    };

    const handleSearchChange = (event: InputChangeEvent) => {
        setSearchTerm(event.target.value);
    };

    return (
        <section className="relative px-4 sm:px-6 lg:px-8 py-6 lg:py-8 w-full max-w-8xl mx-auto">
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
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className=' text-gray-900 py-4 pr-6 pl-15  rounded-lg shadow-lg w-full  focus:outline-0'
                        />
                    </form>
                    <div className='w-full flex gap-4 md:gap-8 md:w-1/2'>
                        <select
                            id="role-select"
                            name="role"
                            value={selectedRole}
                            onChange={handleRoleChange}
                            className="block w-1/2 max-w-44 py-4 pl-3 pr-10 text-base text-gray-900 border-gray-300 rounded-lg  focus:outline-none shadow-lg md:w-full"
                        >
                            <option value="">All Roles</option> 
                            {uniqueRoles.map((role) => (
                                <option key={role} value={role}>
                                    {role}
                                </option>
                            ))}
                        </select>
                        <select
                            id="level-select"
                            name="level"
                            value={selectedLevel} 
                            onChange={handleLevelChange}
                            className="block w-1/2 max-w-44 py-4 pl-3 pr-10 text-base text-gray-900  border-gray-300 rounded-lg focus:outline-none shadow-lg md:w-full"
                        >
                            <option value="">All Levels</option>
                            <option value="Junior">Junior</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Senior">Senior</option>
                        </select>
                    </div>
                </div>

                <div className=" sm:px-10 lg:px-8 py-6  pb-12 lg:pb-16 w-full mx-auto">
                    {filteredTalents.length > 0 ? (
                        <Suspense fallback={
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-10 justify-between">
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <div key={index} className="bg-white rounded-lg border border-gray-100 border-2 p-4 h-64 animate-pulse">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="size-16 rounded-full bg-gray-200"></div>
                                            <div className="flex flex-col gap-2">
                                                <div className="h-4 bg-gray-200 rounded w-24"></div>
                                                <div className="h-3 bg-gray-200 rounded w-20"></div>
                                            </div>
                                        </div>
                                        <div className="h-6 bg-gray-200 rounded w-16 mb-4"></div>
                                        <hr className="border-gray-300 border-t-2 w-full mb-3" />
                                        <div className="space-y-2">
                                            <div className="h-4 bg-gray-200 rounded w-full"></div>
                                            <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                                            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        }>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-10 justify-between">
                                {filteredTalents.map((talent) => (
                                    <TalentCard key={talent.id} {...talent} />
                                ))}
                            </div>
                        </Suspense>
                    ) : (
                        <p className="text-center text-gray-500 py-10 font-medium text-base sm:text-lg">
                            Tidak ada talent yang ditemukan.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TalentPage;
