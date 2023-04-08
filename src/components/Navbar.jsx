import React from "react";
import logo from "../assets/images/Logo.png";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="" width="80%" />
        </div>
        <div className="navbar-list">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Courses</a>
          <a href="#">Success Stories</a>
          <a href="#">Career Counselling</a>
          <a href="#">Contact</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
