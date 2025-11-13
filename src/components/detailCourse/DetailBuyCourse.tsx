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
    <div className="w-full bg-white rounded-2xl px-6 py-6 space-y-6 border border-gray-primary">
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

      <hr className="border-gray-primary" />

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
        <button className="py-3 px-6 bg-green-primary text-white font-semibold rounded-md hover:bg-green-primary-2 transition duration-300">
          Check
        </button>
      </div>

      <hr className="border-gray-primary" />

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

        <hr className="border-gray-primary" />

        <p className="flex justify-between font-bold">
          Total
          <span className="text-green-primary">Rp 207.000</span>
        </p>
      </div>
      <button
        className="w-full mt-6 py-3 bg-green-primary text-white font-semibold rounded-2xl hover:bg-green-primary-2 transition duration-300"
        type="button"
      >
        Pay
      </button>
    </div>
  );
};

const Inputpage = ({ courses }: DetailBuyCourseProps) => {
  const { price, discountPrice, title, image } = courses;

  const [phone, setPhone] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.slice(0, 12);
    const formatted = value.match(/.{1,4}/g)?.join("-") || "";
    setPhone(formatted);
  };

  return (
    <section className="pt-24 pb-10 space-y-10">
      <div className="bg-[#F9F9F9]  px-3 py-8 lg:py-10">
        <h1 className="text-center font-semibold text-2xl text-green-text lg:text-3xl">
          COURSE PURCHASE FORM – PINUS PINTAR
        </h1>
      </div>
      <div className="flex flex-col gap-4 px-3 max-w-8xl mx-auto lg:flex-row lg:gap-6">
		
		{/* Left Side */}
		<div className="flex-2/3 w-full">
			<div className="w-full min-h-fit rounded-2xl p-6 sm:p-8 border-2 border-gray-primary space-y-10">
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
					className="w-full p-2 border-2 border-gray-primary rounded-md focus:outline-none focus:ring-1 focus:ring-green-primary-2"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium mb-1">
					Email
					</label>
					<input
					type="email"
					className="w-full p-2 border-2 border-gray-primary rounded-md focus:outline-none focus:ring-1 focus:ring-green-primary-2"
					/>
				</div>
				</div>

				<div className="mt-6">
				<label className="block text-sm font-medium mb-1">
					No Handphone / No WhatsApp
				</label>
				<div className="flex gap-3">
					<div className="flex items-center justify-center gap-2 w-20 sm:w-24 p-2 py-3 text-center border border-gray-primary rounded-md bg-gray-100 text-gray-700">
					<svg
						className="size-6"
						viewBox="0 0 384 384"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
						d="M384 192C384 166.786 379.034 141.819 369.385 118.525C359.736 95.2303 345.593 74.0643 327.764 56.2355C309.936 38.4066 288.77 24.264 265.475 14.6151C242.181 4.96622 217.214 -1.10213e-06 192 0C166.786 1.10213e-06 141.819 4.96623 118.525 14.6151C95.2303 24.264 74.0643 38.4067 56.2355 56.2355C38.4066 74.0644 24.264 95.2303 14.6151 118.525C4.96622 141.819 -2.20426e-06 166.786 0 192L192 192H384Z"
						fill="#FF0000"
						/>
						<path
						d="M1.67852e-05 192C1.45809e-05 217.214 4.96624 242.181 14.6151 265.475C24.264 288.77 38.4067 309.936 56.2355 327.764C74.0644 345.593 95.2303 359.736 118.525 369.385C141.819 379.034 166.786 384 192 384C217.214 384 242.181 379.034 265.475 369.385C288.77 359.736 309.936 345.593 327.765 327.764C345.593 309.936 359.736 288.77 369.385 265.475C379.034 242.181 384 217.214 384 192L192 192L1.67852e-05 192Z"
						fill="white"
						/>
					</svg>
					<span className="font-medium">+62</span>
					</div>

					<input
					type="text"
					value={phone}
					onChange={handlePhoneChange}
					className="w-full p-2 py-3 border-2 border-gray-primary rounded-md focus:outline-none focus:ring-1 focus:ring-green-primary-2"
					/>
				</div>
				</div>

				<div className="mt-6">
				<label className="block text-sm font-medium mb-1">
					Residence
				</label>
				<input
					type="text"
					className="w-full p-2 py-3 border-2 border-gray-primary rounded-md focus:outline-none focus:ring-1 focus:ring-green-primary-2"
				/>
				</div>
			</div>
			</div>
		</div>

        {/* Right Side */}
        <div className="flex-1/3 w-full rounded-2xl px-4 py-6 space-y-6 border-2 border-gray-primary lg:sticky lg:top-28 lg:px-6">
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
              <p className="text-lg text-green-secondary">
				Rp {price.toLocaleString("id-ID")}
              </p>
            </div>
          </div>

		  <hr className="border-gray-primary border -mx-4 lg:-mx-6" />

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
              className="w-full p-2 rounded-md py-3 bg-gray-500/15 focus:outline-none"
            />
            <button className=" py-3 px-6 bg-green-primary cursor-pointer text-white font-semibold rounded-md hover:bg-green-primary-2 transition duration-300">
              Check
            </button>
          </div>

		  <hr className="border border-gray-primary -mx-4 lg:-mx-6" />

          <div className="space-y-4">
            <div className="space-y-5">
              <div className="flex items-center gap-3 text-sm">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.80994 2L5.18994 5.63"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.1899 2L18.8099 5.63"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 7.84961C2 5.99961 2.99 5.84961 4.22 5.84961H19.78C21.01 5.84961 22 5.99961 22 7.84961C22 9.99961 21.01 9.84961 19.78 9.84961H4.22C2.99 9.84961 2 9.99961 2 7.84961Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M9.75977 14V17.55"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14.3599 14V17.55"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3.5 10L4.91 18.64C5.23 20.58 6 22 8.86 22H14.89C18 22 18.46 20.64 18.82 18.76L20.5 10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="font-semibold">Total Price</p>
              </div>

              <div className="space-y-3">
                <p className="flex justify-between text-gray-500">
                  Price
                  <span>Rp {price.toLocaleString("id-ID")}</span>
                </p>
                <p className="flex justify-between text-gray-500">
                  Discount
                  <span>Rp {(price - discountPrice).toLocaleString('id-ID')}</span>
                </p>
              </div>
            </div>

            <hr className="border border-gray-primary" />

            <p className="flex justify-between font-bold">
              Total
              <span className="text-green-primary">Rp {discountPrice.toLocaleString('id-ID')}</span>
            </p>
          </div>
          <button
            className="w-full mt-6 py-3 bg-green-primary cursor-pointer text-white font-semibold rounded-2xl hover:bg-green-primary-2 transition duration-300"
            type="button"
          >
            Pay
          </button>
        </div>
      </div>
    </section>
  );
};

export default Inputpage;
