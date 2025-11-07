import { upcomingProps } from "@/lib/upcomingTypes";
import { truncateText } from "@/lib/utils";
import Image from "next/image";
import BadgeUpcoming from "./BadgeUpcoming";
import Link from "next/link";

export default function UpcomingCard({
    id,
    title,
    type,
    date,
    time,
    description,
    image,
}: upcomingProps) {
    const shortDescription = truncateText(description, 100);
        const detailUrl =  `/events/${id}`;


    return (
            <Link href={detailUrl} className="bg-white rounded-lg overflow-hidden  shadow-box shadow-xl flex flex-col justify-between h-full transition-transform min-h-[565px] w-full max-w-[413px] mx-auto group">
                {/* Image + Badge */}
                <div className="relative">
                    <a href={`/courses/${id}`} className="block">
                        <Image
                            src={image}
                            width={1000}
                            height={1000}
                            alt={title}
                            className="w-full max-h-[25.813rem] object-cover aspect-square"
                        />
                    </a>
                    <div className="absolute top-3 right-4 z-10">
                        <BadgeUpcoming
                            className="capitalize"
                            variant={
                                type === "Bootcamp"
                                    ? "green"
                                    : type === "Workshop"
                                        ? "blue"
                                        : "purple"
                            }>
                            {type}
                        </BadgeUpcoming>
                    </div>
                    <div className="absolute bottom-3 left-4 z-10 flex gap-2">
                        <div className="bg-white text-black px-3 py-1 rounded-md shadow-lg text-sm flex gap-1 h-10 items-center">
                            <Image src="icon/calendar.svg" width={20} height={20} alt="Calendar" />
                            {date}
                        </div>
                        <div className="bg-white text-black px-3 py-1 rounded-md shadow-lg text-sm h-10 flex items-center">
                            {time}
                        </div>
                    </div>
                </div>
                <div className="px-5 pt-3 pb-5 transition-colors duration-300 group-hover:bg-gray-100 flex flex-col flex-1 justify-between">                    <div>
                    <a href={`/courses/${id}`} className="block">
                        <h3 className="font-medium text-[16px] my-2 text-gray-900 hover:text-green-primary transition-colors">
                            {truncateText(title, 50)}
                        </h3>
                    </a>
                    <p className="text-[16px] text-gray-500">
                        {description ? description : shortDescription}
                    </p>
                </div>
                </div>
            </Link>
    );
}
