import React from "react";
import { useState, useEffect } from "react";
import logo from "../../assets/images/Logo.png";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY  > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  



  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-links');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
      });
    });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-links');
    navLinks.forEach(link => {
      if (link.getAttribute('href') === location.pathname) {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, [location]);
  


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const reloadPage = () => {window.location.reload(); window.location.pathname("/")}

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <nav className={`navbar ${isScrolled ? "navbar-fixed" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={reloadPage}>
          <img src={logo} alt="Philomathean" className="logo_img" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/courses" className="nav-links" onClick={closeMobileMenu}>
              Courses
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/aboutib" className="nav-links" onClick={closeMobileMenu}>
              About the IB
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/counselling"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Career Counselling
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
