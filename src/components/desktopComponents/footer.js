import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-[5vh] w-[100vw] h-auto pl-[8vw]">
      <div className="flex justify-start items-center gap-[25vw] w-full">
        <div className="flex flex-col gap-2">
          <h3 className="text-[#002E5B] font-semibold font-dm-sans">
            Reach us out
          </h3>
          <p className="font-dm-sans text-[14px] text-black">
            Email : avypvtltd@gmail.com
          </p>
          <p className="font-dm-sans text-[14px] text-black">
            Phone : +91 99999 99999
          </p>
          <p className="font-dm-sans text-[14px] text-black">
            Phone : +91 99999 99999
          </p>
          <p className="font-dm-sans text-[14px] text-black">
            website : www.avy.com
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-[#002E5B] font-semibold font-dm-sans">
            Our Address
          </h3>
          <p className="font-dm-sans text-[14px] text-black">
            Avy private limited
          </p>
          <p className="font-dm-sans text-[14px] text-black">
            flat no : 31-2, 22nd floor, Mindspace
          </p>
          <p className="font-dm-sans text-[14px] text-black">
            Mindspace junction, hitec city
          </p>
          <p className="font-dm-sans text-[14px] text-black">
            Hyderabad, telangana
          </p>
        </div>
      </div>
      <div className="flex justify-start items-center gap-[10vw]">
        <Image alt="logo" src={"/images/logo.png"} width={120} height={60} />
        <h1 className="font-dm-sans text-[2rem] font-bold text-[#002E5B]">
          AVY Pvt. Ltd.
        </h1>
      </div>
      <hr className="w-[95%] border-t-2 border-[#A2A2A2]" />
      <div className="flex justify-between items-center pb-[2vh]">
        <p className="font-dm-sans text-[1rem] text-black">
          2024 AVY pvt ltd. All rights reserved
        </p>
        <div className="flex items-center gap-3 pr-[5vw] ">
          <button className="w-[4vw] h-[8vh] relative shadow-[inset_10px_10px_30px_#fff,_inset_-10px_-10px_30px_#AEAEC04D] rounded-md bg-[#F8FEFF] border-#D4E5F6 border-[1px] border-solid box-border font-source-sans-pro flex justify-center items-center">
            <Image
              alt="twitter"
              src={"/svgs/line-md_twitter-filled.svg"}
              width={20}
              height={20}
              key={0}
            />
          </button>
          <button className="w-[4vw] h-[8vh] relative shadow-[inset_10px_10px_30px_#fff,_inset_-10px_-10px_30px_#AEAEC04D] rounded-md bg-[#F8FEFF] border-#D4E5F6 border-[1px] border-solid box-border font-source-sans-pro flex justify-center items-center">
            <Image
              alt="linkedin"
              src={"/svgs/akar-icons_linkedin-fill.svg"}
              width={20}
              height={20}
              key={1}
            />
          </button>
          <button className="w-[4vw] h-[8vh] relative shadow-[inset_10px_10px_30px_#fff,_inset_-10px_-10px_30px_#AEAEC04D] rounded-md bg-[#F8FEFF] border-#D4E5F6 border-[1px] border-solid box-border font-source-sans-pro flex justify-center items-center">
            <Image
              alt="twitter"
              src={"/svgs/gg_facebook.svg"}
              width={20}
              height={20}
              key={2}
            />
          </button>
          <button className="w-[4vw] h-[8vh] relative shadow-[inset_10px_10px_30px_#fff,_inset_-10px_-10px_30px_#AEAEC04D] rounded-md bg-[#F8FEFF] border-#D4E5F6 border-[1px] border-solid box-border font-source-sans-pro flex justify-center items-center">
            <Image
              alt="twitter"
              src={"/svgs/instagram.svg"}
              width={20}
              height={20}
              key={3}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
