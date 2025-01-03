"use client";

import React, { useState } from "react";
import ProductData from "../productData";
import { useRouter } from "next/navigation";
import Details from "./detailsBar";
import AddDevice from "@/components/mapComponents/addDevice";

const ProductD = () => {
  const [data] = useState(ProductData[0]); // Extract the first array
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddDevice, setShowAddDevice] = useState(false);
  const itemsPerPage = 5; // Number of items per page
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleAddDevice = () => setShowAddDevice((prev) => !prev);

  const router = useRouter();

  const handleBack = (e) => {
    e.preventDefault();
    router.back();
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Get the current items based on the page
  const currentItems = data.slice(
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

  return (
    <div className="flex flex-col justify-center items-center w-full pt-1 px-4 gap-[5vh] mb-[15vh]">
      {showAddDevice && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={handleAddDevice}
        />
      )}
      <div className="flex justify-center items-center w-[90%] h-[27vh] rounded-lg bg-[#F8FEFF] shadow-[inset_-10px_-10px_10px_0px_#AEAEC040,_inset_10px_10px_10px_0px_#FFFFFF,_10px_10px_30px_0px_#AEAEC04D,_-10px_-10px_30px_0px_#FFFFFF]">
        <div className="flex flex-col justify-center items-center gap-3">
          <h2 className="font-sans font-semibold text-[1.7rem] text-black">
            Devices
          </h2>
          <div className="flex justify-center items-center gap-6 pb-2">
            <div className="flex flex-col justify-center items-center">
              <p className="text-[16px] text-[#035EB8]">Total Devices</p>
              <p className="text-black text-[22px] font-bold font-sans ">
                {data.length}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-[16px] text-[#035EB8]">Inactive Devices</p>
              <p className="text-black text-[22px] font-bold font-sans ">
                {data.filter((item) => item.status === "Inactive").length}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-[16px] text-[#035EB8]">Active Devices</p>
              <p className="text-black text-[22px] font-bold font-sans ">
                {data.filter((item) => item.status === "Active").length}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-3 w-[90%]">
        <div className="flex justify-between items-center pl-[5vw] pr-[5vw] w-full">
          <h2 className="font-sans font-bold text-[24px] text-black">
            Devices
          </h2>
          <button
            className="text-[#FDFEFF] bg-gradient-to-b from-[#FFCC99] to-[#E37302] rounded-lg py-2 px-4"
            onClick={handleAddDevice}
          >
            Add User
          </button>
          {showAddDevice && (
            <div className="fixed inset-0 flex justify-center items-center z-50">
              <AddDevice onClose={() => setShowAddDevice(false)} />
            </div>
          )}
        </div>

        {currentItems.map((item, index) => (
          <Details key={index} data={item} />
        ))}

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-4 mt-4">
          {/* Left Arrow */}
          <button
            className={`w-[3vw] h-[6vh] shadow-[inset_10px_10px_30px_#fff,_inset_-10px_-10px_30px_#AEAEC04D] rounded-md bg-[#F8FEFF] border-#D4E5F6 border-[1px] text-black ${
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
              className={`w-[4vw] h-[8vh] shadow-[inset_10px_10px_30px_#fff,_inset_-10px_-10px_30px_#AEAEC04D] rounded-md border-[#D4E5F6] border-[1px] lg:w-[4vw] lg:h-[8vh] md:w-[5vw] md:h-[7vh] text-black ${
                page === currentPage
                  ? "bg-gradient-to-b from-[#FFCC99] to-[#E37302] text-white"
                  : "bg-[#F8FEFF]"
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}

          {/* Right Arrow */}
          <button
            className={`w-[3vw] h-[6vh] shadow-[inset_10px_10px_30px_#fff,_inset_-10px_-10px_30px_#AEAEC04D] rounded-md bg-[#F8FEFF] border-#D4E5F6 border-[1px] text-black ${
              currentPage === totalPages ? "opacity-50 pointer-events-none" : ""
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductD;
