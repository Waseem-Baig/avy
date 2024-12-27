import React from "react";
import DashBoardM from "./dashboardMobile";
import LogoLogout from "@/components/mobileComponents/logoLogout";
import MobileNavbar from "@/components/mobileComponents/mNavbar";
import MobileFooter from "@/components/mobileComponents/mFooter";

const DashBoardMobile = () => {
  return (
    <div className="bg-[#EEF5FC] flex flex-col items-center justify-center w-[100vw] gap-[3vh] overflow-x-hidden pt-[2vh]">
      <LogoLogout />
      <MobileNavbar />
      <DashBoardM />
      <MobileFooter />
    </div>
  );
};

export default DashBoardMobile;
