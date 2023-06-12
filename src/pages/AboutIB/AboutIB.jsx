import React, { useEffect, useRef } from "react";
import Footer from "../../components/Footer/Footer";
import "./Aboutib.css";
import logo from "../../assets/images/aboutib_logo.png";
import ilust1 from "../../assets/images/aboutin_illust1.png";
import ilust2 from "../../assets/images/aboutib_ilust2.png"

const AboutIB = () => {
  const bannerText = useRef(null);
  const logoImg = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      bannerText.current.classList.add("slide_up");
      logoImg.current.classList.add("logo_fade_in");
    }, 700);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          if (entry.target.classList.contains("aboutIB_text")) {
            entry.target.classList.add("animate");
          } else if (entry.target.classList.contains("aboutIB_img")) {
            entry.target.classList.add("animate_2");
          } else if (entry.target.classList.contains("aboutIB_img2")) {
            entry.target.classList.add("animate_3");
          }
        }
      });
    }, { threshold: 0.3 });
    
    const elements = document.querySelectorAll(".t");
    elements.forEach((element, index) => {
      observer.observe(element);
    });
    
    return () => {
      observer.disconnect();
      clearTimeout();
    };

  }, []);

  return (
    <>
      <div className="aboutib">
        <div className="aboutIB_banner">
          <img src={logo} alt="logo" className="about_ib_logo" ref={logoImg} />
          <div className="aboutIB_banner_text" ref={bannerText}>
            About the IB
          </div>
        </div>
        <div className="aboutIB_content">
          <div className="aboutIB_text t">
            <div>
              <h1>
                A variety of <br />
                <span> Educational Programs </span> <br />
                offered by IB
              </h1>
            </div>
            <div>
              <p>
                The International Baccalaureate is a global organization that
                oversees a variety of educational programs for pupils aged three
                to nineteen. Its programs are taught by carefully trained
                teachers in accredited schools all around the world, and it
                prides itself on giving pupils high quality education.
                <br /> <br />
                The IB programs encourage variety, international mindedness,
                curiosity, and a healthy desire for learning and excellence, as
                well as critical thinking and problem-solving skills.
              </p>
            </div>
          </div>
          <div className="aboutIB_ilust1">
            <img src={ilust1} alt="anosadfa" width="400px" className="aboutIB_img t" />
          </div>
        </div>
        <div className="aboutIB_content" style={{paddingBottom:"70px"}}>
          <div className="aboutIB_ilust1">
            <img src={ilust2} alt="anosadfa" width="400px" className="aboutIB_img2 t" />
          </div>
          <div className="aboutIB_text t">
            <div>
              <h1>
                The <span> IB Curriculumn</span> is <br />
                well kwon worldwide
              </h1>
            </div>
            <div>
              <p style={{marginBottom:"30px"}}>
                IB program places a greater emphasis on delivering a unified
                overall curriculum with defined prerequisites that leads to a
                diploma. The IBDP is well-known all around the world for the
                exceptional quality of its course-work. The IB curriculum’s
                strength, as well as the substantial training that IB
                instructors and school leaders are obliged to complete,
                contribute to maintaining the program’s high standard. 
                <br/><br/>
                Because of the IBDP’s high regard, universities will recognize and value
                the effort you put in to achieve your IB Diploma no matter where
                you attend. An IB Diploma is a fantastic approach to demonstrate
                your academic prowess to college admissions officers, who will
                be familiar with the program’s reputation
              </p>
              <button className="book_btn" >
                  Book a Demo Class
                </button>
            </div>
          </div>         
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutIB;
