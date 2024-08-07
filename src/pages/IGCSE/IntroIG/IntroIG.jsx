import React from "react";
import "./IntroIG.css";
import logo from "../../../assets/igcsepagecontent/5.png";
import ilust1 from "../../../assets/igcsepagecontent/1.png";
import ilust2 from "../../../assets/igcsepagecontent/2.png";
import ButtonModal from "../../../components/ButtonModal/ButtonModal";
import idea from "../../../assets/images/idea.png";
import dna from "../../../assets/images/dna.png";
import useAnimation from "../../../Hooks/useAnimation"

const IntroIG = () => {
  useAnimation("animation")

  return (
    <div className="main_container">
      <img src={idea} alt="art" className="art1"/>
      <img src={dna} alt="art" className="art2"/>
      <div className="banner">

        <div className="banner_content_area">
          <div className="banner_text_content_area">
            <div className="banner_heading">IGCSE Tuition</div>
            <div className="banner_text">World Class and Certified IGCSE Tutors at Your Fingertips. <br /> Get
              Individualized, Focused Tuition Classes and Ace your Assessment.</div>
          </div>
          <div className="banner_img_content_area">
              <img src={logo} alt={logo} className="banner_img_content"/>
          </div>

        </div>


      </div>


      <div className="intro_igsce1">
        <div className="igsce_ilust_container animation fade_in">
          <img src={ilust1} alt="ilustration" />
        </div>
        <div className="igsce_content1 animation slide_up">
          <div className="content_header">
            <p>IGCSE TUITION</p>
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
        <div className="igsce_content2 animation slide_up">
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
        <div className="igsce_ilust_container animation slide_right">
          <img src={ilust2} alt="ilustration" />
        </div>
      </div>
      <div className="book_in_wrapper">
        <div className="book_in_container">
          <div className="book_in_detail">
            <small>Free Demo Lecture</small>
            <h1>
              Ready to dive in?<br />
              Attain your Free Demo Lecture today.
            </h1>
          </div>
          <ButtonModal name="BOOK NOW" bg="white" clr="orange" bld="600" />
        </div>

      </div>
      {/* <div className="bottom_space"></div> */}
    </div>

  );
};

export default IntroIG;
