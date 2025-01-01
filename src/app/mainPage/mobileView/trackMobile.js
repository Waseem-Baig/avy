"use client";

import Image from "next/image";
import React, { useState } from "react";
import "/src/app/globals.css";
import { GoogleMap } from "@/components/mapComponents/GoogleMap";
import { GoogleMapMobile } from "./googleMap";
import data from "@/components/mapComponents/userdata";
import TrackAll from "@/components/mapComponents/trackAll";
import UserInfo from "@/components/mapComponents/userInfo";

const TrackM = () => {
  const [userData, setUserData] = useState(data);
  const [searchValue, setSearchValue] = useState("");
  const [current, setCurrent] = useState(1);
  const [showTimeLine, setShowTimeLine] = useState(false);
  const [openUserId, setOpenUserId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page

  const filteredData = userData.filter((user) => {
    if (current === 2) return user.status === "Active"; // Online
    if (current === 3) return user.status === "Inactive"; // Offline
    return true; // All data
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Get the current items based on the page
  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Get the three visible buttons: previous, current, and next
  const getVisibleButtons = () => {
    const buttons = [];
    if (currentPage > 1) buttons.push(currentPage - 1); // Previous
    buttons.push(currentPage); // Current
    if (currentPage < totalPages) buttons.push(currentPage + 1); // Next
    return buttons;
  };

  const handleTimeLine = (e) => {
    e.stopPropagation();
    setShowTimeLine(!showTimeLine);
  };

  const handleToggle = (id) => {
    setOpenUserId((prev) => (prev === id ? "" : id));
  };

  const handleCurrent = (value) => {
    setCurrent(value);
    setCurrentPage(1); // Reset to the first page
  };

  const handleClearSearch = () => {
    setSearchValue(""); // Clear the search input
    setUserData(data); // Reset the userData to the original data
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchValue(searchValue);
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchValue)
    );
    setUserData(filteredData);
    setCurrentPage(1); // Reset to the first page
  };

  const renderUserInfo = (filterFn) => {
    return currentItems
      .filter(filterFn)
      .map((data, index) => (
        <UserInfo
          key={index}
          data={data}
          isOpen={openUserId === data.registration_number}
          onToggle={() => handleToggle(data.registration_number)}
          showTimeLine={showTimeLine}
          handleTimeLine={handleTimeLine}
          width={"w-[100%]"}
        />
      ));
  };

  return (
    <div className="flex flex-col justify-center items-center w-full px-4 font-poppins text-black gap-[3vh]">
      <div className="flex justify-between w-full">
        <button className="flex justify-center items-center bg-gradient-to-b from-[#FFFFFF] to-[#DCEEFF] rounded-lg cursor-pointer transition-all card2-shadow w-24 h-20">
          <div className="flex flex-col gap-1 items-center justify-center">
            <Image alt="w" src="/svgs/refresh.svg" width={20} height={20} />
            <p className="text-[10px]">Refresh</p>
          </div>
        </button>
        <button className="flex justify-center items-center bg-gradient-to-b from-[#FFFFFF] to-[#DCEEFF] rounded-lg cursor-pointer transition-all card2-shadow w-24 h-20">
          <div className="flex flex-col gap-1 items-center justify-center">
            <Image alt="w" src="/svgs/timeline.svg" width={20} height={20} />
            <p className="text-[10px]">TimeLine</p>
          </div>
        </button>
        <button className="flex justify-center items-center bg-gradient-to-b from-[#FFFFFF] to-[#DCEEFF] rounded-lg cursor-pointer transition-all card2-shadow w-24 h-20">
          <div className="flex flex-col gap-1 items-center justify-center">
            <Image
              alt="w"
              src="/svgs/logos_google-maps.svg"
              width={20}
              height={20}
            />
            <p className="text-[10px]">Google</p>
          </div>
        </button>
        <button className="flex justify-center items-center bg-gradient-to-b from-[#FFFFFF] to-[#DCEEFF] rounded-lg cursor-pointer transition-all card2-shadow w-24 h-20">
          <div className="flex flex-col gap-1 items-center justify-center">
            <Image alt="w" src="/svgs/share.svg" width={20} height={20} />
            <p className="text-[10px]">share</p>
          </div>
        </button>
      </div>
      <div className="flex justify-center items-center w-[100%] h-[50vh]">
        <GoogleMapMobile />
      </div>
      <div className="flex justify-between w-full">
        <button className="flex justify-center items-center bg-gradient-to-b from-[#FFFFFF] to-[#DCEEFF] rounded-lg cursor-pointer transition-all card2-shadow w-[44vw] h-12">
          <div className="flex gap-2 items-center justify-center">
            <Image alt="w" src="/svgs/addDevice.svg" width={25} height={25} />
            <p className="text-[15px] font-semibold">Add Device</p>
          </div>
        </button>
        <button className="flex justify-center items-center bg-gradient-to-b from-[#FFFFFF] to-[#DCEEFF] rounded-lg cursor-pointer transition-all card2-shadow w-[44vw] h-12">
          <div className="flex gap-2 items-center justify-center">
            <Image alt="w" src="/svgs/Group copy.svg" width={25} height={25} />
            <p className="text-[15px] font-semibold">Track All</p>
          </div>
        </button>
      </div>
      <div className="flex gap-[1px] justify-between items-center bg-[#EEF5FC] border-[#267CD1] border-[1px] rounded-lg shadow-[8px_8px_13px_0px_#D1DCDF,-8px_-8px_13px_0px_#FFFFFFCC] w-full p-2">
        <div className="flex gap-2">
          <Image
            alt="Image"
            src="/svgs/ic_round-search.svg"
            width={25}
            height={25}
          />
          <input
            type="text"
            className="placeholder:text-[#9E9E9E] placeholder:text-[12px] text-black bg-[#EEF5FC] border-none focus:outline-none font-poppins"
            placeholder="Search by IMEI/Name/ID No."
            onChange={handleSearch}
            value={searchValue}
          />
        </div>
        <button
          className="flex justify-center items-center text-black"
          onClick={handleClearSearch}
        >
          <Image
            alt="Image"
            src="/svgs/mingcute_close-fill.svg"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </button>
      </div>

      <div className="flex flex-col">
        <div className="w-full">
          <TrackAll
            data={userData}
            current={current}
            handleCurrent={handleCurrent}
            width={"w-[27.5vw]"}
          />
        </div>

        <div className="flex flex-col gap-2 justify-start items-center w-[100%]">
          {current === 1 && renderUserInfo(() => true)}
          {current === 2 && renderUserInfo((user) => user.status === "Active")}
          {current === 3 &&
            renderUserInfo((user) => user.status === "Inactive")}
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-2 mb-4">
        {/* Left Arrow */}
        <button
          className={`w-[10vw] h-[5vh] shadow-[inset_10px_10px_30px_#fff,_inset_-10px_-10px_30px_#AEAEC04D] rounded-md bg-[#F8FEFF] border-#D4E5F6 border-[1px] text-black ${
            currentPage === 1 ? "opacity-50 pointer-events-none" : ""
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          {"<"}
        </button>

        {/* Dynamic Pagination Buttons */}
        {getVisibleButtons().map((page) => (
          <button
            key={page}
            className={`w-[12vw] h-[6vh] shadow-[inset_10px_10px_30px_#fff,_inset_-10px_-10px_30px_#AEAEC04D] rounded-md border-[#D4E5F6] border-[1px] text-black ${
              page === currentPage
                ? "bg-gradient-to-b from-[#FFCC99] to-[#E37302] text-white"
                : "bg-[#EEF5FC]"
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}

        {/* Right Arrow */}
        <button
          className={`w-[10vw] h-[5vh] shadow-[inset_10px_10px_30px_#fff,_inset_-10px_-10px_30px_#AEAEC04D] rounded-md bg-[#F8FEFF] border-#D4E5F6 border-[1px] text-black ${
            currentPage === totalPages ? "opacity-50 pointer-events-none" : ""
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default TrackM;
