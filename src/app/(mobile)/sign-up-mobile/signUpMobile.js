"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const InputField = ({ width, type, id, placeholder, label, required }) => {
  return (
    <div className="flex flex-col mb-1">
      <label
        className="block text-black font-bold mb-1 text-[14px] font-dm-sans"
        htmlFor={label}
      >
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        className={`${width} px-[2px] py-[5px] border-t-[3px] border-l-[3px] border-b-[1px] border-r-[1px] rounded-md shadow-[inset_-5px_-5px_13px_0px_#FFFFFF,_inset_3px_3px_13px_0px_#DFD6D199] placeholder:text-[#9E9E9E] placeholder:text-[12px]`}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default function SignUpM() {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const router = useRouter();

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    router.push("/sign-in");
  };

  const handleOtpPage = (e) => {
    e.preventDefault();
    router.push("/otp");
  };

  return (
    <div className="absolute inset-0 flex items-center justify-start p-4 mt-[50vh]">
      <div className="bg-[#FDFEFF] shadow-lg rounded-lg py-4 px-4 w-[95%] max-w-md h-auto">
        <h1 className="text-2xl font-bold text-center mb-4">Sign Up</h1>
        <form className="flex flex-col gap-1 px-[5vw]">
          <InputField
            width={"w-full"}
            id={"username"}
            type={"text"}
            placeholder={"Enter your username"}
            label={"Username"}
            required
          />
          <InputField
            width={"w-full"}
            id={"email"}
            type={"email"}
            placeholder={"Enter your email"}
            label={"Email"}
            required
          />
          <InputField
            width={"w-full"}
            id={"mobile"}
            type={"tel"}
            placeholder={"Enter your mobile no"}
            label={"Mobile No"}
            required
          />

          <div className="mb-1">
            <div className="flex justify-between w-full">
              <label
                className="block text-black font-bold mb-1 text-[10px] font-dm-sans"
                htmlFor="password"
              >
                Password
              </label>
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="text-[#666666CC] text-[10px] mt-1 focus:outline-none"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <input
              type={showPassword ? "text" : "password"}
              id="confirm-password"
              className="w-full px-[2px] py-[5px] border-t-[3px] border-l-[3px] border-b-[2px] border-r-[2px] rounded-lg shadow-[inset_-5px_-5px_13px_0px_#FFFFFF,_inset_3px_3px_13px_0px_#DFD6D199] placeholder:text-[#9E9E9E] placeholder:text-[12px]"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex justify-between w-full">
            <InputField
              width={"w-[33vw]"}
              id={"country"}
              type={"text"}
              placeholder={"Enter country"}
              label={"Country"}
              required
            />
            <InputField
              width={"w-[33vw]"}
              id={"state"}
              type={"text"}
              placeholder={"Enter State"}
              label={"State"}
              required
            />
          </div>
          <InputField
            width={"w-full"}
            id={"address"}
            type={"text"}
            placeholder={"Enter address"}
            label={"Address"}
            required
          />

          <InputField
            width={"w-full"}
            id={"pincode"}
            type={"text"}
            placeholder={"Enter pincode"}
            label={"Pincode"}
            required
          />
          <label className="block text-black font-bold mb-1 text-[14px] font-dm-sans">
            Usage
          </label>
          <div className="flex justify-between mb-4">
            {/* Personal Option */}
            <div
              className="flex items-center cursor-pointer"
              onClick={() => handleSelect("personal")}
            >
              <div
                className={`w-4 h-4 rounded-full border-2 border-blue-500 relative transition-all`}
              >
                {selectedOption === "personal" && (
                  <div className="absolute inset-0 m-auto w-[60%] h-[60%] rounded-full bg-[#FF9933]"></div>
                )}
              </div>
              <label className="ml-2 text-black font-medium text-[14px]">
                Personal
              </label>
            </div>

            {/* Organizational Option */}
            <div
              className="flex items-center cursor-pointer"
              onClick={() => handleSelect("organizational")}
            >
              <div
                className={`w-4 h-4 rounded-full border-2 border-blue-500 relative transition-all`}
              >
                {selectedOption === "organizational" && (
                  <div className="absolute inset-0 m-auto w-[60%] h-[60%] rounded-full bg-[#FF9933]"></div>
                )}
              </div>
              <label className="ml-2 text-black font-medium text-[14px]">
                Organizational
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-b from-[#FFCC99] to-[#E37302] text-white py-3 px-4 rounded hover:bg-orange-600 transition mb-4 text-[14px]"
            onClick={handleOtpPage}
          >
            Create Account
          </button>
        </form>
        <div className="flex gap-1 justify-center">
          <p className="font-dm-sans text-[14px]">Already have an account?</p>
          <button className="text-blue-700 text-[14px]" onClick={handleSignIn}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
