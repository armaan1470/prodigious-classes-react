import React from "react";
import "./IntroIG.css";
import banner from "../../assets/igcsepagecontent/4.jpg";
import logo from "../../assets/igcsepagecontent/5.png";
import ilust1 from "../../assets/igcsepagecontent/1.png";
import ilust2 from "../../assets/igcsepagecontent/2.png";

const IntroIG = () => {
  return (
    <div className="main_container">
      <div className="header">
        <img src={banner} alt="banner" className="banner" />
        <div className="content-holder">
          <div className="details">
            <h1>IGCSE Tuition</h1>
            <p>
              World Class and Certified IGCSE Tutors at Your Fingertips. Get
              Individualized, Focused Tuition Classes and Ace your Assessment.
            </p>
          </div>
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="intro_igsce">
        <div className="igsce_ilust_Container">
            <img src={ilust1} alt="ilustration" />
        </div>
        <div className="igsce_content">
          <div>
            <p>IGCSE TUTION</p>
            <h1>Introduction to IGCSE</h1>
          </div>
          <div>
            <p>
              The International General Certificate of Secondary Education
              (IGCSE) is an internationally recognized curriculum and
              qualification designed for students aged 14 to 16 years. It is
              offered by the Cambridge Assessment International Education (CAIE)
              board, which is a part of the University of Cambridge. IGCSE
              provides a broad and balanced educational foundation, covering a
              wide range of subjects including languages, humanities, sciences,
              mathematics, and creative arts. It offers students a flexible and
              diverse course of study, allowing them to choose subjects based on
              their interests and strengths.
              <br />
              <br />
              The IGCSE curriculum is structured around individual subject
              examinations, which are typically taken at the end of a two-year
              course. Students can choose to study a core curriculum, which
              includes a minimum number of subjects, or opt for additional
              subjects from a wide range of options. One of the key advantages
              of the IGCSE curriculum is its international recognition. It is
              accepted by universities and employers worldwide, making it a
              valuable qualification for students who wish to pursue higher
              education or seek employment opportunities abroad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroIG;
