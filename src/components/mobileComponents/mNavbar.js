import React from "react";

const MobileNavbar = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-[95%] relative shadow-[-10px_-10px_10px_#fff,_10px_10px_10px_rgba(174,_174,_192,_0.4)] rounded-xl bg-[#EEF5FC] border-#D4E5F6 border-[1px] border-solid box-border h-[auto] font-source-sans-pro flex flex-col gap-[2vh] p-2">
        <p className="font-sans font-light text-[14px]">
          Hi,
          <span className="font-sans font-semibold">Delhi Public School </span>
        </p>
        <p className="font-sans font-light text-[14px] text-[#6C6C6C]">
          User Type :{" "}
          <span className="font-sans font-semibold text-[14px] text-black">
            Organization
          </span>
        </p>
        <p className="font-sans font-light text-[14px] text-[#6C6C6C]">
          Account ID :
          <span className="font-sans font-semibold text-[14px] text-black">
            #1432
          </span>
        </p>
      </div>
    </div>
  );
};

export default MobileNavbar;
