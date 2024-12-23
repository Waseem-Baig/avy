import Footer from "@/components/desktopComponents/footer";
import Navbar from "@/components/desktopComponents/navbar";
import React from "react";
import ProductD from "./productD";
import SecondNavbar from "@/components/desktopComponents/secondNavbar";

const ProductDesktop = () => {
  return (
    <div className="bg-[#EEF5FC] flex flex-col gap-[5vh] overflow-x-hidden">
      <div className="flex flex-col gap-[3vh]">
        <Navbar />
        <SecondNavbar label={"Yeva"} />
      </div>
      <ProductD />
      <Footer />
    </div>
  );
};

export default ProductDesktop;
