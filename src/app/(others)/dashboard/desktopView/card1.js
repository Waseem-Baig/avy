import React from "react";
import Image from "next/image";

const Card1 = ({ title, text, icon, width, height }) => {
  return (
    <div className="bg-[#EEF5FC] relative w-[25vw] h-[27vh] shadow-[-10px_-10px_10px_#fff,_8px_8px_10px_#00000033] rounded-xl border-#D4E5F6 border-[1px] border-solid box-border transition-all transform hover:scale-105 hover:shadow-md hover:shadow-[#00000033] cursor-pointer ">
      {/* Inner Orange Border (Top-Left Only) */}
      <div className="w-[8vw] h-[15vh] border-l-[#EA8826] border-t-[#EA8826] rounded-tl-xl border-l-[2px] border-t-[2px]"></div>

      {/* Inner Green Border (Bottom-Right Only) */}
      <div className="absolute bottom-0 right-0 w-[8vw] h-[15vh] border-r-[#009002] border-b-[#009002] rounded-br-xl border-r-[2px] border-b-[2px]"></div>

      {/* Image Positioned at Top-Right */}
      <div className="absolute top-[1rem] right-[1rem]">
        <Image alt="Device Icon" src={icon} width={width} height={height} />
      </div>

      {/* Text Centered Inside the Card */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h2 className="font-poppins text-[2rem] text-[#267CD1] font-semibold">
          {title}
        </h2>
        <p className="text-[#267CD1] text-[1.2rem] font-poppins">{text}</p>
      </div>
    </div>
  );
};

export default Card1;
