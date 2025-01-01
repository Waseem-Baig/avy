"use client";
import React, { useState } from "react";

const TrackAll = ({ data, current, handleCurrent, width }) => {
  const [userData, setUserData] = useState(data);

  // Count total, active, and inactive users
  const totalUsers = userData.length;
  const activeUsers = userData.filter(
    (user) => user.status === "Active"
  ).length;
  const inactiveUsers = userData.filter(
    (user) => user.status === "Inactive"
  ).length;

  const buttons = [
    { id: 1, label: "ALL", count: totalUsers },
    { id: 2, label: "Online", count: activeUsers },
    { id: 3, label: "Offline", count: inactiveUsers },
  ];

  return (
    <div className="flex gap-5">
      <div className="flex gap-4">
        {buttons.map((button) => (
          <div
            key={button.id}
            className="flex flex-col justify-start items-center"
          >
            <button
              className={`${width} py-2 px-4 ${
                current === button.id &&
                `bg-gradient-to-b from-[#FFCC99] to-[#E37302] text-white hover:bg-orange-600 transition border-none`
              } font-source-sans text-[0.8rem] text-center rounded-lg border-[0.2px] border-[#5C75F4] bg-[#F4F4F4] shadow-md shadow-[rgba(0,0,0,0.25)] font-bold
              ${current !== button.id && `bg-[#F4F4F4] text-black`}`}
              onClick={() => handleCurrent(button.id)}
            >
              {button.label}
              <span className="font-bold text-md">({button.count})</span>
            </button>
            {current === button.id && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="20"
                viewBox="0 0 55 33"
                fill="none"
              >
                <g filter="url(#filter0_d_13_805)">
                  <path
                    d="M8.90552 8.1529C7.07981 6.8915 8.36028 4.03866 10.5162 4.56438L27.0262 8.59034C27.3375 8.66626 27.6625 8.66626 27.9738 8.59034L44.4838 4.56438C46.6397 4.03866 47.9202 6.8915 46.0945 8.1529L28.6369 20.2145C27.9527 20.6873 27.0473 20.6873 26.3631 20.2145L8.90552 8.1529Z"
                    fill="#FF671F"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_13_805"
                    x="0.0325928"
                    y="0.500488"
                    width="54.9348"
                    height="32.0686"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_13_805"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_13_805"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackAll;
