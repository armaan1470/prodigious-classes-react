import React from "react";
import icon1 from "../../assets/images/icon-1.svg";
import icon2 from "../../assets/images/icon-2.svg";
import icon3 from "../../assets/images/icon-3.svg";
import banner from "../../assets/images/bg.jpg"
import "./BenefitsIB.css";
import Footer from "../../components/Footer/Footer";

function BenefitIB() {
  return (
    <>
      <div className="benefitib_container">
        <div className="benefit_hero_container">
          <img src={banner} alt="banner" className="benefit_banner_img" />
          <div className="benefit_header_text">Benefits Of IB</div>
          <div className="detail_card_container">
            <div className="about_card">
              <div className="img_container">
                <img src={icon1} alt="cardimg" />
              </div>
              <p>Global <br /> Recognition</p>
            </div>
            <div className="about_card">
              <div className="img_container">
                <img src={icon2} alt="cardimg" />
              </div>
              <p>University<br /> preparation</p>
            </div>
            <div className="about_card">
              <div className="img_container">
                <img src={icon3} alt="cardimg" />
              </div>
              <p>Personal<br /> Development</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default BenefitIB;
