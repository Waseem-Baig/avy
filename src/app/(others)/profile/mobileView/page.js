"use client";
import MobileNavbar from "@/components/mobileComponents/mNavbar";
import SecondNavM from "@/components/mobileComponents/mSecondNav";
import React from "react";
import MobileFooter from "@/components/mobileComponents/mFooter";
import LogoLogout from "@/components/mobileComponents/logoLogout";
import ProfileM from "./profileMobile";

const ProfileMobile = () => {
  return (
    <div className="bg-[#EEF5FC] flex flex-col items-center justify-center w-[100vw] gap-[5vh] overflow-x-hidden pt-[2vh]">
      <LogoLogout />
      <div className="flex flex-col gap-[3vh] w-[100%] justify-center items-center">
        <MobileNavbar />
        <SecondNavM label={"Profile & Settings"} />
      </div>
      <ProfileM />
      <MobileFooter />
    </div>
  );
};

export default ProfileMobile;
