import React from "react";
import logo from "../assets/images/favicon.ico";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"} className="logo">
      <img src={logo} alt="" />
    </Link>
  );
};

export default Logo;
