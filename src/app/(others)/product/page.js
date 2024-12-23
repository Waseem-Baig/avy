"use client";

import { useEffect, useState } from "react";
import ProductDesktop from "./desktopView/page";
import ProductMobile from "./mobileView/page";

const ProductWrapper = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the width as needed
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize); // Check on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  return isMobile ? <ProductMobile /> : <ProductDesktop />;
};

export default ProductWrapper;
