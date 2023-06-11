import React from "react";
import Footer from "../../components/Footer/Footer";
import "./Aboutib.css";
import logo from "../../assets/images/aboutib_logo.png";

const AboutIB = () => {
  return (
    <>
      <div className="aboutib">
        <div className="aboutIB_banner_text">
          <img src={logo} alt="logo" />
          <h1>About the IB</h1>
        </div>
        <div className="aboutIB_text">
          <div>
            <h1>
              A variety of <br/><span> Educational Programs </span> <br />
              Offered By IB
            </h1>
          </div>
          <div>
            <p>
              Private group tution at your door step. <br /> We provide a
              flexible learning solution that <br /> makes learning easy and
              convinient
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutIB;
