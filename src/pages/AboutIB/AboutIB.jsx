import React, { useEffect, useRef } from "react";
import Footer from "../../components/Footer/Footer";
import "./Aboutib.css";
import logo from "../../assets/images/aboutib_logo.png";
import ilust1 from "../../assets/images/aboutin_illust1.png"

const AboutIB = () => {

    const bannerText = useRef(null);
    const logoImg = useRef(null);


    useEffect(() => {
        setTimeout(() => {
            bannerText.current.classList.add('slide_up');
            logoImg.current.classList.add('logo_fade_in');
        }, 700);
    }, []);

  return (
    <>
      <div className="aboutib">
        <div className="aboutIB_banner">
          <img src={logo} alt="logo" className="about_ib_logo" ref={logoImg} />
          <div className="aboutIB_banner_text" ref={bannerText}>About the IB</div>
        </div>
        <div className="aboutIB_content">
          <div className="aboutIB_text">
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
            <img src={ilust1} alt="anosadfa" width="400px"/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutIB;
