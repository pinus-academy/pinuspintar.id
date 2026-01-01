'use client';

import React, { useState } from "react";
import Image from "next/image";
import { CourseCardProps } from "@/lib/courseTypes";

interface DetailBuyCourseProps {
  courses: CourseCardProps;
  resultCode?: string;
}

const Inputpage = ({ courses, resultCode }: DetailBuyCourseProps) => {
  const { price, discountPrice, title, image, id } = courses;

  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [residence, setResidence] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);

  // Validate if price and discountPrice are valid
  const isPaymentRequired = price && discountPrice && discountPrice >= 1;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.slice(0, 12);
    const formatted = value.match(/.{1,4}/g)?.join("-") || "";
    setPhone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      let phoneNumber = phone.replace(/-/g, "");

      if (phoneNumber.length < 9) {
        throw new Error("Phone number must be at least 9 digits");
      }

      if (!phoneNumber.startsWith("0")) {
        phoneNumber = `0${phoneNumber}`;
      }

      const response = await fetch("/api/registerEvent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email: email,
          phone: phoneNumber,
          address: residence,
          amount: discountPrice,
          courseId: id,
          courseName: title,
          customerGroup: "Pinus Pintar Bootcamp - " + title
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to register event");
      }

      const data = await response.json();

      if (data.redirectUrl) {
        window.location.href = data.redirectUrl;
      }else if (data.message === "Registration successful" && !isPaymentRequired) {
        setIsRegistrationSuccess(true);
      }
    } catch (err) {
      if (err instanceof TypeError && err.message === "Failed to fetch") {
        setError("Unable to connect to the server. Please check if the API server is running at http://localhost:5173 or check your network connection.");
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An error occurred while submitting the form. Please try again.");
      }
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-24 pb-10 space-y-10">
      <div className="bg-[#F9F9F9]  px-3 py-8 lg:py-10">
        <h1 className="text-center font-semibold text-2xl text-green-text lg:text-3xl">
          FORMULIR PENDAFTARAN KURSUS – PINUS PINTAR
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-3 max-w-8xl mx-auto lg:flex-row lg:gap-6">
        {/* Left Side */}
        <div className="flex-2/3 w-full">
          <div className="w-full min-h-fit rounded-2xl p-6 sm:p-8 border-2 border-gray-primary space-y-10">
            <div className="text-black">
              <p className="font-poppins font-bold text-xl mb-6">
                Informasi Pribadi
              </p>

              {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="w-full p-2 border-2 border-gray-primary rounded-md focus:outline-none focus:ring-1 focus:ring-green-primary-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
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
                    required
                    placeholder="812-3456-7890"
                    className="w-full p-2 py-3 border-2 border-gray-primary rounded-md focus:outline-none focus:ring-1 focus:ring-green-primary-2"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium mb-1">
                  Domisili
                </label>
                <input
                  type="text"
                  value={residence}
                  onChange={(e) => setResidence(e.target.value)}
                  required
                  className="w-full p-2 py-3 border-2 border-gray-primary rounded-md focus:outline-none focus:ring-1 focus:ring-green-primary-2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1/3 w-full rounded-2xl border-2 border-gray-primary lg:sticky lg:top-28">
          <div className="flex gap-3 px-4 py-8 border-b-2 border-gray-primary lg:px-8">
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

          <div>
            {!resultCode && !isRegistrationSuccess ? (
              <>
                <div className="px-4 py-5 border-b-2 border-gray-primary lg:px-8">
                  <div className="flex items-center gap-2 mb-5">
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
                    <p className="font-semibold text-black">Kode Promo</p>
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
                </div>

                <div className="space-y-4 px-4 py-6 lg:px-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
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
                      <p className="font-semibold">Total Biaya</p>
                    </div>

                    <div className="space-y-3 text-sm">
                      <p className="flex justify-between text-gray-500">
                        Harga
                        <span>Rp {price.toLocaleString("id-ID")}</span>
                      </p>
                      <p className="flex justify-between text-gray-500">
                        Diskon
                        <span>
                          - Rp {(price - discountPrice).toLocaleString("id-ID")}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="border border-gray-primary mb-6 mx-4 lg:mx-8" />

                <div className="px-4 lg:px-8">
                  <p className="flex justify-between font-medium">
                    Total
                    <span className="text-green-primary">
                      Rp {discountPrice.toLocaleString("id-ID")}
                    </span>
                  </p>
                  <button
                    className="w-full mt-9 mb-8 py-3 bg-green-primary cursor-pointer text-white font-semibold rounded-2xl hover:bg-green-primary-2 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sedang Diproses..." : isPaymentRequired ? "Bayar Sekarang" : "Daftar Sekarang"}
                  </button>
                </div>
              </>
            ) : resultCode ? (
              <div className="flex flex-col justify-center items-center h-72 gap-2 animate-[fade-in-up_1.3s_ease-in-out_forwards]">
                <div className="p-1 border-2 border-green-600 rounded-full text-white w-fit animate-pulse">
                  <div className="p-2 bg-green-600 rounded-full text-white w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-10"
                    >
                      <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                    </svg>
                  </div>
                </div>
                <p className="text-green-600 text-center text-lg font-semibold">Pembayaran Berhasil</p>
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center h-72 gap-2 animate-[fade-in-up_1.3s_ease-in-out_forwards]">
                <div className="p-1 border-2 border-green-600 rounded-full text-white w-fit animate-pulse">
                  <div className="p-2 bg-green-600 rounded-full text-white w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-10"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                    </svg>
                  </div>
                </div>
                <p className="text-green-600 text-center text-lg font-semibold">Pendaftaran Berhasil</p>
              </div>
            )}
          </div>
        </div>
      </form>
    </section>
  );
};

export default Inputpage;
