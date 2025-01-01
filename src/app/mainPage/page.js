"use client";

import { useEffect, useState } from "react";
import TrackDesktop from "./desktopView/page";
import TrackMobile from "./mobileView/page";

const DashBoardWrapper = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800); // You can adjust the width as needed
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize); // Check on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  return isMobile ? <TrackMobile /> : <TrackDesktop />;
};

export default DashBoardWrapper;
