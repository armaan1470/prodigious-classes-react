import React, { useEffect, useState } from "react";
import "./Slider.css";
import test1 from "../../assets/images/review-1.png";
import test2 from "../../assets/images/review-2.png";
import test3 from "../../assets/images/review-3.png";
import test4 from "../../assets/images/review-4.png";
import test5 from "../../assets/images/review-5.png";
import test6 from "../../assets/images/review-6.png";
import test7 from "../../assets/images/review-7.png";
import test8 from "../../assets/images/review-8.png";
import test9 from "../../assets/images/review-9.png";
import prevbtn3 from "../../assets/images/SliderBtn.svg";
import nextbtn3 from "../../assets/images/SliderBtn.svg";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const images = [
    test1,
    test2,
    test3,
    test4,
    test5,
    test6,
    test7,
    test8,
    test9,
  ];

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) => {
      if (prevIndex === 0) {
        return images.length - 3;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) => {
      if (prevIndex === images.length - 3) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  useEffect(() => {
    const id = setInterval(handleNextSlide, 2000);
    setIntervalId(id);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleMouseEnter = () => {
    clearInterval(intervalId);
    console.log("first");
  };

  const handleMouseLeave = () => {
    const id = setInterval(handleNextSlide, 2000);
    setIntervalId(id);
  };
  return (
    <div className="slider-holder">
      <div
        className="slider"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="slides-container">
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                transform: `translateX(-${activeIndex * 300}px)`,
                transition: ".7s ease",
              }}
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className={`slide ${activeIndex === index - 1 ? "active" : ""}`}
              />
            </div>
          ))}
        </div>
      </div>
      <button className=" prev-button" onClick={handlePrevSlide}>
        <img src={prevbtn3} alt="" />
      </button>
      <button className=" next-button" onClick={handleNextSlide}>
        <img src={nextbtn3} alt="" />
      </button>
    </div>
  );
};

export default Slider;
