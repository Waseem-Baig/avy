"use client";
import LogoLogout from "@/components/mobileComponents/logoLogout";
import MobileFooter from "@/components/mobileComponents/mFooter";
import MobileNavbar from "@/components/mobileComponents/mNavbar";
import React, { useState } from "react";
import MobileCard1 from "./mobileCard1";
import { useRouter } from "next/navigation";
import MobileCard2 from "./mobileCard2";

const DashBoardM = () => {
  const [selectedCard1, setSelectedCard1] = useState(null);
  const [selectedCard2, setSelectedCard2] = useState(null);
  const router = useRouter();

  // Function to handle card click
  const handleCard1Click = (id) => {
    setSelectedCard1(id);

    if (id === 0) {
      router.push("/product");
    } else if (id === 1) {
      router.push("/vahi");
    } else if (id === 2) {
      router.push("/tagit");
    }
  };

  const handleCard2Click = (id) => {
    setSelectedCard2(id);

    // Navigate to respective pages
    if (id === 0) {
      router.push("/official-website");
    } else if (id === 1) {
      router.push("/profile");
    } else if (id === 2) {
      router.push("/terms&conditions");
    } else if (id === 3) {
      router.push("/contact-us");
    }
  };

  return (
    <div className="flex flex-col gap-[3vh] w-full h-auto items-center justify-center px-4">
      {/* Parent Container */}
      <div className="bg-[#EEF5FC] relative w-[full] h-[auto] shadow-[inset_10px_10px_20px_#fff,_inset_-10px_-10px_20px_#AEAEC04D] rounded-xl flex flex-col gap-[3vh] p-4 pb-[7vh]">
        {/* Heading */}
        <h1 className="text-[#002E5B] font-dm-sans font-bold text-center pt-[3vh] text-[1.5rem]">
          Track your devices
        </h1>
        <div className="flex flex-col items-center gap-[4vh] px-[2vw] w-[100%]">
          <button onClick={() => handleCard1Click(0)}>
            <MobileCard1
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
            <MobileCard1
              id={1}
              title={"Vahi"}
              text={"Vehicle tracking device"}
              icon={"/svgs/Vector1.svg"}
              width={20}
              height={20}
              isSelected={selectedCard1 === 1}
            />
          </button>
          <button onClick={() => handleCard1Click(2)}>
            <MobileCard1
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
      <div className="bg-[#EEF5FC] relative w-full h-[auto] shadow-[inset_10px_10px_20px_#fff,_inset_-10px_-10px_20px_#AEAEC04D] rounded-lg border-#D4E5F6 border-[1px] border-solid box-border flex flex-col justify-center items-center gap-[4vh] py-[7vh] mb-[3vh]">
        <div className="flex gap-[5vw]">
          <button onClick={() => handleCard2Click(0)}>
            <MobileCard2
              id={0}
              text={"Official Website"}
              icon={"/svgs/gg_website.svg"}
              width={30}
              height={30}
              isSelected={selectedCard2 === 0}
            />
          </button>
          <button onClick={() => handleCard2Click(1)}>
            <MobileCard2
              id={1}
              text={"Profile"}
              icon={"/svgs/Group.svg"}
              width={30}
              height={30}
              isSelected={selectedCard2 === 1}
            />
          </button>
        </div>
        <div className="flex gap-[5vw]">
          <button onClick={() => handleCard2Click(2)}>
            <MobileCard2
              id={2}
              text={"Terms & Conditions"}
              icon={"/svgs/terms.svg"}
              width={30}
              height={30}
              isSelected={selectedCard2 === 2}
            />
          </button>
          <button onClick={() => handleCard2Click(3)}>
            <MobileCard2
              id={3}
              text={"Contact us"}
              icon={"/svgs/Frame.svg"}
              width={25}
              height={25}
              isSelected={selectedCard2 === 3}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashBoardM;
