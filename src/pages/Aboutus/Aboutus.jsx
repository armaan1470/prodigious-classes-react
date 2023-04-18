import React from 'react'
import "./Aboutus.css"
import illustration4 from "../../assets/images/illustration-4.png";
import director from "../../assets/images/director image.jpg";
import tut1 from "../../assets/images/Team-1.jpg";
import tut2 from "../../assets/images/Team-2.jpg";
import tut3 from "../../assets/images/Team-3.jpg";
import tut4 from "../../assets/images/Team-4.jpg";
import tut5 from "../../assets/images/Team-5.jpg";
import mission from "../../assets/images/Our Mission.png"
import vision from "../../assets/images/Our Vision.png"
import mission_div from "../../assets/images/mission_div.png"
import vision_div from "../../assets/images/vision_div.png"
import avatar1 from "../../assets/images/Profile-1.png"
import avatar2 from "../../assets/images/Profile-2.png"
import avatar3 from "../../assets/images/Profile-3.png"
import avatar4 from "../../assets/images/Profile-4.png"
import avatar5 from "../../assets/images/Profile-5.png"
import avatar6 from "../../assets/images/Profile-6.png"
import stories1 from "../../assets/images/success stories-1.png"
import stories2 from "../../assets/images/success stories-2.png"
import stories3 from "../../assets/images/success stories-3.png"
import stories4 from "../../assets/images/success stories-4.png"
import stories5 from "../../assets/images/success stories-5.png"
import stories6 from "../../assets/images/success stories-6.png"
import line from "../../assets/images/underline_about us.png"
import greylogo from "../../assets/images/logo-grey.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Aboutus() {
    return (
        <>
            <div className='about_us'>
                <div className="about_us_hero">
                    <div className='hero_img'>
                        <img src={illustration4} alt="illustration4" className='illustration4' />
                    </div>
                    <div className="hero_text">
                        <div className="hero_text_heading"><span>About</span> <span>Us</span></div>

                        <p className='hero_subtext'>Established in 2012, Philomathean Career Institute started with a handful of students, a few sessions old, the institute scaled new heights of success by providing coaching for IB & IGCSE students 5th to 10th, ICSE and Engineering, and Medical entrance exam preparation.</p>

                        <p className='hero_subtext'>New milestones were set each year and the institute achieved a remarkable landmark with excellent results. Besides IB & IGCSE students 5th to10th, domain, prodigious career institute brought outstanding results in the International Olympiads as well.</p>

                        <p className='hero_subtext'>The institute also started providing preparation courses for Study Abroad. Every year, our students get admission into top international universities. The institute has now become the preferred choice for students, who want to build a strong foundation for their higher studies in Engineering & Medical, or achieve top ranks in competitive exams or Study Abroad programs.</p>
                    </div>

                </div>
                <div className="two_items_container">
                    <img src={vision_div} alt={vision} />
                    <img src={mission_div} alt={mission} />
                </div>
                <div className="about_dir_container">
                    <div className="about_dir">

                        <img src={director} alt={director} className='director' />

                        <div className="dir_text">
                            <div className="dir_heading">
                                About Director
                            </div>
                            <p className="dir_subtext">Mr. Satish Vishwakarma, an educationist with an entrepreneurial vision to build a harmonious society and one who is empowered by ‘Quality Education’ is a physics & maths alumnus, armed with 1 decade of experience and proficiency. </p>
                            <p className="dir_subtext">He is an expert in the field of mathematics and in preparing students for various competitive exams. His experience coupled with the impactful results of the institute makes him a preferred choice among IB & IGCSE students 5th to10th & Engineering and Medical aspirants. </p>
                            <p className="dir_subtext">Mr. Satish in recognition of his contribution to the education industry. His strategies, planning, and execution help him handle the expansion and management of the institute’s business acumen topped with financial expertise and professional network, bringing glory to the success of the institute. </p>
                            <p className="dir_subtext">His innovation in the education industry has transformed the fundamentals innovatively and efficiently in teaching. The incredible contribution he has made in running business operations has made him a renowned business leader.</p>

                        </div>

                    </div>

                </div>

                <div className="stories_background">
                    <div className="stories_container">
                        <div className="stories_heading">Success Stories</div>
                        <div className="stories_card_container">
                            <div className="stories_cards">
                                <div className="card_img">
                                    <img src={stories1} alt={stories1} className='stories_img' />
                                </div>
                                <div className="card_desc">

                                    <img src={avatar1} alt={avatar1} className="avatar_img" />

                                    <div className="card_details">
                                        <div className="primary_text">Sikha Gupta</div>
                                        <div className="secondary_text">Student, Class 10</div>
                                    </div>
                                </div>
                            </div>
                            <div className="stories_cards">
                                <div className="card_img">
                                    <img src={stories2} alt={stories2} className='stories_img' />
                                </div>
                                <div className="card_desc">

                                    <img src={avatar2} alt={avatar2} className="avatar_img" />

                                    <div className="card_details">
                                        <div className="primary_text">Shriya Ganguly</div>
                                        <div className="secondary_text">Student, Class 9 (IGCSE)</div>
                                    </div>
                                </div>
                            </div>
                            <div className="stories_cards">
                                <div className="card_img">
                                    <img src={stories3} alt={stories3} className='stories_img' />
                                </div>
                                <div className="card_desc">

                                    <img src={avatar3} alt={avatar3} className="avatar_img" />

                                    <div className="card_details">
                                        <div className="primary_text">Jitesh Singh</div>
                                        <div className="secondary_text">Student, Class 10</div>
                                    </div>
                                </div>
                            </div>
                            <div className="stories_cards">
                                <div className="card_img">
                                    <img src={stories4} alt={stories4} className='stories_img' />
                                </div>
                                <div className="card_desc">

                                    <img src={avatar4} alt={avatar4} className="avatar_img" />

                                    <div className="card_details">
                                        <div className="primary_text">Suamya Kshirsagar</div>
                                        <div className="secondary_text">Student, Class 9 (IGCSE)</div>
                                    </div>
                                </div>
                            </div>
                            <div className="stories_cards">
                                <div className="card_img">
                                    <img src={stories5} alt={stories5} className='stories_img' />
                                </div>
                                <div className="card_desc">

                                    <img src={avatar5} alt={avatar5} className="avatar_img" />

                                    <div className="card_details">
                                        <div className="primary_text">Khyati</div>
                                        <div className="secondary_text">Owner, Pupils Academy</div>
                                    </div>
                                </div>
                            </div>
                            <div className="stories_cards">
                                <div className="card_img">
                                    <img src={stories6} alt={stories6} className='stories_img' />
                                </div>
                                <div className="card_desc">

                                    <img src={avatar6} alt={avatar6} className="avatar_img" />

                                    <div className="card_details">
                                        <div className="primary_text">Vanshika Desai</div>
                                        <div className="secondary_text">Student, Class 9 (IGCSE)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="team_container">
                    <div className="team_heading">Our Philomathean <span> Team </span></div>
                    <div className="team_cards_container">
                        <img src={tut1} alt={tut1} className="team_cards" />
                        <img src={tut2} alt={tut2} className="team_cards" />
                        <img src={tut3} alt={tut3} className="team_cards" />
                        <img src={tut4} alt={tut4} className="team_cards" />
                        <img src={tut5} alt={tut5} className="team_cards" />
                    </div>
                </div>



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
                        <div className="links">
                            <ul className="nav-links">
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

            </div>

        </>
    )
}

export default Aboutus