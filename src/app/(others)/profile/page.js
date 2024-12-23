"use client";

import { useEffect, useState } from "react";
import ProfileMobile from "./mobileView/page";
import ProfileDesktop from "./desktopView/page";

const TermsWrapper = () => {
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

  return isMobile ? <ProfileMobile /> : <ProfileDesktop />;
};

export default TermsWrapper;
