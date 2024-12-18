"use client";

import Footer from "@/components/desktopComponents/footer";
import Navbar from "@/components/desktopComponents/navbar";
import React, { Children } from "react";

const Layout = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
