"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ForgetPassword = () => {
  const router = useRouter();

  const handleBack = (e) => {
    e.preventDefault();
    router.back();
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    router.push("/reset-password");
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 md:top-1/2 md:left-1/4 md:transform md:-translate-y-1/2 md:-translate-x-1/2 md:w-auto md:max-w-md">
      <div className="bg-[#FDFEFF] shadow-lg rounded-lg p-6 w-[auto] h-[auto] flex flex-col gap-6 justify-start items-center">
        <h1 className="text-2xl font-bold text-center text-black">
          Forgot Password
        </h1>
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
            className="w-[22vw] p-2 border-t-[3px] border-l-[3px] border-b-[1px] border-r-[1px] rounded-md shadow-[inset_-5px_-5px_13px_0px_#FFFFFF,_inset_3px_3px_13px_0px_#DFD6D199] placeholder:text-[#9E9E9E] placeholder:text-[12px] lg:w-[22vw] md:w-full sm:w-full xs:w-full text-black"
            placeholder="Enter username / Email Id"
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
              <span className="font-poppins font-medium text-black">Back</span>
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="w-[auto] py-2 px-8 rounded-lg [background:linear-gradient(180deg,_#ffcc99,_#e37302)] text-white text-center font-bold font-dm-sans"
              onClick={handleSendOtp}
            >
              Send OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
