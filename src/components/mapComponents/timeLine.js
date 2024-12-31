import React from "react";

const TimeLine = ({ onClose }) => {
  return (
    <div
      className="flex flex-col gap-2 w-96 relative rounded-lg bg-white h-auto text-center text-[20px] text-black font-source-sans-pro shadow-lg px-6 py-4 z-50"
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the popup
    >
      <div className="w-full text-[20px] underline leading-[100%] font-semibold font-source-sans-pro text-black text-start flex justify-between items-center">
        <p>TimeLine</p>
        <button onClick={onClose}>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.6 28.5L7.5 26.4L15.9 18L7.5 9.6L9.6 7.5L18 15.9L26.4 7.5L28.5 9.6L20.1 18L28.5 26.4L26.4 28.5L18 20.1L9.6 28.5Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <div className="flex gap-6">
        <LabelledInput label="From :" type="date" />
        <LabelledInput label="Time :" type="time" />
      </div>
      <div className="flex gap-6">
        <LabelledInput label="To :" type="date" />
        <LabelledInput label="Time :" type="time" />
      </div>
      <div className="flex w-full justify-center items-center mt-2">
        <button
          className="bg-gradient-to-b from-[#FFCC99] to-[#E37302] text-white py-2 px-4 hover:bg-orange-600 transition p-2 text-[1rem] rounded-md font-bold"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the button
        >
          Apply Changes
        </button>
      </div>
    </div>
  );
};

const LabelledInput = ({ label, type }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-source-sans-pro text-base font-normal text-left">
        {label}
      </label>
      <label className="flex items-center gap-2 bg-[#F6FAFD] p-2 rounded-md w-40 cursor-pointer border-t-[3px] border-l-[3px] border-b-[1px] border-r-[1px] shadow-[inset_-5px_-5px_13px_0px_#FFFFFF,_inset_3px_3px_13px_0px_#DFD6D199]">
        <input
          type={type}
          className="text-[15px] font-source-sans bg-transparent focus:outline-none w-full"
          onClick={(e) => e.stopPropagation()} // Prevents unintended propagation
        />
      </label>
    </div>
  );
};

export default TimeLine;
