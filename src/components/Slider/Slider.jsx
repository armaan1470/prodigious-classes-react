import React, { useEffect, useRef } from "react";
import "./Slider.css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/splide.min.css";
import test1 from "../../assets/images/review-1.png"
import test2 from "../../assets/images/review-2.png"
import test3 from "../../assets/images/review-3.png"
import test4 from "../../assets/images/review-4.png"
import test5 from "../../assets/images/review-5.png"
import test6 from "../../assets/images/review-6.png"
import test7 from "../../assets/images/review-7.png"
import test8 from "../../assets/images/review-8.png"
import test9 from "../../assets/images/review-9.png"
import test10 from "../../assets/images/review-10.png"
import prevbtn3 from "../../assets/images/slider button 4.png";
import nextbtn3 from "../../assets/images/slider button 5.png";

const Slider = () => {



  return (
    <Splide
      hasTrack={false}
      options={{
        perPage: 3,
        focus: "center",
        type: "loop",
        pagination: false,
        speed: 500,
        autoplay: true,
        interval: 2000,
        pauseOnHover: true,
        pauseOnFocus: true,
        fade: true, // add fade option here
      }}
      aria-label="Testimonials"
    >
      <SplideTrack>
        <SplideSlide>
          <img src={test1} alt="Image 1" className="test_img"/>
        </SplideSlide>
        <SplideSlide>
          <img src={test2} alt="Image 2" className="test_img"/>
        </SplideSlide>
        <SplideSlide>
          <img src={test3} alt="Image 3" className="test_img"/>
        </SplideSlide>
        <SplideSlide>
          <img src={test4} alt="Image 4" className="test_img"/>
        </SplideSlide>
        <SplideSlide>
          <img src={test5} alt="Image 5" className="test_img"/>
        </SplideSlide>
        <SplideSlide>
          <img src={test6} alt="Image 6" className="test_img"/>
        </SplideSlide>
        <SplideSlide>
          <img src={test7} alt="Image 7" className="test_img"/>
        </SplideSlide>
        <SplideSlide>
          <img src={test8} alt="Image 8" className="test_img"/>
        </SplideSlide>
        <SplideSlide>
          <img src={test9} alt="Image 9" className="test_img"/>
        </SplideSlide>
        <SplideSlide>
          <img src={test10} alt="Image 10" className="test_img"/>
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
