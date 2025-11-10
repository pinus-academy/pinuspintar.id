"use client";

import React from "react";
import Image from "next/image";
import { upcomingProps } from "@/lib/upcomingTypes";
import BadgeUpcoming from "@/components/upcomingEvent/BadgeUpcoming";
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";

interface DetailUpcomingEventLayoutProps {
  upcoming: upcomingProps;
}

// -------------------- MENU REGISTER EVENT --------------------
const MenuRegisEvent = ({ upcoming }: { upcoming: upcomingProps }) => {
  const { price, discountPrice, date, time, mentor } = upcoming;

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
      <div className="space-y-3">
        <p className="text-lg font-bold text-black">{discountPrice}</p>
        <p className="text-sm line-through text-gray-400">{price}</p>
      </div>

      {/* Tombol */}
      <button className="w-full py-3 bg-[#183428] text-white font-semibold text-lg rounded-2xl hover:bg-gray-800 transition duration-300">
        Register Event
      </button>

      <hr className="border-t border-gray-200" />

      {/* Mentor */}
      {mentor.map((men, index) => (
        <div key={index} className="flex justify-start items-center gap-3">
          <Image
            src={men.image}
            alt={men.name}
            width={1000}
            height={1000}
            className="rounded-full size-16 bg-gray-600"
          />

          <div>
            <p className="text-xl font-semibold text-black">{men.name}</p>
            <p className="text-sm font-normal text-gray-600">{men.role}</p>
          </div>
        </div>
      ))}

      <hr className="border-t border-gray-200" />

      {/* Informasi Event */}
      <div className="space-y-4">
        <p className="text-lg font-semibold text-black">Event Information</p>

        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-sm text-gray-700 ">
            <CiCalendar className="text-xl text-black" strokeWidth={1} />
            <p>{date}</p>
          </div>

          <div className="flex items-center space-x-3 text-sm text-gray-700 ">
            <CiClock2 className="text-xl text-black" strokeWidth={1} />
            <p>{time}</p>
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
const EventPage2 = ({ upcoming }: DetailUpcomingEventLayoutProps) => {
  const { title, description, benefit, education, image, type } = upcoming;

  const badgeVariant =
    type === "Webinar"
      ? "green"
      : type === "Bootcamp"
      ? "purple"
      : type === "Workshop"
      ? "emerald"
      : "gray";

  return (
    <section className="relative bg-white">
      <div className="p-10 flex flex-col lg:flex-row gap-10 pt-10 sm:pt-16 lg:pt-20 px-4 lg:px-8 ml-20">
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-20">
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

            <div className="w-full relative">
              <Image
                src={image}
                alt="event image"
                width={1000}
                height={1000}
                className="w-[65rem] h-[24rem] rounded-2xl object-cover mb-4 self-start aspect-square"
              />
              <div className="absolute w-12 h-12 flex items-center justify-center top-2 right-35 z-0">
                <BadgeUpcoming variant={badgeVariant}>{type}</BadgeUpcoming>
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="bg-white rounded-xl p-8 border-[#F2F2F2] border-2">
            <div className="text-black">
              <p className="font-poppins font-bold text-xl mb-2">
                About The Event
              </p>
              <p
                className="
                  text-xl
                  leading-[160%]
                  text-justify
                "
              >
                {description}
              </p>
            </div>

            <div className="pb-8 pt-8">
              <p className="list-inside font-poppins font-semibold text-xl text-black mt-6 mb-2">
                {"What Youll Learn"}
              </p>
              <ul className="text-lg text-black list-disc list-inside space-y-1 grid grid-cols-1 sm:grid-cols-1 gap-x-8">
                {education.map((edu, index) => (
                  <li key={index}>
                    <strong>{edu.key}: </strong> {edu.value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pb-10">
              <h2 className="list-inside font-semibold text-xl text-black leading-tight mb-2 pt-5">
                Benefits
              </h2>
              <ul className="text-lg text-black list-disc list-inside space-y-1 grid grid-cols-1 sm:grid-cols-1 gap-x-8">
                {benefit.map((ben, index) => (
                  <li key={index}>
                    <strong>{ben.key}: </strong> {ben.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="hidden lg:block lg:w-2/5 xl:w-1/3">
          <MenuRegisEvent upcoming={upcoming} />
        </div>
      </div>
    </section>
  );
};

export default EventPage2;
