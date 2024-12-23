import React from "react";
import Image from "next/image";
import "/src/app/globals.css";

const Card2 = ({ id, text, icon, width, height, isSelected }) => {
  return (
    <div
      className={`relative bg-gradient-to-b from-[#FFFFFF] to-[#DCEEFF] w-[21vw] h-[9vh] rounded-md cursor-pointer transition-all 
      card2-shadow ${
        isSelected ? "border-[#002E5B] border-solid border-[2px]" : ""
      }`}
    >
      {/* Flex container for content */}
      <div className="flex items-center gap-4 pl-4 h-full">
        <Image alt="icon" src={icon} width={width} height={height} />
        <h3 className="text-[#267CD1] text-[14px] font-semibold font-poppins">
          {text}
        </h3>
      </div>
    </div>
  );
};

export default Card2;
