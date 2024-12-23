"use client";
import LogoLogout from "@/components/mobileComponents/logoLogout";
import MobileFooter from "@/components/mobileComponents/mFooter";
import MobileNavbar from "@/components/mobileComponents/mNavbar";
import SecondNavbarM from "@/components/mobileComponents/mSecondNav";
import React from "react";
import ChangePasswordM from "./changePasswordM";

const ChangePasswordMobile = () => {
  return (
    <div className="bg-[#EEF5FC] flex flex-col items-center justify-center w-[100vw] gap-[3vh] overflow-x-hidden pt-[2vh]">
      <LogoLogout />
      <div className="flex flex-col gap-[2vh] w-[100%] justify-center items-center">
        <MobileNavbar />
        <SecondNavbarM label={"Profile"} />
      </div>
      <ChangePasswordM />
      <MobileFooter />
    </div>
  );
};

export default ChangePasswordMobile;
