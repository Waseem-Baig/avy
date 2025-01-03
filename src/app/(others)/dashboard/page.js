"use client";

import { useEffect, useState } from "react";
import DashBoardDesktop from "./desktopView/page";
import DashBoardMobile from "./mobileView/page";

const DashBoardWrapper = () => {
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

  return isMobile ? <DashBoardMobile /> : <DashBoardDesktop />;
};

export default DashBoardWrapper;
