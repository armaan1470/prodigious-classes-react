import React from "react";
import logo from "../../../assets/ibschoolsubjectselection/IB School-5.png";
import ilust1 from "../../../assets/ibschoolsubjectselection/IB School-1.png";
import ilust2 from "../../../assets/ibschoolsubjectselection/IB School-2.png";
import ilust3 from "../../../assets/ibschoolsubjectselection/IB School-3.png";
import ilust4 from "../../../assets/ibschoolsubjectselection/IB School-4.png";
import { FiPhone, FiMail } from "react-icons/fi";
import Form from "../../../components/Form/Form.jsx";
import { GoLocation } from "react-icons/go";
import art1 from "../../../assets/images/dna.png";
import art2 from "../../../assets/IGCSE Content/Why Choose IGCSE/7.png";
import art3 from "../../../assets/IGCSE Content/Subjects Offered at IGCSE/4.png";
import art4 from "../../../assets/IGCSE Content/Subjects Offered at IGCSE/6.png";
import useAnimation from "../../../Hooks/useAnimation";
import ButtonModal from "../../../components/ButtonModal/ButtonModal";

const SubjectSelection = () => {
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
            <div className="banner_heading">IB School & <br/>Subject Selection</div>
          </div>
          <div className="banner_img_content_area">
            <img src={logo} alt={logo} className="banner_img_content" />
          </div>
        </div>
      </div>

      <div className="intro_igsce1">
        <div className="igsce_ilust_container animation slide_left">
          <img src={ilust1} alt="ilustration" />
        </div>
        <div className="igsce_content1 animation slide_up">
          <div className="content_header">
            <p>CAREER COUNSELLING</p>
            <h1>School Selection</h1>
          </div>
          <div className="content-detail">
            <p>
              Our team at Philomathean knows the IB curriculum better than
              anybody, having guided hundreds of students and their families
              throughout their IB journeys. Contact us to talk about the ideal
              school for you and your child based on selection criteria, tuition
              fee, geography, extracurricular programs, and other factors.
              Benefit from an introductory consultation so that we can get to
              know your child’s skill set and needs, as well as a tailored
              report with research and school recommendations.
              <br />
              <br />
              We would be delighted to provide assistance throughout the
              admissions process, from school selection to admissions tests and
              interview preparation, to guarantee that your child finds the
              ideal IB school.
            </p>
          </div>
        </div>
      </div>

      <div className="intro_igsce2 third">
        <div className="igsce_content2 animation slide_right">
          <div className="content-detail">
            <div className="content_header2 mr-b">
              <h1>Subject Selection</h1>
            </div>
            <p>
              Students must choose six subjects to attend DP1, three at the
              higher level and three at the standard level. Higher Level (HL)
              subjects are, in general, your strongest academic subjects;
              however, you should be aware that many disciplines may need you to
              go well beyond the academic level of many national secondary
              programs. To give an example, several top-ranked universities in
              the United States may grant advance credit to DP IB students who
              receive at least a "5" in an HL topic.
              <br />
              <br />
              Standard Level (SL) subjects are not always easier than Higher
              Level (HL) subjects; in many cases, they simply cover fewer
              topics. ntentional action and reflect on their personal
              improvement.
              <br />
              <br />
              It is critical to carefully evaluate the following questions when
              selecting the six subjects for the International Baccalaureate
              Diploma Program:
              <br />
              <ul className="subject-list">
                <li className="list-header2 modified2">
                  What are the requirements for the DP?.
                </li>
                <li className="list-header2 modified2">
                  What are my relative strengths and weaknesses, i.e. what
                  subjects am I able to choose from?
                </li>
                <li className="list-header2 modified2">
                  What are my long-term goals? Are there any specific standards
                  set forth by universities or institutions for admission?
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="igsce_ilust_container animation slide_up">
          <img src={ilust2} alt="ilustration" />
        </div>
      </div>

      <div className="intro_igsce1">
        <div className="igsce_ilust_container animation slide_right">
          <img src={ilust3} alt="ilustration" />
        </div>
        <div className="igsce_content1 animation slide_left">
          <div className="content-detail ">
            <div className="content_header2 mr-b">
              <h1>How can we help?</h1>
            </div>
            <p>
              It is understood that the final decision is or should be made by
              the students. Parents, instructors, and Philomathean’s career
              counsellors will talk with children and offer advice, but students
              already know the courses they are strong at and, more importantly,
              love doing, which will help students choose six subjects in the
              first place.
              <br />
              <br />
              The next step is to help a student decide which of these subjects
              should be studied at the Higher Level and which should be studied
              at the Standard Level. It’s vital to remember that in order to
              succeed in most DP courses, whether at the HL or the SL level,
              students should have received previous education training in that
              area (with the exception of Spanish Ab Initio, Economics, Business
              and Management and Environmental Systems & Societies)
              <br />
              <br />
              Our team at Philomathean also understands choosing six subjects
              for DP1 entrance may be made more difficult by a complicating
              element. Universities, higher professional schools, and colleges
              may require a specific combination of Higher Level subjects.
              Mathematics and Physics are the most important subjects in this
              regard.
            </p>
          </div>
        </div>
      </div>

      <div className="intro_igsce2 third">
        <div className="igsce_content2 animation slide_right">
          <div className="content-detail">
            <p>
              If students already have a general notion of what they want to do
              after completing the DP program, we double-check the individual
              university requirements for the chosen location and country. The
              standards for admission differ from country to country and, in
              many cases, from university to university.
              <br />
              <br />
              There are no topic prerequisites for many tertiary academic
              fields, however students should double-check with the IB Scholars’
              Career Counsellor and/or institution websites to be sure. Those
              who are still undecided about their future careers should keep the
              following guidelines in mind:
              <br />
              <br />
              <ul className="subject-list">
                <li className="list-header2 modified2">
                  In most medical fields, a Higher-Level combination of Biology
                  and Chemistry is essential.
                </li>
                <li className="list-header2 modified2">
                  A combination of Math HL and Physics HL is frequently required
                  in technical universities.
                </li>
                <li className="list-header2 modified2">
                  In the fields of Economics and Business Management, a Standard
                  Level of Mathematics is usually sufficient.
                </li>
                <li className="list-header2 modified2">
                  Students who want to study Biology at university must take
                  Chemistry and Biology at a Higher Level.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="igsce_ilust_container animation slide_up">
          <img src={ilust4} alt="ilustration" />
        </div>
      </div>

      <div className="intro_igsce1 new mr-b">
        <div className="igsce_content1 animation slide_up">
          <div className="content_header">
            <p className="sub_text">Let's Connect</p>
            <h2>Let Our IB specialists help you</h2>
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

export default SubjectSelection;
