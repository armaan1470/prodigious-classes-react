import React, { useEffect, useState } from 'react'
import "./Carousel.css";

export default function Carousel({ imgs, btn }) {
  const [index, setIndex] = useState(0)
  const card = []
  for (let i = 0; i < imgs.length; i++) {
    card.push({ id: i, image: imgs[i] })
  }



  const mod = (n, m) => {
    let result = n % m
    return result >= 0 ? result : result + m
  }


  const changeSlideL = () => {
    let m = (index - 1) % card.length
    setIndex(m >= 0 ? m : m + card.length)
  }
  const changeSlideR = () => {
    setIndex((index + 1) % card.length)
  }
  return (
    <div>
      <div className="carousel">
        {
          card.map((item, i) => {
            const left = mod(index - 1, card.length)
            const right = mod(index + 1, card.length)

            let className = ""
            if (i === index) {
              className = "card card--active";
            }
            else if (i === right) {
              className = "card card--right"
            }
            else if (i === left) {
              className = "card card--left"
            }
            else {
              className = "card"
            }
            console.log(left, right, index, card.length)
            return <img src={item.image} alt="img" key={item.id} className={className} />
          })
        }
        <button className='btn-cars btn-cars-left' onClick={changeSlideL}><img src={btn[0]} alt="" /></button>
        <button className='btn-cars btn-cars-right' onClick={changeSlideR}><img src={btn[1]} alt="" /></button>
      </div>
    </div>
  )
}
