"use client";

import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row h-screen relative">
      {/* First Image: Hidden on small screens, 25vw on medium and above */}
      <div
        className="hidden md:block w-[25vw] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/loginmap.png')" }}
      ></div>

      {/* Second Image: Full width on small screens, 70vw on medium and above */}
      <div className="w-full md:w-[70vw] flex-grow relative">
        <div
          className="h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/bg-registration-form-2 1.png')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,204,153,0.8)] to-[rgba(227,115,2,0.8)]"></div>
      </div>

      {/* Text and Logo visible only on devices with width greater than 768px */}
      <div className="absolute inset-0 text-start left-[42vw] top-[27vh] hidden md:block">
        <h1 className="text-white text-[5em] md:text-[5em] font-medium font-dm-sans px-4">
          VIGILANCE
        </h1>
        <h1 className="text-white text-[5em] md:text-[5em] font-medium font-dm-sans px-4">
          &SAFETY
        </h1>
        <h2 className="text-black font-medium font-dm-sans text-[2rem] px-4">
          Emergency Devices and Services
        </h2>
      </div>

      <div className="absolute top-6 right-12 md:top-6 md:right-12 bg-[#FDFEFF] inline-flex p-2 hidden md:block">
        <img
          src="/images/logo.png" // Replace with the actual path to your logo
          alt="Logo"
          className="w-30 h-16 md:w-30 md:h-15 object-contain" // Adjust size as needed
        />
      </div>

      {/* Centered Content */}
      {children}
    </div>
  );
};

export default Layout;
