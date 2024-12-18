"use client";

import ResetPasswordDesktop from "@/app/(desktop)/reset-password-desktop/page";
import ResetPasswordMobile from "@/app/(mobile)/reset-password-mobile/page";
import { useEffect, useState } from "react";

const ResetPasswordWrapper = () => {
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

  return isMobile ? <ResetPasswordMobile /> : <ResetPasswordDesktop />;
};

export default ResetPasswordWrapper;
