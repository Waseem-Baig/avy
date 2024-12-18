"use client";

import React from "react";
import SignIN from "./(desktop)/sign-in-desktop/signIn";
import Layout from "./(desktop)/layout";
import Test from "../components/mapComponents/text";

const Page = () => {
  return (
    <div>
      <Layout>
        <SignIN />
      </Layout>
    </div>
  );
};

export default Page;
