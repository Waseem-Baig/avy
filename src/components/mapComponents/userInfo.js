import React from "react";
import Image from "next/image";
import TimeLine from "./timeLine";
import "/src/app/globals.css";

const UserInfo = ({ data, isOpen, onToggle, handleTimeLine }) => {
  // Define classes based on state to keep things clear
  const containerClass = isOpen
    ? "cursor-default border-t-[1px] border-l-[1px] bg-gradient-to-br from-[#FCBB8440] to-[#FFFFFF] border-[#FCBB84] shadow-[inset_10px_10px_20px_#fff,_inset_-10px_-10px_20px_#AEAEC04D]"
    : "cursor-pointer bg-[#EEF5FC] border-[#D4E5F6] border-[1px]";

  return (
    <div
      className={`relative w-[95%] rounded-lg ${containerClass} font-poppins`}
      onClick={onToggle}
    >
      {/* Background Overlay */}
      <div
        className={`bg-white w-full h-auto p-4 rounded-lg ${containerClass}`}
      >
        {!isOpen ? (
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-black font-source-sans text-[12px] font-extralight">
                {data.name}
              </p>
              <p className="text-black font-source-sans text-[12px] font-extralight">
                {data.registration_number}
              </p>
              <div className="flex gap-[4px]">
                <label className="text-[#9E9E9E] font-source-sans text-[12px] font-extralight">
                  IMEI:
                </label>
                <p className="text-black font-source-sans text-[12px] font-extralight">
                  #{data.imei}
                </p>
              </div>
            </div>
            <Image alt="user" src="/images/user.jpg" width={70} height={10} />
          </div>
        ) : (
          <div onClick={(e) => e.stopPropagation()} className="w-full h-auto">
            <div className="flex justify-between">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-8">
                  <p className="text-black font-source-sans text-[12px] font-extralight">
                    {data.name}
                  </p>
                  <div className="flex gap-[2px] items-center">
                    <p className="text-black font-source-sans text-[12px] font-extralight">
                      {data.battery_percentage}
                    </p>
                    <svg
                      width="20"
                      height="12"
                      viewBox="0 0 30 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Group">
                        <path
                          id="Vector"
                          d="M6 13.5C5.60218 13.5 5.22064 13.342 4.93934 13.0607C4.65804 12.7794 4.5 12.3978 4.5 12V6C4.5 5.60218 4.65804 5.22064 4.93934 4.93934C5.22064 4.65804 5.60218 4.5 6 4.5H15V13.5H6Z"
                          fill="#009002"
                        />
                        <path
                          id="Vector_2"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M24 0H4.5C3.30653 0 2.16193 0.474106 1.31802 1.31802C0.474106 2.16193 0 3.30653 0 4.5V13.5C0 14.6935 0.474106 15.8381 1.31802 16.682C2.16193 17.5259 3.30653 18 4.5 18H24C25.1935 18 26.3381 17.5259 27.182 16.682C28.0259 15.8381 28.5 14.6935 28.5 13.5C28.8978 13.5 29.2794 13.342 29.5607 13.0607C29.842 12.7794 30 12.3978 30 12V6C30 5.60218 29.842 5.22064 29.5607 4.93934C29.2794 4.65804 28.8978 4.5 28.5 4.5C28.5 3.30653 28.0259 2.16193 27.182 1.31802C26.3381 0.474106 25.1935 0 24 0ZM24 3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V13.5C3 13.8978 3.15804 14.2794 3.43934 14.5607C3.72064 14.842 4.10218 15 4.5 15H24C24.3978 15 24.7794 14.842 25.0607 14.5607C25.342 14.2794 25.5 13.8978 25.5 13.5V4.5C25.5 4.10218 25.342 3.72064 25.0607 3.43934C24.7794 3.15804 24.3978 3 24 3Z"
                          fill="#009002"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <p className="text-black font-source-sans text-[12px] font-extralight">
                  {data.registration_number}
                </p>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <p
                      className={`${
                        data.status == "Active"
                          ? "bg-[#33CC34]"
                          : "bg-[#CF1717]"
                      } font-source-sans text-[10px] font-light text-white px-2 py-1 rounded-lg`}
                    >
                      {data.status === "Active" ? "Connected" : "Disconnected"}
                    </p>
                    {data.status !== "Active" && (
                      <p className="font-source-sans text-[10px] text-[#9E9E9E]">
                        {data.date_time}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <Image
                alt="user"
                src="/images/user.jpg"
                width={75}
                height={75} // Maintain consistent width and height
                className="rounded-full"
              />
            </div>
            <hr className="border-[1px] border-[#CACBCC] mt-2 mb-2" />
            <div className="flex flex-col gap-2">
              <div className="flex justify-between flex-grow">
                <div className="flex flex-col gap-2">
                  <div className="flex">
                    <label className="text-[#9E9E9E] font-source-sans text-[12px] font-extralight">
                      IMEI:
                    </label>
                    <p className="text-black font-source-sans text-[12px] font-extralight">
                      #{data.imei}
                    </p>
                  </div>
                  <div className="flex">
                    <label className="text-[#9E9E9E] font-source-sans text-[12px] font-extralight">
                      Number:
                    </label>
                    <p className="text-black font-source-sans text-[12px] font-extralight">
                      #{data.phone_number}
                    </p>
                  </div>
                </div>
                <button className="px-4 py-1 flex flex-col gap-1 justify-center items-center rounded-lg bg-[#0B6FF4] text-white">
                  <Image
                    alt="GPS icon"
                    src="/svgs/lets-icons_gps-fixed.svg"
                    width={20}
                    height={10}
                  />
                  <p className="text-[10px]">Locate</p>
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 pt-2 px-auto">
                <button
                  className="relative bg-gradient-to-b text-[0.7rem] from-[#FFFFFF] to-[#DCEEFF] rounded-md cursor-pointer transition-all card2-shadow py-2 text-black"
                  onClick={(e) => e.stopPropagation()}
                >
                  Track
                </button>
                <button
                  className="relative bg-gradient-to-b text-[0.7rem] from-[#FFFFFF] to-[#DCEEFF] rounded-md cursor-pointer transition-all card2-shadow py-2 text-black"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTimeLine(e);
                  }}
                >
                  TimeLine
                </button>

                <button
                  className="relative bg-gradient-to-b text-[0.7rem] from-[#FFFFFF] to-[#DCEEFF] rounded-md cursor-pointer transition-all card2-shadow py-2 text-black"
                  onClick={(e) => e.stopPropagation()}
                >
                  Off
                </button>
                <button
                  className="relative bg-gradient-to-b text-[0.7rem] from-[#FFFFFF] to-[#DCEEFF] rounded-md cursor-pointer transition-all card2-shadow py-2 text-black"
                  onClick={(e) => e.stopPropagation()}
                >
                  Refresh
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
