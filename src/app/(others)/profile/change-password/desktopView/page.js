"use client";

import Footer from "@/components/desktopComponents/footer";
import Navbar from "@/components/desktopComponents/navbar";
import SecondNavbar from "@/components/desktopComponents/secondNavbar";
import React from "react";
import ChangePasswordD from "./changePasswordD";

const ChangePasswordDesktop = () => {
  return (
    <div className="bg-[#EEF5FC] flex flex-col gap-[5vh] overflow-x-hidden">
      <div className="flex flex-col gap-[3vh]">
        <Navbar />
        <SecondNavbar label={"Profile"} />
      </div>
      <ChangePasswordD />
      <Footer />
    </div>
  );
};

export default ChangePasswordDesktop;
