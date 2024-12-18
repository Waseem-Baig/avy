"use client";

import React, { useState } from "react";
import Sidebar from "@/components/mapComponents/sidebar";
import Image from "next/image";
import { GoogleMap } from "../../components/mapComponents/GoogleMap";

export default function Home() {
  const [showTimeLine, setShowTimeLine] = useState(false);

  const handleTimeLine = (e) => {
    e.stopPropagation();
    setShowTimeLine(!showTimeLine);
  };

  return (
    <div className="flex">
      {showTimeLine && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={handleTimeLine} // Close the timeline on overlay click
        />
      )}
      <Sidebar showTimeLine={showTimeLine} handleTimeLine={handleTimeLine} />
      <div className="w-[73vw] h-screen relative p-2">
        {/* Map as background */}
        <GoogleMap />

        {/* Overlay Component */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 flex gap-4 rounded-2xl bg-[#F7F7F7] shadow-md shadow-black/50 w-fit px-6 py-2">
          <p className="text-[#3D3D3D] font-sans text-[0.6rem] font-normal">
            Hi,{" "}
            <span className="text-[#000] font-sans text-[0.6rem] font-bold">
              VIT-AP University
            </span>
          </p>
          <div className="flex gap-[2px]">
            <label className="text-[#3D3D3D] font-sans text-[0.6rem] font-normal">
              User Type :
            </label>
            <p className="text-[#000] font-sans text-[0.6rem] font-semibold">
              Organization
            </p>
          </div>
          <div className="flex gap-[2px]">
            <label className="text-[#3D3D3D] font-sans text-[0.6rem] font-normal">
              ID :{" "}
            </label>
            <p className="text-[#000] font-sans text-[0.6rem] font-semibold">
              #1432
            </p>
          </div>
          <button>
            <Image
              src="/images/home_button.jpg"
              alt="home"
              width={12}
              height={12}
            />
          </button>
        </div>
        <div className="absolute right-4 z-10 flex flex-col float-end gap-2 pt-[20vh]">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 68 68"
              fill="none"
            >
              <g filter="url(#filter0_dd_13_752)">
                <rect x="4" width="60" height="60" rx="30" fill="white" />
              </g>

              <g transform="translate(20.5, 16.5)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="35"
                  viewBox="0 0 27 35"
                  fill="none"
                >
                  <g clipPath="url(#clip0_13_754)">
                    <path
                      d="M7.44452 25.9273C8.56391 27.2173 9.58277 28.5761 10.4937 29.994C11.2715 31.3274 11.5957 32.2316 12.164 33.8382C12.5126 34.7259 12.8276 34.9908 13.505 34.9908C14.243 34.9908 14.5779 34.5401 14.8366 33.8431C15.3739 32.3258 15.7954 31.1678 16.4605 30.0737C17.7656 27.9613 19.3873 26.0842 20.9807 24.2801C21.4121 23.7695 24.2011 20.7949 25.4567 18.4478C25.4567 18.4478 26.9999 15.8695 26.9999 12.2687C26.9999 8.90049 25.478 6.56445 25.478 6.56445L21.0963 7.62552L18.4353 13.9628L17.777 14.8367L17.6454 14.995L17.4703 15.1931L17.1629 15.5097L16.7238 15.9067L14.3542 17.6523L8.43002 20.7453L7.44452 25.9273Z"
                      fill="#34A853"
                    />
                    <path
                      d="M1.3302 18.0143C2.77607 21.0006 5.56424 23.6257 7.45066 25.9294L17.4703 15.1973C17.4703 15.1973 16.0587 16.8666 13.4981 16.8666C10.6459 16.8666 8.34176 14.8071 8.34176 12.2102C8.34176 10.4294 9.5266 9.20605 9.5266 9.20605L2.72502 10.854L1.3302 18.0143Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M17.5822 0.552002C20.9099 1.52218 23.7582 3.55895 25.4811 6.56237L17.4734 15.1911C17.4734 15.1911 18.6582 13.9456 18.6582 12.1758C18.6582 9.51849 16.1836 7.53331 13.5103 7.53331C10.9823 7.53331 9.5304 9.19986 9.5304 9.19986V3.7639L17.5822 0.552002Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M3.16565 4.36451C5.15321 2.21425 8.65055 0 13.4722 0C15.8115 0 17.5738 0.555327 17.5738 0.555327L9.52278 9.20452H3.8185L3.16565 4.36451Z"
                      fill="#1A73E8"
                    />
                    <path
                      d="M1.33017 18.0142C1.33017 18.0142 0 15.6588 0 12.2466C0 9.0215 1.38649 6.20243 3.16564 4.3645L9.52731 9.20528L1.33017 18.0142Z"
                      fill="#EA4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_13_754">
                      <rect width="27" height="35" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </g>

              <defs>
                <filter
                  id="filter0_dd_13_752"
                  x="0"
                  y="0"
                  width="68"
                  height="68"
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
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_13_752"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_13_752"
                    result="effect2_dropShadow_13_752"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_13_752"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 68 68"
              fill="none"
            >
              <g filter="url(#filter0_dd_13_748)">
                <rect x="4" width="60" height="60" rx="30" fill="white" />
              </g>
              <path
                d="M38.2501 20.3749C38.25 19.3486 38.6108 18.3549 39.2694 17.5676C39.9281 16.7804 40.8426 16.2498 41.8529 16.0687C42.8633 15.8875 43.9052 16.0674 44.7963 16.5767C45.6875 17.0861 46.3711 17.8926 46.7276 18.855C47.0842 19.8175 47.0909 20.8746 46.7466 21.8415C46.4023 22.8084 45.729 23.6235 44.8444 24.1442C43.9598 24.6648 42.9203 24.8579 41.9077 24.6896C40.8951 24.5213 39.9739 24.0023 39.3054 23.2235L27.5491 28.6828C27.8192 29.5392 27.8192 30.458 27.5491 31.3144L39.3054 36.7736C40.0121 35.9518 40.9988 35.4216 42.0742 35.2857C43.1496 35.1499 44.2371 35.418 45.1261 36.0382C46.015 36.6584 46.6421 37.5865 46.8857 38.6426C47.1293 39.6987 46.9721 40.8076 46.4445 41.7544C45.917 42.7013 45.0567 43.4186 44.0304 43.7673C43.0041 44.1161 41.8849 44.0715 40.8896 43.6421C39.8943 43.2128 39.0939 42.4293 38.6434 41.4435C38.1929 40.4577 38.1245 39.3398 38.4514 38.3064L26.6951 32.8472C26.1131 33.5253 25.3374 34.009 24.4722 34.2331C23.6071 34.4573 22.6941 34.4111 21.856 34.1008C21.0179 33.7906 20.2949 33.2311 19.7843 32.4977C19.2737 31.7643 19 30.8922 19 29.9986C19 29.105 19.2737 28.2328 19.7843 27.4994C20.2949 26.766 21.0179 26.2066 21.856 25.8963C22.6941 25.5861 23.6071 25.5399 24.4722 25.764C25.3374 25.9882 26.1131 26.4718 26.6951 27.15L38.4514 21.6908C38.3176 21.265 38.2497 20.8212 38.2501 20.3749Z"
                fill="black"
              />
              <defs>
                <filter
                  id="filter0_dd_13_748"
                  x="0"
                  y="0"
                  width="68"
                  height="68"
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
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_13_748"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_13_748"
                    result="effect2_dropShadow_13_748"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_13_748"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </button>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 mb-4">
          <button className="rounded-[40px] bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] flex gap-1 items-center px-2 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.9299 1.07101C13.362 0.692413 12.622 0.693187 12.0549 1.07297C11.4878 1.45276 11.2053 2.13677 11.3391 2.80604L11.5967 4.09381C7.47443 5.45766 4.50012 9.34255 4.50012 13.9221C4.50012 16.7941 5.67213 19.3956 7.55982 21.2688C8.22135 21.9253 9.28981 21.9212 9.94629 21.2597C10.6028 20.5981 10.5987 19.5297 9.93714 18.8732C8.66181 17.6076 7.87512 15.8583 7.87512 13.9221C7.87512 10.9828 9.69323 8.46816 12.2662 7.44139L12.5766 8.99354C12.7105 9.66282 13.2343 10.1856 13.9039 10.318C14.5734 10.4505 15.2569 10.1666 15.6355 9.59865L18.1105 5.88615C18.6274 5.1107 18.4179 4.06298 17.6424 3.54601L13.9299 1.07101ZM23.3779 7.77429C22.7164 7.11781 21.6479 7.1219 20.9915 7.78343C20.335 8.44497 20.3391 9.51342 21.0006 10.1699C22.2759 11.4355 23.0626 13.1848 23.0626 15.121C23.0626 18.0848 21.2141 20.6168 18.6071 21.6271L18.3611 20.3973C18.2272 19.728 17.7034 19.2053 17.0339 19.0728C16.3643 18.9403 15.6809 19.2243 15.3023 19.7922L12.8273 23.5047C12.3103 24.2801 12.5199 25.3278 13.2953 25.8448L17.0078 28.3198C17.5757 28.6984 18.3158 28.6976 18.8829 28.3178C19.45 27.9381 19.7325 27.2541 19.5986 26.5848L19.2758 24.9707C23.4319 23.6264 26.4376 19.7247 26.4376 15.121C26.4376 12.249 25.2656 9.64756 23.3779 7.77429Z"
                fill="black"
              />
            </svg>
            <p className="text-black font-[DM Sans] text-[8px] font-medium leading-normal">
              REFRESH
            </p>
          </button>
          <button
            className="rounded-[40px] bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] flex gap-1 items-center px-2 py-1"
            onClick={(e) => {
              handleTimeLine(e);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M20.2176 13.9968C20.2176 13.1414 19.5178 12.4416 18.6624 12.4416H13.9968C13.1414 12.4416 12.4416 13.1414 12.4416 13.9968C12.4416 14.8522 13.1414 15.552 13.9968 15.552H18.6624C19.5178 15.552 20.2176 14.8522 20.2176 13.9968ZM13.9968 3.1104C19.9983 3.1104 24.8832 7.99528 24.8832 13.9968C24.8832 19.9983 19.9983 24.8832 13.9968 24.8832C7.99528 24.8832 3.1104 19.9983 3.1104 13.9968C3.1104 7.99528 7.99528 3.1104 13.9968 3.1104ZM13.9968 0C6.2659 0 0 6.2659 0 13.9968C0 21.7277 6.2659 27.9936 13.9968 27.9936C21.7277 27.9936 27.9936 21.7277 27.9936 13.9968C27.9936 6.2659 21.7277 0 13.9968 0ZM15.552 9.3312C15.552 8.47584 14.8522 7.776 13.9968 7.776C13.1414 7.776 12.4416 8.47584 12.4416 9.3312V13.9968C12.4416 14.8522 13.1414 15.552 13.9968 15.552C14.8522 15.552 15.552 14.8522 15.552 13.9968V9.3312ZM13.9968 6.2208C18.2845 6.2208 21.7728 9.70911 21.7728 13.9968C21.7728 18.2845 18.2845 21.7728 13.9968 21.7728C9.70911 21.7728 6.2208 18.2845 6.2208 13.9968C6.2208 9.70911 9.70911 6.2208 13.9968 6.2208ZM13.9968 4.6656C11.522 4.6656 9.14859 5.64871 7.39865 7.39865C5.64871 9.14859 4.6656 11.522 4.6656 13.9968C4.6656 16.4716 5.64871 18.845 7.39865 20.595C9.14859 22.3449 11.522 23.328 13.9968 23.328C16.4716 23.328 18.845 22.3449 20.595 20.595C22.3449 18.845 23.328 16.4716 23.328 13.9968C23.328 11.522 22.3449 9.14859 20.595 7.39865C18.845 5.64871 16.4716 4.6656 13.9968 4.6656Z"
                fill="black"
              />
            </svg>
            <p className="text-black font-[DM Sans] text-[8px] font-medium leading-normal">
              TIMELINE
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
