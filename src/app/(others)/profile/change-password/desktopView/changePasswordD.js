import React from "react";

const InputField = ({ width, type, id, placeholder, label }) => {
  return (
    <div className="flex flex-col mb-1">
      <label
        className="block text-black font-bold mb-1 text-[15px] font-dm-sans"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={`${width} py-3 px-2 border-t-[3px] border-l-[3px] border-b-[1px] border-r-[1px] rounded-md shadow-[inset_-5px_-5px_13px_0px_#FFFFFF,_inset_3px_3px_13px_0px_#DFD6D199] placeholder:text-[#9E9E9E] placeholder:text-[14px] text-black`}
        placeholder={placeholder}
      />
    </div>
  );
};

const ChangePasswordD = () => {
  return (
    <div className="flex flex-col justify-center pl-[5vw] pr-[5vw] mb-[10vh]">
      <div className="bg-[#EEF5FC] relative w-[90vw] h-auto shadow-[inset_-10px_-10px_10px_0px_#AEAEC040,_inset_10px_10px_10px_0px_#FFFFFF,_10px_10px_30px_0px_#AEAEC04D,_-10px_-10px_30px_0px_#FFFFFF] rounded-xl flex flex-col p-12 font-dm-sans mb-[5vh]">
        <h1 className="text-[#002E5B] font-dm-sans font-bold text-center pt-[4vh] text-[1.5rem] mb-4">
          Profile
        </h1>
        <form className="flex flex-col gap-6 w-[100%]">
          <InputField
            width={"w-[35vw]"}
            id={"currentPassword"}
            type={"text"}
            placeholder={"Enter your current password"}
            label={"Current Password"}
          />
          <div className="flex justify-between w-[100%] flex-wrap">
            <InputField
              width={"w-[35vw]"}
              id={"newPassword"}
              type={"text"}
              placeholder={"Enter your new password"}
              label={"New password"}
            />
            <InputField
              width={"w-[35vw]"}
              id={"confirmPassword"}
              type={"text"}
              placeholder={"Enter your new password"}
              label={"Confirm Password"}
            />
          </div>
          <div className="flex justify-center items-center w-[full]">
            <button
              type="submit"
              className="w-[20vw] bg-gradient-to-b from-[#FFCC99] to-[#E37302] text-white py-2 px-4 rounded hover:bg-orange-600 transition mb-2 text-[14px]"
            >
              Save
            </button>
          </div>
        </form>{" "}
      </div>
    </div>
  );
};

export default ChangePasswordD;
