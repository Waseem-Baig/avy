import MobileNavbar from "@/components/mobileComponents/mNavbar";
import SecondNavM from "@/components/mobileComponents/mSecondNav";
import React from "react";
import ProductM from "./productM";
import MobileFooter from "@/components/mobileComponents/mFooter";
import LogoLogout from "@/components/mobileComponents/logoLogout";

const ProductMobile = () => {
  return (
    <div className="bg-[#EEF5FC] flex flex-col items-center justify-center w-[100vw] gap-[3vh] overflow-x-hidden pt-[2vh]">
      <LogoLogout />
      <div className="flex flex-col gap-[2vh] w-[100%] justify-center items-center">
        <MobileNavbar />
        <SecondNavM label={"Yeva"} />
      </div>
      <ProductM />
      <MobileFooter />
    </div>
  );
};

export default ProductMobile;
