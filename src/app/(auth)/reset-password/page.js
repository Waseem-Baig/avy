"use client";

import ResetPasswordDesktop from "@/app/(desktop)/reset-password-desktop/page";
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

  return isMobile ? <ResetPasswordDesktop /> : <ResetPasswordDesktop />;
};

export default DashBoardWrapper;
