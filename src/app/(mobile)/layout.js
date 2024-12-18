"use client";

import React from "react";
import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-screen relative overflow-x-hidden overflow-y-scroll">
      {/* Upper Half: Second Image with Logo */}
      <div className="relative h-1/2 w-full">
        {/* Background Image */}
        <div
          className="h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/bg-registration-form-2 1.png')",
          }}
        ></div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-300 to-orange-600 opacity-80"></div>

        {/* Logo positioned at the top-right of the background */}
        <div className="absolute top-4 right-4 bg-[rgb(253,254,255)]  w-[25vw] py-2 flex justify-center items-center rounded-md">
          <Image alt="logo" src={"/images/logo.png"} width={75} height={40} />
        </div>

        {/* Text */}
        <div className="absolute inset-0 flex flex-col items-start justify-center px-6 text-[#FDFEFF] font-dm-sans">
          <h1 className="text-3xl font-bold leading-tight drop-shadow-md">
            VIGILANCE
          </h1>
          <h1 className="text-3xl font-bold leading-tight drop-shadow-md">
            & SAFETY
          </h1>
          <h2 className="text-lg font-medium leading-tight drop-shadow-md text-black">
            Emergency Devices and Services
          </h2>
        </div>
      </div>

      {/* Lower Half: First Image */}
      <div
        className="relative min-h-[50vh] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/loginmap.png')" }}
      ></div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
