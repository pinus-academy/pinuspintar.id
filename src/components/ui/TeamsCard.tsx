import Image from "next/image";
import { TeamCardProps } from "@/lib/teamsTypes";

export default function TeamsCard({
    name,
    role,
    photo,
}: TeamCardProps) {

    return (
        <div className="w-full py-4 gap-4">
            <div className=" rounded-lg overflow-hidden shadow-md flex flex-col justify-between h-full transition-transform min-h-[465px] w-full max-w-[413px] mx-auto group">
                <div className="relative h-full">
                    <Image
                        src={photo}
                        width={413}
                        height={465}
                        className="w-full h-[465px] object-cover"
                        alt={name}
                    />

                    {/* Box nama & role */}
                    <div className="absolute bg-white bottom-4 text-center  left-4 right-4 flex flex-col justify-center items-center gap-1 shadow-md p-4 rounded-lg min-h-[120px]">
                        <div className="text-black text-3xl font-semibold">{name}</div>
                        <div className="capitalize text-black text-xl">{role}</div>
                    </div>
                </div>
            </div>
        </div>

    );
}
