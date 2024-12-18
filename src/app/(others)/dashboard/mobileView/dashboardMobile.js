import LogoLogout from "@/components/mobileComponents/logoLogout";
import MobileFooter from "@/components/mobileComponents/mFooter";
import MobileNavbar from "@/components/mobileComponents/mNavbar";
import Image from "next/image";
import React, { useState } from "react";
import MobileCard1 from "./mobileCard1";
import MobileCard2 from "./mobileCard2";

const DashBoardM = () => {
  const [selectedCard, setSelectedCard] = useState(null); // State for selected card

  // Function to handle card click
  const handleCardClick = (id) => {
    setSelectedCard(id);
  };

  return (
    <div className="flex bg-[#EEF5FC] p-4 flex-col gap-[5vh] w-screen h-auto">
      <LogoLogout />
      <MobileNavbar />
      <div className="flex flex-col gap-[5vh] px-2">
        {/* Parent Container */}
        <div className="bg-[#EEF5FC] relative w-[100%] h-[auto] shadow-[inset_10px_10px_20px_#fff,_inset_-10px_-10px_20px_#AEAEC04D] rounded-xl flex flex-col gap-[3vh] p-4 pb-[7vh]">
          {/* Heading */}
          <h1 className="text-[#002E5B] font-dm-sans font-bold text-center pt-[3vh] text-[1.5rem]">
            Track your devices
          </h1>
          <div className="flex flex-col items-center gap-[4vh] px-[2vw]">
            <MobileCard1
              id={0}
              title={"Yeva"}
              text={"Smart gps id card"}
              icon={"/svgs/fluent-mdl2_contact-card.svg"}
              width={40}
              height={40}
              isSelected={selectedCard === 0} // Pass selected state
              onClick={handleCardClick} // Pass the click handler
            />
            <MobileCard1
              id={1}
              title={"Vahi"}
              text={"Vehicle tracking device"}
              icon={"/svgs/vector1.svg"}
              width={20}
              height={20}
              isSelected={selectedCard === 1} // Pass selected state
              onClick={handleCardClick} // Pass the click handler
            />
            <MobileCard1
              id={2}
              title={"TagIT"}
              text={"Nearby bluetooth tracker"}
              icon={"/svgs/shape.svg"}
              width={30}
              height={30}
              isSelected={selectedCard === 2} // Pass selected state
              onClick={handleCardClick} // Pass the click handler
            />
          </div>
        </div>
        <div className="bg-[#EEF5FC] relative w-[100%] h-[auto] shadow-[inset_10px_10px_20px_#fff,_inset_-10px_-10px_20px_#AEAEC04D] rounded-lg border-#D4E5F6 border-[1px] border-solid box-border flex flex-col justify-center items-center gap-[4vh] py-[7vh] mb-[4vh]">
          <div className="flex gap-[5vw]">
            <MobileCard2
              id={0}
              text={"Official Website"}
              icon={"/svgs/gg_website.svg"}
              width={30}
              height={30}
              isSelected={selectedCard === 0} // Pass selected state
              onClick={handleCardClick} // Pass the click handler
            />
            <MobileCard2
              id={1}
              text={"Profile"}
              icon={"/svgs/Group.svg"}
              width={30}
              height={30}
              isSelected={selectedCard === 1} // Pass selected state
              onClick={handleCardClick} // Pass the click handler
            />
          </div>
          <div className="flex gap-[5vw]">
            <MobileCard2
              id={2}
              text={"Terms & Conditions"}
              icon={"/svgs/terms.svg"}
              width={30}
              height={30}
              isSelected={selectedCard === 2} // Pass selected state
              onClick={handleCardClick}
            />
            <MobileCard2
              id={3}
              text={"Contact us"}
              icon={"/svgs/Frame.svg"}
              width={25}
              height={25}
              isSelected={selectedCard === 3} // Pass selected state
              onClick={handleCardClick} // Pass the click handler
            />
          </div>
        </div>
      </div>
      <MobileFooter />
    </div>
  );
};

export default DashBoardM;
