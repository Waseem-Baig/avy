"use client";
import Footer from "@/components/desktopComponents/footer";
import Navbar from "@/components/desktopComponents/navbar";
import React from "react";
import SecondNavbar from "@/components/desktopComponents/secondNavbar";
import TermsD from "./termsDesktop";

const TermsDesktop = () => {
  return (
    <div className="bg-[#EEF5FC] flex flex-col gap-[5vh] overflow-x-hidden">
      <div className="flex flex-col gap-[3vh]">
        <Navbar />
        <SecondNavbar label={"Terms & Conditions"} />
      </div>
      <TermsD />
      <Footer />
    </div>
  );
};

export default TermsDesktop;
