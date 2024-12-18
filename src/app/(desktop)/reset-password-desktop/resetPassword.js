"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ResetPassword = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPassworc = () => {
    setConfirmPassword((prev) => !prev);
  };

  const handleBack = (e) => {
    e.preventDefault();
    router.back();
  };

  const handleEnter = (e) => {
    e.preventDefault();
    router.push("/sign-in");
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 md:top-1/2 md:left-1/4 md:transform md:-translate-y-1/2 md:-translate-x-1/2 md:w-auto md:max-w-md">
      <div className="bg-[linear-gradient(117.14deg,_#FFFFFF_0%,_#DCEEFF_100%)] shadow-lg rounded-lg p-6 w-[auto] h-[auto] flex flex-col gap-6 justify-start items-center">
        <h1 className="text-2xl font-bold text-center">Forgot Password</h1>
        <div className="">
          <div className="flex justify-between">
            <label
              className="block text-black font-bold mb-1 font-dm-sans text-[14px]"
              htmlFor="password"
            >
              Enter New Password
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
        </div>
        <div className="mb-1">
          <div className="flex justify-between">
            <label
              className="block text-black font-bold mb-1 font-dm-sans text-[14px]"
              htmlFor="password"
            >
              Confirm Password
            </label>
            <button
              type="button"
              onClick={toggleConfirmPassworc}
              className="text-[#666666CC] text-[12px] focus:outline-none"
            >
              {confirmPassword ? (
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
            type={confirmPassword ? "text" : "password"}
            id="c-password"
            className="w-[22vw] p-2 border rounded shadow-[inset_-5px_-5px_13px_0px_#FFFFFF,_inset_3px_3px_13px_0px_#DFD6D199] placeholder:text-[#9E9E9E] placeholder:text-[12px] lg:w-[22vw] md:w-full sm:w-full xs:w-full"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex justify-between w-[100%]">
          <div className="flex justify-center items-center">
            <button className="flex gap-1" onClick={handleBack}>
              <svg
                width="27"
                height="23"
                viewBox="0 0 27 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="jam:arrow-up" opacity="0.7">
                  <path
                    id="Vector"
                    d="M9.57656 12.168L13.9886 15.8579C14.192 16.0341 14.3047 16.2702 14.3024 16.5153C14.3 16.7605 14.1828 16.9951 13.976 17.1686C13.7692 17.3421 13.4893 17.4407 13.1966 17.443C12.9039 17.4454 12.6219 17.3513 12.4112 17.1812L6.09252 11.8967C5.98844 11.8102 5.90581 11.7072 5.8494 11.5938C5.79298 11.4804 5.76389 11.3588 5.7638 11.2359C5.7637 11.113 5.79261 10.9914 5.84885 10.8779C5.90509 10.7644 5.98756 10.6613 6.09151 10.5746L12.4021 5.28048C12.6134 5.11421 12.8937 5.02332 13.1836 5.02704C13.4735 5.03076 13.7502 5.1288 13.9553 5.30042C14.1603 5.47203 14.2776 5.70375 14.2823 5.94656C14.287 6.18936 14.1787 6.42419 13.9804 6.60136L9.57401 10.298L20.2744 10.2898C20.5705 10.2896 20.8545 10.3879 21.0639 10.5631C21.2734 10.7382 21.3912 10.976 21.3914 11.224C21.3916 11.4719 21.2741 11.7098 21.0649 11.8853C20.8557 12.0609 20.5719 12.1596 20.2758 12.1598L9.57656 12.168Z"
                    fill="black"
                  />
                </g>
              </svg>
              <span className="font-poppins font-medium">Back</span>
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="w-[auto] py-2 px-8 rounded-lg [background:linear-gradient(180deg,_#ffcc99,_#e37302)] text-white text-center font-bold font-dm-sans"
              onClick={handleEnter}
            >
              Enter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
