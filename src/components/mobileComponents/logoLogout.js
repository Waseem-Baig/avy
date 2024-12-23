"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LogoLogout = () => {
  const router = useRouter();

  const handleLogout = (e) => {
    e.preventDefault();
    router.push("/sign-in");
  };

  return (
    <div className="flex justify-between w-[90%]">
      <div className="bg-[#F8FEFF] shadow-[-11.52px_-11.52px_34.55px_0px_#FFFFFF,_11.52px_11.52px_34.55px_0px_rgba(174,174,192,0.3),-11.52px_-11.52px_11.52px_0px_rgba(174,174,192,0.25)_inset,11.52px_11.52px_11.52px_0px_#FFFFFF_inset] w-[auto] py-2 px-4 flex justify-center items-center rounded-md border-[#FBE7D4]">
        <Image alt="logo" src={"/images/logo.png"} width={85} height={40} />
      </div>
      <button
        className="bg-[#FDFEFF] shadow-[-10px_-10px_30px_0px_#FFFFFF,_10px_10px_30px_0px_rgba(174,174,192,0.3),-5px_-5px_10px_0px_rgba(174,174,192,0.25)_inset,5px_5px_10px_0px_#FFFFFF_inset] w-[14vw] px-2 flex flex-col justify-center items-center border-solid border-[1px] border-[#FBE7D4] rounded-md"
        onClick={handleLogout}
      >
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
