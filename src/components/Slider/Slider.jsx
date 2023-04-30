import React, { useEffect, useRef } from "react";
import "./Slider.css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/splide.min.css";
import testi from "../../assets/images/testimonials.png"
import prevbtn3 from "../../assets/images/slider button 4.png";
import nextbtn3 from "../../assets/images/slider button 5.png";

const Slider = () => {



  return (
    <Splide
      hasTrack={false}
      options={{
        perPage: 1,
        focus: "center",
        type: "loop",
        pagination: false,
        speed: 1000,
        interval: 3000,
        pauseOnHover: true,
        pauseOnFocus: true,
      }}
      aria-label="Testimonials"
    >
      <SplideTrack>
        <SplideSlide>
          <img src={testi} alt="Image 1" />
        </SplideSlide>
      </SplideTrack>

      <div className="splide__arrows">
        <button className="splide__arrow splide__arrow--prev">
          <img src={prevbtn3} className="arrow_img" alt="Previous" />
        </button>
        <button className="splide__arrow  splide__arrow--next">
          <img src={nextbtn3} className="arrow_img" alt="Next" />
        </button>
      </div>
    </Splide>
  );
};

export default Slider;
