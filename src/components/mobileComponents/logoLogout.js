import Image from "next/image";

const LogoLogout = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="bg-[#FDFEFF] [box-shadow:-11.52px_-11.52px_11.52px_0px_#AEAEC040_inset,11.52px_11.52px_11.52px_0px_#FFFFFF_inset,-11.52px_-11.52px_10px_0px_#FFFFFF,11.52px_11.52px_10px_0px_#AEAEC04D] w-[25vw] py-2 flex justify-center items-center rounded-md">
        <Image alt="logo" src={"/images/logo.png"} width={75} height={40} />
      </div>
      <button className="bg-[#FDFEFF] [box-shadow:-10px_-10px_10px_0px_#FFFFFF,10px_10px_10px_0px_#AEAEC04D,-10px_-10px_10px_0px_#AEAEC040_inset,10px_10px_10px_0px_#FFFFFF_inset] w-[13vw] py-1 flex flex-col justify-center items-center border-solid border-[1px] border-[#FBE7D4] rounded-md">
        <Image
          alt="logout"
          src={"/svgs/ic_outline-logout.svg"}
          width={20}
          height={20}
        />
        <p className="text-[8px] font-poppins font-semibold text-[#EA8826]">
          Logout
        </p>
      </button>
    </div>
  );
};

export default LogoLogout;
