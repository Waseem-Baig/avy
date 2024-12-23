"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const SecondNavbarM = ({ label }) => {
  const router = useRouter();
  const [pageRoute, setPageRoute] = useState("");

  useEffect(() => {
    // Map labels to their corresponding routes
    const routeMapping = {
      Products: "/products",
      Dashboard: "/dashboard",
      "Profile & Settings": "/profile",
      "Terms & Conditions": "/terms&conditions",
      Yeva: "/product",
      Vahi: "/vahi",
      TagIT: "/tagit",
      Profile: "/profile/change-password",
      // Add more mappings as needed
    };

    setPageRoute(routeMapping[label] || "/");
  }, [label]);

  const handleBack = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <div className="flex justify-center items-center w-full pt-1 px-4">
      <div className="w-[97%] relative shadow-[-10px_-10px_10px_#fff,_10px_10px_10px_rgba(174,_174,_192,_0.4)] rounded-xl bg-[#EEF5FC] border-#D4E5F6 border-[1px] border-solid box-border h-[8vh] font-source-sans-pro flex justify-between items-center">
        <nav className="pl-[3vw]">
          <Link
            href="/dashboard"
            className="text-[#878787] text-[14px] font-poppins"
          >
            Home
          </Link>
          <span className="font-poppins text-black text-[14px]">{" >>"}</span>
          <Link
            href={pageRoute}
            className="text-[14px] font-poppins text-black"
          >
            {label}
          </Link>
        </nav>
        <button
          className="flex gap-1 mr-[3vw] py-2 px-4 justify-center items-center text-[14px] text-black shadow-[-10px_-10px_30px_#fff,_10px_10px_10px_rgba(174,174,192,0.4),-10px_-10px_10px_rgba(174,174,192,0.25)_inset,5px_5px_10px_#fff_inset] border-[#D4E5F6] bg-[#F8FEFF] rounded-lg"
          onClick={(e) => handleBack(e)}
        >
          <span className="text-black text-[14px]">{"<"}</span>Back
        </button>
      </div>
    </div>
  );
};

export default SecondNavbarM;
