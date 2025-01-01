import React from "react";
import TrackM from "./trackMobile";
import LogoLogout from "@/components/mobileComponents/logoLogout";
import MobileNavbar from "@/components/mobileComponents/mNavbar";
import MobileFooter from "@/components/mobileComponents/mFooter";
import SecondNavbarM from "@/components/mobileComponents/mSecondNav";

const TrackMobile = () => {
  return (
    <div className="bg-[#EEF5FC] flex flex-col items-center justify-center w-[100vw] gap-[3vh] overflow-x-hidden pt-[2vh]">
      <LogoLogout />
      <div className="flex flex-col gap-[2vh] w-full justify-center items-center">
        <MobileNavbar />
        <SecondNavbarM label="YEVA" />
      </div>
      <TrackM />
      <MobileFooter />
    </div>
  );
};

export default TrackMobile;
