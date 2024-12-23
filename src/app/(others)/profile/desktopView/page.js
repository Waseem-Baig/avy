"use client";
import Footer from "@/components/desktopComponents/footer";
import Navbar from "@/components/desktopComponents/navbar";
import React from "react";
import SecondNavbar from "@/components/desktopComponents/secondNavbar";
import ProfileD from "./profileDesktop";

const ProfileDesktop = () => {
  return (
    <div className="bg-[#EEF5FC] flex flex-col gap-[5vh] overflow-x-hidden">
      <div className="flex flex-col gap-[3vh]">
        <Navbar />
        <SecondNavbar label={"Profile & Settings"} />
      </div>
      <ProfileD />
      <Footer />
    </div>
  );
};

export default ProfileDesktop;
