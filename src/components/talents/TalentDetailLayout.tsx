import { TalentCardProps } from "@/lib/talentTypes";
import Image from "next/image";
import BadgeTalent from "@/components/talents/BadgeTalent";

interface TalentDetailLayoutProps {
    talent: TalentCardProps;
}

export default function TalentDetailLayout({ talent }: TalentDetailLayoutProps) {
    const { name, role, type, photo, skill, description } = talent;

    const badgeVariant =
        type === "Senior"
            ? "orange"
            : type === "Intermediate"
                ? "blue"
                : type === "Advanced"
                    ? "green"
                    : "gray";

    return (
        <section className="max-w-7xl min-h-screen mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full items-start">
                <div className="md:col-span-1 rounded-lg bg-white p-8 items-center text-center lg:text-left flex flex-col shadow-sm h-full">
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
                        className="capitalize text-xs font-semibold px-3 py-1 rounded-full self-center lg:self-start"
                        variant={badgeVariant}
                    >
                        {type}
                    </BadgeTalent>
                </div>

                <div className="md:col-span-3 flex flex-col gap-6 mb-5">

                    <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm min-h-32 md:min-h-40 flex flex-col">
                        <h3 className="font-semibold text-gray-800 mb-2">Ringkasan Deskripsi</h3>
                        <p className="text-sm text-gray-600 break-words">
                            {description || "No detailed description available."}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className=" h-full min-h-fit border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
                            <h3 className="font-semibold text-gray-800 mb-2">Skill Teknis</h3>
                            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1 grid grid-cols-1 sm:grid-cols-1 gap-x-8"   >
                                <li><span className="font-semibold text-gray-700">Framework:</span> {skill.split("•").map((s, index) => (
                                    s.trim()
                                )).join(", ")}
                                </li>
                                <li><span className="font-semibold text-gray-700">Bahasa Pemograman:</span> {skill.split("•").map((s, index) => (
                                    s.trim()
                                )).join(", ")}
                                </li>
                                <li><span className="font-semibold text-gray-700">Tools:</span> {skill.split("•").map((s, index) => (
                                    s.trim()
                                )).join(", ")}
                                </li>
                            </ul>
                        </div>
                        <div className=" h-full min-h-fit border border-gray-200 rounded-lg p-6 bg-white shadow-sm sm:h-64 md:h-auto flex flex-col">
                            <h3 className="font-semibold text-gray-800 mb-2">Pendidikan</h3>
                            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1 grid grid-cols-1 sm:grid-cols-1 gap-x-8">
                                <li>
                                    Universitas Negeri Semarang
                                    <span className="text-gray-500"> (2012 - 2016)</span>
                                </li>
                                <li>
                                    Universitas Negeri Surabaya
                                    <span className="text-gray-500"> (2011 - 2015)</span>
                                </li>
                                <li>
                                    Universitas Negeri Malang
                                    <span className="text-gray-500"> (2013 - 2017)</span>
                                </li>
                                <li>
                                    Universitas Negeri Yogyakarta
                                    <span className="text-gray-500"> (2010 - 2014)</span>
                                </li>
                                <li>
                                    Universitas Negeri Jakarta
                                    <span className="text-gray-500"> (2012 - 2016)</span>
                                </li>
                                <li>
                                    Universitas Negeri Bandung
                                    <span className="text-gray-500"> (2011 - 2015)</span>
                                </li>
                                <li>
                                    Universitas Negeri Malang
                                    <span className="text-gray-500"> (2016 - 2020)</span>
                                </li>
                                <li>
                                    Universitas Negeri Yogyakarta
                                    <span className="text-gray-500"> (2015 - 2019)</span>
                                </li>
                                <li>
                                    Universitas Negeri Jakarta
                                    <span className="text-gray-500"> (2017 - 2021)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shadow-sm w-full h-auto p-4 sm:p-6">
                <h3 className="font-semibold text-gray-800 mb-2">Pengalaman Kerja</h3>
                <ul className="list-disc space-y-4 text-sm sm:text-base text-gray-600 p-6">
                    <li>
                        <div className="flex flex-col sm:flex-row sm:items-center">
                            <span className="font-medium">Software Engineer</span>
                            <span className="hidden sm:inline mx-2">—</span>
                            <span>PT TechSolution (2020 - 2023)</span>
                        </div>
                        <div className="ml-2 sm:ml-5 mt-1">
                            <span className="text-gray-700 font-semibold">Tech:</span>{" "}
                            <span>React, Node.js, PostgreSQL, Docker</span>
                        </div>
                        <div className="ml-2 sm:ml-5">
                            <span className="text-gray-700 font-semibold">Responsibilities:</span>{" "}
                            <span>
                                Membangun dan memelihara aplikasi web fullstack, mengimplementasikan REST API, dan berkolaborasi dengan tim desain dan QA.
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-col sm:flex-row sm:items-center">
                            <span className="font-medium">Frontend Developer</span>
                            <span className="hidden sm:inline mx-2">—</span>
                            <span>XYZ Digital Agency (2017 - 2020)</span>
                        </div>
                        <div className="ml-2 sm:ml-5 mt-1">
                            <span className="text-gray-700 font-semibold">Tech:</span>{" "}
                            <span>React, HTML, CSS, JavaScript</span>
                        </div>
                        <div className="ml-2 sm:ml-5">
                            <span className="text-gray-700 font-semibold">Responsibilities:</span>{" "}
                            <span>
                                Mengembangkan user interface responsif untuk klien agency dan memastikan kompatibilitas lintas browser.
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-col sm:flex-row sm:items-center">
                            <span className="font-medium">IT Support</span>
                            <span className="hidden sm:inline mx-2">—</span>
                            <span>Universitas Negeri Semarang (2015 - 2017)</span>
                        </div>
                        <div className="ml-2 sm:ml-5 mt-1">
                            <span className="text-gray-700 font-semibold">Tech:</span>{" "}
                            <span>Windows Server, Networking, Troubleshooting</span>
                        </div>
                        <div className="ml-2 sm:ml-5">
                            <span className="text-gray-700 font-semibold">Responsibilities:</span>{" "}
                            <span>
                                Memberikan dukungan teknis, melakukan maintenance perangkat keras & lunak, dan membantu staff kampus dalam penggunaan sistem IT.
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-col sm:flex-row sm:items-center">
                            <span className="font-medium">IT Support</span>
                            <span className="hidden sm:inline mx-2">—</span>
                            <span>Universitas Negeri Semarang (2015 - 2017)</span>
                        </div>
                        <div className="ml-2 sm:ml-5 mt-1">
                            <span className="text-gray-700 font-semibold">Tech:</span>{" "}
                            <span>Windows Server, Networking, Troubleshooting</span>
                        </div>
                        <div className="ml-2 sm:ml-5">
                            <span className="text-gray-700 font-semibold">Responsibilities:</span>{" "}
                            <span>
                                Memberikan dukungan teknis, melakukan maintenance perangkat keras & lunak, dan membantu staff kampus dalam penggunaan sistem IT.
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}
