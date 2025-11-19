"use client";

import React from "react";
import Image from "next/image";
import { CourseCardProps } from "@/lib/courseTypes";
import Link from "next/link";

interface DetailCourseLayoutProps {
  courses: CourseCardProps;
}
const MenuRegisEvent = ({ courses }: { courses: CourseCardProps }) => {
  const { price, discountPrice, title, startDate, time, mentor } = courses;

  return (
    <div
      className="
        w-full
        lg:w-[350px]
        bg-white
        rounded-2xl
        px-6
        py-6
        space-y-6
        border border-[#F2F2F2]
      "
    >
      {/* Harga */}
      <div className="space-y-2">
        <h5 className="text-lg font-bold text-black">{title}</h5>
        <p className=" text-lg flex items-center gap-2 text-green-secondary">
          Rp {discountPrice.toLocaleString("id-ID")}
          <span className="text-sm font-medium text-gray-400 line-through">
            Rp {price.toLocaleString("id-ID")}
          </span>
        </p>
      </div>
      <Link href={`/events/courses/buy/${courses.id}`}>
        <button className="w-full py-3 bg-green-950 cursor-pointer text-white font-semibold text-lg rounded-2xl hover:bg-green-primary-2 transition duration-300">
          Beli Kursus
        </button>
      </Link>

      <hr className="border-gray-200" />

      {/* Mentor */}
      {mentor.map((men, index) => (
        <div key={index} className="flex items-center gap-3">
          <Image
            src={men.image}
            alt={men.name}
            width={64}
            height={64}
            className="rounded-full size-14 object-cover bg-gray-600"
          />

          <div>
            <p className="text-xm font-semibold text-black">{men.name}</p>
            <p className="text-sm text-gray-600">{men.role}</p>
          </div>
        </div>
      ))}

      <hr className="border-gray-200" />

      {/* Informasi Event */}
      <div className="space-y-4">
        <p className="text-lg font-semibold text-black">Rincian Kursus</p>

        <div className="space-y-5">
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-6 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
              />
            </svg>

            <p>{startDate}</p>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-6 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p>{time}</p>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-6 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <p>Google Meet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const EventPage2 = ({ courses }: DetailCourseLayoutProps) => {
  const { title, description, benefits, education, image, learningFlow } =
    courses;

  return (
    <section className="relative bg-white">
      <div className="max-w-8xl mx-auto p-4 sm:p-6 lg:p-10 flex flex-col lg:flex-row gap-10 pt-10 sm:pt-16 lg:pt-20">
        {/* MAIN CONTENT */}
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-10">
          {/* TITLE + IMAGE */}
          <div className="space-y-10">
            <h1 className="font-poppins font-semibold text-3xl sm:text-4xl text-[#183428]">
              {title}
            </h1>

            <div className="w-full relative">
              <Image
                src={image}
                alt="event image"
                width={1200}
                height={700}
                className="w-full h-56 sm:h-72 md:h-80 lg:h-[420px] rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#F2F2F2] space-y-8">
            <div className="text-black">
              <p className="font-poppins font-bold text-xl mb-3">
                Tentang Kursus              </p>
              <p className="text-base sm:text-lg leading-relaxed text-justify">
                {description}
              </p>
            </div>

            {/* What You'll Learn */}
            <div className="">
              <p className="font-poppins font-semibold text-xl mb-3">
                Materi yang Akan Dipelajari             
                </p>
              <ul className="text-base sm:text-lg list-disc list-inside space-y-1">
                {education.map((edu, index) => (
                  <li key={index}>
                    <strong>{edu.key}: </strong> {edu.value}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="">
              <h2 className="font-semibold text-xl mb-3">Keuntungan yang didapat</h2>
              <ul className="text-base sm:text-lg list-disc list-inside space-y-1">
                {benefits.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Learning Flow */}
          <div className="border border-[#F2F2F2] w-full p-4 sm:p-6 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-8 text-xl">
              Alur Pembelajaran
            </h3>

            <div className="relative">
              <ul className="space-y-5">
                {learningFlow.map((flow, index) => (
                  <li key={index} className="relative">
                    <div className="flex items-start">
                      <div className=" flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <span className="font-bold text-black">
                            Modul: {flow.modul}
                          </span>
                          <span className="hidden sm:inline mx-2 text-black font-bold">
                            -
                          </span>
                          <span className="font-semibold text-black">
                            {flow.title}
                          </span>
                        </div>

                        <div>
                          <p className="text-sm text-gray-700">
                            {flow.description}
                          </p>
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
          <div className="lg:sticky lg:top-28">
            <MenuRegisEvent courses={courses} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventPage2;
