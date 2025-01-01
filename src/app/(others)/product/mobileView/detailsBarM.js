import { useRouter } from "next/navigation";
import React from "react";

const DetailsM = ({ data }) => {
  const router = useRouter();

  const handleTrack = (e) => {
    e.preventDefault();
    router.push("/mainPage");
  };

  return (
    <div className="flex justify-center items-center w-[100%] h-[auto] rounded-lg bg-[#F8FEFF] shadow-[inset_-10px_-10px_30px_0px_#FFFFFF, 10px_10px_30px_0px_#AEAEC04D, inset_-5px_-5px_10px_0px_#AEAEC040, inset_5px_5px_10px_0px_#FFFFFF99] py-[2vh]">
      <div className="flex flex-col items-center w-[100%] justify-center">
        <div className="flex justify-between items-center w-[90%] border-b-[#D4E5F6] border-b-[2px]">
          <p className="text-[#080D0B] font-poppins text-[1rem] w-[10vw] p-2 text-start">
            {data.slno}
          </p>
          <p className="text-[#080D0B] font-poppins text-[1rem] w-[20vw] border-l-[#D4E5F6] border-l-[2px] p-2 text-start ">
            {"#"}
            {data.deviceId}
          </p>
          <p className="text-[#080D0B] font-poppins text-[1rem] w-[40vw] p-2 border-l-[#D4E5F6] border-l-[2px] ">
            {data.userName}
          </p>
        </div>
        <div className="flex justify-between w-[90%] mb-2 border-b-[#D4E5F6] border-b-[2px]">
          <p className="text-[#080D0B] font-poppins text-[1rem] w-[20vw] p-2 text-start">
            {data.status}
          </p>
          <p className="text-[#080D0B] font-poppins text-[1rem] w-[50vw] p-2 text-start border-l-[#D4E5F6] border-l-[2px]">
            {" "}
            Renewal {data.renewalDate}
          </p>
        </div>
        <div className="flex justify-between items-center w-[90%]">
          <button
            className="text-[16px] font-poppins font-semibold border-[1px] border-[#EA8826] text-[#080D0B] py-2 px-4 w-[20vw] rounded-lg"
            onClick={handleTrack}
          >
            Track
          </button>
          <button className="text-[16px] font-poppins font-semibold border-[1px] border-[#267CD1] text-[#080D0B] py-2 px-4 w-[20vw] rounded-lg">
            Details
          </button>
          <button className="text-[16px] font-poppins font-semibold border-[1px] border-[#009002] text-[#080D0B] py-2 px-4 w-[20vw] rounded-lg">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsM;
