import React from "react";
import logo from "../../../assets/careercounselling/PG-3.png";
import ilust1 from "../../../assets/careercounselling/PG-1.png";
import ilust2 from "../../../assets/careercounselling/PG-2.png";
import { FiPhone, FiMail } from "react-icons/fi";
import "./ParentGUidance.css";
import Form from "../../../components/Form/Form.jsx";
import { GoLocation } from "react-icons/go";
import art1 from "../../../assets/images/dna.png";
import art2 from "../../../assets/IGCSE Content/Why Choose IGCSE/7.png"
import art3 from "../../../assets/IGCSE Content/Subjects Offered at IGCSE/4.png";
import art4 from "../../../assets/IGCSE Content/Subjects Offered at IGCSE/6.png";
import useAnimation from "../../../Hooks/useAnimation";
import ButtonModal from "../../../components/ButtonModal/ButtonModal";

const ParentGuidance = () => {
  useAnimation("animation")
  return (
    <div className="main_container">
      <img src={art1} alt="" className="icon1" />
      <img src={art2} alt="" className="icon2" />
      <img src={art3} alt="" className="icon3" />
      <img src={art4} alt="" className="icon5" />

      <div className="banner b6">
        <div className="banner_content_area">
          <div className="banner_text_content_area">
            <div className="banner_heading">Parent Guidance</div>
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
            <h2>As an IB parent are you looing to more ways to be involved?</h2>
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
            <h1>Parent Guidance</h1>
          </div>
          <div className="content-detail">
            <p>
              A parent’s or primary caregiver’s active, ongoing participation in
              his or her child’s education is defined as successful parent
              involvement. IB Parents can show their commitment at home by
              reading with their children, assisting with homework, attending
              school functions, or volunteering to send their children to IB
              tutors for extra academic support outside of school.
              <br />
              <br />
              Despite being a needed component of many of our improvement
              projects, IB parents’ involvement continues to provide a barrier
              to educators. The advantages of parental involvement are obvious:
              An increasing amount of evidence suggests that effective parent
              involvement not only improves student behavior and attendance, but
              also has a favorable impact on student achievement. Many schools
              and tutoring institutes, however, continue to struggle with
              defining and assessing genuine parental involvement, and many do
              not believe their efforts are fruitful.
            </p>
          </div>
        </div>
      </div>

      <div className="intro_igsce2">
        <div className="igsce_content2 animation slide_left">
          <div className="content-detail ">
            <p>
              Therefore, the Philomathean team communicates with IB Parents on a
              regular basis and includes them in their child’s learning journey.
              We believe that an IB student’s success is in both tutors’ and
              families’ best interests. We imagine parents as partners in the
              learning process, and then we figure out how to make that
              relationship concrete.
              <br />
              <br />
              Our committed team of IB education experts collaborates closely
              with parents. We are always accessible to answer any academic
              questions and ensure that your child has a great emotional
              experience. You will be kept fully informed about your child’s
              progress, and we will provide customized solutions as needed.
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

export default ParentGuidance;
