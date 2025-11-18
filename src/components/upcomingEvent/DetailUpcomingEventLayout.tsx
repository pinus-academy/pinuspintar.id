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

// -------------------- SIDEBAR REGISTER --------------------
const MenuRegisEvent = ({ upcoming }: { upcoming: upcomingProps }) => {
  const { price, discountPrice, date, time, mentor } = upcoming;

  return (
    <div
      className="
        sticky
        top-28
        w-full
        max-w-[350px]
        bg-white
        rounded-[15px]
        px-6
        py-6
        space-y-6
        border border-[#F2F2F2]
        mx-auto
      "
    >
      {/* Price */}
      <div className="space-y-1">
        <p className="text-xl font-bold text-black">
          Rp {discountPrice.toLocaleString("id-ID")}
        </p>
        <p className="text-sm line-through text-gray-500">
          Rp {price.toLocaleString("id-ID")}
        </p>
      </div>

      {/* Button */}
      <button className="w-full py-3 bg-[#183428] text-white font-semibold text-lg rounded-2xl hover:bg-gray-900 transition">
        Register Event
      </button>

      <hr className="border-gray-200" />

      {/* Mentor */}
      {mentor.map((men, index) => (
        <div key={index} className="flex items-center gap-3">
          <Image
            src={men.image}
            alt={men.name}
            width={80}
            height={80}
            className="rounded-full size-16 object-cover bg-gray-600"
          />

          <div>
            <p className="text-lg font-semibold text-black">{men.name}</p>
            <p className="text-sm text-gray-600">{men.role}</p>
          </div>
        </div>
      ))}

      <hr className="border-gray-200" />

      {/* Info */}
      <div className="space-y-4">
        <p className="text-lg font-semibold text-black">Event Information</p>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <CiCalendar className="text-xl text-black" />
            <p>{date}</p>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-700">
            <CiClock2 className="text-xl text-black" />
            <p>{time}</p>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-700">
            <FiMapPin className="text-xl text-black" />
            <p>Google Meet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// -------------------- MAIN PAGE --------------------
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
    <section className="bg-white pb-20">
      <div
        className="
          max-w-[1400px]
          mx-auto
          px-4
          sm:px-6
          lg:px-10
          flex
          flex-col
          lg:flex-row
          gap-12
          pt-24
        "
      >
        {/* CONTENT */}
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-14">
          {/* TITLE + IMAGE */}
          <div className="space-y-6">
            <h1 className="font-poppins font-semibold text-3xl sm:text-4xl text-[#183428] leading-snug">
              {title}
            </h1>

            <div className="w-full relative">
              <Image
                src={image}
                alt="event image"
                width={1400}
                height={1000}
                className="
                  w-full
                  h-[220px]
                  sm:h-[300px]
                  md:h-[380px]
                  lg:h-[420px]
                  xl:h-[460px]
                  rounded-2xl
                  object-cover
                  mb-3
                  mt-6
                "
              />

              <div className="absolute top-3 right-3">
                <BadgeUpcoming variant={badgeVariant}>{type}</BadgeUpcoming>
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#F2F2F2]">
            <p className="font-poppins font-bold text-xl mb-3">About The Event</p>

            <p className="text-base sm:text-lg leading-relaxed text-justify">
              {description}
            </p>

            {/* Education */}
            <div className="pt-8">
              <p className="font-poppins font-semibold text-xl mb-3">
                What You’ll Learn
              </p>

              <ul className="text-base sm:text-lg space-y-2">
                {education.map((edu, idx) => (
                  <li key={idx} className="list-disc list-inside">
                    <strong>{edu.key}:</strong> {edu.value}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefit */}
            <div className="pt-8">
              <p className="font-poppins font-semibold text-xl mb-3">
                Benefits
              </p>

              <ul className="text-base sm:text-lg space-y-2">
                {benefit.map((ben, idx) => (
                  <li key={idx} className="list-disc list-inside">
                    <strong>{ben.key}:</strong> {ben.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="w-full lg:w-2/5 xl:w-1/3">
          <MenuRegisEvent upcoming={upcoming} />
        </div>
      </div>
    </section>
  );
};

export default EventPage2;
