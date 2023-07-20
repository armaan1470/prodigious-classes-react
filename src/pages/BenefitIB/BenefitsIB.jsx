import React from "react";
import icon1 from "../../assets/images/icon-1.svg";
import icon2 from "../../assets/images/icon-2.svg";
import icon3 from "../../assets/images/icon-3.svg";
import banner from "../../assets/images/bg.jpg"
import wwoff_illus from "../../assets/images/model.png"
import "./BenefitsIB.css";
import Footer from "../../components/Footer/Footer";

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
                  <img src={icon1} alt="cardimg" />
                </div>
                <p>Global <br /> Recognition</p>
              </div>
              <div className="benefit_bottom_card">
                The IB Diploma program improves your study skills and helps you prepare for university-level courses. It helps you polish your writing abilities and prepare for research work through its features such as Theory of Knowledge, Extended Essay, and CAS. It assists you in efficiently managing your time between study and other activities due to its rigorous workload. It instills good study habits that will aid you in a more successful academic career at university.
              </div>
            </div>

            <div className="benefit_main_card">
              <div className="benefit_top_card">
                <div className="img_container">
                  <img src={icon1} alt="cardimg" />
                </div>
                <p>Global <br /> Recognition</p>
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
                <div className="wwoff_tile">
                  <div className="wwoff_tile_head">
                      01
                  </div>
                  <div className="wwoff_tile_tail">
                      IBDP TUTORING
                  </div>
                </div>
                <div className="wwoff_tile">
                  <div className="wwoff_tile_head">
                      01
                  </div>
                  <div className="wwoff_tile_tail">
                      IBDP TUTORING
                  </div>
                </div>
                <div className="wwoff_tile">
                  <div className="wwoff_tile_head">
                      01
                  </div>
                  <div className="wwoff_tile_tail">
                      IBDP TUTORING
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
