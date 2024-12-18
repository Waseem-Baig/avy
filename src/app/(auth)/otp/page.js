"use client";

import OtpDesktop from "@/app/(desktop)/otp-desktop/page";
import OtpMobile from "@/app/(mobile)/otp-mobile/page";
import { useEffect, useState } from "react";

const DashBoardWrapper = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500); // You can adjust the width as needed
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize); // Check on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  return isMobile ? <OtpMobile /> : <OtpDesktop />;
};

export default DashBoardWrapper;
