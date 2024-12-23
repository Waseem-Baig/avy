import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center w-full pt-3 px-4">
      <div className="w-[95%] relative shadow-[-10px_-10px_10px_#fff,_10px_10px_10px_rgba(174,_174,_192,_0.4)] rounded-xl bg-[#EEF5FC] border-#D4E5F6 border-[1px] border-solid box-border h-[10vh] font-source-sans-pro flex justify-between">
        <div className="flex justify-center items-center pl-[3vw]">
          <Image alt="logo" src="/images/logo.png" width={100} height={10} />
        </div>
        <div className="flex gap-3 text-center items-center pr-[3vw]">
          <p className="font-sans font-light text-[16px]">
            Hi,{" "}
            <span className="font-sans font-semibold">
              Delhi Public School{" "}
            </span>
          </p>
          <p className="font-sans font-light text-[16px] text-[#6C6C6C]">
            User Type :{" "}
            <span className="font-sans font-semibold text-[16px] text-black">
              Organization
            </span>
          </p>
          <p className="font-sans font-light text-[16px] text-[#6C6C6C]">
            Account ID :
            <span className="font-sans font-semibold text-[16px] text-black">
              #1432
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
