"use client";
import React, { useState } from "react";
import Image from "next/image";
import TrackAll from "./trackAll";
import UserInfo from "./userInfo";
import data from "./userdata";
import AddDevice from "./addDevice";
import SecondNavbar from "../desktopComponents/secondNavbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "/src/app/globals.css";

const Sidebar = ({ showTimeLine, handleTimeLine }) => {
  const [userData, setUserData] = useState(data);
  const [openUserId, setOpenUserId] = useState("");
  const [showAddDevice, setShowAddDevice] = useState(false);
  const [current, setCurrent] = useState(1);
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const handleClearSearch = () => {
    setSearchValue(""); // Clear the search input
    setUserData(data); // Reset the userData to the original data
  };

  const closeSideBar = () => {
    setSideBarOpen(false);
  };

  const openSideBar = () => {
    setSideBarOpen(true);
  };

  const router = useRouter();

  const handleCurrent = (value) => setCurrent(value);

  const handleAddDevice = () => setShowAddDevice((prev) => !prev);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchValue(searchValue);
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchValue)
    );
    setUserData(filteredData);
  };

  const handleBack = (e) => {
    e.preventDefault();
    router.back();
  };

  const handleToggle = (id) => {
    setOpenUserId((prev) => (prev === id ? "" : id));
  };

  const renderUserInfo = (filterFn) => {
    return userData
      .filter(filterFn)
      .map((data, index) => (
        <UserInfo
          key={index}
          data={data}
          isOpen={openUserId === data.registration_number}
          onToggle={() => handleToggle(data.registration_number)}
          handleTimeLine={handleTimeLine}
        />
      ));
  };

  return (
    <div className="relative w-[380px] h-auto max-h-screen pt-1 flex flex-col z-10 mx-2 mt-3 overflow-hidden font-poppins">
      {showAddDevice && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={handleAddDevice}
        />
      )}
      <div className="flex justify-center items-center w-full px-4 mb-3">
        <div className="flex justify-between w-full h-[8vh] items-center bg-[#F8FEFF] shadow-[-10px_-10px_30px_0px_#FFFFFF,10px_10px_30px_0px_#AEAEC04D,-5px_-5px_10px_0px_#AEAEC040_inset,5px_5px_10px_0px_#FFFFFF99_inset] relative rounded-lg py-1 px-2">
          <Image
            alt="Image"
            src="/images/avy_image.jpg"
            width={90}
            height={57}
          />
          <div className="flex flex-col text-center justify-center items-center">
            <h2 className="text-black font-source-sans text-[1.2em] font-bold leading-normal">
              YEVA
            </h2>
            <p className="font-source-sans text-[0.7rem] text-black">
              Your Emergency Vigilance Assistant
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full px-4 mb-3">
        <div className="w-full relative rounded-xl bg-[#EEF5FC] border-[#D4E5F6] border-[1px] border-solid box-border h-[6vh] font-source-sans-pro flex justify-between items-center">
          <nav className="pl-[1vw]">
            <Link
              href="/dashboard"
              className="text-[#878787] text-[0.8rem] font-poppins"
            >
              Home
            </Link>
            <span className="font-poppins text-black text-[0.8rem]">
              {" >>"}
            </span>
            <Link href="/" className="text-black text-[0.8rem] font-poppins">
              YEVA
            </Link>
          </nav>
          <button
            className="flex gap-1 mr-[1vw] py-1 px-2 justify-center items-center text-[0.8rem] text-black shadow-[-10px_-10px_30px_0px_#FFFFFF,10px_10px_30px_0px_#AEAEC04D,-10px_-10px_10px_0px_#AEAEC040_inset,5px_5px_10px_0px_#FFFFFF_inset] border-[#D4E5F6] bg-[#F8FEFF] rounded-lg"
            onClick={handleBack}
          >
            <span className="text-black text-[0.8rem]">{"<"}</span>Back
          </button>
        </div>
      </div>

      {sideBarOpen ? (
        <div className="flex flex-col px-4">
          <div className="bg-[#F8FEFF] shadow-[-3px_-3px_7px_0px_#FFFFFF_inset,3px_3px_7px_0px_#D1DCDFC2_inset] relative rounded-lg h-[77vh]">
            <div className="flex justify-between pl-5 pr-2 pt-2">
              <p className="font-poppins font-bold text-[16px] text-black">
                Menu
              </p>
              <button
                className="w-7 h-7 relative shadow-[-10px_-10px_30px_0px_#FFFFFF,10px_10px_30px_0px_#AEAEC04D,-10px_-10px_10px_0px_#AEAEC040_inset,5px_5px_10px_0px_#FFFFFF_inset] rounded-md bg-[#EEF5FC] border-#D4E5F6 border-[1px] border-solid box-border font-source-sans-pro flex justify-center items-center"
                onClick={closeSideBar}
              >
                <Image
                  alt="Image"
                  src="/svgs/mingcute_close-fill.svg"
                  width={25}
                  height={25}
                />
              </button>
            </div>
            <div className="flex justify-between px-2 py-1">
              <div className="flex gap-[1px] items-center bg-[#EEF5FC] border-[#267CD1] border-[1px] rounded-lg shadow-[8px_8px_13px_0px_#D1DCDF,-8px_-8px_13px_0px_#FFFFFFCC]">
                <Image
                  alt="Image"
                  src="/svgs/ic_round-search.svg"
                  width={25}
                  height={25}
                />
                <input
                  type="text"
                  className="placeholder:text-[#9E9E9E] placeholder:text-[12px] text-black bg-[#EEF5FC] border-none focus:outline-none font-poppins"
                  placeholder="Search by IMEI/Name/ID No."
                  onChange={handleSearch}
                  value={searchValue}
                />
                <button
                  className="flex justify-center items-center text-black"
                  onClick={handleClearSearch}
                >
                  <Image
                    alt="Image"
                    src="/svgs/mingcute_close-fill.svg"
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />
                </button>
              </div>
              <div className="flex flex-col justify-center items-center">
                <button
                  className="w-9 h-9 relative shadow-[-10px_-10px_30px_0px_#FFFFFF,10px_10px_30px_0px_#AEAEC04D,-10px_-10px_10px_0px_#AEAEC040_inset,5px_5px_10px_0px_#FFFFFF_inset] rounded-md bg-[#EEF5FC] border-[#D4E5F6] border-[1px] border-solid box-border font-source-sans-pro flex justify-center items-center"
                  onClick={handleAddDevice}
                >
                  <Image
                    alt="Image"
                    src="/svgs/addDevice.svg"
                    width={25}
                    height={25}
                  />
                </button>
                {showAddDevice && (
                  <div className="fixed inset-0 flex justify-center items-center z-50">
                    <AddDevice onClose={() => setShowAddDevice(false)} />
                  </div>
                )}
              </div>
              <button className="w-9 h-9 relative shadow-[-10px_-10px_30px_0px_#FFFFFF,10px_10px_30px_0px_#AEAEC04D,-10px_-10px_10px_0px_#AEAEC040_inset,5px_5px_10px_0px_#FFFFFF_inset] rounded-md bg-[#EEF5FC] border-#D4E5F6 border-[1px] border-solid box-border font-source-sans-pro flex justify-center items-center">
                <Image
                  alt="Image"
                  src="/svgs/Group copy.svg"
                  width={25}
                  height={25}
                />
              </button>
            </div>

            <div className="pl-3 pt-2 w-[full]">
              <TrackAll
                data={userData}
                current={current}
                handleCurrent={handleCurrent}
                width={"w-24"}
              />
            </div>

            <div className="flex flex-col gap-2 justify-start items-center h-[52vh] overflow-y-scroll scrollbar-custom">
              {current === 1 && renderUserInfo(() => true)}
              {current === 2 &&
                renderUserInfo((user) => user.status === "Active")}
              {current === 3 &&
                renderUserInfo((user) => user.status === "Inactive")}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#EEF5FC] border-[1px] border-[#D4E5F6] w-16 h-auto flex flex-col items-center justify-center gap-6 ml-4 p-4 rounded-lg shadow-[10px_10px_30px_#AEAEC066,-10px_-10px_30px_#FFFFFF]">
          <button
            className="flex justify-center items-center w-10 h-10 bg-gradient-to-b from-[#FFFFFF] to-[#DCEEFF] rounded-md cursor-pointer transition-all card2-shadow"
            onClick={openSideBar}
          >
            <Image
              alt="close"
              src="/svgs/quill_hamburger.svg"
              width={30}
              height={30}
            />
          </button>
          <button
            className="flex justify-center items-center w-10 h-10 bg-gradient-to-b from-[#FFFFFF] to-[#DCEEFF] rounded-md cursor-pointer transition-all card2-shadow"
            onClick={openSideBar}
          >
            <Image
              alt="close"
              src="/svgs/iconamoon_search-light.svg"
              width={30}
              height={30}
            />
          </button>
          <button
            className="flex justify-center items-center w-10 h-10 bg-gradient-to-b from-[#FFFFFF] to-[#DCEEFF] rounded-md cursor-pointer transition-all card2-shadow"
            onClick={handleAddDevice}
          >
            <Image
              alt="close"
              src="/svgs/addDevice.svg"
              width={30}
              height={30}
            />
          </button>
          {showAddDevice && (
            <div className="fixed inset-0 flex justify-center items-center z-50">
              <AddDevice onClose={() => setShowAddDevice(false)} />
            </div>
          )}
          <button className="flex justify-center items-center w-10 h-10 bg-gradient-to-b from-[#FFFFFF] to-[#DCEEFF] rounded-md cursor-pointer transition-all card2-shadow">
            <Image
              alt="close"
              src="/svgs/Group copy.svg"
              width={30}
              height={30}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
