import React from "react";

const Details = ({ data }) => {
  return (
    <div className="flex justify-center items-center w-[100%] h-[10vh] rounded-lg bg-[#F8FEFF] shadow-[inset_-10px_-10px_10px_0px_#AEAEC040,_inset_10px_10px_10px_0px_#FFFFFF,_10px_10px_30px_0px_#AEAEC04D,_-10px_-10px_30px_0px_#FFFFFF]">
      <div className="flex items-center w-full pl-[3vw] pr-[3vw] justify-between">
        <div className="flex">
          <p className="text-[#080D0B] font-poppins text-[14px] min-w-[5vw]">
            {data.slno}
          </p>
          <p className="text-[#080D0B] font-poppins text-[14px] min-w-[7vw]">
            {"#"}
            {data.deviceId}
          </p>
        </div>
        <div className="flex">
          <p className="text-[#080D0B] font-poppins text-[14px] min-w-[12vw]">
            {data.userName}
          </p>
          <p className="text-[#080D0B] font-poppins text-[14px] min-w-[7vw]">
            {data.status}
          </p>
          <p className="text-[#080D0B] font-poppins text-[14px] min-w-[12vw]">
            {" "}
            Renewal {data.renewalDate}
          </p>
        </div>
        <div className="flex gap-[2vw]">
          <button className="text-[14px] font-poppins font-semibold border-[1px] border-[#EA8826] text-[#080D0B] py-2 px-4 rounded-lg">
            Track
          </button>
          <button className="text-[14px] font-poppins font-semibold border-[1px] border-[#267CD1] text-[#080D0B] py-2 px-4 rounded-lg">
            Details
          </button>
          <button className="text-[14px] font-poppins font-semibold border-[1px] border-[#009002] text-[#080D0B] py-2 px-4 rounded-lg">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
