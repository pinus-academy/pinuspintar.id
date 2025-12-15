import { patnerProps } from "@/lib/patnerTypes";
import Image from "next/image";

export default function PatnerCard({
    description,
    title,
    bgColor,
    image,
}: patnerProps) {
    const bgColorClass = bgColor ? `bg-[#3E62AC]` : "";

    return (
        <div className="bg-white rounded-lg overflow-hidden  shadow-box shadow-xl flex flex-col justify-between h-full transition-transform min-h-[565px] w-full max-w-[413px] mx-auto group">
            <div className="relative">
                <div className={"block p-16 " + bgColorClass} >
                    <Image
                        src={image}
                        width={300}
                        height={300}
                        alt={title}
                        className="w-full max-h-[25.813rem] object-contain aspect-square "
                    />
                </div>
            </div>
            <div className="px-5 pt-3 pb-5 transition-colors duration-300 group-hover:bg-gray-100 flex flex-col flex-1 justify-between">
                <div>
                    <p className="text-base text-justify text-gray-500">
                        {description}
                        {/* <span className="text-green-primary font-semibold">Selengkapnya</span> */}
                    </p>
                </div>
            </div>
        </div>
    );
}
