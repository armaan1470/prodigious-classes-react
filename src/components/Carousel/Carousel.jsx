import React from "react";
import "./Carousel.css";
import { useRef, useEffect } from "react";

import igrad1 from "../../assets/images/Int. Graduate.jpg";
import igrad2 from "../../assets/images/Int. Graduate 1.jpg";
import igrad3 from "../../assets/images/Int. Graduate 2.jpg";
import prevbtn from "../../assets/images/slider button.png";
import nextbtn from "../../assets/images/slider button 1.png";
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import { Swiper, Navigation, Pagination } from 'swiper';



// register Swiper custom elements
register();

function Carousel() {

  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });
  }, []);


  const items = [
    <img src={igrad1} role="presentation" />,
    <img src={igrad2} role="presentation" />,
    <img src={igrad3} role="presentation" />,
  ];

  return (
    <div className="carousel_container">
      <swiper-container
        ref={swiperElRef}
        slides-per-view={3}
        navigation={true}
        loop={true}
        centeredSlides={true}
        swiper-navigation={true}
      >
        <swiper-slide>
          <img src={igrad1} className="slider-img" role="presentation" />
        </swiper-slide>
        <swiper-slide>
          <img src={igrad2} className="slider-img" role="presentation" />
        </swiper-slide>
        <swiper-slide>
          <img src={igrad3} className="slider-img" role="presentation" />
        </swiper-slide>

      </swiper-container>
    </div >


  );
}

export default Carousel;
