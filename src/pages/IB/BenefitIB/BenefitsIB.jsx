import React from "react";
import icon1 from "../../../assets/images/icon-1.svg";
import icon2 from "../../../assets/images/icon-2.svg";
import icon3 from "../../../assets/images/icon-3.svg";
import banner from "../../../assets/images/bg.jpg"
import wwoff_illus from "../../../assets/images/model.png"
import bef_transparent_image from "../../../assets/images/abstract.svg"
import green_tick from "../../../assets/images/right tick.svg"
import myp_icon_1 from "../../../assets/images/icon-4.svg"
import myp_icon_2 from "../../../assets/images/icon-5.svg"
import myp_icon_3 from "../../../assets/images/icon-6.svg"
import myp_icon_4 from "../../../assets/images/icon-7.svg"
import green_star from "../../../assets/images/star.svg"
import "./BenefitsIB.css";

function BenefitIB() {
  return (
    <>
      <div className="benefitib_container">
        <div className="benefit_hero_container_1">
          <img src={banner} alt="banner" className="benefit_banner_img" />
          <div className="benefit_header_text">Benefits Of IB</div>
        </div>
        <div className="benefit_hero_container_2">
          <div className="detail_card_container">
            <div className="benefit_main_card">
              <div className="benefit_top_card">
                <div className="img_container">
                  <img src={icon1} alt="cardimg" />
                </div>
                <p>Global <br /> Recognition</p>
              </div>
              <div className="benefit_bottom_card">
                The most crucial benefit of the IB program is that it is globally recognized and approved by the majority of universities around the world. Universities find it difficult to compare pupils based on country-specific exam scores, hence the IB is preferable. The outcome would be the same regardless of where you took your IB, and admission officers would accept it. If you have a strong IB score, you will have a better chance of being accepted into your dream university.
              </div>
            </div>

            <div className="benefit_main_card">
              <div className="benefit_top_card">
                <div className="img_container">
                  <img src={icon2} alt="cardimg" />
                </div>
                <p>University <br /> Preparation</p>
              </div>
              <div className="benefit_bottom_card">
                The IB Diploma program improves your study skills and helps you prepare for university-level courses. It helps you polish your writing abilities and prepare for research work through its features such as Theory of Knowledge, Extended Essay, and CAS. It assists you in efficiently managing your time between study and other activities due to its rigorous workload. It instills good study habits that will aid you in a more successful academic career at university.
              </div>
            </div>

            <div className="benefit_main_card">
              <div className="benefit_top_card">
                <div className="img_container">
                  <img src={icon3} alt="cardimg" />
                </div>
                <p>Personal <br /> Development</p>
              </div>
              <div className="benefit_bottom_card">
                The IB curriculum strives to encourage creativity in pupils through its CAS core element, while also emphasizing social and emotional development by integrating them in community service. It also aids in the development of soft skills such as collaboration and empathy. It enables them to investigate situations and concepts with both local and global implications.
              </div>
            </div>

          </div>
        </div>

        <div className="wwoff_container">
          <div className="wwoff_illus_container">
            <img src={wwoff_illus} alt="wwoff_illus" className="wwoff_illus_img" />
          </div>
          <div className="wwoff_content">
            <div className="wwoff_content_heading">What We Offer</div>
            <div className="wwoff_content_text">We have worked to assemble everything related to
              IB curriculum under one roof. From past papers to
              assignment samples to chapter-wise tests, you
              name any IB HL/SL resource, We have it!</div>

            <div className="wwoff_three_tiles_container">
              <div className="wwoff_tile " style={{ outline: "2px solid #4789d9", }}>
                <div className="wwoff_tile_head tile_1" style={{ backgroundColor: "#4789d9" }}>
                  01
                </div>
                <div className="wwoff_tile_tail" style={{ color: "#4789d9" }}>
                  IBDP TUTORING
                </div>
              </div>
              <div className="wwoff_tile " style={{ outline: "2px solid #fe7702", }}>
                <div className="wwoff_tile_head tile_2" style={{ backgroundColor: "#fe7702" }}>
                  02
                </div>
                <div className="wwoff_tile_tail" style={{ color: "#fe7702" }}>
                  IB MYP TUTORING
                </div>
              </div>
              <div className="wwoff_tile " style={{ outline: "2px solid #ffbe00", }}>
                <div className="wwoff_tile_head tile_3" style={{ backgroundColor: "#ffbe00" }}>
                  03
                </div>
                <div className="wwoff_tile_tail" style={{ color: "#ffbe00" }}>
                  IB PYP TUTORING
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="benefit_detail_container">
          <div className="benefit_detail_heading_container_wrapper" style={{backgroundColor:"#D1E7FF"}}>
            <div className="benefit_detail_heading_container" style={{backgroundColor:"#4789d9"}}>
              <div className="benefit_detail_heading_text">IBDP TUTORING</div>
              <img
                src={bef_transparent_image}
                alt={bef_transparent_image}
              />
            </div>
          </div>

          <div className="benefit_detail_body_container">
            <div className="benefit_detail_body">
              <span>
                We have worked to assemble everything related to IB curriculum under one roof.
                From past papers to assignment samples to chapter-wise tests, you name any IB HL/SL
                resource, We have it!
              </span>
              <div className="benefit_detail_body_sub">
                <div className="benefit_detail_body_sub_tile">
                  <div className="benefit_detail_body_sub_tile_icon">
                    <img src={green_tick} alt={green_tick} />
                  </div>
                  <div className="benefit_detail_body_sub_tile_text">
                    IB Math Tutoring
                  </div>
                </div>

                <div className="benefit_detail_body_sub_tile">
                  <div className="benefit_detail_body_sub_tile_icon">
                    <img src={green_tick} alt={green_tick} />
                  </div>
                  <div className="benefit_detail_body_sub_tile_text">
                    IB Physics Tutoring
                  </div>
                </div>

                <div className="benefit_detail_body_sub_tile">
                  <div className="benefit_detail_body_sub_tile_icon">
                    <img src={green_tick} alt={green_tick} />
                  </div>
                  <div className="benefit_detail_body_sub_tile_text">
                    IB Chemistry Tutoring
                  </div>
                </div>

                <div className="benefit_detail_body_sub_tile">
                  <div className="benefit_detail_body_sub_tile_icon">
                    <img src={green_tick} alt={green_tick} />
                  </div>
                  <div className="benefit_detail_body_sub_tile_text">
                    IB Psychology Tutoring
                  </div>
                </div>

                <div className="benefit_detail_body_sub_tile">
                  <div className="benefit_detail_body_sub_tile_icon">
                    <img src={green_tick} alt={green_tick} />
                  </div>
                  <div className="benefit_detail_body_sub_tile_text">
                    IB Biology Tutoring
                  </div>
                </div>

                <div className="benefit_detail_body_sub_tile">
                  <div className="benefit_detail_body_sub_tile_icon">
                    <img src={green_tick} alt={green_tick} />
                  </div>
                  <div className="benefit_detail_body_sub_tile_text">
                    IB Histroy Tutoring
                  </div>
                </div>

                <div className="benefit_detail_body_sub_tile">
                  <div className="benefit_detail_body_sub_tile_icon">
                    <img src={green_tick} alt={green_tick} />
                  </div>
                  <div className="benefit_detail_body_sub_tile_text">
                    IB Geography Tutoring
                  </div>
                </div>

                <div className="benefit_detail_body_sub_tile">
                  <div className="benefit_detail_body_sub_tile_icon">
                    <img src={green_tick} alt={green_tick} />
                  </div>
                  <div className="benefit_detail_body_sub_tile_text">
                    IB Economics Tutoring
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>


        <div className="benefit_detail_container">
          <div className="benefit_detail_heading_container_wrapper" style={{backgroundColor:"#FFE6D0"}}>
            <div className="benefit_detail_heading_container" style={{backgroundColor:"#fe7702"}}>
              <div className="benefit_detail_heading_text">IB-MYP TUTORING</div>
              <img
                src={bef_transparent_image}
                alt={bef_transparent_image}
              />
            </div>
          </div>

          <div className="benefit_detail_body_container">
            <div className="benefit_detail_body">
              <span>
                At IB Scholars, we have students who move through their entire five-year MYP program
                (from age 11 to 16 years). As the curriculum requires them to complete studies in eight
                subject areas, as well as an integrative subject and a Personal Project, we design our
                classes according to the provided structure.
              </span>

              <div className="myp_icons_container">

                <div className="myp_icon_card">
                    <img src={myp_icon_1} alt={myp_icon_1} />
                    <div className="myp_icon_text">Language & Literature</div>
                </div>

                <div className="myp_icon_card">
                    <img src={myp_icon_2} alt={myp_icon_2} />
                    <div className="myp_icon_text">Language Acquisition</div>
                </div>

                <div className="myp_icon_card">
                    <img src={myp_icon_3} alt={myp_icon_3} />
                    <div className="myp_icon_text">Sciences</div>
                </div>

                <div className="myp_icon_card">
                    <img src={myp_icon_4} alt={myp_icon_4} />
                    <div className="myp_icon_text">Mathematics</div>
                </div>

              </div>

            </div>
          </div>
        </div>

        <div className="benefit_detail_container">
          <div className="benefit_detail_heading_container_wrapper" style={{backgroundColor:"#FEF0C3"}}>
            <div className="benefit_detail_heading_container"  style={{backgroundColor:"#ffbe00"}}>
              <div className="benefit_detail_heading_text">IB-PYP TUTORING</div>
              <img
                src={bef_transparent_image}
                alt={bef_transparent_image}
              />
            </div>
          </div>

          <div className="benefit_detail_body_container">
            <div className="benefit_detail_body">
              <span>
                IB Scholars offer trained and experienced IB PYP tutors in Dubai. The IB PYP is a curriculum
                designed specifically for children aged 3 to 12. This curriculum encourages young children to
                think for themselves and take responsibility for their education so that they can investigate
                local and global issues and opportunities.
                <br />
                <br />
                We offer IB PYP tutoring to help these students achieve their goals. IB emphasizes on a child’s
                full growth, both academically and beyond the classroom. Our IB PYP instructors are
                experienced in teaching according to the IB framework. This curriculum emphasizes inquiry-
                based learning and activity-based learning.
              </span>

              <div className="pyp_details_container">
                <div className="pyp_heading_container">
                  <div className="pyp_heading_icon">
                    <img src={green_star} alt={green_star} />
                  </div>
                  <div className="pyp_heading_text">The PYP has five basic elements :</div>
                </div>
                <div className="pyp_list_container">
                  <ul className="pyp_list_text">
                    <li>	Knowledge (both disciplinary and transdisciplinary), which is represented by traditional
                      subject areas such as language, math, science, social studies, arts, and PE.
                    </li>
                    <li>Concepts that students investigate through structured inquiry to gain a cohesive, in-depth
                      grasp of both within and outside of academic areas.</li>
                    <li>Skills are the broad capabilities that students build and utilize during their education and in
                      their lives outside of the classroom.</li>
                    <li>Attitudes that contribute to international awareness and the well-being of individuals and
                      learning communities, and which are directly related to the IB learner profile.</li>
                    <li>Actions of successful enquiry that lead to responsible, intelligent, and appropriate
                      contribution to people and communities.</li>
                  </ul>
                </div>
              </div>


            </div>
          </div>
        </div>


      </div>
      <div className="bottom_space">

      </div>


    </>
  );
}

export default BenefitIB;
