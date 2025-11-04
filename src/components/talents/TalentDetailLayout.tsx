import { TalentCardProps } from "@/lib/talentTypes";
import Image from "next/image";
import BadgeTalent from "@/components/talents/BadgeTalent";

interface TalentDetailLayoutProps {
    talent: TalentCardProps;
}

export default function TalentDetailLayout({ talent }: TalentDetailLayoutProps) {
    const { name, role, type, photo, description, skillset, education, experiences } = talent;

    const badgeVariant =
        type === "Senior"
            ? "orange"
            : type === "Intermediate"
                ? "blue"
                : type === "Junior"
                    ? "green"
                    : "gray";

    return (
        <section className="max-w-8xl space-y-6 mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full items-stretch">
                <div className="md:col-span-1 rounded-lg bg-white p-8 items-center text-center flex flex-col shadow-sm h-full">
                    <div className="text-center mt-6">
                        <Image
                            src={photo}
                            width={1000}
                            height={1000}
                            alt={name}
                            className="size-40 rounded-full object-cover mb-4 self-start aspect-square"
                        />
                    </div>
                    <h3 className="font-bold text-xl mb-1 w-full mt-8">
                        {name}
                    </h3>
                    <h5 className="text-gray-500 text-sm mb-3 w-full">
                        {role}
                    </h5>
                    <BadgeTalent
                        className="capitalize text-xs font-semibold px-3 py-1 rounded-full self-center"
                        variant={badgeVariant}
                    >
                        {type}
                    </BadgeTalent>
                </div>

                <div className="md:col-span-3 flex flex-col gap-6 mb-5 h-full">
                    <div className="rounded-lg p-6 bg-white shadow-sm min-h-32 md:min-h-40 flex flex-col h-full">
                        <h3 className="font-semibold text-gray-800 mb-2">Ringkasan Deskripsi</h3>
                        <p className="text-sm text-gray-600 break-words">
                            {description || "No detailed description available."}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
                        <div className="h-full min-h-fit rounded-lg p-6 bg-white shadow-sm flex flex-col">
                            <h3 className="font-semibold text-gray-800 mb-2">Skill Teknis</h3>
                            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1 grid grid-cols-1 sm:grid-cols-1 gap-x-8">
                                {skillset.map((skill, index) => (
                                    <li key={index}>
                                        <strong>{skill.key}: </strong> {skill.value}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="h-full min-h-fit rounded-lg p-6 bg-white shadow-sm flex flex-col">
                            <h3 className="font-semibold text-gray-800 mb-2">Pendidikan</h3>
                            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1 grid grid-cols-1 sm:grid-cols-1 gap-x-8">
                                {education.map((edu, index) => (
                                    <li key={index}>
                                        {edu.name}
                                        <span className="text-gray-500"> ({edu.year})</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shadow-talent w-full h-auto p-4 rounded-lg sm:p-6">
                <h3 className="font-semibold text-gray-800 mb-2">Pengalaman Kerja</h3>
                <div className="relative">

                    <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-green-primary-2/35"></div>

                    <ul className="space-y-8">
                        {experiences.map((experience, index) => (
                            <li key={index} className="relative">
                                <div className="flex items-start">
                                    <div className="absolute left-2 sm:left-4 w-4 h-4 rounded-full bg-green-secondary border-4 border-white z-10"></div>

                                    <div className="ml-8 sm:ml-12 flex-1">
                                        <div className=" p-4 rounded-lg border border-gray-100">
                                            <div className="flex flex-col sm:flex-row sm:items-center mb-2">
                                                <span className="font-bold text-green-primary">{experience.position}</span>
                                                <span className="hidden sm:inline mx-2 text-emerald-700">—</span>
                                                <span className="text-green-primary-2">{experience.company} ({experience.year})</span>
                                            </div>
                                            <div className="mt-3">
                                                <div className="flex items-center text-sm text-gray-700 mb-1">
                                                    <i className="fas fa-code text-blue-500 mr-2"></i>
                                                    <span className="font-medium">Tech:</span>
                                                    <span className="ml-2">{experience.tech}</span>
                                                </div>
                                                <div className="text-sm text-gray-700">
                                                    <div className="flex items-start">
                                                        <i className="fas fa-tasks text-blue-500 mr-2 mt-0.5"></i>
                                                        <div>
                                                            <span className="font-medium">Responsibilities:</span>
                                                            <span className="ml-2">
                                                                {experience.responsibility}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
