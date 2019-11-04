import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <h3>National Parks List</h3>
      </Link>
    </nav>
  );
};

export default Nav;
