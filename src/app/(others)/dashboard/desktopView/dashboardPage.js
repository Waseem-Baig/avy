"use client";
import React, { useState } from "react";
import Card1 from "./card1";
import Card2 from "./card2";
import { useRouter } from "next/navigation";

const DashBoardD = () => {
  const [selectedCard1, setSelectedCard1] = useState(null);
  const [selectedCard2, setSelectedCard2] = useState(null);
  const router = useRouter();

  const handleCard1Click = (id) => {
    setSelectedCard1(id);

    if (id === 0) router.push("/product");
    else if (id === 1) router.push("/vahi");
    else if (id === 2) router.push("/tagit");
  };

  const handleCard2Click = (id) => {
    setSelectedCard2(id);

    if (id === 0) router.push("/official-website");
    else if (id === 1) router.push("/profile");
    else if (id === 2) router.push("/terms&conditions");
    else if (id === 3) router.push("/contact-us");
    else if (id === 4) router.push("/sign-in");
  };

  return (
    <div className="flex justify-between pl-[5vw] pr-[5vw] mb-[15vh]">
      {/* Left Container */}
      <div className="bg-[#EEF5FC] relative w-[60vw] h-auto shadow-[inset_10px_10px_20px_#fff,_inset_-10px_-10px_20px_#AEAEC04D] rounded-xl flex flex-col gap-6 pl-[2vw] pr-[2vw] pb-[8vh]">
        <h1 className="text-[#002E5B] font-dm-sans font-bold text-center pt-[4vh] text-[2rem]">
          Track your devices
        </h1>
        <div className="flex flex-grow justify-between pl-[2vw] pr-[2vw]">
          <button onClick={() => handleCard1Click(0)}>
            <Card1
              id={0}
              title={"Yeva"}
              text={"Smart gps id card"}
              icon={"/svgs/fluent-mdl2_contact-card.svg"}
              width={40}
              height={40}
              isSelected={selectedCard1 === 0}
            />
          </button>
          <button onClick={() => handleCard1Click(1)}>
            <Card1
              id={1}
              title={"Vahi"}
              text={"Vehicle tracking device"}
              icon={"/svgs/Vector1.svg"}
              width={20}
              height={20}
              isSelected={selectedCard1 === 1}
            />
          </button>
        </div>
        <div className="flex justify-center items-center w-full">
          <button onClick={() => handleCard1Click(2)}>
            <Card1
              id={2}
              title={"TagIT"}
              text={"Nearby bluetooth tracker"}
              icon={"/svgs/Shape.svg"}
              width={30}
              height={30}
              isSelected={selectedCard1 === 2}
            />
          </button>
        </div>
      </div>

      {/* Right Container */}
      <div className="bg-[#EEF5FC] relative w-[25vw] h-auto shadow-[inset_10px_10px_20px_#fff,_inset_-10px_-10px_20px_#AEAEC04D] rounded-lg border-#D4E5F6 border-[1px] border-solid box-border flex flex-col justify-center items-center gap-5">
        <button onClick={() => handleCard2Click(0)}>
          <Card2
            id={0}
            text={"Official Website"}
            icon={"/svgs/gg_website.svg"}
            width={30}
            height={30}
            isSelected={selectedCard2 === 0}
          />
        </button>
        <button onClick={() => handleCard2Click(1)}>
          <Card2
            id={1}
            text={"Profile & Settings"}
            icon={"/svgs/Group.svg"}
            width={30}
            height={30}
            isSelected={selectedCard2 === 1}
          />
        </button>
        <button onClick={() => handleCard2Click(2)}>
          <Card2
            id={2}
            text={"Terms & Conditions"}
            icon={"/svgs/terms.svg"}
            width={30}
            height={30}
            isSelected={selectedCard2 === 2}
          />
        </button>
        <button onClick={() => handleCard2Click(3)}>
          <Card2
            id={3}
            text={"Contact us"}
            icon={"/svgs/Frame.svg"}
            width={25}
            height={25}
            isSelected={selectedCard2 === 3}
          />
        </button>
        <button onClick={() => handleCard2Click(4)}>
          <Card2
            id={4}
            text={"Logout"}
            icon={"/svgs/logout.svg"}
            width={25}
            height={25}
            isSelected={selectedCard2 === 4}
          />
        </button>
      </div>
    </div>
  );
};

export default DashBoardD;
