import React, { useEffect, useState } from 'react'
import "./Carousel.css";

export default function Carousel({ imgs, btn }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const images = [];
  for (let i = 0 ; i < imgs.length;i++){
    images.push(imgs[i]);
  }

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
    <div className="carousel-holder">
      <div
        className="carousel"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="carousel-container">
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                transform: `translateX(-${activeIndex * 350}px)`,
                transition: ".7s ease",
              }}
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className={`carouselimg ${activeIndex === index - 1 ? "active" : ""}`}
              />
            </div>
          ))}
        </div>
      </div>
      <button className="btn-cars btn-cars-left" onClick={handlePrevSlide}  onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <img src={btn[0]} alt="" />
      </button>
      <button className="btn-cars btn-cars-right" onClick={handleNextSlide}  onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <img src={btn[1]} alt="" />
      </button>
    </div>
  );
};

