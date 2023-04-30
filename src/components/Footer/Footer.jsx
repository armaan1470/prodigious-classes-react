import React from 'react'
import "./Footer.css"
import greylogo from "../../assets/images/logo-grey.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";


function Footer() {
    return (
        <>
            <div className="footer_container">
                <div className="footer">
                    <div className="icons">
                        <div className="white-logo">
                            <img src={greylogo} alt="" width="100%" />
                        </div>
                        <div className="social-icons border">
                            <FaFacebook size={30} color="#6b6b6b" className="each_icon" />
                            <FaTwitter size={30} color="#6b6b6b" className="each_icon" />
                            <FaInstagram size={30} color="#6b6b6b" className="each_icon" />
                            <FaLinkedin size={30} color="#6b6b6b" className="each_icon" />
                        </div>
                    </div>
                    <hr />
                    <div className="links_footer">
                        <ul className="nav_links_footer">
                            <li>Terms & Condition</li>
                            <li>Privacy Policy</li>
                            <li>About Us </li>
                            <li>Courses</li>
                            <li>Conatact US</li>
                        </ul>
                        <b>&copy; 2023 All Rights Reserved.</b>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer