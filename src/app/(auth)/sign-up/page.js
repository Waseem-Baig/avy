"use client";

import SignUpDesktop from "@/app/(desktop)/sign-up-desktop/page";
import SignUpMobile from "@/app/(mobile)/sign-up-mobile/page";
import { useEffect, useState } from "react";

const SignUpWrapper = () => {
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

  return isMobile ? <SignUpMobile /> : <SignUpDesktop />;
};

export default SignUpWrapper;
