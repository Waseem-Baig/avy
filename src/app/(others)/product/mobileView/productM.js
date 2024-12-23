"use client";

import React, { useState } from "react";
import ProductData from "../productData";
import { useRouter } from "next/navigation";
import DetailsM from "./detailsBarM";

const ProductM = () => {
  const [data] = useState(ProductData[0]); // Extract the first array
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page
  const totalPages = Math.ceil(data.length / itemsPerPage);

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
      <div className="flex justify-center items-center w-full h-[27vh] rounded-lg bg-[#EEF5FC] shadow-[inset_-10px_-10px_10px_0px_#AEAEC040,_inset_10px_10px_10px_0px_#FFFFFF,_10px_10px_30px_0px_#AEAEC04D,_-10px_-10px_30px_0px_#FFFFFF]">
        <div className="flex flex-col justify-center items-center gap-3">
          <h2 className="font-sans font-semibold text-[1.7rem] text-[#002E5B]">
            Devices
          </h2>
          <div className="flex justify-center items-center gap-3 p-4">
            <div className="flex flex-col justify-center items-center border-[#FBE7D4] border-[1px] bg-[#FDFEFF] w-[28vw] px-6 py-1 shadow-[-2px_-2px_13px_0px_#FFFFFF_inset,_1px_1px_13px_0px_#D1DCDF_inset]">
              <p className="text-[16px] text-[#035EB8] text-center font-sans">
                Total Devices
              </p>
              <p className="text-black text-[24px] font-bold font-sans">
                {data.length}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center border-[#FBE7D4] border-[1px] bg-[#FDFEFF] w-[28vw] px-6 py-1 shadow-[-2px_-2px_13px_0px_#FFFFFF_inset,_1px_1px_13px_0px_#D1DCDF_inset]">
              <p className="text-[16px] text-[#035EB8] text-center font-sans">
                Inactive Devices
              </p>
              <p className="text-black text-[22px] font-bold font-sans ">
                {data.filter((item) => item.status === "Inactive").length}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center border-[#FBE7D4] border-[1px] bg-[#FDFEFF] w-[28vw] px-6 py-1 shadow-[-2px_-2px_13px_0px_#FFFFFF_inset,_1px_1px_13px_0px_#D1DCDF_inset]">
              <p className="text-[16px] text-[#035EB8] text-center font-sans">
                Active Devices
              </p>
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
          <button className="text-[#FDFEFF] bg-gradient-to-b from-[#FFCC99] to-[#E37302] rounded-lg py-2 px-4">
            Add User
          </button>
        </div>

        {currentItems.map((item, index) => (
          <DetailsM key={index} data={item} />
        ))}

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-4 mt-4">
          {/* Left Arrow */}
          <button
            className={`w-[12vw] h-[6vh] rounded-md bg-[#EEF5FC] border-[1px] text-black ${
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
              className={`w-[12vw] h-[6vh] rounded-md border-[1px] text-black ${
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
            className={`w-[12vw] h-[6vh] rounded-md bg-[#EEF5FC] border-[1px] text-black ${
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

export default ProductM;
