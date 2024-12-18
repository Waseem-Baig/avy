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
      className="flex flex-col gap-2 w-[60vw] relative rounded-lg bg-[#F6F6F6] h-auto text-center text-[20px] text-black font-source-sans-pro shadow-lg px-6 py-4"
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
      <div className="flex justify-between">
        <TextInput label="Name" placeholder="Enter your full name" />
        <TextInput label="IMEI Number" placeholder="Enter IMEI Number" />
      </div>
      <div className="flex justify-between">
        <TextInput label="Unique ID CODE" placeholder="Enter ID Code" />
        <TextInput
          label="Emergency Number (Guardian)"
          placeholder="Enter Emergency Number"
        />
      </div>
      <div className="flex justify-between">
        <TextInput
          label="Guardian Mail ID (Parental Access)"
          placeholder="Enter mail ID"
        />
        <ProfilePictureInput
          file={file}
          onFileChange={handleFileChange}
          onRemoveFile={handleRemoveFile}
        />
      </div>
      <div className="w-full flex justify-end mt-2">
        <button className="bg-black w-[13%] py-1 text-white text-[16px]">
          Add
        </button>
      </div>
    </div>
  );
};

const TextInput = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col gap-1 items-start">
      <label className="font-source-sans text-[15px]">
        {label}
        <span className="text-red-600 text-[15px]">*</span>
      </label>
      <input
        type="text"
        className="bg-[#B5B5B54D] w-[25vw] p-2 placeholder:text-[#646464] placeholder:text-[12px] placeholder:font-source-sans"
        placeholder={placeholder}
      />
    </div>
  );
};

const ProfilePictureInput = ({ file, onFileChange, onRemoveFile }) => {
  return (
    <div className="border-2 border-dotted rounded-md w-auto p-2 flex justify-between gap-2">
      <label
        className={`flex flex-col gap-4 cursor-pointer ${file ? "hidden" : ""}`}
      >
        <p className="text-[16px] text-start pl-2">Profile Picture*</p>
        <div className="flex gap-8 pl-3">
          <svg
            width="20"
            height="20"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.25 19V6.3674L7.22002 10.3974L5.05002 8.1499L12.8 0.399902L20.55 8.1499L18.38 10.3974L14.35 6.3674V19H11.25ZM3.50002 25.1999C2.64752 25.1999 1.91799 24.8966 1.31142 24.2901C0.704857 23. 6835 0.401058 22.9534 0.400024 22.0999V17.4499H3.50002V22.0999H22.1V17.4499H25.2V22.0999C25.2 22.9524 24.8967 23.6825 24.2902 24.2901C23.6836 24.8976 22.9536 25.2009 22.1 25.1999H3.50002Z"
              fill="black"
            />
          </svg>
          <div className="flex flex-col gap-1">
            <p className="text-[12px] font-source-sans">
              Upload your profile picture
            </p>
            <p className="text-[12px] font-source-sans">(Only jpg, Png)</p>
          </div>
        </div>
        <input
          type="file"
          accept="image/jpeg, image/png"
          className="hidden"
          onChange={onFileChange}
        />
      </label>
      {file ? (
        <div className="flex items-center gap-4">
          <Image
            alt="uploaded file"
            src={URL.createObjectURL(file)}
            width={70}
            height={40}
          />
          <div className="flex flex-col">
            <p className="text-[12px] font-source-sans">{file.name}</p>
            <button
              className="text-[12px] text-red-500 underline"
              onClick={onRemoveFile}
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        <Image alt="user" src="/images/user.jpg" width={70} height={40} />
      )}
    </div>
  );
};

export default AddDevice;
