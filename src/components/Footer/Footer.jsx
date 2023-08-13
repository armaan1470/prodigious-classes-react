import React from 'react'
import "./Footer.css"
import whitelogo from "../../assets/images/logo-white.svg";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReactDOMServer from 'react-dom/server';
import { NavLink, useLocation } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { GoLocation } from 'react-icons/go'


function Footer() {

    const reloadPage = () => { window.location.reload(); window.location.pathname("/") }
    const svgCode = ReactDOMServer.renderToString(<FaInstagram />);
    


    return (
        <>
            <footer className='footer'>
                <div className="footer_top_container">
                    <div className="footer_top_row">
                        <div className="footer_top_column footer_first_top_column">
                            <img src={whitelogo} alt={whitelogo} className='footer_logo' />
                            <div className='footer_detail_text footer_logo_text'>
                                We bring you a world-class team of highly experienced and qualified faculty
                            </div>
                        </div>
                        <div className="footer_top_column padding_right">
                            <div className="footer_heading_text">
                                Quick Links
                            </div>
                            <div className="footer_detail_text">
                                <ul className='footer_links_list'>
                                    <li className="footer_links"><NavLink to="about-ib">IB Tution</NavLink></li>
                                    <li className="footer_links"><NavLink to="#">IGCSE Tution</NavLink></li>
                                    <li className="footer_links"><NavLink to="#">AS & A Levels Tution</NavLink></li>
                                    <li className="footer_links"><NavLink to="#">Career Counselling</NavLink></li>
                                    <li className="footer_links"><NavLink to="#">Writing Support</NavLink></li>
                                </ul>

                            </div>
                        </div>
                        <div className="footer_top_column footer_supp_col">
                            <div className="footer_heading_text">
                                Support
                            </div>
                            <div className="footer_detail_text">
                                <ul className='footer_links_list'>
                                    <li className="footer_links"><NavLink to="#">Enquiry</NavLink></li>
                                    <li className="footer_links"><NavLink to="#">About Us</NavLink></li>
                                    <li className="footer_links"><NavLink to="#">Contact Us</NavLink></li>
                                    <li className="footer_links"><NavLink to="#">Sitemap</NavLink></li>
                                    <li className="footer_links"><NavLink to="#">Privacy Policy</NavLink></li>
                                    <li className="footer_links"><NavLink to="#">Terms & Condition</NavLink></li>
                                </ul>

                            </div>
                        </div>
                        <div className="footer_top_column last_colum_footer">
                            <div className="footer_last_row_top">
                                <div className="footer_heading_text">
                                    Have Questions?
                                </div>
                                <div className="footer_detail_text">
                                    <div className='footer_icon_text_container'>
                                        <FiPhone size={15} color='#ebecee' className='footer_icon_text_img' onClick={() => openLink('tel:932416073')} />
                                        <div>+91-9324164073</div>
                                    </div>
                                    <div className='footer_icon_text_container'>
                                        <FiMail size={14} color='#ebecee' className='footer_icon_text_img' onClick={() => openLink('tel:932416073')} />
                                        <div>philomathean22@gmail.com</div>
                                    </div>
                                    <div className='footer_icon_text_container'>
                                        <GoLocation size={13} color='#ebecee' className='footer_icon_text_img' onClick={() => openLink('tel:932416073')} />
                                        <div>Mumbai, India</div>
                                    </div>
                                </div>

                            </div>

                            <div className="footer_last_row_bottom">
                                <div className="footer_heading_text">
                                    Follow Us
                                </div>
                                <div className="footer_icons_container">
                                    <a href="https://www.facebook.com/profile.php?id=100086078512350">
                                        <FaFacebook size={25} color="#ebecee" className="each_icon fb_icon" />
                                    </a>
                                    <a href="https://twitter.com/Prodigi69196255">
                                        <FaTwitter size={25} color="#ebecee" className="each_icon tw_icon" />
                                    </a>
                                    <a href="https://www.instagram.com/philomathean_2022/">
                                        <FaInstagram size={25} color="#ebecee" className="each_icon in_icon" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/prodigious-career-institute-35292a251/">
                                        <FaLinkedin size={25} color="#ebecee" className="each_icon li_icon" />
                                    </a>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
                <div className="footer_bottom_container">
                    <div className='bottom_text_copyright'>Copyright &copy; 2023 Philomathean Carrer Institute. All Rights Reserved</div>
                </div>
            </footer>
        </>
    )
}

export default Footer