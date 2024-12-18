import React from "react";
import Image from "next/image";

const MobileCard1 = ({ title, text, icon, width, height }) => {
  return (
    <div className="bg-[#EEF5FC] relative w-[100%] h-[15vh] shadow-[-10px_-10px_10px_#fff,_8px_8px_10px_#00000033] rounded-xl border-#D4E5F6 border-[1px] border-solid box-border cursor-pointer ">
      {/* Inner Orange Border (Top-Left Only) */}
      <div className="w-[30vw] h-[8vh] border-l-[#EA8826] border-t-[#EA8826] border-solid rounded-tl-xl border-l-[2px] border-t-[2px]"></div>

      {/* Inner Green Border (Bottom-Right Only) */}
      <div className="absolute bottom-0 right-0 w-[30vw] border-solid h-[10vh] border-r-[#009002] border-b-[#009002] rounded-br-xl border-r-[2px] border-b-[2px]"></div>

      {/* Image Positioned at Top-Right */}
      <div className="absolute top-[1rem] right-[1rem]">
        <Image alt="Device Icon" src={icon} width={width} height={height} />
      </div>

      {/* Text Centered Inside the Card */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h2 className="font-poppins text-[2rem] text-[#267CD1] font-semibold">
          {title}
        </h2>
        <p className="text-[#267CD1] text-[1rem] font-poppins">{text}</p>
      </div>
    </div>
  );
};

export default MobileCard1;
