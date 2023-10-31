import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Home.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import illustration1 from "../../assets/images/illustration-ani.png";
import apple from "../../assets/images/apple.png";
import box from "../../assets/images/box.png";
import bulb from "../../assets/images/bulb.png";
import pie from "../../assets/images/pie.png";
import rings from "../../assets/images/rings.png";
import scale from "../../assets/images/scale.png";
import calculator from "../../assets/images/calculator.png";
import target from "../../assets/images/target.png";
import hexagon from "../../assets/images/hexagon.png";
import illustration2 from "../../assets/images/About Us.png";
import illustration3 from "../../assets/images/benefits.png";
import Counter from "../../components/Counter/Counter";
import prevbtn1 from "../../assets/images/slider button.png";
import nextbtn1 from "../../assets/images/slider button 1.png";
import igrad1 from "../../assets/images/Int Result-1.jpg";
import igrad2 from "../../assets/images/Int Result-2.jpg";
import igrad3 from "../../assets/images/Int Result-3.jpg";
import igrad4 from "../../assets/images/Int Result-4.jpg";
import igrad5 from "../../assets/images/Int Result-5.jpg";
import igrad6 from "../../assets/images/Int Result-6.jpg";
import leftcomma from "../../assets/images/Apostrophe left.png";
import rightcomma from "../../assets/images/Apostrophe right.png";
import decor from "../../assets/images/Lines.png";
import tut1 from "../../assets/images/Team-1.jpg";
import tut2 from "../../assets/images/Team-2.jpg";
import tut3 from "../../assets/images/Team-3.jpg";
import tut4 from "../../assets/images/Team-4.jpg";
import tut5 from "../../assets/images/Team-5.jpg";
import prevbtn2 from "../../assets/images/slider button 2.png";
import nextbtn2 from "../../assets/images/slider button 3.png";
import Carousel from "../../components/Carousel/Carousel";
// import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";
import CourseContainer from "../../components/CourseContainer/CourseContainer";
import ButtonModal from "../../components/ButtonModal/ButtonModal";
import BannerSlider from '../../components/BannerSlider/BannerSlider';
import testimonialBg from "../../assets/images/testimonial-background.jpg"
import ReactCardSlider from 'react-card-slider-component';
import CardSlider from '../../components/CardSlider/CardSlider';
import funFact from '../../assets/images/fact.png'
import avatar1 from "../../assets/images/Profile-1.png";
import avatar2 from "../../assets/images/Profile-2.png";
import avatar3 from "../../assets/images/Profile-3.png";
import avatar4 from "../../assets/images/Profile-4.png";
import avatar5 from "../../assets/images/Profile-5.png";
import avatar6 from "../../assets/images/Profile-6.png";
import stories1 from "../../assets/images/success stories-1.png";
import stories2 from "../../assets/images/success stories-2.png";
import stories3 from "../../assets/images/success stories-3.png";
import stories4 from "../../assets/images/success stories-4.png";
import stories5 from "../../assets/images/success stories-5.png";
import stories6 from "../../assets/images/success stories-6.png";

function Home() {


  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".t");
      elements.forEach((element) => {
        const { top, bottom } = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (top < windowHeight * 1) {
          if (element.classList.contains("avatar_img")) {
            element.style.animation = "popup forwards 0.5s";
            const storiesImages = document.querySelectorAll(".stories_img");
            storiesImages.forEach((img) => {
              img.style.animation = "popup forwards 0.5s";
              img.style.animationDelay = "0.5s";
            });
          } else if (element.classList.contains("primary_text") || element.classList.contains("secondary_text")) {
            element.classList.add("typed");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const aniElement = useRef([]);


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          if (entry.target.classList.contains("ilustrate-3")) {
            entry.target.classList.add("animate_2");
          } else if (entry.target.classList.contains("qoute_text_animation")) {
            entry.target.style.animation = "fadein forwards 1s";
            entry.target.style.animationDelay = "0.2s";
          } else if (entry.target.classList.contains("text4")) {
            entry.target.classList.add("animate_test_text");
          } else {
            entry.target.classList.add("animate");
          }
        }
      });
    }, { threshold: 0.5 });
  
    aniElement.current.forEach((element, index) => {
      observer.observe(element);
    });
  
    return () => {
      observer.disconnect();
    };
  }, []);






  return (
    <>

      <BannerSlider />




      {/* learning at philomathean */}


      <div className="benefits_container text_img_container">
          <div
            className="first_half text3"

            ref={(el) => (aniElement.current[1] = el)}
          >
            <h1>
              Learning at
              <br />
              Philomathean has
              <br />
              many <span>benefits</span>
            </h1>
            <p>
            Each Philomathean Career Institute student receives
            personalized attention. Our goal is to help them
            improve their overall performance. Our flexible timings
            ensure that all students are taken care of. Additionally,
            we conduct one-to-one student-teacher sessions.
            We conduct weekly tests to ensure everything is up to
            standard. Additionally, doubt-solving sessions are
            conducted after weekly tests and before exams.
            </p>
          </div>
          <div
            className="second_half ilustrate-3"
            ref={(el) => (aniElement.current[2] = el)}

          >
            <img src={illustration3} alt="" />
          </div>
        </div>






      {/* success stories */}

      <div className="stories_background">
        <div className="stories_container">
          <div className="stories_heading">Success Stories</div>
          <div className="stories_card_container">
            <div className="stories_cards">
              <div className="card_img">
                <img src={stories1} alt={stories1} className="stories_img t" />
              </div>
              <div className="card_desc">
                <img src={avatar1} alt={avatar1} className="avatar_img t" />

                <div className="card_details">
                  <div className="primary_text t">Sikha Gupta</div>
                  <div className="secondary_text t">Student, Class 10</div>
                </div>
              </div>
            </div>
            <div className="stories_cards">
              <div className="card_img">
                <img src={stories2} alt={stories2} className="stories_img t" />
              </div>
              <div className="card_desc">
                <img src={avatar2} alt={avatar2} className="avatar_img t" />

                <div className="card_details">
                  <div className="primary_text t">Shriya Ganguly</div>
                  <div className="secondary_text t">
                    Student, Class 9 (IGCSE)
                  </div>
                </div>
              </div>
            </div>
            <div className="stories_cards">
              <div className="card_img">
                <img src={stories3} alt={stories3} className="stories_img t" />
              </div>
              <div className="card_desc">
                <img src={avatar3} alt={avatar3} className="avatar_img t" />

                <div className="card_details">
                  <div className="primary_text t">Jitesh Singh</div>
                  <div className="secondary_text t">Student, Class 10</div>
                </div>
              </div>
            </div>
            <div className="stories_cards">
              <div className="card_img">
                <img src={stories4} alt={stories4} className="stories_img t" />
              </div>
              <div className="card_desc">
                <img src={avatar4} alt={avatar4} className="avatar_img t" />

                <div className="card_details">
                  <div className="primary_text t">Suamya Kshirsagar</div>
                  <div className="secondary_text t">
                    Student, Class 9 (IGCSE)
                  </div>
                </div>
              </div>
            </div>
            <div className="stories_cards">
              <div className="card_img">
                <img src={stories5} alt={stories5} className="stories_img t" />
              </div>
              <div className="card_desc">
                <img src={avatar5} alt={avatar5} className="avatar_img t" />

                <div className="card_details">
                  <div className="primary_text t">Khyati</div>
                  <div className="secondary_text t">Owner, Pupils Academy</div>
                </div>
              </div>
            </div>
            <div className="stories_cards">
              <div className="card_img">
                <img src={stories6} alt={stories6} className="stories_img t" />
              </div>
              <div className="card_desc">
                <img src={avatar6} alt={avatar6} className="avatar_img t" />

                <div className="card_details">
                  <div className="primary_text t">Vanshika Desai</div>
                  <div className="secondary_text t">
                    Student, Class 9 (IGCSE)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      {/* fun fact */}

      <div className="funfact_container">
        <img src={funFact} alt="fun_fact" />
      </div>


      <div className="testimonial_container">
        <div className="testimonials">

          <div className="text4">
            <p>Testimonials</p>
            <p>
              What Our Students/Parents <br />
              are saying about us?
            </p>
          </div>

          {/* <ReactCardSlider slides={slides}/> */}

          <CardSlider />

        </div>
      </div>

      <div className="book_in_wrapper">
        <div className="book_in_container">
          <div className="book_in_detail">
            <small>Free Demo Lecture</small>
            <h1>
              Ready to dive in?
              <br />
              Attain your Free Demo Lecture today.
            </h1>
          </div>
          <ButtonModal name="BOOK NOW" bg="white" clr="orange" bld="600" />
        </div>
      </div>





      {/* <div className="bottom_space"></div> */}

    </>
  );
}

export default Home;
