import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link className="navLink" to="/">
      <div className=" navLogo ">Recipie Book</div>
      </Link>
      <div className=" navLinks ">
        <Link className="navLink" to="/recipieList">
        <span>Recipies</span>
        </Link>
        <span>About Us</span>
      </div>
    </div>
  );
}

export default Navbar;
