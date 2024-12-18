import React, { useState } from "react";

const TrackAll = () => {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(1);

  const handleCurrent = (value) => {
    setCurrent(value);
  };

  const buttons = [
    { id: 1, label: "ALL" },
    { id: 2, label: "Online" },
    { id: 3, label: "Offline" },
  ];

  return (
    <div className="flex gap-5 pt-2 pl-3 border-t border-t-[#E2E2E2]">
      <div className="flex gap-2">
        {buttons.map((button) => (
          <div
            key={button.id}
            className="flex flex-col justify-start items-center"
          >
            <button
              className={`w-[5vw] py-[2px] ${
                current === button.id && `bg-[#FF671F] text-[#FFFFFF] font-bold`
              } font-source-sans text-[0.4rem] text-start pl-1 border-[0.2px] border-[#5C75F4] bg-[#F4F4F4] shadow-md shadow-[rgba(0,0,0,0.25)]
              ${current !== button.id && `bg-[#F4F4F4] text-black`}`}
              onClick={() => handleCurrent(button.id)}
            >
              {button.label}
              <span className="font-light">({data.length})</span>
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

      <div className="flex flex-col items-center">
        <button className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="16"
            viewBox="0 0 33 31"
            fill="none"
          >
            <path
              d="M17 16.9999V8.9999C17 8.57556 17.1686 8.16859 17.4686 7.86853C17.7687 7.56847 18.1757 7.3999 18.6 7.3999H28.2C28.6243 7.3999 29.0313 7.56847 29.3314 7.86853C29.6314 8.16859 29.8 8.57556 29.8 8.9999V12.1999"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25 7.4V2.6C25 2.17565 24.8314 1.76869 24.5314 1.46863C24.2313 1.16857 23.8243 1 23.4 1H2.6C2.17565 1 1.76869 1.16857 1.46863 1.46863C1.16857 1.76869 1 2.17565 1 2.6V21.8C1 22.2243 1.16857 22.6313 1.46863 22.9314C1.76869 23.2314 2.17565 23.4 2.6 23.4H15.4M26.6 23.4V23.416M21.8 9H25M29.9936 26.7936C30.665 26.1224 31.1223 25.2671 31.3077 24.3359C31.493 23.4048 31.398 22.4396 31.0348 21.5624C30.6715 20.6853 30.0563 19.9355 29.2669 19.408C28.4775 18.8805 27.5494 18.599 26.6 18.599C25.6506 18.599 24.7225 18.8805 23.9331 19.408C23.1437 19.9355 22.5285 20.6853 22.1652 21.5624C21.802 22.4396 21.707 23.4048 21.8923 24.3359C22.0777 25.2671 22.535 26.1224 23.2064 26.7936C23.8752 27.4635 25.0064 28.4656 26.6 29.8C28.2821 28.376 29.4133 27.3739 29.9936 26.7936Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-[0.4rem] font-Source-Serif">Track All </p>
        </button>
      </div>
    </div>
  );
};

export default TrackAll;
