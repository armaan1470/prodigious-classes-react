import React from "react";
import "./Career.css";
import logo from "../../../assets/IB/Career-Related Programme/1.png";
import ilust1 from "../../../assets/IB/Career-Related Programme/2.png";
import ilust2 from "../../../assets/IB/Career-Related Programme/3.png";
import ButtonModal from "../../../components/ButtonModal/ButtonModal";
import art1 from "../../../assets/images/dna.png"
import art2 from "../../../assets/IGCSE Content/Why Choose IGCSE/7.png"
import art3 from "../../../assets/images/idea.png"
import useAnimation from "../../../Hooks/useAnimation";


const CareerRelated = () => {
  useAnimation("animation")

  return (
    <div className="main_container">
      <img src={art1} alt="" className="icon1"/>
      <img src={art2} alt="" className="icon2"/>
      <img src={art3} alt="" className="icon3"/>
      

      <div className="banner b3">
        <div className="banner_content_area">
          <div className="banner_text_content_area">
            <div className="banner_heading">
              IB Career-Related
              <br /> Programme
            </div>
          </div>
          <div className="banner_img_content_area">
            <img src={logo} alt={logo} className="banner_img_content" />
          </div>
        </div>
      </div>

      <div className="intro_igsce1">
        <div className="igsce_ilust_container animation fade_in">
          <img src={ilust1} alt="ilustration" />
        </div>
        <div className="igsce_content1 animation slide_up">
          <div className="content_header">
            <p>IB TUTION</p>
            <h1>
              IB Career-Related
              <br /> Programme
            </h1>
          </div>
          <div className="content-detail">
            <p>
              The Career-related Programme (CP) of the International
              Baccalaureate® (IB) is a three-part educational framework. The CP
              core components provide context for the DP courses and
              career-related education, tying together all areas of the
              framework. Students gain personal traits and professional
              abilities, as well as the intellectual habits necessary for
              lifetime learning, through the CP core. neces
            </p>
            <br />
            <br />
            <p className="highlighted">
              It consists of the following components:
            </p>
            <ul className="subject-list">
              <li className="list-header modified1 ">
                Course from the diploma programme of the IB
              </li>
              <li className="list-header modified1 ">The core of the CP</li>
              <li className="list-header modified1 ">
                Studies that are relevant to a career
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="intro_igsce2">
        <div className="igsce_content2 animation slide_left">
          <div className="content-detail">
            <div className="content_header2 mr-b">
              <h1>Career-Related Programme helps students to:</h1>
            </div>

            <ul className="subject-list">
              <li className="list-header modified1">
                Pursue their preferred educational and employment paths in life
              </li>
              <li className="list-header modified1">
                {" "}
                Mix academic subjects with personal and professional interests
                and talents{" "}
              </li>
              <li className="list-header modified1">
                Participate in learning that benefits their community
              </li>
              <li className="list-header modified1">
                Analyse critically and creatively in a range of situations
              </li>
              <li className="list-header modified1">
                Communicate clearly and effectively Work independently and
                collaboratively{" "}
              </li>
              <li className="list-header modified1">
                Evaluate fresh viewpoints and alternative points of view{" "}
              </li>
              <li className="list-header modified1">
                Grow in self-confidence and self-awareness{" "}
              </li>
              <li className="list-header modified1">
                Show high levels of resilience and adaptability
              </li>
              <li className="list-header modified1">Be globally oriented and aware </li>
              <li className="list-header modified1">
                Apply their knowledge to real-world circumstances and situations
              </li>
            </ul>

            <p className="highlighted">
                Student must select three subjects (1 HL, 2 SL)*
            </p>

                <ul className="subject-list">
                    <li className="list-header2 modified2">Personal and professional abilities are at the heart of the CP Core</li>
                    <li className="list-header2 modified2">Learning Reflective Project for Language Development Services</li>
                    <li className="list-header2 modified2">Business, Hospitality or Sports</li>
                </ul>

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
              Ready to dive in?
              <br />
              Attain your Free Demo Lecture today.
            </h1>
          </div>
          <ButtonModal name="BOOK NOW" bg="white" clr="orange" bld="600" />
        </div>
      </div>
    </div>
  );
};

export default CareerRelated;
