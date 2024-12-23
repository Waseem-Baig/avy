"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const InputField = ({ width, type, id, placeholder, label }) => {
  return (
    <div className="flex flex-col mb-1">
      <label
        className="block text-black font-bold mb-1 text-[13px] font-dm-sans"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={`${width} md:${width} sm:${
          width === "w-[22vw]" ? "w-[28vw]" : "w-[13vw]"
        } xs:${
          width === "w-[22vw]" ? "w-[30vw]" : "w-[20vw]"
        } md:p-[6px] sm:p-[2px] xs:p-[2px] py-2 border-t-[3px] border-l-[3px] border-b-[1px] border-r-[1px] rounded-md shadow-[inset_-5px_-5px_13px_0px_#FFFFFF,_inset_3px_3px_13px_0px_#DFD6D199] placeholder:text-[#9E9E9E] placeholder:text-[12px] text-black`}
        placeholder={placeholder}
      />
    </div>
  );
};

const ProfileD = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const router = useRouter();

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handlechangePassword = (e) => {
    e.preventDefault();
    router.push("/profile/change-password");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-[7vh] pl-[5vw] pr-[5vw] mb-[15vh]">
      <div className="bg-[#EEF5FC] relative w-[87vw] h-auto shadow-[-10px_-10px_30px_#FFFFFF,10px_10px_30px_#AEAEC04D,inset_-10px_-10px_10px_#AEAEC040,inset_10px_10px_10px_#FFFFFF] rounded-xl flex flex-col py-4 px-32 pb-[10vh]">
        <h1 className="text-[#002E5B] font-dm-sans font-bold text-center pt-[4vh] text-[1.7rem]">
          Profile
        </h1>
        <form className="flex flex-col gap-4 w-[100%]">
          <div className="flex justify-between">
            <InputField
              width={"w-[25vw]"}
              id={"username"}
              type={"text"}
              placeholder={"Enter your username"}
              label={"Name"}
            />
            <InputField
              width={"w-[25vw]"}
              id={"email"}
              type={"text"}
              placeholder={"Enter your email"}
              label={"Email"}
            />
          </div>
          <div className="flex justify-between">
            <InputField
              width={"w-[25vw]"}
              id={"monile"}
              type={"text"}
              placeholder={"Enter your mobile no"}
              label={"Mobile No"}
            />
            <div className="flex gap-5 justify-center items-center mb-4 w-[50%]">
              {/* Personal Option */}
              <div
                className="flex items-center cursor-pointer"
                onClick={() => handleSelect("personal")}
              >
                <div
                  className={`w-4 h-4 rounded-full border-2 border-blue-500 relative transition-all md:w-4 md:h-4 sm:w-3 sm:h-3`}
                >
                  {selectedOption === "personal" && (
                    <div className="absolute inset-0 m-auto w-[60%] h-[60%] rounded-full bg-[#FF9933]"></div>
                  )}
                </div>
                <label className="ml-2 text-black font-medium lg:text-[14px] md:text-[12px] sm:text-[10px] xs:text-[10px]">
                  Personal
                </label>
              </div>

              {/* Organizational Option */}
              <div
                className="flex items-center cursor-pointer"
                onClick={() => handleSelect("organizational")}
              >
                <div
                  className={`w-4 h-4 rounded-full border-2 border-blue-500 relative transition-all md:w-4 md:h-4 sm:w-3 sm:h-3`}
                >
                  {selectedOption === "organizational" && (
                    <div className="absolute inset-0 m-auto w-[60%] h-[60%] rounded-full bg-[#FF9933]"></div>
                  )}
                </div>
                <label className="ml-2 text-black font-medium lg:text-[14px] md:text-[12px] sm:text-[10px] xs:text-[10px]">
                  Organizational
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between ">
            <InputField
              width={"w-[15vw]"}
              id={"country"}
              type={"text"}
              placeholder={"Enter country"}
              label={"Country"}
            />
            <InputField
              width={"w-[15vw]"}
              id={"state"}
              type={"text"}
              placeholder={"Enter State"}
              label={"State"}
            />
            <InputField
              width={"w-[15vw]"}
              id={"city"}
              type={"text"}
              placeholder={"Enter city"}
              label={"City"}
            />

            <InputField
              width={"w-[15vw]"}
              id={"pincode"}
              type={"text"}
              placeholder={"Enter pincode"}
              label={"Pincode"}
            />
          </div>
          <InputField
            width={"w-[full]"}
            id={"address"}
            type={"text"}
            placeholder={"Enter Address"}
            label={"Address"}
          />

          <button
            type="submit"
            className="w-[15vw] bg-gradient-to-b from-[#FFCC99] to-[#E37302] text-white py-2 px-4 rounded hover:bg-orange-600 transition mb-2 text-[14px]"
          >
            Save
          </button>
        </form>
      </div>
      <button onClick={handlechangePassword}>
        <div className="bg-[#EEF5FC] relative w-[87vw] h-auto shadow-[-10px_-10px_30px_#FFFFFF,10px_10px_30px_#AEAEC04D,inset_-10px_-10px_10px_#AEAEC040,inset_10px_10px_10px_#FFFFFF] rounded-xl flex justify-between items-center py-[4vh] px-32">
          <h1 className="text-[#002E5B] text-center text-[1.5rem] font-sans font-bold">
            Change Password
          </h1>
          <p className="text-black text-[2rem] font-sans font-bold">{">"}</p>
        </div>
      </button>
    </div>
  );
};

export default ProfileD;
