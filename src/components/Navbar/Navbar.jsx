import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({
    isDropdownOpenIB: false,
    isDropdownOpenCareer: false,
    isDropdownOpenIGCSE: false,
  });

  const handleMouseEnter = (dropdown) => {
    if (!click && window.innerWidth > 1024) {
      setDropdownStates((prevState) => ({
        ...prevState,
        [dropdown]: true,
      }));
    }
  };

  const handleMouseLeave = (dropdown) => {
    if (!click && window.innerWidth > 1024) {
      setDropdownStates((prevState) => ({
        ...prevState,
        [dropdown]: false,
      }));
    }
  };

  const handleDropdownClick = (dropdown) => {
    if (window.innerWidth <= 1024) {
      setDropdownStates((prevState) => ({
        ...prevState,
        [dropdown]: !prevState[dropdown],
      }));
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const closeMobileMenu = () => setClick(false);
  const reloadPage = () => {
    window.location.reload();
    window.location.pathname("/");
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("scroll", handleScroll);
    const NavLinks = document.querySelectorAll(".nav-links");
    NavLinks.forEach((link) => {
      if (link.getAttribute("href") === location.pathname) {
        NavLinks.forEach((link) => link.classList.remove("active"));
        link.classList.add("active");
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  const handleClick = () => setClick(!click);

  useEffect(() => {
    window.addEventListener("resize", showButton);
    return () => {
      window.removeEventListener("resize", showButton);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "navbar-fixed" : ""}`}>
      <div className="navbar-container">
        <NavLink to="/" className="logo" onClick={reloadPage}>
          <img src={logo} alt="Philomathean" className="logo_img" />
        </NavLink>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/courses"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Courses
            </NavLink>
          </li>

          {/* Drop down link starts here about IB */}

          <li
            className="nav-item"
            onMouseEnter={() => handleMouseEnter("isDropdownOpenIB")}
            onMouseLeave={() => handleMouseLeave("isDropdownOpenIB")}
            onClick={() => handleDropdownClick("isDropdownOpenIB")}
          >
            <div
              className={`nav-links ${
                dropdownStates.isDropdownOpenIB ? "active" : ""
              } ${location.pathname === "/about-ib" ? "sub-nav-active" : ""}
              ${location.pathname === "/about-igcse" ? "sub-nav-active" : ""}
              `}
              onClick={closeMobileMenu}
            >
              IB
              <i
                className={
                  dropdownStates.isDropdownOpenIB
                    ? "fas fa-chevron-up"
                    : "fas fa-chevron-down"
                }
                style={{ paddingLeft: 5 }}
              ></i>
            </div>
            {dropdownStates.isDropdownOpenIB && (
              <div className="dropdown-wrapper">
                <ul
                  className={`dropdown-menu ${
                    dropdownStates.isDropdownOpenIB ? "active" : ""
                  } `}
                >
                  <li className="dropdown-item">
                    <NavLink
                      to="/about-ib"
                      className="sub-nav-links"
                      onClick={closeMobileMenu}
                    >
                      About-IB
                    </NavLink>
                  </li>
                  <li className="dropdown-item">
                    <NavLink
                      to="/about-igcse"
                      className="sub-nav-links"
                      onClick={closeMobileMenu}
                    >
                      About IB
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </li>

          {/* drop down for about ig */}
          <li
            className="nav-item"
            onMouseEnter={() => handleMouseEnter("isDropdownOpenIGCSE")}
            onMouseLeave={() => handleMouseLeave("isDropdownOpenIGCSE")}
            onClick={() => handleDropdownClick("isDropdownOpenIGCSE")}
          >
            <div
              className={`nav-links ${
                dropdownStates.isDropdownOpenIGCSE ? "active" : ""
              } ${location.pathname === "/about-ig" ? "sub-nav-active" : ""}
              ${location.pathname === "/about-igcse" ? "sub-nav-active" : ""}
              `}
              onClick={closeMobileMenu}
            >
              IGCSE
              <i
                className={
                  dropdownStates.isDropdownOpenIGCSE
                    ? "fas fa-chevron-up"
                    : "fas fa-chevron-down"
                }
                style={{ paddingLeft: 5 }}
              ></i>
            </div>
            {dropdownStates.isDropdownOpenIGCSE && (
              <div className="dropdown-wrapper">
                <ul
                  className={`dropdown-menu ${
                    dropdownStates.isDropdownOpenIGCSE ? "active" : ""
                  } `}
                >

                      <li className="dropdown-item">
                        <NavLink
                          to="/about-ib"
                          className="sub-nav-links"
                          onClick={closeMobileMenu}
                        >
                          About-IG
                        </NavLink>
                      </li>
                      <li className="dropdown-item">
                        <NavLink
                          to="/about-igcse"
                          className="sub-nav-links"
                          onClick={closeMobileMenu}
                        >
                          About IG
                        </NavLink>
                      </li>
                    </ul>
              </div>
            )}
          </li>

          {/* drop down for Career  Counselling */}

          <li
            className="nav-item"
            onMouseEnter={() => handleMouseEnter("isDropdownOpenCareer")}
            onMouseLeave={() => handleMouseLeave("isDropdownOpenCareer")}
            onClick={() => handleDropdownClick("isDropdownOpenCareer")}
          >
            <div
              className={`nav-links ${
                dropdownStates.isDropdownOpenCareer ? "active" : ""
              }   ${
                location.pathname === "/parental-support"
                  ? "sub-nav-active"
                  : ""
              }   ${
                location.pathname === "/emotional-support"
                  ? "sub-nav-active"
                  : ""
              }`}
              onClick={closeMobileMenu}
            >
              Career Counselling
              <i
                className={
                  dropdownStates.isDropdownOpenCareer
                    ? "fas fa-chevron-up"
                    : "fas fa-chevron-down"
                }
                style={{ paddingLeft: 5 }}
              ></i>
            </div>
            {dropdownStates.isDropdownOpenCareer && (
              <div className="dropdown-wrapper">
                <ul
                  className={`dropdown-menu ${
                    dropdownStates.isDropdownOpenCareer ? "active" : ""
                  }`}
                >
                  <li className="dropdown-item">
                    <NavLink
                      to="/parental-support"
                      className="sub-nav-links"
                      onClick={closeMobileMenu}
                    >
                      Parental Support
                    </NavLink>
                  </li>
                  <li className="dropdown-item">
                    <NavLink
                      to="/emotional-support"
                      className="sub-nav-links"
                      onClick={closeMobileMenu}
                    >
                      Emotional Support
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="nav-item">
            <NavLink
              to="/writing-support"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Writing Support
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
