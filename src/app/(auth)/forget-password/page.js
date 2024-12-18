"use client";

import { useEffect, useState } from "react";
import ForgetPasswordDesktop from "@/app/(desktop)/forget-password-desktop/page";

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

  return isMobile ? <ForgetPasswordDesktop /> : <ForgetPasswordDesktop />;
};

export default DashBoardWrapper;
