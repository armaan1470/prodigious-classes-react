import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  });

  // Rest of the code...

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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-links");
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === location.pathname) {
        navLinks.forEach((link) => link.classList.remove("active"));
        link.classList.add("active");
      }
    });
  }, [location]);

  const handleClick = () => setClick(!click);
  // const handleDropdownOpen = () => setIsDropdownOpen(true);
  // const handleDropdownClose = () => setIsDropdownOpen(false);

  // const handleMouseEnter = () => {
  //   if (!click && window.innerWidth > 1024) {
  //     handleDropdownOpen();
  //   }
  // };

  // const handleMouseLeave = () => {
  //   if (!click && window.innerWidth > 1024) {
  //     handleDropdownClose();
  //   }
  // };

  // const handleDropdownClick = () => {
  //   if (window.innerWidth <= 1024) {
  //     if (isDropdownOpen) {
  //       handleDropdownClose();
  //     } else {
  //       handleDropdownOpen();
  //     }
  //   }
  // };

  useEffect(() => {
    window.addEventListener("resize", showButton);
    return () => {
      window.removeEventListener("resize", showButton);
    };
  }, []);

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
            <Link
              to="/about-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/courses"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Courses
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              to="/about-ib"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              IB & IGC SE
            </Link>
          </li> */}
          <li
            className="nav-item"
            onMouseEnter={() => handleMouseEnter("isDropdownOpenIB")}
            onMouseLeave={() => handleMouseLeave("isDropdownOpenIB")}
            onClick={() => handleDropdownClick("isDropdownOpenIB")}
          >
            <div
              className={`nav-links ${dropdownStates.isDropdownOpenIB ? "active" : ""
                }`}
              onClick={closeMobileMenu}
            >
              IB & IGC SE
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
                  className={`dropdown-menu ${dropdownStates.isDropdownOpenIB ? "active" : ""
                    }`}
                >
                  <li className="dropdown-item">
                    <Link to="/about-ib" className="sub-nav-links" onClick={closeMobileMenu}>
                      About-IB
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/about-igcse" className="sub-nav-links" onClick={closeMobileMenu}>
                      About IGC SE
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => handleMouseEnter("isDropdownOpenCareer")}
            onMouseLeave={() => handleMouseLeave("isDropdownOpenCareer")}
            onClick={() => handleDropdownClick("isDropdownOpenCareer")}
          >
            <div
              className={`nav-links ${dropdownStates.isDropdownOpenCareer ? "active" : ""
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
                  className={`dropdown-menu ${dropdownStates.isDropdownOpenCareer ? "active" : ""
                    }`}
                >
                  <li className="dropdown-item">
                    <Link to="/parental-support" className="sub-nav-links" onClick={closeMobileMenu}>
                      Parental Support
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/emotional-support" className="sub-nav-links" onClick={closeMobileMenu}>
                      Emotional Support
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="nav-item">
            <Link
              to="/writing-support"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Writing Support
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
