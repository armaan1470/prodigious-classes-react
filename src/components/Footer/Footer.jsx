import React from 'react'
import "./Footer.css"
import greylogo from "../../assets/images/logo-grey.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReactDOMServer from 'react-dom/server';


function Footer() {

    const reloadPage = () => { window.location.reload(); window.location.pathname("/") }
    const svgCode = ReactDOMServer.renderToString(<FaInstagram />);
    


    return (
        <>
            <div className="footer_container">
                <div className="footer">
                    <div className="icons">
                        <div className="white_logo" >
                            <div className='logo_div'>
                                <Link to="/" className="logo" onClick={reloadPage}>
                                    <img src={greylogo} alt="" className='logo_img2'/>
                                </Link>
                            </div>

                        </div>
                        <div className="social-icons border">
                            <a href="https://www.facebook.com/profile.php?id=100086078512350">
                                <FaFacebook color="#6b6b6b" className="each_icon fb_icon" />
                            </a>
                            <a href="https://twitter.com/Prodigi69196135">
                                <FaTwitter color="#6b6b6b" className="each_icon tw_icon" />
                            </a>
                            <a href="https://www.instagram.com/philomathean_2022/">
                                <FaInstagram color="#6b6b6b" className="each_icon in_icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/prodigious-career-institute-35292a251/">
                                <FaLinkedin color="#6b6b6b" className="each_icon li_icon" />
                            </a>
                        </div>

                    </div>
                    <hr />
                    <div className="links_footer">
                        <ul className="nav_links_footer">


                            <li>Terms & Condition</li>
                            <li>Privacy Policy</li>
                            <li>
                                <Link to="/about" className='react_links'>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/courses" className='react_links'>
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className='react_links'>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        <div className='copyright_container'>
                            <b>&copy; 2023 All Rights Reserved.</b>
                        </div>
      
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer