"use client";
import MobileNavbar from "@/components/mobileComponents/mNavbar";
import SecondNavM from "@/components/mobileComponents/mSecondNav";
import React from "react";
import MobileFooter from "@/components/mobileComponents/mFooter";
import LogoLogout from "@/components/mobileComponents/logoLogout";
import TermsM from "./termsMobile";

const TermsMobile = () => {
  return (
    <div className="bg-[#EEF5FC] flex flex-col items-center justify-center w-[100vw] gap-[3vh] overflow-x-hidden pt-[2vh]">
      <LogoLogout />
      <div className="flex flex-col gap-[2vh] w-[100%] justify-center items-center">
        <MobileNavbar />
        <SecondNavM label={"Terms & Conditions"} />
      </div>
      <TermsM />
      <MobileFooter />
    </div>
  );
};

export default TermsMobile;
