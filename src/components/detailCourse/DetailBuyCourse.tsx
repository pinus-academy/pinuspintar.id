"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CourseCardProps } from "@/lib/courseTypes";

interface DetailBuyCourseProps {
  courses: CourseCardProps;
}

const Buypage = ({ courses }: { courses: CourseCardProps }) => {
  const { discountPrice, title, image } = courses;

  return (
    <div className="w-full lg:w-[420px] bg-white rounded-2xl px-6 py-6 space-y-6 border border-[#F2F2F2]">
      <div className="space-y-2 flex gap-3">
        <Image
          src={image}
          alt="course image"
          width={100}
          height={100}
          className="size-18 rounded-md bg-gray-500/15"
        />
        <div className="space-y-2">
          <p className="text-lg font-bold text-black">{title}</p>
          <p className="text-lg text-green-600">
            {discountPrice.toLocaleString("id-ID")}
          </p>
        </div>
      </div>

      <hr className="border-gray-200" />

      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.99 14.993 6-6m6 3.001c0 1.268-.63 2.39-1.593 3.069a3.746 3.746 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043 3.745 3.745 0 0 1-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.746 3.746 0 0 1-1.043-3.297 3.746 3.746 0 0 1-1.593-3.068c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.297 3.745 3.745 0 0 1 3.296-1.042 3.745 3.745 0 0 1 3.068-1.594c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.297 3.746 3.746 0 0 1 1.593 3.068ZM9.74 9.743h.008v.007H9.74v-.007Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
        <p className="text-lg font-semibold text-black">Voucher Code</p>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="XXX-XXX-XXX"
          className="w-full p-2 rounded-md bg-gray-500/15 focus:outline-none"
        />
        <button className="w-20 sm:w-auto py-2 px-2 bg-green-primary text-white font-semibold text-lg rounded-md hover:bg-green-primary-2 transition duration-300">
          Check
        </button>
      </div>

      <hr className="border-gray-200" />

      <div className="space-y-4">
        <div className="space-y-5">
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.80994 2L5.18994 5.63"
                stroke="#183428"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.1899 2L18.8099 5.63"
                stroke="#183428"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 7.84961C2 5.99961 2.99 5.84961 4.22 5.84961H19.78C21.01 5.84961 22 5.99961 22 7.84961C22 9.99961 21.01 9.84961 19.78 9.84961H4.22C2.99 9.84961 2 9.99961 2 7.84961Z"
                stroke="#183428"
                strokeWidth="1.5"
              />
              <path
                d="M9.75977 14V17.55"
                stroke="#183428"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M14.3599 14V17.55"
                stroke="#183428"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3.5 10L4.91 18.64C5.23 20.58 6 22 8.86 22H14.89C18 22 18.46 20.64 18.82 18.76L20.5 10"
                stroke="#183428"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <p className="font-semibold">Total Price</p>
          </div>

          <div className="space-y-3">
            <p className="flex justify-between text-gray-500">
              Price
              <span>{discountPrice.toLocaleString("id-ID")}</span>
            </p>
            <p className="flex justify-between text-gray-500">
              Discount
              <span>Rp 23.000</span>
            </p>
          </div>
        </div>

        <hr className="border-gray-200" />

        <p className="flex justify-between font-bold">
          Total
          <span className="text-green-primary">Rp 207.000</span>
        </p>
      </div>
      <button
        className="w-full mt-6 py-3 bg-green-primary text-white font-semibold text-lg rounded-2xl hover:bg-green-primary-2 transition duration-300"
        type="button"
      >
        Pay
      </button>
    </div>
  );
};

const Inputpage = ({ courses }: DetailBuyCourseProps) => {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.slice(0, 12);
    const formatted = value.match(/.{1,4}/g)?.join("-") || "";
    setPhone(formatted);
  };

  return (
    <section className="relative bg-white">
      <div className="bg-[#F9F9F9] py-8 lg:py-10">
        <h1 className="text-center font-semibold text-3xl text-green-text">
          COURSE PURCHASE FORM – PINUS PINTAR
        </h1>
      </div>
      <div className="max-w-[1500px] mx-auto p-4 sm:p-6 lg:p-10 flex flex-col lg:flex-row gap-10 pt-10 sm:pt-16 lg:pt-20">
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-10">
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#F2F2F2] space-y-10">
            <div className="text-black">
              <p className="font-poppins font-bold text-xl mb-6">
                Personal Information
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Full name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-[#F2F2F2] rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 border border-[#F2F2F2] rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium mb-1">
                  No Handphone / No WhatsApp
                </label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    value="+62"
                    readOnly
                    className="w-20 sm:w-24 p-2 py-3 text-center border border-[#F2F2F2] rounded-md bg-gray-100 text-gray-700"
                  />
                  <input
                    type="text"
                    value={phone}
                    onChange={handlePhoneChange}
                    className="w-full p-2 py-3 border border-[#F2F2F2] rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium mb-1">
                  Residence
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-[#F2F2F2] rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/5 xl:w-1/3">
          <div className="lg:sticky lg:top-28">
            <Buypage courses={courses} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inputpage;
