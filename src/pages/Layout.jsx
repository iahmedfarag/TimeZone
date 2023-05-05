import React from "react";
import { Outlet } from "react-router-dom";

import { Navbar, SmallNavbar, Features, Footer } from "./../components";
const Layout = () => {
  return (
    <>
      <Navbar />
      <SmallNavbar />
      <Outlet />
      <Features />
      <Footer />
    </>
  );
};

export default Layout;
