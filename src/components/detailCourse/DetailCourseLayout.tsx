"use client";

import React from "react";
import Image from "next/image";
import { CourseCardProps } from "@/lib/courseTypes";
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";

interface DetailCourseLayoutProps {
  courses: CourseCardProps;
}

// -------------------- MENU REGISTER EVENT --------------------
const MenuRegisEvent = ({ courses }: { courses: CourseCardProps }) => {
  const { price, title, startDate, time, mentor } = courses;

  return (
    <div
      className="
        lg:w-[350px]
        bg-white
        rounded-2xl
        px-6
        py-6
        space-y-6
        border-[2px] border-[#F2F2F2]
      "
    >
      {/* Harga */}
      <div className="space-y-2">
        <p className="text-lg font-bold text-black">{title}</p>
        <p className="text-lg text-green-600">
          Rp {price.toLocaleString("id-ID")}
        </p>
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
            className="rounded-full size-16 object-cover bg-gray-600"
          />

          <div>
            <p className="text-lg font-semibold text-black">{men.name}</p>
            <p className="text-sm font-normal text-gray-600">{men.role}</p>
          </div>
        </div>
      ))}

      <hr className="border-t border-gray-200" />

      {/* Informasi Event */}
      <div className="space-y-4">
        <p className="text-lg font-semibold text-black">Event Information</p>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <CiCalendar className="text-xl text-black" strokeWidth={1} />
            <p>{startDate}</p>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-700">
            <CiClock2 className="text-xl text-black" strokeWidth={1} />
            <p>{time}</p>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-700">
            <FiMapPin className="text-xl text-black" strokeWidth={2} />
            <p>Google Meet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// -------------------- EVENT PAGE MAIN --------------------
const EventPage2 = ({ courses }: DetailCourseLayoutProps) => {
  const { title, description, benefits, education, image, type, learningFlow } =
    courses;

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
      <div className="p-6 lg:p-10 flex flex-col lg:flex-row gap-10 pt-10 sm:pt-16 lg:pt-20">
        {/* MAIN CONTENT */}
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-14">
          {/* TITLE + IMAGE */}
          <div className="space-y-6">
            <h1 className="font-poppins font-semibold text-3xl sm:text-4xl text-[#183428]">
              {title}
            </h1>

            <div className="w-full relative">
              <Image
                src={image}
                alt="event image"
                width={1200}
                height={700}
                className="w-7xl h-60 sm:h-72 md:h-80 lg:h-96 xl:h-[26rem] rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#F2F2F2]">
            <div className="text-black">  
              <p className="font-poppins font-bold text-xl mb-3">
                About The Event
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-justify">
                {description}
              </p>
            </div>

            <div className="pt-8">
              <p className="font-poppins font-semibold text-xl mb-3">
                What You’ll Learn
              </p>
              <ul className="text-base sm:text-lg list-disc list-inside space-y-1">
                {education.map((edu, index) => (
                  <li key={index}>
                    <strong>{edu.key}: </strong> {edu.value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <h2 className="font-semibold text-xl mb-3">Benefits</h2>
              <ul className="text-base sm:text-lg list-disc list-inside space-y-1">
                {benefits.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border border-[#F2F2F2] w-full h-auto p-4 rounded-lg sm:p-6">
          <h3 className="font-semibold text-gray-800 mb-2 text-xl">content Class</h3>
          <div className="relative">
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-green-primary-2/35"></div>

            <ul className="space-y-8">
              {learningFlow.map((flow, index) => (
                <li key={index} className="relative">
                  <div className="flex items-start">
                    <div className="absolute left-2 sm:left-4 w-4 h-4 rounded-full bg-green-secondary border-4 border-white z-10"></div>

                    <div className="ml-8 sm:ml-12 flex-1">
                      <div className=" p-4 rounded-lg border border-gray-100">
                        <div className="flex flex-col sm:flex-row sm:items-center mb-2">
                          <span className="font-bold text-green-primary">
                            Modul: {flow.modul}
                          </span>
                          <span className="hidden sm:inline mx-2 text-emerald-700">
                            —
                          </span>
                          <span className="text-green-primary-2">
                            {flow.title}
                          </span>
                        </div>
                        <div className="mt-3">
                          <div className="text-sm text-gray-700">
                            <div className="flex items-start">
                              <i className="fas fa-tasks text-blue-500 mr-2 mt-0.5"></i>
                              <div>
                                <span className="ml-2">{flow.description}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
        

        {/* SIDEBAR */}
        <div className="w-full lg:w-2/5 xl:w-1/3">
          <div className="lg:sticky lg:top-25">
            <MenuRegisEvent courses={courses} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventPage2;
