import React from "react";
import logo from "../../assets/IB/IB Diploma Programme/2.png";
import ilust1 from "../../assets/IB/IB Diploma Programme/1.png";
import ilust2 from "../../assets/IB/IB Diploma Programme/3.png";
import "./Diploma.css";
import ButtonModal from "../../components/ButtonModal/ButtonModal";

const Diploma = () => {
  return (
    <div className="main_container">
      <div className="banner b4">
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
        <div className="igsce_ilust_container">
          <img src={ilust1} alt="ilustration" />
        </div>
        <div className="igsce_content1">
          <div className="content_header">
            <p>IB TUTION</p>
            <h1>IB Diploma Programme</h1>
          </div>
          <div className="content-detail">
            <p>
              The Diploma Programme (DP) of the International Baccalaureate®
              (IB) curricular structure is a program for students in their final
              two years of secondary school aged 16 to 19. Leading universities
              all over the world hold it in high regard. International
              awareness, university readiness, and service learning are all
              hallmarks of the program. These characteristics are combined with
              a consistent emphasis on critical thinking, academic writing, and
              subject-specific rigor.
            </p>
            <br />
            <br />
            <p className="highlighted">
              At Philomathean Career Institute, we build children who :
            </p>
            <ul className="subject-list">
              <li className="list-header2 ">
                Have a broad and deep knowledge base
              </li>
              <li className="list-header2 ">
                Learn a minimum of two languages
              </li>
              <li className="list-header2 ">
                Grow physically, academically, emotionally, and ethically
              </li>
              <li className="list-header2">
                Achieve academic success in classical subjects
              </li>
              <li className="list-header2">
                Take the program's one-of-a-kind theory of knowledge course to
                learn more about the nature of knowledge
              </li>
            </ul>
            <p className="mr-t">
              These characteristics are combined with a consistent emphasis on
              critical thinking, academic writing, and subject-specific rigor.
              Students in the Diploma Course study six subjects, three at the
              Higher Level and three at the Standard Level. Students must select
              one topic from each of the five groups, ensuring that they have a
              diverse range of experiences in languages, humanities,
              experimental sciences, and mathematics. The student may choose an
              arts subject from group 6 as their sixth course, or another
              subject from groups 1 to 5. Higher Level courses feature a variety
              of modules that allow students to go deeper into the subject and
              get more specialized knowledge. Students also study the IB Core,
              which gives them a unique opportunity to develop their abilities
              and experience.
            </p>
          </div>
        </div>
      </div>

      <div className="intro_igsce2">
        <div className="igsce_content2">
          <div className="content-detail">
            <p className="mr-b">
              IB DP students must fulfill three ‘Core' requirements in addition
              to the six topics (three at Standard Level and three at Higher
              Level):
            </p>
            <ul className="subject-list">
              <li className="list-header">
                Creative, Activity and Service(CAS):
                <p>
                  Acquiring new talents, leading healthy lifestyles, and
                  contributing to the local society as global citizens.
                </p>
              </li>
              <li className="list-header">
                Participate in learning that benefits their community
                <p>
                  Critical reflection on various modes of knowing and areas of
                  knowledge.
                </p>
              </li>
              <li className="list-header">
                Analyse critically and creatively in a range of situations
                <p>
                  A piece of research-based writing while honing academic
                  writing abilities in preparation for undergraduate education.
                </p>
              </li>
            </ul>

            <p className="mr-t">
              The DP is regarded as one of the finest standards in university
              preparatory education around the world. Over 1,000 schools and
              universities across North America have laws governing how they
              consider it in admissions, scholarships, advanced standing, and
              college credit. Our students have been admitted to top schools
              such as the Ivy League Universities, Oxford, Delft, Cambridge,
              University of Toronto, UCL, Kings, McGill, Imperial College, ETH
              Zurich, and others.
              <br />
              <br />
              Students taught at Philomathean Career Institute graduate as
              competent, resilient, informed, committed, and able adults, ready
              to face the rigors of university and beyond.
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

export default Diploma;
