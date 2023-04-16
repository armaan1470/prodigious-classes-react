import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import illustration1 from "../../assets/images/Boy with elements.png";
import illustration2 from "../../assets/images/About Us.png";
import illustration3 from "../../assets/images/benefits.png";
import illustration4 from "../../assets/images/testimonials.png";
import Counter from "../../components/Counter/Counter";
import prevbtn1 from "../../assets/images/slider button.png";
import nextbtn1 from "../../assets/images/slider button 1.png";
import igrad1 from "../../assets/images/Int. Graduate.jpg";
import igrad2 from "../../assets/images/Int. Graduate 1.jpg";
import igrad3 from "../../assets/images/Int. Graduate 2.jpg";
import leftcomma from "../../assets/images/Apostrophe left.png";
import rightcomma from "../../assets/images/Apostrophe right.png";
import decor from "../../assets/images/Lines.png";
import course1 from "../../assets/images/Courses.jpg";
import course2 from "../../assets/images/Courses 2.jpg";
import course3 from "../../assets/images/Courses 3.jpg";
import course4 from "../../assets/images/Courses 4.jpg";
import course5 from "../../assets/images/Courses 5.jpg";
import course6 from "../../assets/images/Courses 6.jpg";
import tutor1 from "../../assets/images/Tutor-1.jpg";
import tutor2 from "../../assets/images/Tutor-2.jpg";
import tutor3 from "../../assets/images/Tutor-3.jpg";
import prevbtn2 from "../../assets/images/slider button 2.png";
import nextbtn2 from "../../assets/images/slider button 3.png";
import prevbtn3 from "../../assets/images/slider button 4.png";
import nextbtn3 from "../../assets/images/slider button 4.png";
import greylogo from "../../assets/images/logo-grey.png";
import WhatsappChat from "../../components/WhatsappChat/WhatsappChat";
import Slides from "../../components/Slides/Slides";
import Slider from "../../components/Slider/Slider";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Home() {
  const [count, setCount] = useState(0);

  const slides = [
    <img src={igrad1} className="slider-img" alt="" />,
    <img src={igrad2} className="slider-img" alt="" />,
    <img src={igrad3} className="slider-img" alt="" />,
  ];
  return (
    <>
      <Router>
        <div className="body">
          <Navbar />
          <Routes>
            <Route path="/#" exact></Route>
          </Routes>
          <div className="hero_container">
            <div className="text_img_container">
              <div className="first_half text">
                <div>
                  <h1>
                    Let's <span> Learn </span>
                    <br />
                    at the Comfort
                    <br /> of our
                    <span> Home </span>
                  </h1>
                </div>
                <div>
                  <p>
                    Private group tution at your door step. <br /> We provide a
                    flexible learning solution that <br /> makes learning easy
                    and convinient
                  </p>
                  <button className="btn">Book A Demo Class</button>
                </div>
              </div>
              <div className="second_half ">
                <img src={illustration1} alt="ilustrate" className="illustrate" width="70%" />
              </div>
            </div>
            <Counter />
          </div>
          {/*    */}




          {/* <div className="graduation">
            <p>
              Our <span> International </span>Graduates
            </p>
            <Slider />
          </div> */}

          {/* <div className="About-us">
          <div className="ilustrate-2">
            <img src={illustration2} alt="" />
          </div>
          <div className="text2">
            <div>
              <h1>
                <span>About </span> Us
              </h1>
              <p>
                We at Prodigious Career Institute <br />
                understand that education is the most <br />
                powerful weapon to help bring the <br />
                desired change in our society and to <br />
                contribute to the society at large.
                <br />
              </p>
              <button className="btn">Book A Demo className</button>
            </div>
          </div>
        </div> */}





          <div className="course_container">
            <p>
              Featured <span> Courses</span> at Prodigious
            </p>
            <div className="courses">
              <img src={course1} alt="" />
              <img src={course2} alt="" />
              <img src={course3} alt="" />
              <img src={course4} alt="" />
              <img src={course5} alt="" />
              <img src={course6} alt="" />
            </div>
          </div>

          <div className="benefits_container text_img_container">
            <div className="first_half text3">
              <h1>
                Learning at
                <br />
                Prodigious has
                <br />
                many <span>benefits</span>
              </h1>
              <p>
                Students at Prodigious Career Institute <br />
                are given personal attention. We help
                <br />
                them improve their overall performance.
                <br />
              </p>
              <button className="btn">Book A Demo</button>
            </div>
            <div className="second_half ilustrate-3">
              <img src={illustration3} alt="" />
            </div>
          </div>

          <div className="qoute_container">
            <div className="main-q">
              <img src={leftcomma} width="9%" alt="" />
              <p>
                We are committed <br />
                to providing the best education possible
              </p>
              <img src={rightcomma} width="9%" alt="" />
            </div>
            <div className="deco">
              <img src={decor} className="deco_img" alt="" />
            </div>
          </div>

          {/* <div className="team">
          <p>
            Our Prodigious <span> Team </span>
          </p>
          <div className="wrapper">
            <img src={prevbtn2} className="arrows" alt="" />
            <div className="carousel">
              <img src={tutor1} className="slider-img" alt="" />
              <img src={tutor2} className="slider-img" alt="" />
              <img src={tutor3} className="slider-img" alt="" />
            </div>
            <img src={nextbtn2} className="arrows" alt="" />
          </div>
        </div> */}

          <div className="testimonial_container">
            <div className="testimonials">
              <div className="text4">
                <p>testimonials</p>
                <p>
                  What Our Students/Parents
                  <br />
                  are <span> saying </span>about us?
                </p>
              </div>
              <div className="ilustrate-4">
                <div className="wrapper">
                  <img src={prevbtn3} className="arrows" alt="" />
                  <div className="testcard">
                    <img src={illustration4} className="tweet-img" alt="" />
                  </div>
                  <img src={nextbtn3} className="arrows" alt="" />
                </div>
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
        </div>
      </Router>
    </>
  );
}

export default Home;
