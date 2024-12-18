import React, { useState } from "react";
import Card1 from "./card1";
import Card2 from "./card2";

const DashBoardD = () => {
  const [selectedCard, setSelectedCard] = useState(null); // State for selected card

  // Function to handle card click
  const handleCardClick = (id) => {
    setSelectedCard(id);
  };

  return (
    <div className="flex justify-between pl-[5vw] pr-[5vw] mb-[15vh]">
      {/* Parent Container */}
      <div className="bg-[#EEF5FC] relative w-[60vw] h-[auto] shadow-[inset_10px_10px_20px_#fff,_inset_-10px_-10px_20px_#AEAEC04D] rounded-xl flex flex-col gap-6 pl-[2vw] pr-[2vw] pb-[8vh]">
        {/* Heading */}
        <h1 className="text-[#002E5B] font-dm-sans font-bold text-center pt-[4vh] text-[2rem]">
          Track your devices
        </h1>

        {/* Left Child Container */}
        <div className="flex justify-between pl-[2vw] pr-[2vw]">
          <Card1
            id={0}
            title={"Yeva"}
            text={"Smart gps id card"}
            icon={"/svgs/fluent-mdl2_contact-card.svg"}
            width={40}
            height={40}
            isSelected={selectedCard === 0} // Pass selected state
            onClick={handleCardClick} // Pass the click handler
          />
          <Card1
            id={1}
            title={"Vahi"}
            text={"Vehicle tracking device"}
            icon={"/svgs/vector1.svg"}
            width={20}
            height={20}
            isSelected={selectedCard === 1} // Pass selected state
            onClick={handleCardClick} // Pass the click handler
          />
        </div>
        <div className="flex justify-center items-center w-full">
          <Card1
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

      {/* Right-Side Container */}
      <div className="bg-[#EEF5FC] relative w-[25vw] h-[fit] shadow-[inset_10px_10px_20px_#fff,_inset_-10px_-10px_20px_#AEAEC04D] rounded-lg border-#D4E5F6 border-[1px] border-solid box-border flex flex-col justify-center items-center gap-5">
        <Card2
          id={0}
          text={"Official Website"}
          icon={"/svgs/gg_website.svg"}
          width={30}
          height={30}
          isSelected={selectedCard === 0} // Pass selected state
          onClick={handleCardClick} // Pass the click handler
        />
        <Card2
          id={1}
          text={"Profile & Settings"}
          icon={"/svgs/Group.svg"}
          width={30}
          height={30}
          isSelected={selectedCard === 1} // Pass selected state
          onClick={handleCardClick} // Pass the click handler
        />

        <Card2
          id={2}
          text={"Terms & Conditions"}
          icon={"/svgs/terms.svg"}
          width={30}
          height={30}
          isSelected={selectedCard === 2} // Pass selected state
          onClick={handleCardClick} // Pass the click handler
        />

        <Card2
          id={3}
          text={"Contact us"}
          icon={"/svgs/Frame.svg"}
          width={25}
          height={25}
          isSelected={selectedCard === 3} // Pass selected state
          onClick={handleCardClick} // Pass the click handler
        />

        <Card2
          id={4}
          text={"Logout"}
          icon={"/svgs/logout.svg"}
          width={25}
          height={25}
          isSelected={selectedCard === 4} // Pass selected state
          onClick={handleCardClick} // Pass the click handler
        />
      </div>
    </div>
  );
};

export default DashBoardD;
