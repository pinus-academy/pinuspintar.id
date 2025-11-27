import { eventProps } from "@/lib/eventTypes";
import { truncateText } from "@/lib/utils";
import Image from "next/image";

export default function EventsCard({
    title,
    startDate,
    endDate,
    description,
    banner,
    url
}: eventProps) {
    const shortDescription = truncateText(description, 100);

    return (
            <a href={url} target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg overflow-hidden  shadow-box shadow-xl flex flex-col justify-between h-full transition-transform min-h-[565px] w-full max-w-[413px] mx-auto group">
                {/* Image + Badge */}
                <div className="relative">
                    <div className="block">
                        <Image
                            src={banner}
                            width={1200}
                            height={1000}
                            alt={title}
                            className="w-full max-h-[25.813rem] object-cover aspect-square"
                        />
                    </div>
                    <div className="absolute bottom-3 left-4 z-10 flex gap-2">
                        <div className="bg-white text-black px-3 py-1 rounded-md shadow-lg text-sm flex gap-1 h-10 items-center">
                            <Image src="icon/calendar.svg" width={20} height={20} alt="Calendar" />
                            {startDate} -  {endDate}
                        </div>
                    </div>
                </div>
                <div className="px-5 pt-3 pb-5 transition-colors duration-300 group-hover:bg-gray-100 flex flex-col flex-1 justify-between">                    <div>
                    <div className="block">
                        <h3 className="font-medium text-[16px] my-2 text-gray-900 hover:text-green-primary transition-colors">
                            {truncateText(title, 50)}
                        </h3>
                    </div>
                    <p className="text-base text-gray-500">
                        {shortDescription}<span className="text-green-primary font-semibold">Selengkapnya</span>
                    </p>
                </div>
                </div>
            </a>
    );
}
