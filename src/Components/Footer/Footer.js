import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
const Footer = () => {
  return (
    <footer>
      <Link to="/">
        <h5>National Park Service</h5>
        <h3>U.S. Department of the Interior</h3>
        <img src={logo} alt="logo" />
      </Link>
    </footer>
  );
};

export default Footer;
