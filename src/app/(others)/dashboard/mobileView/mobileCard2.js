import React from "react";
import Image from "next/image";
import "/src/app/globals.css";

const MobileCard2 = ({ id, text, icon, width, height, isSelected }) => {
  return (
    <div
      className={`relative bg-gradient-to-b from-[#FFFFFF] to-[#DCEEFF] w-[28vw] h-[14vh] rounded-md cursor-pointer transition-all 
      card2-shadow ${
        isSelected ? "border-[#002E5B] border-solid border-[2px]" : ""
      }`}
    >
      {/* Flex container for content */}
      <div className="flex flex-col justify-center items-center text-center gap-1 h-full">
        <Image alt="icon" src={icon} width={width} height={height} />
        <h3 className="text-[#267CD1] text-[15px] font-semibold font-poppins">
          {text}
        </h3>
      </div>
    </div>
  );
};

export default MobileCard2;
