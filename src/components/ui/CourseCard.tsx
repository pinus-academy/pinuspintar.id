import Button from "@/components/ui/Button";
import { formatCurrency, truncateText } from "@/lib/utils";
import Badge from "./Badge";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { CourseCardProps } from "@/lib/courseTypes";

export default function CourseCard({
  id,
  image,
  type,
  title,
  description,
  benefits,
  price,
  discountPrice,
  url,
}: CourseCardProps) {
  const benefitList: string[] = Array.isArray(benefits)
    ? benefits
    : (benefits as string).split(",").map((b) => b.trim());

  const shortDescription = truncateText(description, 100);

  return (
    <div className="w-full h-full">
      <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col justify-between h-full transition-transform min-h-[580px] group">
        {/* Image - Clickable */}
        <a href={`/courses/${id}`} className="block">
          <Image
            src={image}
            width={1000}
            height={1000}
            alt={title}
            className="w-full h-[200px] object-cover"
          />
        </a>

        {/* Content - Non-clickable */}
        <div className="px-5 pt-3 pb-5 transition-colors duration-300 group-hover:bg-gray-100 flex flex-col flex-1 justify-between">
          <div>
            {/* Title - Clickable */}
            <a href={`/courses/${id}`} className="block">
              <h3 className="font-medium text-[16px] my-2 text-gray-800 hover:text-green-primary transition-colors">
                {truncateText(title, 50)}
              </h3>
            </a>
            <hr className="my-4 border-t border-gray-300" />

            {/* Description */}
            <p className="text-sm text-gray-700">
              {description ? description : shortDescription}
            </p>

            {/* Benefits */}
            <ul className="space-y-2 my-4">
              {benefitList
                .slice(3, benefitList.length)
                .map((benefit, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-500"
                  >
                    <CheckCircle className="w-4 h-4 text-gray-500" />
                    {benefit}
                  </li>
                ))}
            </ul>
          </div>

          {/* Badges + Price + Button */}
          <div className="mt-auto">
            <div className="flex items-center gap-2 mb-4">
              <Badge
                className="capitalize"
                variant={
                  type === "online"
                    ? "emerald"
                    : type === "offline"
                      ? "red"
                      : "purple"
                }
              >
                {type}
              </Badge>
              <Badge variant="blue">Web Programming</Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="mb-4 flex flex-col space-y-1">
                <span className="text-sm line-through text-gray-400">
                  {formatCurrency(price)}
                </span>
                <span className="text-lg font-bold text-green-secondary">
                  {discountPrice > 0 ? formatCurrency(discountPrice) : "Free"}
                </span>
              </div>
              <Button>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full font-semibold  p-2 rounded-lg text-base text-center text-white transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  Selengkapnya
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}