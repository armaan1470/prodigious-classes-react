import React from "react";
import ButtonModal from "../../components/ButtonModal/ButtonModal";
import logo from "../../assets/IB/Middle Years Programme/4.png";
import ilust1 from "../../assets/IB/Middle Years Programme/2.png";
import ilust2 from "../../assets/IB/Middle Years Programme/1.png";
import ilust3 from "../../assets/IB/Middle Years Programme/3.png";
import "./middleyear.css"

const Middleyears = () => {
  return (
    <div className="main_container">
      <div className="banner b6">
        <div className="banner_content_area">
          <div className="banner_text_content_area">
            <div className="banner_heading">
              IB Middle Years Programme (MYP)
            </div>
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
            <p>IB TUTION</p>
            <h1>Middle Years Programmes</h1>
          </div>
          <div className="content-detail">
            <p>
              The Middle Years Programme (MYP) of the International
              Baccalaureate® (IB) stresses intellectual difficulty. It promotes
              children aged 11 to 16 to create practical links between their
              studies and the real world, preparing them for future academic and
              life success.
              <br />
              <br />
              The MYP seeks to cultivate engaged learners and global minded
              young people who can empathize with others and live lives that are
              meaningful and purposeful. Students are given the opportunity to
              investigate a wide range of issues and ideas that are important
              locally, nationally, and worldwide. Young individuals who are
              creative, critical, and reflective thinkers are the consequence.
              <br />
              <br />
              <p>
                In September 2014, the MYP was updated to create a more rigorous
                and flexible framework that effectively combines with local
                educational standards. New industry-leading onscreen
                examinations and e-Portfolios open new possibilities for
                assessing student accomplishment in a reliable and robust
                digital format.
              </p>
            </p>
          </div>
        </div>
      </div>

      <div className="intro_igsce2">
        <div className="igsce_content2">
          <div className="content-detail ">
            <p>
              <p className="mr-b">According to research, MYP participants:</p>
              <ul className="subject-list">
                <li className="list-header2">
                  Learn by doing, bridging the gap between the classroom and the
                  rest of the world.
                </li>
                <li className="list-header2">
                  Gain confidence in their ability to manage their own learning.
                </li>
                <li className="list-header2">
                  Have a higher success rate in IB Diploma Programme tests on a
                  consistent basis.
                </li>
                <li className="list-header2">
                  Develop a global perspective and a willingness to act as
                  responsible citizens.
                </li>
                <li className="list-header2">
                  Thrive in positive school cultures where students are engaged
                  and motivated to succeed
                </li>
                <li className="list-header2">
                  Surpass non-IB students in important academic skills
                </li>
              </ul>
              <br />
              <br />
              <p className="mr-b">
                  The Middle Years Programme (MYP) of the International
                  Baccalaureate® (IB) consists of eight subject groups
              </p>
              <ul className="subject-list">
                <li className="list-header">Language Acquisition</li>
                <li className="list-header">Language and Literature</li>
                <li className="list-header">Sciences</li>
                <li className="list-header">Mathematics</li>
                <li className="list-header">Individuals and Societies</li>
                <li className="list-header">Arts</li>
                <li className="list-header">Design</li>
                <li className="list-header">Physical and health education</li>
              </ul>
              <br />
              <br />
              In each year of the MYP, each topic group must get at least 50
              hours of instruction. Students in years 4 and 5 have the choice of
              taking courses from six of the eight subject areas, subject to
              specific restrictions, in order to suit local criteria and
              particular student learning needs. Every year, MYP students
              participate in at least one collaboratively created
              interdisciplinary unit involving at least two subject groups.
            </p>
          </div>
        </div>
        <div className="igsce_ilust_container">
          <img src={ilust3} alt="ilustration" />
        </div>
      </div>

      <div className="intro_igsce1 third">
        <div className="igsce_ilust_container">
          <img src={ilust2} alt="ilustration" />
        </div>
        <div className="igsce_content1">
          <div className="content-detail">
            <div className="content_header2 mr-b">
              <h1>Why choose MYP?</h1>
            </div>
            <p>
              Students in the MYP also complete a long-term project in which
              they choose what they want to learn about, identify what they
              already know, figure out what they will need to know to finish the
              project, and write a proposal or set of criteria for finishing it.
              The MYP concludes in Grade 10 with the submission of a Personal
              Project, an eight-month long autonomous project that highlights
              the talents that our students have developed over the course of
              their MYP studies. The project provides students with a unique
              opportunity to create a longer piece of work that tests their
              creativity and encourages them to consider personal difficulties.
              The Personal Project is not only a vital part of the MYP, but also
              a continuation requirement for students pursuing the IB Diploma
              Programme. It is graded against a strict set of IB criteria.
              <br />
              <br />
              MYP teachers at Philomathean Career Institute grade their students
              using internationally available IB evaluation criteria as a guide.
              We offer a variety of assessment tasks, such as open-ended
              activities, investigations, organized debates, hands-on
              experiments, and reflections, that allow students to demonstrate
              their achievement based on the established criteria. Furthermore,
              we provide MYP students with learning experience through Community
              Service (CAS), in which they take intentional action and reflect
              on their personal improvement.
            </p>
          </div>
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

export default Middleyears;
