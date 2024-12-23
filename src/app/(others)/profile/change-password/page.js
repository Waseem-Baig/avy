"use client";

import { useEffect, useState } from "react";
import ChangePasswordDesktop from "./desktopView/page";
import ChangePasswordMobile from "./mobileView/page";

const ChangePasswordWrapper = () => {
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

  return isMobile ? <ChangePasswordMobile /> : <ChangePasswordDesktop />;
};

export default ChangePasswordWrapper;
