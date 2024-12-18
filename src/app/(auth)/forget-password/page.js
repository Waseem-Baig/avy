"use client";

import { useEffect, useState } from "react";
import ForgetPasswordDesktop from "@/app/(desktop)/forget-password-desktop/page";
import ForgetPasswordMobile from "@/app/(mobile)/forget-password-mobile/page";

const ForgetPasswordWrapper = () => {
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

  return isMobile ? <ForgetPasswordMobile /> : <ForgetPasswordDesktop />;
};

export default ForgetPasswordWrapper;
