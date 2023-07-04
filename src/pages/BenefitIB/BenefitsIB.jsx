import React from "react";
import icon1 from "../../assets/images/icon-1.svg";
import icon2 from "../../assets/images/icon-2.svg";
import icon3 from "../../assets/images/icon-3.svg";
import banner from "../../assets/images/bg.jpg"
import "./BenefitsIB.css";
import Footer from "../../components/Footer/Footer";

function BenefitIB() {
  return (
    <div className="ib_introduction ">
      <div className="banner_container border">
        <h1>Benefits of IB</h1>
        <img src={banner} alt="" />
        <div className="detail_card_container">
          <div className="about_card">
            <div className="img_container">
              <img src={icon1} alt="cardimg"  />
            </div>
            <p>Global <br/> Recognition</p>
          </div>
          <div className="about_card">
            <div className="img_container">
              <img src={icon2} alt="cardimg" />
            </div>
            <p>University<br/> preparation</p>
          </div>
          <div className="about_card">
            <div className="img_container">
              <img src={icon3} alt="cardimg" />
            </div>
            <p>Personal<br/> Development</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BenefitIB;
