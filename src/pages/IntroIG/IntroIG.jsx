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
      <div className="intro_igsce1">
        <div className="igsce_ilust_container">
          <img src={ilust1} alt="ilustration" />
        </div>
        <div className="igsce_content1">
          <div className="content_header">
            <p>IGCSE TUTION</p>
            <h1>Introduction to IGCSE</h1>
          </div>
          <div className="content-detail">
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
      <div className="intro_igsce2">
        <div className="igsce_content2">
          <div className="content-detail ">
            <p>
              In terms of career opportunities, the IGCSE curriculum provides a strong
              foundation for further education and specialization.
              Upon completing their IGCSEs, students can progress
              to the next level of education, such as the International
              Baccalaureate (IB) Diploma Programme, A-Levels, or other
              pre-university courses. These qualifications can open doors to
              universities and colleges around the world.
              <br />
              <br />
              The IGCSE curriculum also equips students with transferable skills
              that are highly valued in the job market. These skills include
              critical thinking, problem-solving, effective communication, and
              independent research abilities. Graduates with IGCSE
              qualifications may find employment opportunities in various fields
              such as business, finance, engineering, healthcare, arts, and
              more.
              <br/><br/>
              Ultimately, the IGCSE curriculum provides students with a
              well-rounded education, preparing them for further studies and
              future career prospects. Its international recognition and
              emphasis on developing key skills make it a popular choice for
              students seeking a globally recognized qualification.
            </p>
          </div>
        </div>
        <div className="igsce_ilust_container">
          <img src={ilust2} alt="ilustration" />
        </div>
      </div>
      <div className="bottom_space"></div>
    </div>

  );
};

export default IntroIG;
