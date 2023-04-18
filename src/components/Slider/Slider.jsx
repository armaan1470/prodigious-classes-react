import React, { useEffect, useRef } from "react";
import "./Slider.css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/splide.min.css";
import igrad1 from "../../assets/images/Int Result-1.jpg";
import igrad2 from "../../assets/images/Int Result-2.jpg";
import igrad3 from "../../assets/images/Int Result-3.jpg";
import prevbtn1 from "../../assets/images/slider button.png";
import nextbtn1 from "../../assets/images/slider button 1.png";

const Slider = () => {
  return (
    <Splide
      hasTrack={false}
      options={{
        perPage: 3,
        focus: "center",
        type: "loop",
        pagination: false,
        speed: 1000,
        interval: 3000,
        pauseOnHover: true,
        pauseOnFocus: true,
      }}
      aria-label="Graduate Students"
    >
      <SplideTrack>
        <SplideSlide>
          <img src={igrad1} className="slider-img" alt="Image 1" />
        </SplideSlide>

        <SplideSlide>
          <img src={igrad2} className="slider-img" alt="Image 2" />
        </SplideSlide>

        <SplideSlide>
          <img src={igrad3} className="slider-img" alt="Image 3" />
        </SplideSlide>
      </SplideTrack>

      <div class="splide__arrows">
        <button class="splide__arrow splide__arrow--prev">
          <img src={prevbtn1} className="arrow_img" alt="Previous" />
        </button>
        <button class="splide__arrow  splide__arrow--next">
          <img src={nextbtn1} className="arrow_img" alt="Next" />
        </button>
      </div>
    </Splide>
  );
};

export default Slider;
