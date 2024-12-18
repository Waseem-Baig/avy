import React, { useState } from "react";
import Image from "next/image";
import TrackAll from "./trackAll";
import UserInfo from "./userInfo";
import data from "./userdata";
import AddDevice from "./addDevice";

const Sidebar = ({ showTimeLine, handleTimeLine }) => {
  const [userData, setUserData] = useState(data);
  const [openUserId, setOpenUserId] = useState("");
  const [showAddDevice, setShowAddDevice] = useState(false);

  const handleAddDevice = () => setShowAddDevice((prev) => !prev);

  const handleToggle = (id) => {
    setOpenUserId((prev) => (prev === id ? "" : id));
  };

  return (
    <div className="w-[27vw] h-screen bg-[#F7F7F7] pt-1 flex flex-col">
      {showAddDevice && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={handleAddDevice} // Close the timeline on overlay click
        />
      )}
      <div className="flex gap-2 pl-1 w-full h-auto items-center">
        <Image alt="Image" src="/images/avy_image.jpg" width={60} height={57} />
        <h2 className="text-black font-source-sans text-[1.2em] font-bold leading-normal">
          YEVA
        </h2>
        <p className="font-source-sans text-[0.4rem]">
          Your Emergency Vigilance Assistant
        </p>
      </div>
      <div className="flex h-auto pl-1 pb-1 justify-start items-center gap-4">
        <div className="h-[27px] w-[70%]">
          <input
            type="text"
            className="w-full rounded-sm h-auto border border-[#008407] bg-[rgba(197,195,195,0.3)] placeholder:text-[#2F2F2F] placeholder:font-source-serif placeholder:text-[0.5rem] placeholder:font-extra-light pl-1 text-[0.75rem] focus:outline-none"
            placeholder="Enter IMEI/ Name/ ID No."
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <button
            className="flex flex-col items-center"
            onClick={handleAddDevice}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="13"
              viewBox="0 0 25 29"
              fill="none"
            >
              <path
                d="M20.2 1C21.1795 0.999943 22.1219 1.39288 22.8346 2.09843C23.5472 2.80397 23.9761 3.76878 24.0336 4.79546L24.04 5.032V23.848C24.0401 24.8764 23.6658 25.866 22.9939 26.6143C22.3219 27.3626 21.4031 27.8129 20.4253 27.8733L20.2 27.88H4.84C3.86053 27.8801 2.91806 27.4871 2.20543 26.7816C1.49279 26.076 1.06386 25.1112 1.0064 24.0845L1 23.848V5.032C0.999945 4.00356 1.37418 3.01396 2.04612 2.2657C2.71807 1.51743 3.63694 1.06706 4.61472 1.00672L4.84 1H20.2ZM16.36 21.16H8.68L8.53024 21.1694C8.21914 21.2083 7.93241 21.3656 7.72437 21.6115C7.51633 21.8575 7.40143 22.175 7.40143 22.504C7.40143 22.833 7.51633 23.1505 7.72437 23. 3965C7.93241 23.6424 8.21914 23.7997 8.53024 23.8386L8.68 23.848H16.36L16.5098 23.8386C16.8209 23.7997 17.1076 23.6424 17.3156 23.3965C17.5237 23.1505 17.6386 22.833 17.6386 22.504C17.6386 22.175 17.5237 21.8575 17.3156 21.6115C17.1076 21.3656 16.8209 21.2083 16.5098 21.1694L16.36 21.16Z"
                stroke="black"
                strokeWidth="1.92"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.4533 10.8134H12.0933V10.1734V5.90675C12.0933 5.7936 12.1383 5.68507 12.2183 5.60506C12.2983 5.52504 12.4068 5.48009 12.52 5.48009C12.6332 5.48009 12.7417 5.52504 12.8217 5.60506C12.9017 5.68507 12.9467 5.7936 12.9467 5.90675V10.1734V10.8134H13.5867H17.8533C17.9665 10.8134 18.075 10.8584 18.155 10.9384C18.235 11.0184 18.28 11.1269 18.28 11.2401C18.28 11.3532 18.235 11.4618 18.155 11.5418C18.075 11.6218 17.9665 11.6668 17.8533 11.6668H13.5867H12.9467V12.3068V16.5734C12.9467 16.6866 12.9017 16.7951 12.8217 16.8751C12.7417 16.9551 12.6332 17.0001 12.52 17.0001C12.4068 17.0001 12.2983 16.9551 12.2183 16.8751C12.1383 16.7951 12.0933 16.6866 12.0933 16.5734V12.3068V11.6668H11.4533H7.18666C7.0735 11.6668 6.96498 11.6218 6.88496 11.5418C6.80495 11.4618 6.76 11.3532 6.76 11.2401C6.76 11.1269 6.80495 11.0184 6.88496 10.9384C6.96498 10.8584 7.0735 10.8134 7.18666 10.8134H11.4533Z"
                stroke="black"
                strokeWidth="1.28"
              />
            </svg>
            <p className="text-[0.4rem] font-Source-Serif">Add Device</p>
          </button>
          {showAddDevice && (
            <div className="fixed inset-0 flex justify-center items-center z-50">
              <AddDevice onClose={() => setShowAddDevice(false)} />
            </div>
          )}
        </div>
      </div>
      <TrackAll />
      <div className="flex flex-col gap-2 justify-start items-center overflow-y-scroll">
        {userData.map((data, index) => (
          <UserInfo
            Info
            data={data}
            key={index}
            isOpen={openUserId === data.registration_number}
            onToggle={() => handleToggle(data.registration_number)}
            showTimeLine={showTimeLine}
            handleTimeLine={handleTimeLine}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
