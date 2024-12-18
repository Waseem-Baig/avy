import Image from "next/image";
import React from "react";

const MobileFooter = () => {
  return (
    <div className="flex flex-col gap-[5vh] w-[100vw] h-auto pl-4">
      <div className="flex justify-start items-center gap-[10vw]">
        <Image alt="logo" src={"/images/logo.png"} width={120} height={60} />
        <h1 className="font-dm-sans text-[1.2rem] font-bold">AVY Pvt. Ltd.</h1>
      </div>
      <div className="flex flex-col gap-[5px]">
        <h3 className="text-[#002E5B] font-semibold font-dm-sans">
          Reach us out
        </h3>
        <p className="font-dm-sans text-[14px]">Email : avypvtltd@gmail.com</p>
        <p className="font-dm-sans text-[14px]">Phone : +91 99999 99999</p>
        <p className="font-dm-sans text-[14px]">Phone : +91 99999 99999</p>
        <p className="font-dm-sans text-[14px]">website : www.avy.com</p>
      </div>
      <div className="flex flex-col gap-[5px]">
        <h3 className="text-[#002E5B] font-semibold font-dm-sans">
          Our Address
        </h3>
        <p className="font-dm-sans text-[14px]">Avy private limited</p>
        <p className="font-dm-sans text-[14px]">
          flat no : 31-2, 22nd floor, Mindspace
        </p>
        <p className="font-dm-sans text-[14px]">
          Mindspace junction, hitec city
        </p>
        <p className="font-dm-sans text-[14px]">Hyderabad, telangana</p>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center w-full pr-[10vw]">
        <h3 className="text-[#002E5B] font-semibold font-dm-sans">Follow Us</h3>
        <div className="flex items-center justify-center gap-3">
          <button className="w-[15vw] h-[7vh] relative shadow-[inset_10px_10px_30px_#fff,_inset_-10px_-10px_30px_#AEAEC04D] rounded-md bg-[#F8FEFF] border-#D4E5F6 border-[1px] border-solid box-border font-source-sans-pro flex justify-center items-center">
            <Image
              alt="twitter"
              src={"/svgs/line-md_twitter-filled.svg"}
              width={25}
              height={25}
              key={0}
            />
          </button>
          <button className="w-[15vw] h-[7vh] relative shadow-[inset_10px_10px_30px_#fff,_inset_-10px_-10px_30px_#AEAEC04D] rounded-md bg-[#F8FEFF] border-#D4E5F6 border-[1px] border-solid box-border font-source-sans-pro flex justify-center items-center">
            <Image
              alt="linkedin"
              src={"/svgs/akar-icons_linkedin-fill.svg"}
              width={25}
              height={25}
              key={1}
            />
          </button>
          <button className="w-[15vw] h-[7vh] relative shadow-[inset_10px_10px_30px_#fff,_inset_-10px_-10px_30px_#AEAEC04D] rounded-md bg-[#F8FEFF] border-#D4E5F6 border-[1px] border-solid box-border font-source-sans-pro flex justify-center items-center">
            <Image
              alt="twitter"
              src={"/svgs/gg_facebook.svg"}
              width={25}
              height={25}
              key={2}
            />
          </button>
          <button className="w-[15vw] h-[7vh] relative shadow-[inset_10px_10px_30px_#fff,_inset_-10px_-10px_30px_#AEAEC04D] rounded-md bg-[#F8FEFF] border-#D4E5F6 border-[1px] border-solid box-border font-source-sans-pro flex justify-center items-center">
            <Image
              alt="twitter"
              src={"/svgs/instagram.svg"}
              width={25}
              height={25}
              key={3}
            />
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center pb-[2vh] pr-[7vw]">
        <p className="font-dm-sans text-[1rem]">
          2024 AVY pvt ltd. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default MobileFooter;
