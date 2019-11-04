import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <Link to="/" className="footer-container">
        <div className="text-container">
          <h5>National Park Service</h5>
          <h3>U.S. Department of the Interior</h3>
        </div>
        <img src={logo} alt="logo" />
      </Link>
    </footer>
  );
};

export default Footer;
