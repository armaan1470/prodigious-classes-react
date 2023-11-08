import React from "react";
import ButtonModal from "../../../components/ButtonModal/ButtonModal";
import logo from "../../../assets/IB/Primary Years Programme/3.png";
import ilust1 from "../../../assets/IB/Primary Years Programme/2.png";
import ilust2 from "../../../assets/IB/Primary Years Programme/1.png";
import "./Primary.css";
import art1 from "../../../assets/IGCSE Content/Why Choose IGCSE/7.png";
import art2 from "../../../assets/IGCSE Content/Why Choose IGCSE/6.png";
import art3 from "../../../assets/IGCSE Content/Why Choose IGCSE/4.png";
import useAnimation from "../../../Hooks/useAnimation"

const PrimaryYears = () => {

  useAnimation("animation")
  return (
    <div className="main_container">
      <img src={art1} alt="" className="icon2" />
      <img src={art2} alt="" className="icon1" />
      <img src={art3} alt="" className="icon3" />
      <div className="banner b7">
        <div className="banner_content_area">
          <div className="banner_text_content_area">
            <div className="banner_heading">
              IB Primary Years <br />
              Programme (PYP)
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
            <p>IB TUITION</p>
            <h1>Primary Year Programme</h1>
          </div>
          <div className="content-detail">
            <p>
              For children aged 3 to 12, the IB Primary Years Programme (PYP)
              fosters and builds young students as compassionate, involved
              individuals in a lifelong learning journey.
              <br />
              <br />
              The PYP provides a foundation for conceptual knowledge through an
              inquiry-based and trans-disciplinary curriculum. It is a
              student-centered educational strategy for children aged 3 to 12.
              It incorporates the most cutting-edge educational research,
              thought leadership, and IB World School expertise.
              <br />
              <br />
              The PYP has grown into a global leader in future-oriented
              education. The PYP is a model of best educational practice around
              the world, addressing the difficulties and possibilities that
              young pupils face in our fast-changing environment.
              <br />
              <br />
              PYP students learn to take charge of and ownership of their
              education. PYP students build information, conceptual
              understandings, abilities, and the traits of the IB Learner
              through inquiry and reflecting on their own learning. This allows
              them to make a difference in their own lives, communities, and
              beyond.
            </p>
          </div>
        </div>
      </div>
      <div className="intro_igsce2">
        <div className="igsce_content2 animation slide_up">
          <div className="content-detail ">
            <p>
              The PYP emphasizes the growth of the complete child as an
              inquirer, both in and beyond of the classroom. The PYP provides
              students, teachers, and entire school communities with a
              transforming experience and exceptional outcomes by providing an
              engaging, relevant, challenging, and meaningful education.
              <br />
              <br />
              PYP students understand how to take charge of their education,
              collaborating with teachers to gain a better understanding and
              boost their self-esteem and drive. They become effective,
              self-regulated learners who can act on constructive feedback by
              actively participating in integrated ongoing assessment. Students
              also show flexibility and ingenuity in responding to different and
              novel difficulties and possibilities, as well as take action to
              make the world better and peaceful.
              <br />
              <br />
              PYP framework is made in a way that it will enhance students’
              academic, social, and emotional well-being, with an emphasis on
              global mindedness and a sense of connection to local and global
              communities. The PYP encourages students to be self-directed and
              collaborative learners by giving them a choice over their
              education.
              <br />
              <br />
              The Primary Years Programme (PYP) is a multidisciplinary
              curriculum that provides realistic learning opportunities and at
              Philomathean, children will learn unique aspects of life and
              investigation skills.
            </p>
          </div>
        </div>
        <div className="igsce_ilust_container animation slide_right">
          <img src={ilust2} alt="ilustration" />
        </div>
      </div>
      <div className="book_in_wrapper">
        <div className="book_in_container ">
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

export default PrimaryYears;
