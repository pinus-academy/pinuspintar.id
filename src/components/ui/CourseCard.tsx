import Button from "@/components/ui/Button";
import { Clock } from "lucide-react";
import { formatCurrency, getCourseStatus, truncateText } from "@/lib/utils";
import Badge from "./Badge";
import { CourseCardProps } from "@/lib/types";
import Image from "next/image";

function getStatusVariant(
  status: string
): "green" | "blue" | "red" | "gray" | "yellow" {
  if (status.includes("left")) return "yellow"; // upcoming
  if (status === "Ongoing") return "green";
  if (status === "Completed") return "red";
  return "gray";
}

export default function CourseCard({
  id,
  image,
  type,
  title,
  description,
  instructor,
  instructorAvatar,
  duration,
  durationType,
  startDate,
  price,
  discountPrice,
  url,
}: CourseCardProps) {
  const courseStatus = getCourseStatus(startDate, duration, durationType);

  return (
    <div className="w-full">
      <a href={`/courses/${id}`} className="block group">
        <div className="bg-white rounded-lg overflow-hidden shadow-md h-full transition-transform">
          {/* Image */}
          <Image src={image} width={1000} height={1000} alt={title} className="w-full h-48 object-cover" />

          {/* Content */}
          <div className="px-5 pt-3 pb-5 transition-colors duration-300 group-hover:bg-gray-100">
            {/* Type & Level */}
            <div className="flex justify-between items-start">
              <Badge
                className="capitalize"
                variant={
                  type === "online"
                    ? "emerald"
                    : type === "offline"
                      ? "blue"
                      : "purple"
                }
              >
                {type}
              </Badge>
              <Badge
                variant={getStatusVariant(courseStatus)}
                className="capitalize"
              >
                {courseStatus}
              </Badge>
            </div>

            {/* Title & Description */}
            <h3 className=" font-medium my-2 text-gray-800">
              {truncateText(title, 50)}
            </h3>
            <p className="text-sm mb-4 text-gray-500">
              {truncateText(description, 70)}
            </p>

            {/* Instructor */}
            <div className="flex items-center mb-4">
              <Image
                src={
                  instructorAvatar ? instructorAvatar : "/default-avatar.png"
                }
                alt={instructor}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full mr-2"
              />
              <p className="text-sm text-gray-700">
                By<span className="font-medium"> {instructor}</span>
              </p>
            </div>

            {/* Duration */}
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="blue" className="py-2">
                Web Programing
              </Badge>
              <div className="flex items-center">
                <Clock className="fill-gray-500 size-5 mr-2 text-white" />
                <span className="text-sm text-gray-500 capitalize">
                  {duration} {durationType}
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-4">
              <span className="text-sm line-through mr-2 text-gray-400">
                {formatCurrency(price)}
              </span>
              <span className="text-lg font-bold text-green-primary">
                {discountPrice > 0 ? formatCurrency(discountPrice) : "Free"}
              </span>
            </div>

            {/* Button pakai component */}
            <a
              href={url}
              className="w-full font-semibold px-4 py-2.5 rounded-lg text-base text-center transition-all duration-300 bg-green-secondary shadow shadow-green-secondary/15 text-white hover:bg-green-secondary/80"
            >
              Register Now
            </a>
          </div>
        </div>
      </a>
    </div>
  );
}
