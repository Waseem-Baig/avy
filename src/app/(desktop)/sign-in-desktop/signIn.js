"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignIN() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleOtpPage = (e) => {
    e.preventDefault();
    router.push("/otp");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    router.push("/sign-up");
  };

  const handleForgetPassword = (e) => {
    e.preventDefault();
    router.push("/forget-password");
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 md:top-1/2 md:left-1/4 md:transform md:-translate-y-1/2 md:-translate-x-1/2 md:w-auto md:max-w-md">
      <div className="bg-[linear-gradient(117.14deg,_#FFFFFF_0%,_#DCEEFF_100%)] shadow-lg rounded-lg p-6 w-[30vw] h-[auto] flex flex-col gap-8 justify-start items-center md:w-[30vw] sm:w-[40vw] xs:w-[45vw]">
        <h1 className="text-2xl font-bold text-center">Log In</h1>
        <form className="flex flex-col gap-2">
          <div className="flex flex-col mb-4">
            <label
              className="block text-black font-bold mb-1 text-[14px] font-dm-sans"
              htmlFor="email"
            >
              Username / Email
            </label>
            <input
              type="email"
              id="email"
              className="w-[22vw] p-2 border rounded shadow-[inset_-5px_-5px_13px_0px_#FFFFFF,_inset_3px_3px_13px_0px_#DFD6D199] placeholder:text-[#9E9E9E] placeholder:text-[12px] lg:w-[22vw] md:w-full sm:w-full xs:w-full"
              placeholder="Enter username / Email Id"
            />
          </div>

          <div className="mb-4">
            <div className="flex justify-between">
              <label
                className="block text-black font-bold mb-1 font-dm-sans text-[14px]"
                htmlFor="password"
              >
                Password
              </label>
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="text-[#666666CC] text-[12px] focus:outline-none"
              >
                {showPassword ? (
                  <div className="flex gap-1 items-center">
                    <svg
                      width="15"
                      height="13"
                      viewBox="0 0 15 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Group 1">
                        <path
                          id="Vector"
                          d="M13.9061 0.80502L13.3173 0.216266C13.1509 0.0498732 12.8437 0.0754805 12.6517 0.305837L10.6036 2.34101C9.68192 1.94425 8.67082 1.75225 7.60837 1.75225C4.44668 1.765 1.70765 3.60818 0.38916 6.25795C0.312337 6.42434 0.312337 6.62908 0.38916 6.76987C1.00351 8.02429 1.92516 9.06112 3.07716 9.84187L1.40037 11.5443C1.20837 11.7363 1.18276 12.0434 1.3108 12.2098L1.89956 12.7986C2.06595 12.965 2.37314 12.9394 2.56514 12.709L13.8035 1.47071C14.0467 1.27882 14 .0723 0.971649 13.9059 0.80524L13.9061 0.80502ZM8.28676 4.67053C8.06916 4.61931 7.8388 4.55535 7.62118 4.55535C6.53314 4.55535 5.66283 5.42577 5.66283 6.5137C5.66283 6.7313 5.71405 6.96166 5.77801 7.17928L4.92032 8.02411C4.66435 7.57614 4.52356 7.07686 4.52356 6.51372C4.52356 4.81134 5.89318 3.44172 7.59557 3.44172C8.15882 3.44172 8.65799 3.58251 9.10595 3.83848L8.28676 4.67053Z"
                          fill="#666666"
                          fillOpacity="0.8"
                        />
                        <path
                          id="Vector_2"
                          d="M14.8276 6.2578C14.3796 5.36176 13.7908 4.55542 13.0612 3.90259L10.6804 6.2578V6.51376C10.6804 8.21614 9.31078 9.58576 7.60839 9.58576H7.35243L5.84204 11.0961C6.40529 11.2113 6.99404 11.2881 7.57005 11.2881C10.7317 11.2881 13.4708 9.44497 14.7893 6.78245C14.9044 6.6032 14.9044 6.42407 14.8276 6.25766L14.8276 6.2578Z"
                          fill="#666666"
                          fillOpacity="0.8"
                        />
                      </g>
                    </svg>
                    <p>Hidden</p>
                  </div>
                ) : (
                  <div className="flex gap-1 items-center">
                    <svg
                      width="15"
                      height="13"
                      viewBox="0 0 15 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Group 1">
                        <path
                          id="Vector"
                          d="M7.5 0C3.357 0 0 5.5 0 5.5S3.357 11 7.5 11 15 5.5 15 5.5 11.643 0 7.5 0zM7.5 9.5C5.014 9.5 3 7.486 3 5.5S5.014 1.5 7.5 1.5 12 3.514 12 5.5 9.986 9.5 7.5 9.5z"
                          fill="#666666"
                          fillOpacity="0.8"
                        />
                        <circle
                          cx="7.5"
                          cy="5.5"
                          r="2"
                          fill="#666666"
                          fillOpacity="0.8"
                        />
                      </g>
                    </svg>
                    <p>Show</p>
                  </div>
                )}
              </button>
            </div>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-[22vw] p-2 border rounded shadow-[inset_-5px_-5px_13px_0px_#FFFFFF,_inset_3px_3px_13px_0px_#DFD6D199] placeholder:text-[#9E9E9E] placeholder:text-[12px] lg:w-[22vw] md:w-full sm:w-full xs:w-full"
              placeholder="Enter your password"
            />
            <div className="flex justify-end mt-1">
              <button
                className="font-dm-sans text-blue-500 text-[16px] lg:text-[14px] md:text-[12px] sm:text-[10px] xs:text-[10px]"
                onClick={handleForgetPassword}
              >
                Forgot Password?
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-[22vw] bg-gradient-to-b from-[#FFCC99] to-[#E37302] text-white py-2 px-4 rounded hover:bg-orange-600 transition text-[16px] lg:text-[16px] md:text-[12px] sm:text-[10px] xs:text-[8px] lg:w-[22vw] md:w-full sm:w-full"
            onClick={handleOtpPage}
          >
            Login
          </button>
        </form>
        <div className=" flex gap-1">
          <p className="font-dm-sans text-[14px] lg:text-[14px] md:text-[12px] sm:text-[10px] xs:text-[10px]">
            Don’t have an account?
          </p>
          <button
            className="text-blue-700 text-[14px] lg:text-[14px] md:text-[12px] sm:text-[10px] xs:text-[10px]"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
