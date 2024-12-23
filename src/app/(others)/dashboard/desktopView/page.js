import Footer from "@/components/desktopComponents/footer";
import Navbar from "@/components/desktopComponents/navbar";
import React from "react";
import DashBoardD from "./dashboardPage";

const DashBoardDesktop = () => {
  return (
    <div className="bg-[#EEF5FC] flex flex-col gap-[5vh] overflow-x-hidden">
      <Navbar />
      <DashBoardD />
      <Footer />
    </div>
  );
};

export default DashBoardDesktop;
