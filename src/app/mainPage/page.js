"use client";

import React, { useState } from "react";
import Sidebar from "@/components/mapComponents/sidebar";
import Image from "next/image";
import { GoogleMap } from "../../components/mapComponents/GoogleMap";
import TimeLine from "@/components/mapComponents/timeLine";

export default function Home() {
  const [showTimeLine, setShowTimeLine] = useState(false);

  const handleTimeLine = (e) => {
    e.stopPropagation();
    setShowTimeLine(!showTimeLine);
  };

  return (
    <div className="flex h-screen bg-[#EEF5FC]">
      {showTimeLine && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          {/* Background overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20"
            onClick={(e) => e.stopPropagation()} // Prevent closing on overlay click
          />
          {/* TimeLine Modal */}
          <TimeLine onClose={handleTimeLine} />
        </div>
      )}
      <Sidebar showTimeLine={showTimeLine} handleTimeLine={handleTimeLine} />
      <div className="absolute w-screen h-screen p-2 z-0">
        {/* Map as background */}
        <GoogleMap />

        {/* Overlay Component */}
        <div className="absolute top-4 left-[650px] transform -translate-x-1/2 z-10 flex gap-4 shadow-[10px_10px_30px_0px_#AEAEC066,-10px_-10px_30px_0px_#FFFFFF] rounded-xl bg-[#EEF5FC] border-[#D4E5F6] border-[1px] border-solid box-border w-[auto] px-8 py-4 h-[auto] items-center justify-between flex-wrap xl:left-[650px] lg:left-[55%] md:left-[58%] md:ml-14 lg:ml-8">
          <p className="text-[#3D3D3D] font-sans text-[0.9rem] font-normal">
            Hi,{" "}
            <span className="text-[#000] font-sans text-[0.9rem] font-bold">
              VIT-AP University
            </span>
          </p>
          <div className="flex gap-[2px]">
            <label className="text-[#3D3D3D] font-sans text-[0.9rem] font-normal">
              User Type :
            </label>
            <p className="text-[#000] font-sans text-[0.9rem] font-semibold">
              Organization
            </p>
          </div>
          <div className="flex gap-[2px]">
            <label className="text-[#3D3D3D] font-sans text-[0.9rem] font-normal">
              Account ID :{" "}
            </label>
            <p className="text-[#000] font-sans text-[0.9rem] font-semibold">
              #1432
            </p>
          </div>
        </div>
        <div className="absolute top-5 left-[89%] transform -translate-x-1/2 flex lg:flex-nowrap md:flex-wrap gap-2 z-10">
          <button className="bg-[#EEF5FC] shadow-[10px_10px_30px_0px_#45454D1A,-10px_-10px_10px_0px_#AEAEC040_inset,10px_10px_10px_0px_#FFFFFF_inset] w-10 h-10 flex justify-center items-center px-2 py-1 rounded-lg">
            <Image alt="w" src="/svgs/refresh.svg" width={30} height={30} />
          </button>
          <button
            className="bg-[#EEF5FC] shadow-[10px_10px_30px_0px_#45454D1A,-10px_-10px_10px_0px_#AEAEC040_inset,10px_10px_10px_0px_#FFFFFF_inset] w-10 h-10 flex justify-center items-center px-2 py-1 rounded-lg"
            onClick={(e) => {
              handleTimeLine(e);
            }}
          >
            <Image alt="w" src="/svgs/timeline.svg" width={30} height={30} />
          </button>
          <button className="bg-[#EEF5FC] shadow-[10px_10px_30px_0px_#45454D1A,-10px_-10px_10px_0px_#AEAEC040_inset,10px_10px_10px_0px_#FFFFFF_inset] w-10 h-10 flex justify-center items-center px-2 py-1 rounded-lg">
            <Image alt="w" src="/svgs/share.svg" width={30} height={30} />
          </button>
          <button className="bg-[#EEF5FC] shadow-[10px_10px_30px_0px_#45454D1A,-10px_-10px_10px_0px_#AEAEC040_inset,10px_10px_10px_0px_#FFFFFF_inset] w-10 h-10 flex justify-center items-center px-2 py-1 rounded-lg">
            <Image
              alt="wer"
              src="/svgs/logos_google-maps.svg"
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
