import React, { useEffect } from "react";
import "./Aboutus.css";
import illustration4 from "../../assets/images/Illustration-4.png";
import director from "../../assets/images/director image.jpg";
import tut1 from "../../assets/images/Team-1.jpg";
import tut2 from "../../assets/images/Team-2.jpg";
import tut3 from "../../assets/images/Team-3.jpg";
import tut4 from "../../assets/images/Team-4.jpg";
import tut5 from "../../assets/images/Team-5.jpg";
import mission from "../../assets/images/Our Mission.png";
import vision from "../../assets/images/Our Vision.png";
import mission_div from "../../assets/images/mission.png";
import vision_div from "../../assets/images/vision.png";
import avatar1 from "../../assets/images/Profile-1.png";
import avatar2 from "../../assets/images/Profile-2.png";
import avatar3 from "../../assets/images/Profile-3.png";
import avatar4 from "../../assets/images/Profile-4.png";
import avatar5 from "../../assets/images/Profile-5.png";
import avatar6 from "../../assets/images/Profile-6.png";
import stories1 from "../../assets/images/success stories-1.png";
import stories2 from "../../assets/images/success stories-2.png";
import stories3 from "../../assets/images/success stories-3.png";
import stories4 from "../../assets/images/success stories-4.png";
import stories5 from "../../assets/images/success stories-5.png";
import stories6 from "../../assets/images/success stories-6.png";
import line from "../../assets/images/underline_about us.png";
import Footer from "../../components/Footer/Footer";
import WhatsappChat from "../../components/WhatsappChat/WhatsappChat";

function Aboutus() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              if (entry.target.classList.contains("ani1")) {
                entry.target.classList.add("animate_2");
              } else if (entry.target.classList.contains("ani2")) {
                entry.target.classList.add("animate_3");
              } else if (entry.target.classList.contains("director")) {
                entry.target.classList.add("fadein");
              }else if (entry.target.classList.contains("avatar_img")) {
                entry.target.style.animation = "popup forwards 0.5s";
                
                // Add animation to elements with class "stories_img"
                const storiesImages = document.querySelectorAll(".stories_img");
                storiesImages.forEach((img, index) => {
                  img.style.animation = "popup forwards 0.5s";
                  img.style.animationDelay = "1s"; // Set the animation delay to the same value for all elements
                },{threshold:[1]});
              }
              
              
            //    else if (entry.target.classList.contains("stories_img")) {
            //     entry.target.style.animation = "popup forwards 0.5s";
            //     entry.target.style.animationDelay = "1s";
            //   }
            }
          });
        });
      

    // Observe specific elements using querySelectorAll and index
    const elements = document.querySelectorAll(".t");
    elements.forEach((element, index) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="about_us">
        <div className="about_us_hero">
          <div className="hero_img">
            <img
              src={illustration4}
              alt="illustration4"
              className="illustration4"
            />
          </div>
          <div className="hero_text">
            <div className="hero_text_heading">
              <span>About</span> <span>Us</span>
            </div>

            <p className="hero_subtext">
              Established in 2012, Philomathean Career Institute started with a
              handful of students, a few sessions old, the institute scaled new
              heights of success by providing coaching for IB & IGCSE students
              5th to 10th, ICSE and Engineering, and Medical entrance exam
              preparation.
            </p>

            <p className="hero_subtext">
              New milestones were set each year and the institute achieved a
              remarkable landmark with excellent results. Besides IB & IGCSE
              students 5th to10th, domain, prodigious career institute brought
              outstanding results in the International Olympiads as well.
            </p>

            <p className="hero_subtext">
              The institute also started providing preparation courses for Study
              Abroad. Every year, our students get admission into top
              international universities. The institute has now become the
              preferred choice for students, who want to build a strong
              foundation for their higher studies in Engineering & Medical, or
              achieve top ranks in competitive exams or Study Abroad programs.
            </p>
          </div>
        </div>
        <div className="two_items_container">
          <img src={vision_div} alt={vision} className="t ani1" />
          <img src={mission_div} alt={mission} className="t ani2" />
        </div>
        <div className="about_dir_container">
          <div className="about_dir">
            <img src={director} alt={director} className="t director" />

            <div className="dir_text">
              <div className="dir_heading">About Director</div>
              <p className="dir_subtext">
                Mr. Satish Vishwakarma, an educationist with an entrepreneurial
                vision to build a harmonious society and one who is empowered by
                ‘Quality Education’ is a physics & maths alumnus, armed with 1
                decade of experience and proficiency.{" "}
              </p>
              <p className="dir_subtext">
                He is an expert in the field of mathematics and in preparing
                students for various competitive exams. His experience coupled
                with the impactful results of the institute makes him a
                preferred choice among IB & IGCSE students 5th to10th &
                Engineering and Medical aspirants.{" "}
              </p>
              <p className="dir_subtext">
                Mr. Satish in recognition of his contribution to the education
                industry. His strategies, planning, and execution help him
                handle the expansion and management of the institute’s business
                acumen topped with financial expertise and professional network,
                bringing glory to the success of the institute.{" "}
              </p>
              <p className="dir_subtext">
                His innovation in the education industry has transformed the
                fundamentals innovatively and efficiently in teaching. The
                incredible contribution he has made in running business
                operations has made him a renowned business leader.
              </p>
            </div>
          </div>
        </div>

        <div className="stories_background">
          <div className="stories_container">
            <div className="stories_heading">Success Stories</div>
            <div className="stories_card_container">
              <div className="stories_cards">
                <div className="card_img">
                  <img src={stories1} alt={stories1} className="stories_img t" />
                </div>
                <div className="card_desc">
                  <img src={avatar1} alt={avatar1} className="avatar_img t" />

                  <div className="card_details">
                    <div className="primary_text">Sikha Gupta</div>
                    <div className="secondary_text">Student, Class 10</div>
                  </div>
                </div>
              </div>
              <div className="stories_cards">
                <div className="card_img">
                  <img src={stories2} alt={stories2} className="stories_img t" />
                </div>
                <div className="card_desc">
                  <img src={avatar2} alt={avatar2} className="avatar_img t" />

                  <div className="card_details">
                    <div className="primary_text">Shriya Ganguly</div>
                    <div className="secondary_text">
                      Student, Class 9 (IGCSE)
                    </div>
                  </div>
                </div>
              </div>
              <div className="stories_cards">
                <div className="card_img">
                  <img src={stories3} alt={stories3} className="stories_img t" />
                </div>
                <div className="card_desc">
                  <img src={avatar3} alt={avatar3} className="avatar_img t" />

                  <div className="card_details">
                    <div className="primary_text">Jitesh Singh</div>
                    <div className="secondary_text">Student, Class 10</div>
                  </div>
                </div>
              </div>
              <div className="stories_cards">
                <div className="card_img">
                  <img src={stories4} alt={stories4} className="stories_img t" />
                </div>
                <div className="card_desc">
                  <img src={avatar4} alt={avatar4} className="avatar_img t" />

                  <div className="card_details">
                    <div className="primary_text">Suamya Kshirsagar</div>
                    <div className="secondary_text">
                      Student, Class 9 (IGCSE)
                    </div>
                  </div>
                </div>
              </div>
              <div className="stories_cards">
                <div className="card_img">
                  <img src={stories5} alt={stories5} className="stories_img t" />
                </div>
                <div className="card_desc">
                  <img src={avatar5} alt={avatar5} className="avatar_img t" />

                  <div className="card_details">
                    <div className="primary_text">Khyati</div>
                    <div className="secondary_text">Owner, Pupils Academy</div>
                  </div>
                </div>
              </div>
              <div className="stories_cards">
                <div className="card_img">
                  <img src={stories6} alt={stories6} className="stories_img t" />
                </div>
                <div className="card_desc">
                  <img src={avatar6} alt={avatar6} className="avatar_img t" />

                  <div className="card_details">
                    <div className="primary_text">Vanshika Desai</div>
                    <div className="secondary_text">
                      Student, Class 9 (IGCSE)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="team_container">
          <div className="team_heading">
            Our Philomathean <span> Team </span>
          </div>
          <div className="team_cards_container">
            <img src={tut1} alt={tut1} className="team_cards" />
            <img src={tut2} alt={tut2} className="team_cards" />
            <img src={tut3} alt={tut3} className="team_cards" />
            <img src={tut4} alt={tut4} className="team_cards" />
            <img src={tut5} alt={tut5} className="team_cards" />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Aboutus;
