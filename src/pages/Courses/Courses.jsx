import React from 'react'
import "./Courses.css"
import bgdesign1 from "../../assets/images/bg design.png"
import bgdesign from "../../assets/images/bg design 1.png"
import greylogo from "../../assets/images/logo-grey.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import WhatsappChat from "../../components/WhatsappChat/WhatsappChat";


function Courses() {
    return (
        <>
            <div className='courses'>
                <div className='courses_container'>
                    <div className='courses_card'>
                        <div className="courses_card_heading course_head1">
                            <img src={bgdesign} alt={bgdesign} style={{ borderTopLeftRadius: "15px" }} />
                            <div className="card_heading_text ">IGCSE</div>
                            <img src={bgdesign1} alt={bgdesign} style={{ borderTopRightRadius: "15px" }} />
                        </div>
                        <div className="courses_card_text course_border1">
                            <p className="card_para">Wherever in the world your students want to go, Cambridge IGCSE is a great choice for it. Not only is it truly international - it gives students more options than any other international qualification. That means more subjects to choose from, more ways to learn and more ways to succeed.</p>
                            <p className="card_para"> Our IGCSE courses are designed and delivered by Cambridge teachers and examiners who have been teaching the subject for many years. Their inside knowledge helps the students explore the subjects with great fun and practical approach. Students are supported with regular tests and assignments as per Cambridge pattern.</p>
                            <p className="card_para">The revision sessions further strengthen the weak points recognised in the testing. With a cumulative effort via back and forth between testing and revision the students are prepared to ace the exams and it also helps lay a strong foundation for IBDP or A Levels.</p>

                        </div>
                    </div>

                    <div className='courses_card'>
                        <div className="courses_card_heading course_head2">
                            <img src={bgdesign} alt={bgdesign} style={{ borderTopLeftRadius: "15px" }} />
                            <div className="card_heading_text ">IBDP</div>
                            <img src={bgdesign1} alt={bgdesign} style={{ borderTopRightRadius: "15px" }} />
                        </div>
                        <div className="courses_card_text course_border2">
                            <p className="card_para">International Baccalaureate Diploma Programme curriculum is made up of six subject groups and the DP core, comprising theory of knowledge (TOK), creativity, activity, service (CAS) and the extended essay. </p>
                            <p className="card_para">Through the Diploma Programme (DP) core, students reflect on the nature of knowledge, complete independent research and undertake a project all of which aims to make them global citizens. In line with the core values of IB, our IB courses are designed and delivered by IB teachers and examiners. </p>
                            <p className="card_para">Students are further tested rigorously and given weekly assignments. Along with the subjects, our tutors also help students for IA (Internal Assessment) projects with their insider insights on the grading of IAs from their school experience.</p>

                        </div>
                    </div>

                    <div className='courses_card'>
                        <div className="courses_card_heading course_head3">
                            <img src={bgdesign} alt={bgdesign} style={{ borderTopLeftRadius: "15px" }} />
                            <div className="card_heading_text " style={{ flex: "80%" }}>AS & A Level</div>
                            <img src={bgdesign1} alt={bgdesign} style={{ borderTopRightRadius: "15px" }} />
                        </div>
                        <div className="courses_card_text course_border3">
                            <p className="card_para">Cambridge International Advanced Subsidiary Levels (AS Levels) and Cambridge International Advanced Levels (A Levels) are subject-based qualifications usually taken in the final two years of high school. Cambridge International AS Level is typically a one-year programme of study, while Cambridge International A Level typically takes two years. </p>
                            <p className="card_para">Our AS & A level courses are designed by School teachers and past examiners that develop students’ knowledge, understanding and skills through: in-depth subject content, learning to work independently, applying knowledge and understanding to new as well as familiar situations, handling and evaluating different types of information sources, thinking logically and presenting ordered and coherent arguments and explanations. Our A and AS Level courses are further aided by regular practice problems and rigorous testing.</p>

                        </div>
                    </div>

                    <div className='courses_card'>
                        <div className="courses_card_heading course_head4">
                            <img src={bgdesign} alt={bgdesign} style={{ borderTopLeftRadius: "15px" }} />
                            <div className="card_heading_text ">IIT-JEE</div>
                            <img src={bgdesign1} alt={bgdesign} style={{ borderTopRightRadius: "15px" }} />
                        </div>
                        <div className="courses_card_text course_border4">
                            <p className="card_para">JEE or Join Entrance Examination is Indian Engineering Entrance Exam necessary to get admission into national engineering universities & institutes. JEE preparation demands in depth knowledge of the concepts as it is globally recognised as one of the most challenging entrance exam. </p>
                            <p className="card_para">Our JEE courses are designed & delivered by IIT Bombay alumni with more than 8 years of teaching experience. Our JEE courses enable the students to do smart, systematic & concentrated effort aided by our daily practice problems, regular test, rigorous doubts solving & revisions. Our students have secured seats in prestigious IIT Bombay, IIT Delhi, IIT Madras and more.</p>

                        </div>
                    </div>

                    <div className='courses_card'>
                        <div className="courses_card_heading course_head5">
                            <img src={bgdesign} alt={bgdesign} style={{ borderTopLeftRadius: "15px" }} />
                            <div className="card_heading_text ">NEET (UG)</div>
                            <img src={bgdesign1} alt={bgdesign} style={{ borderTopRightRadius: "15px" }} />
                        </div>
                        <div className="courses_card_text course_border5">
                            <p className="card_para">NEET for the National Eligibility cum Entrance Test is an Indian Medical Entrance Examination. Our NEET Curriculum for physics & chemistry is designed by IIT Bombay alumni & Biology is designed by MBBS doctors. NEET-UG preparation requires dedication, perseverance, smart work & systematic planning.</p>
                            <p className="card_para">Our tutors help students inculcate these qualities as well as our NEET Curriculum helps students ace the subjects of Physics, Chemistry, Botany, Zoology with thorough coverage of the syllabus and rigorous testing & revision. Our students have a secured seats in MBBS programmes offered by prestigious colleges like Armed Forces Military College etc.</p>
                        </div>
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
                <WhatsappChat />
            </div>
        </>
    )
}

export default Courses