"use client";

import { useEffect, useState } from "react";
import SignInMobile from "../../(mobile)/sign-in-mobile/page";
import SignInDesktop from "../../(desktop)/sign-in-desktop/page";

const SignInWrapper = () => {
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

  return isMobile ? <SignInMobile /> : <SignInDesktop />;
};

export default SignInWrapper;
