"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

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
        } md:p-[6px] sm:p-[2px] xs:p-[2px] py-2 border rounded shadow-[inset_-5px_-5px_13px_0px_#FFFFFF,_inset_3px_3px_13px_0px_#DFD6D199] placeholder:text-[#9E9E9E] placeholder:text-[12px]`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default function SignUp() {
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
    <div className="absolute inset-0 flex items-center justify-center p-4 md:top-1/2 md:left-1/4 md:transform md:-translate-y-1/2 md:-translate-x-1/2 md:w-auto md:max-w-md">
      <div className="bg-[linear-gradient(117.14deg,_#FFFFFF_0%,_#DCEEFF_100%)] shadow-lg rounded-lg py-4 px-4 w-[28vw] h-[auto] flex flex-col justify-start items-center md:w-[28vw] sm:w-[35vw] xs:w-[40vw]">
        <h1 className="text-xl font-bold text-center">Sign Up</h1>
        <form className="flex flex-col gap-1">
          <InputField
            width={"w-[22vw]"}
            id={"username"}
            type={"text"}
            placeholder={"Enter your username"}
            label={"Username"}
          />
          <InputField
            width={"w-[22vw]"}
            id={"email"}
            type={"text"}
            placeholder={"Enter your email"}
            label={"Email"}
          />
          <InputField
            width={"w-[22vw]"}
            id={"monile"}
            type={"text"}
            placeholder={"Enter your mobile no"}
            label={"Mobile No"}
          />

          <div className="mb-1">
            <div className="flex justify-between w-full">
              <label
                className="block text-black font-bold mb-1 text-[13px] font-dm-sans"
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
              className="w-[22vw] p-[7px] border rounded shadow-[inset_-5px_-5px_13px_0px_#FFFFFF,_inset_3px_3px_13px_0px_#DFD6D199] placeholder:text-[#9E9E9E] placeholder:text-[12px]"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-between w-full">
            <InputField
              width={"w-[10vw]"}
              id={"country"}
              type={"text"}
              placeholder={"Enter country"}
              label={"Country"}
            />
            <InputField
              width={"w-[10vw]"}
              id={"state"}
              type={"text"}
              placeholder={"Enter State"}
              label={"State"}
            />
          </div>
          <InputField
            width={"w-[22vw]"}
            id={"address"}
            type={"text"}
            placeholder={"Enter address"}
            label={"Address"}
          />

          <div className="flex justify-between">
            <InputField
              width={"w-[10vw]"}
              id={"pincode"}
              type={"text"}
              placeholder={"Enter pincode"}
              label={"Pincode"}
            />
            <div className="flex flex-col gap-2 mb-4">
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

          <button
            type="submit"
            className="w-[22vw] bg-gradient-to-b from-[#FFCC99] to-[#E37302] text-white py-2 px-4 rounded hover:bg-orange-600 transition mb-2 text-[14px] lg:text-[14px] md:text-[12px] sm:text-[10px] xs:text-[8px] lg:w-[22vw] md:w-[20vw] sm:w-[20vw]"
            onClick={handleOtpPage}
          >
            Create Account
          </button>
        </form>
        <div className="flex gap-1">
          <p className="font-dm-sans text-[14px] lg:text-[14px] md:text-[12px] sm:text-[10px] xs:text-[8px]">
            Already have an account?
          </p>
          <button
            className="text-blue-700 text-[14px] lg:text-[14px] md:text-[12px] sm:text-[10px] xs:text-[8px]"
            onClick={handleSignIn}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
