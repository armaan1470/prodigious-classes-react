import React from "react";
import logo from "../../../assets/emotionalsupportcontent/1.png";
import ilust1 from "../../../assets/emotionalsupportcontent/2.png";
import ilust2 from "../../../assets/emotionalsupportcontent/3.png";
import { FiMail, FiPhone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import Form from "../../../components/Form/Form.jsx";
import art1 from "../../../assets/images/dna.png";
import art2 from "../../../assets/IGCSE Content/Why Choose IGCSE/7.png"
import art3 from "../../../assets/IGCSE Content/Subjects Offered at IGCSE/4.png";
import art4 from "../../../assets/IGCSE Content/Subjects Offered at IGCSE/6.png";
import useAnimation from "../../../Hooks/useAnimation";
import ButtonModal from "../../../components/ButtonModal/ButtonModal";

const EmotionalSupport = () => {
    useAnimation("animation")
  return (
    <div className="main_container">
      <img src={art1} alt="" className="icon1" />
      <img src={art2} alt="" className="icon2" />
      <img src={art3} alt="" className="icon3" />
      <img src={art4} alt="" className="icon5" />

      <div className="banner b7">
        <div className="banner_content_area">
          <div className="banner_text_content_area">
            <div className="banner_heading">Emotional Support</div>
          </div>
          <div className="banner_img_content_area">
            <img src={logo} alt={logo} className="banner_img_content" />
          </div>
        </div>
      </div>

      <div className="intro_igsce1">
        <div className="igsce_content1 animation slide_up">
          <div className="content_header">
            <p className="sub_text">Let's talk</p>
            <h2>Seek help from our experienced IB educators</h2>
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
            <h1>Emotional Support</h1>
          </div>
          <div className="content-detail">
            <p>
              We are a group of creative and successful IB educators committed
              to improving education. We understand that everyone is a learner
              from the moment they are born, and we understand how to design
              classrooms and lessons where everyone can thrive. We know how to
              reach out to children and teens, and how to inspire, support, and
              educate them.
              <br />
              <br />
              We, as IB specialist educators, advise parents to seek resources
              that can help kids who are coping with stress, trauma, and other
              mental health concerns as the world continues to engage in serious
              discussions about school safety and servicing the mental health
              needs of young people.
            </p>
          </div>
        </div>
      </div>

      <div className="intro_igsce2">
        <div className="igsce_content2 animation slide_left">
          <div className="content-detail ">
            <p>
              We will continue to build tools around social-emotional learning
              in the coming months, and we will support school teachers and
              parents in helping their pupils regulate their emotions, cope with
              stress, reduce the effects of harmful influences, and access
              mental health support.
              <br />
              <br />
              We want teachers, learners, and parents to feel supported as
              learning continues to adapt to changing circumstances. It is
              critical to always look after your physical and mental health, but
              especially during times of change. Our IB tutors do a variety of
              things to help students manage their worries and motivate them to
              return to formal teaching, including maintaining a daily schedule.
              Learning experiences may differ from those previously had, and new
              learning behaviors may take time and require assistance. Remember
              to take time to speak, share, and reflect as a group.
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

export default EmotionalSupport;
