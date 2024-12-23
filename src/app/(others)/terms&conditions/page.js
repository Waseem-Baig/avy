"use client";

import { useEffect, useState } from "react";
import TermsMobile from "./mobileView/page";
import TermsDesktop from "./desktopView/page";

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

  return isMobile ? <TermsMobile /> : <TermsDesktop />;
};

export default TermsWrapper;
