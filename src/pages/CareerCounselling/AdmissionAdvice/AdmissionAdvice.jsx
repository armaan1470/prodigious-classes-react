import React from "react";
import logo from "../../../assets/universityadmissionadvice/2.png";
import ilust1 from "../../../assets/universityadmissionadvice/3.png";
import ilust2 from "../../../assets/universityadmissionadvice/4.png";
import { FiPhone, FiMail } from "react-icons/fi";
import Form from "../../../components/Form/Form.jsx";
import { GoLocation } from "react-icons/go";
import art1 from "../../../assets/images/dna.png";
import art2 from "../../../assets/IGCSE Content/Why Choose IGCSE/7.png";
import art3 from "../../../assets/IGCSE Content/Subjects Offered at IGCSE/4.png";
import art4 from "../../../assets/IGCSE Content/Subjects Offered at IGCSE/6.png";
import useAnimation from "../../../Hooks/useAnimation";
import ButtonModal from "../../../components/ButtonModal/ButtonModal";

const AdmissionAdvice = () => {
  useAnimation("animation");
  return (
    <div className="main_container">
      <img src={art1} alt="" className="icon1" />
      <img src={art2} alt="" className="icon2" />
      <img src={art3} alt="" className="icon3" />
      <img src={art4} alt="" className="icon5" />

      <div className="banner b6">
        <div className="banner_content_area">
          <div className="banner_text_content_area">
            <div className="banner_heading">
              University <br />
              Admission Advice
            </div>
          </div>
          <div className="banner_img_content_area">
            <img src={logo} alt={logo} className="banner_img_content" />
          </div>
        </div>
      </div>

      <div className="intro_igsce1">
        <div className="igsce_content1 animation slide_up">
          <div className="content_header">
            <p className="sub_text">LET'S TALK</p>
            <h2>Want to seek admission expert advice on addmisions abroad?</h2>
          </div>
          <div className="content-detail">
            <div className="footer_detail_text">
              <div className="footer_icon_text_container updated">
                <FiMail
                  size={19}
                  color="#ebecee"
                  className="list_icon_text_img"
                  onClick={() => openLink("tel:932416073")}
                />
                <div>philomathean22@gmail.com</div>
              </div>
              <div className="footer_icon_text_container updated">
                <FiPhone
                  size={19}
                  color="#ebecee"
                  className="list_icon_text_img"
                  onClick={() => openLink("tel:932416073")}
                />
                <div>+91-9324164073</div>
              </div>

              <div className="footer_icon_text_container updated">
                <GoLocation
                  size={19}
                  color="#ebecee"
                  className="list_icon_text_img"
                  onClick={() => openLink("tel:932416073")}
                />
                <div>
                  202, Abhishek Building, Hetal Park,
                  <br /> Opp. Jangid Estate, Mira Road East,
                  <br /> Thane - 401107
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="igsce_ilust_container animation slide_left">
          <Form />
        </div>
      </div>

      <div className="intro_igsce1">
        <div className="igsce_ilust_container animation slide_left">
          <img src={ilust1} alt="ilustration" />
        </div>
        <div className="igsce_content1 animation slide_up">
          <div className="content_header">
            <p>CAREER COUNSELLING</p>
            <h1>Personalized Academic Guidance</h1>
          </div>
          <div className="content-detail">
            <p>
              Once you have opted to work with our admissions counselling team,
              you will be assigned to an experienced counsellor who will provide
              your family with honest, accurate, and personalized attention
              throughout the college search and application process.
              <br />
              <br />
              We can assist you with admissions to any program or country. We
              treat each student with respect and recognize that each student’s
              talents and objectives are unique.
            </p>
          </div>
        </div>
      </div>

      <div className="intro_igsce2">
        <div className="igsce_content2 animation slide_left">
          <div className="content-detail ">
            <p>
              University orientation specialists will:
              <ul className="subject-list">
                <li className="list-header2 ">
                  Assist in brainstorming ideas and contribute to the
                  development of the college list.
                </li>
                <li className="list-header2 ">
                  Assist students choose summer and enrichment programs that
                  will better their lives rather than just help them build an
                  impressive CV.
                </li>
                <li className="list-header2 ">
                  Provide guidance on high school and college course selections
                  as well as extracurricular activities.
                </li>
                <li className="list-header2">
                  Assist with application and scholarship essay thinking.
                </li>
                <li className="list-header2">
                  Assist with the creation of a college resume and application
                  for a student.
                </li>
              </ul>
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

export default AdmissionAdvice;
