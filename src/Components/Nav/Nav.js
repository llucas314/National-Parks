import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/" className="title">
        <h3>National Parks List</h3>
      </Link>
    </nav>
  );
};

export default Nav;
