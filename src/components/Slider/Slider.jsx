import React, { useState } from 'react';
import "./Slider.css";

export default function SingleSlider({ imgs, btn, visibleImages = 1 }) {
  const [index, setIndex] = useState(0);
  const card = [];
  for (let i = 0; i < imgs.length; i++) {
    card.push({ id: i, image: imgs[i] });
  }

  const mod = (n, m) => {
    let result = n % m;
    return result >= 0 ? result : result + m;
  };

  const changeSlideL = () => {
    let m = (index - 1) % card.length;
    setIndex(m >= 0 ? m : m + card.length);
  };

  const changeSlideR = () => {
    setIndex((index + 1) % card.length);
  };

  const getClassName = (i) => {
    const first = mod(index - Math.floor(visibleImages / 2), card.length);
    const left = mod(first - 1, card.length);
    const right = mod(first + visibleImages, card.length);
  
    if (i === index) {
      return "card card--active";
    } else if (i === left) {
      return "card card--left";
    } else if (i === right) {
      return "card card--right";
    } else if (i < left || i > right) {
      return "card card--hidden";
    } else {
      return "card";
    }
  };
  

  return (
    <div>
      <div className="carousel">
        {card.map((item, i) => {
          console.log(index, visibleImages);
          if (i < index || i >= index + visibleImages) {
            return null;
          }
          return (
            <img
              src={item.image}
              alt="img"
              key={item.id}
              className={getClassName(i)}
            />
          );
        })}
        <button className="btn-cars btn-cars-left" onClick={changeSlideL}>
          <img src={btn[0]} alt="" />
        </button>
        <button className="btn-cars btn-cars-right" onClick={changeSlideR}>
          <img src={btn[1]} alt="" />
        </button>
      </div>
    </div>
  );
}
