"use client";
import React, { useState } from "react";
import Image from "next/image";

const AddDevice = ({ onClose }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  return (
    <div
      className="flex flex-col gap-2 w-auto relative rounded-xl bg-white h-auto text-center text-[20px] text-black font-source-sans-pro shadow-lg px-6 py-[2.5rem] px-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="w-full text-[20px] underline leading-[100%] font-semibold font-source-sans-pro text-black flex justify-between items-center">
        <p>Add Device</p>
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
      <div className="flex gap-[2.5rem]">
        <TextInput label="Name" placeholder="Enter your full name" />
        <TextInput label="IMEI Number" placeholder="Enter IMEI Number" />
      </div>
      <div className="flex gap-[2.5rem]">
        <TextInput label="Unique ID CODE" placeholder="Enter ID Code" />
        <TextInput
          label="Emergency Number"
          placeholder="Enter Emergency Number"
        />
      </div>
      <div className="flex gap-[2.5rem]">
        <TextInput label="Emergency Mail ID" placeholder="Enter mail ID" />
        <div className="flex flex-col gap-1 items-start">
          <label className="block text-black font-bold text-[13px] font-dm-sans">
            Profile Picture
            <span className="text-red-600 text-[15px]">*</span>
          </label>
          <ProfilePictureInput
            file={file}
            onFileChange={handleFileChange}
            onRemoveFile={handleRemoveFile}
          />
        </div>
      </div>
      <div className="w-full flex justify-center mt-2">
        <button className="bg-gradient-to-b from-[#FFCC99] to-[#E37302] text-white py-2 px-4 rounded hover:bg-orange-600 transition w-[50%] text-[16px] mt-2">
          Add
        </button>
      </div>
    </div>
  );
};

const TextInput = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col mb-1 items-start">
      <label
        className="block text-black font-bold mb-1 text-[13px] font-dm-sans"
        htmlFor={label}
      >
        {label}
        <span className="text-red-600 text-[15px]">*</span>
      </label>
      <input
        type="text"
        id={placeholder}
        className={`w-[25vw] md:p-[6px] sm:p-[2px] xs:p-[2px] py-2 border-t-[3px] border-l-[3px] border-b-[1px] border-r-[1px] rounded-md shadow-[inset_-5px_-5px_13px_0px_#FFFFFF,_inset_3px_3px_13px_0px_#DFD6D199] placeholder:text-[#9E9E9E] placeholder:text-[12px] text-black`}
        placeholder={placeholder}
      />
    </div>
  );
};

const ProfilePictureInput = ({ file, onFileChange, onRemoveFile }) => {
  return (
    <label className="border-4 border-dotted rounded-lg sm:w-56 md:w-[25vw] p-4 flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-4 md:p-[6px] sm:p-[2px] xs:p-[2px] py-2 cursor-pointer">
      <div className="flex flex-col items-center sm:flex-row sm:items-start gap-4 pt-4">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.25 19V6.3674L7.22002 10.3974L5.05002 8.1499L12.8 0.399902L20.55 8.1499L18.38 10.3974L14.35 6.3674V19H11.25ZM3.50002 25.1999C2.64752 25.1999 1.91799 24.8966 1.31142 24.2901C0.704857 23.6835 0.401058 22.9534 0.400024 22.0999V17.4499H3.50002V22.0999H22.1V17.4499H25.2V22.0999C25.2 22.9524 24.8967 23.6825 24.2902 24.2901C23.6836 24.8976 22.9536 25.2009 22.1 25.1999H3.50002Z"
            fill="black"
          />
        </svg>
        <div className="flex flex-col gap-1">
          <p className="text-[12px] text-gray-600">
            Upload your profile picture
          </p>
          <p className="text-[12px] text-gray-500">(Only jpg, png)</p>
        </div>
      </div>
      <input
        type="file"
        accept="image/jpeg, image/png"
        className="hidden"
        onChange={onFileChange}
      />
      {file ? (
        <div className="flex items-center gap-4">
          <Image
            alt="uploaded file"
            src={URL.createObjectURL(file)}
            width={40}
            height={40}
            className="rounded-md object-cover"
          />
          <div className="flex flex-col items-start">
            <p className="text-[12px] font-medium text-gray-700">{file.name}</p>
            <button
              className="text-[12px] text-red-500 underline hover:text-red-700"
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the file input
                onRemoveFile();
              }}
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <Image
            alt="user placeholder"
            src="/images/user.jpg"
            width={40}
            height={40}
            className="rounded-md object-cover"
          />
          <p className="text-[12px] text-gray-500">No file uploaded</p>
        </div>
      )}
    </label>
  );
};

export default AddDevice;
