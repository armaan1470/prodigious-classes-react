import React from "react";
import logo from "../../assets/writingsupport/writing support-Logo.png";
import ilust1 from "../../assets/writingsupport/writing support-1.png";
import ilust2 from "../../assets/writingsupport/writing support-2.png";
import ilust3 from "../../assets/writingsupport/writing support-3.png";
import ilust4 from "../../assets/writingsupport/writing support-4.png";
import ilust5 from "../../assets/writingsupport/writing support-6.png";
import { FiPhone, FiMail } from "react-icons/fi";
import Form from "../../components/Form/Form.jsx";
import { GoLocation } from "react-icons/go";
import useAnimation from "../../Hooks/useAnimation";
import ButtonModal from "../../components/ButtonModal/ButtonModal";

const WritingSupport = () => {
  return (
    <div className="main_container">
      <div className="banner b6">
        <div className="banner_content_area">
          <div className="banner_text_content_area">
            <div className="banner_heading">IB Writing Support</div>
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
            <h2>Speak with our IB Writing Expert</h2>
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
            <h1>ToK</h1>
          </div>
          <div className="content-detail">
            <p>
              Writing an IB ToK essay in one night isn’t the same as writing a
              typical essay. It’s more difficult, and you must strike the
              correct balance when presenting and defending your arguments. We
              have a fantastic team of writers who provide students all over the
              world with the best Theory of Knowledge writing service. Our
              skilled writers at Philomathean will guide you through your ToK
              essay and presentation in the most effective way possible. Our
              team collaborates to choose a topic, go over Areas of Knowledge in
              depth, generate knowledge questions (Kqs), define vocabulary, and
              even create an appropriate essay format. They may also assist you
              in developing a distinctive strategy and demonstrating how to
              present it.
            </p>
          </div>
        </div>
      </div>

      <div className="intro_igsce2">
        <div className="igsce_content2 animation slide_left">
          <div className="content-detail ">
            <div className="content_header2 mr-b">
              <h1>Internal Assessment</h1>
            </div>
            <p>
              It is not always easy to choose a topic for your IB Internal
              Assessment. That does not rule out the possibility of getting it
              right the first time. If your instructor has not assigned you a
              topic, our expert writers will help you come up with one. We will
              assist you in writing your Internal Assessment and completing it
              on time. We make certain that your final work is of sufficient
              quality to get you good grades. The word count for IB Internal
              Assessment varies by subject and necessitates extensive research.
              When you work with us, though, you will not have to worry about
              reading a ton of books and journals because you will receive
              academic help and assistance to guide you in the correct way.
            </p>
          </div>
        </div>
        <div className="igsce_ilust_container animation slide_right">
          <img src={ilust3} alt="ilustration" />
        </div>
      </div>

      <div className="intro_igsce1">
        <div className="igsce_ilust_container animation slide_left">
          <img src={ilust4} alt="ilustration" />
        </div>
        <div className="igsce_content1 animation slide_up">
          <div className="content_header">
            <h1>Extended Essays</h1>
          </div>
          <div className="content-detail">
            <p>
              The Extended Essay for the International Baccalaureate is a
              prelude to much of what the student will do in college and
              afterwards. It gives students the opportunity to investigate
              something that interests them while also giving them the
              opportunity to conduct research, construct an argument, and
              organize evidence in support of that position. It is all about
              being able to communicate one’s thoughts. From the beginning, the
              project must be consistent. This means that our IB extended essay
              assistance encompasses research, ideation, argument construction,
              as well as writing support. Once we get started, we make sure to
              keep focused on the project’s ultimate aim.
            </p>
          </div>
        </div>
      </div>

      <div className="intro_igsce2">
        <div className="igsce_content2 animation slide_left">
          <div className="content-detail ">
            <div className="content_header2 mr-b">
              <h1>CAS Application</h1>
            </div>
            <p>
              The CAS project is a set of collaborative CAS experiences in which
              students participate in at least one of the CAS strands
              (creativity, activity, and service). To complete CAS, you must
              complete at least one CAS project. The project’s major goal is to
              promote growth in terms of collaborative project involvement. From
              planning to completion, the CAS project will take more than one
              month.
              <br />
              <br />
              We need to remind students as educators that creativity is
              necessary in our daily life. At Philomathean Career Institute, we
              encourage students to reflect and think critically.
            </p>
          </div>
        </div>
        <div className="igsce_ilust_container animation slide_right">
          <img src={ilust2} alt="ilustration" />
        </div>
      </div>

      <div className="intro_igsce1">
        <div className="igsce_ilust_container animation slide_left">
          <img src={ilust5} alt="ilustration" />
        </div>
        <div className="igsce_content1 animation slide_up">
          <div className="content_header">
            <h1>Sop</h1>
          </div>
          <div className="content-detail">
            <p>
              WRITING: Our crew is well-versed in all the challenges that come
              with the application process. We understand how demanding the
              committee can be, and how difficult it can be to stand out from
              the herd by highlighting your most notable qualities and
              background. As a result, we have discovered the ideal structure
              that will make an impression on the selection committee after
              reading your Statement of Purpose! Furthermore, our experts are
              continually working on the construction of the most unique texts
              while adhering to your directions, which are extremely important
              to us.
              <br />
              <br />
              EDITING: Our one-of-a-kind editors can turn an ordinary SoP into a
              masterpiece! They always go above and beyond to ensure that your
              SoP is great. They are dedicated to eradicating all errors,
              whether they be in spelling, grammar, punctuation or even clichés.
              Allowing our specialists to work on your personal document assures
              that it is completely comprehensible, seamless, plagiarism-free,
              and formatted to meet the highest committee’s expectations and
              criteria.
            </p>
          </div>
        </div>
      </div>

      <div className="intro_igsce2">
        <div className="igsce_content2 animation slide_left">
          <div className="content-detail ">
            <div className="content_header2 mr-b">
              <h1>Letter of Recommendation</h1>
            </div>
            <p>
              Someone who is qualified to suggest a candidate’s performance for
              future pursuits writes a Letter of Recommendation (LOR). A LOR is
              written for admissions officers to help them assess whether the
              applicant is qualified to study at their institution. The
              recommendation letter, to be precise, contains data on a
              candidate’s entire academic achievement. Knowing what skills a
              prospective student possesses makes it easier for the admissions
              committee to assess the candidate. Former teachers, professors, or
              coworkers and clients can all write a LOR.
              <br />
              <br />
              Although anyone can write a Letter of Recommendation, it is
              advisable to hire a professional LOR writing service to assist you
              in producing an impressive LOR. The reason for this is that not
              every person who recommends you is an excellent writer. Your
              professor or colleague may accidentally be the reason for your
              admission being denied if the LOR is not correctly worded. As a
              result, hiring a professional LOR writer is the best option.
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

export default WritingSupport;
