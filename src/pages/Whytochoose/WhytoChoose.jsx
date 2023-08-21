import React from "react";
import logo from "../../assets/igcsepagecontent/5.png";
import ilust1 from "../../assets/IGCSE Content/Why Choose IGCSE/1.png";
import ilust2 from "../../assets/IGCSE Content/Why Choose IGCSE/2.png";
import ButtonModal from "../../components/ButtonModal/ButtonModal";
import "./Whytochoose.css";
import art1 from "../../assets/IGCSE Content/Why Choose IGCSE/4.png"
import art2 from "../../assets/IGCSE Content/Why Choose IGCSE/7.png"

const WhytoChoose = () => {
  return (
    <div className="main_container">
      <img src={art1} alt="art" className="art1" />
      <img src={art2} alt="art" className="art2" />

      <div className="banner b2">
        <div className="banner_content_area">
          <div className="banner_text_content_area">
            <div className="banner_heading">Why Choose IGCSE</div>
          </div>
          <div className="banner_img_content_area">
            <img src={logo} alt={logo} className="banner_img_content" />
          </div>
        </div>
      </div>

      <div className="intro_igsce1">
        <div className="igsce_ilust_container">
          <img src={ilust1} alt="ilustration" />
        </div>
        <div className="igsce_content1">
          <div className="content_header">
            <p>IGCSE TUTION</p>
            <h1>Why Chose IGCSE?</h1>
          </div>
          <div className="content-detail">
            <p>
              A Cambridge education prepares students for life, helping them
              develop an informed curiosity and a lasting passion for learning.
              Schools can shape a Cambridge curriculum around how they want
              their students to learn, helping them discover new abilities and a
              wider world. Cambridge students develop the skills they need to
              achieve at school, university and work.
              <br />
              <br />
              The Cambridge IGCSE curriculum offers a variety of routes for
              learners with a wide range of abilities, including those whose
              first language is not English. We help schools build a programme
              around their specific needs. Starting from a foundation of core
              subjects, it is easy to add breadth and cross-curricular
              perspectives. Encouraging learners to engage with a variety of
              subjects, and make connections between them, is fundamental to our
              approach.
              <br />
              <br />
              For schools, Cambridge IGCSE offers a flexible and stimulating
              curriculum, supported with excellent resources and training.
            </p>
          </div>
        </div>
      </div>
      <div className="intro_igsce2">
        <div className="igsce_content2">
          <div className="content-detail ">
            <p>
              For learners, Cambridge IGCSE helps improve performance by
              developing skills in creative thinking, enquiry and problem
              solving. It is the perfect springboard to advanced study.
              <br />
              <br />
              There are over 70 subjects available at Cambridge IGCSE, including
              30 languages, and schools can offer them in any combination.
              Cambridge IGCSE develops learner knowledge, understanding and
              skills in:
              <br />
              <br />
              <ul className="subject-list">
                <li className="list-header2">Subject Content</li>
                <li className="list-header2">
                  Applying knowledge and understanding to new as well as
                  familiar situations
                </li>
                <li className="list-header2">
                  Flexibility and responsiveness to change
                </li>
                <li className="list-header2">
                  Working and communicating in English
                </li>
                <li className="list-header2">Influencing outcomes</li>
                <li className="list-header2">Intellectual enquiry</li>
                <li className="list-header2">Cultural awareness</li>
              </ul>
              <br />
              <br />
              Schools worldwide have been involved in the development of
              Cambridge IGCSE. The syllabuses are international in outlook, but
              retain a local relevance. They have been created specifically for
              an international student body and avoid cultural bias.
            </p>
          </div>
        </div>
        <div className="igsce_ilust_container">
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

export default WhytoChoose;
