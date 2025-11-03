import type { TalentCardProps } from "@/lib/talentTypes";
import Image from "next/image";
import BadgeTalent from "@/components/talents/BadgeTalent";
import Link from "next/link";

export default function TalentCard({
    id,
    name,
    type,
    skill,
    role,
    description,
    photo,
}: TalentCardProps) {

    const badgeVariant =
        type === "Senior"
            ? "orange"
            : type === "Intermediate"
                ? "blue"
                : type === "Advanced" 
                ? "green"
                : "gray";

    const detailUrl = `/talents/${id}`; 

    return (
        <Link href={detailUrl} className="block group hover:shadow-lg transition-shadow">
            <div className="bg-white rounded-lg overflow-hidden border border-gray-300 flex flex-col justify-between p-4 h-full">
                <div className="flex flex-col gap-4 mb-4 bg-white rounded-lg">
                    <div className="flex items-center gap-4">
                        <Image
                            src={photo}
                            width={74}
                            height={74}
                            alt={name}
                            className="size-16 rounded-full aspect-square object-cover"
                        />
                        <div className="flex flex-col">
                            <h5 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">{name}</h5>
                            <h1 className="text-sm text-gray-700">{role}</h1>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <BadgeTalent
                            className="capitalize text-sm font-semibold px-3 py-1 rounded-full"
                            variant={badgeVariant}
                        >
                            {type}
                        </BadgeTalent>
                    </div>
                </div>
                <hr className="border-gray-300 border-t-2 w-full" />
                <div className="flex-grow flex flex-col gap-3 bg-white rounded-lg px-3 py-3">
                    <h4 className=" text-gray-900">
                        {skill}
                    </h4>
                    <p className="text-sm text-gray-500 text-justify">
                        {description ? description : 'No description available.'}
                    </p>
                </div>
            </div>
        </Link>
    );
}
