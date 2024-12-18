import React from "react";

const Frame = ({ onClose }) => {
  return (
    <div
      className="flex flex-col gap-2 w-[30vw] relative rounded-lg bg-[#F6F6F6] h-auto text-center text-[20px] text-black font-source-sans-pro shadow-lg px-6 py-4"
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
          className="bg-[#007AFF] text-white p-2 text-[1rem] rounded-md"
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
    <div className="flex flex-col">
      <label className="font-source-sans-pro text-base font-normal text-left">
        {label}
      </label>
      <div className="flex justify-between">
        <div className="flex items-center gap-2 bg-[#D9D9D9] p-2 rounded-lg w-[12vw] justify-between">
          <input
            type={type}
            className="text-[15px] font-source-sans bg-transparent focus:outline-none"
            style={{ width: "100%" }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the input
          />
        </div>
      </div>
    </div>
  );
};

export default Frame;
