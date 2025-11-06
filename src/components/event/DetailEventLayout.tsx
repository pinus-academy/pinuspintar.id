"use client";

import React from "react";
import Image from "next/image";
import { CourseCardProps } from "@/lib/courseTypes";
import BadgeEvent from "@/components/event/BadgeEvent";
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";

interface DetailEventLayoutProps {
  courses: CourseCardProps;
}

// -------------------- MENU REGISTER EVENT --------------------
const MenuRegisEvent = ({ courses }: { courses: CourseCardProps }) => {
  const { price, discountPrice, startDate, duration } = courses;

  return (
    <div
      className="
    sticky
    top-28
    w-[414px]
    h-[557px]
    bg-white
    rounded-[15px]
    px-8
    py-6
    space-y-[25px]
    border-[2px] border-[#F2F2F2]
  "
    >
      {/* Harga */}
      <div className="space-y-1">
        <p className="text-lg font-bold text-black">{discountPrice}</p>
        <p className="text-sm line-through text-gray-400">{price}</p>
      </div>

      {/* Tombol */}
      <button className="w-full py-3 bg-[#183428] text-white font-semibold text-lg rounded-lg hover:bg-gray-800 transition duration-300">
        Register Event
      </button>

      {/* Mentor */}
      <div className="flex items-center space-x-3">
        <div>
          <p className="text-lg font-semibold text-black">
            Muhammad Haedar Alfatah
          </p>
          <p className="text-sm font-normal text-gray-600">
            Full-Stack Developer
          </p>
        </div>
      </div>

      <hr className="border-t border-gray-200" />

      {/* Informasi Event */}
      <div className="space-y-4">
        <p className="text-lg font-semibold text-black">Event Information</p>

        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-sm text-gray-700 ">
            <CiCalendar className="text-xl text-black" strokeWidth={1} />
            <p>{startDate}</p>
          </div>

          <div className="flex items-center space-x-3 text-sm text-gray-700 ">
            <CiClock2 className="text-xl text-black" strokeWidth={1} />
            <p>{duration}</p>
          </div>

          <div className="flex items-center space-x-3 text-sm text-gray-700 ">
            <FiMapPin className="text-xl text-black" strokeWidth={2} />
            <p>Google Meet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// -------------------- EVENT PAGE MAIN --------------------
const EventPage2 = ({ courses }: DetailEventLayoutProps) => {
  const { title, description, benefits, education, image, type } = courses;

  const badgeVariant =
    type === "Online"
      ? "green"
      : type === "Hybrid"
      ? "purple"
      : type === "Offline"
      ? "orange"
      : "gray";

  return (
    <section className="relative bg-white min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 pt-10 sm:pt-16 lg:pt-20 px-4 lg:px-8">
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-10">
          {/* TITLE + IMAGE */}
          <div className="space-y-6">
            <h1
              className="
                font-poppins 
                font-semibold 
                text-[36px] 
                leading-[120%]
                text-[#183428]
              "
            >
              {title}
            </h1>

            <div
              className="
                w-full 
                h-[345px] 
                rounded-[15px] 
                overflow-hidden 
                relative 
                bg-white
              "
            >
              <Image
                src={image}
                alt="event image"
                fill
                className="object-cover"
              />
              <div className="absolute w-12 h-12 flex items-center justify-center top-0 right-10 z-0">
            <BadgeEvent variant={badgeVariant}>{type}</BadgeEvent>
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="space-y-6">
            <div className="text-[#183428]">
              <p className="font-poppins font-bold text-[20px] mb-3">
                About The Event
              </p>
              <p
                className="
                  font-poppins 
                  font-normal 
                  text-[18px] 
                  leading-[160%]
                  text-justify
                "
              >
                {description}
              </p>
            </div>

            <div>
              <p className="list-inside font-poppins font-semibold text-[20px] text-black mt-6 mb-2">
                What You'll Learn
              </p>
              <p
                className="
                  font-poppins 
                  font-normal 
                  text-[18px] 
                  leading-[160%]
                  text-[#183428]
                  text-justify
                "
              >
                {education}
              </p>
            </div>

            <div className="pb-10">
              <h2 className="list-inside font-semibold text-xl text-black leading-tight mb-2 pt-5">
                Benefits
              </h2>
              <p
                className="
                  font-poppins 
                  font-normal 
                  text-[18px] 
                  leading-normal 
                  text-[#183428]
                  text-justify
                "
              >
                {benefits}
              </p>
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="hidden lg:block lg:w-2/5 xl:w-1/3">
          <MenuRegisEvent courses={courses} />
        </div>
      </div>
    </section>
  );
};

export default EventPage2;
