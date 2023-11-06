import React from 'react'
import { useState, useEffect } from "react";
import "./CourseContainer.css"
import course1 from "../../assets/images/orange.png";
import course2 from "../../assets/images/green.png";
import course3 from "../../assets/images/voilet.png";
import course4 from "../../assets/images/pink.png";
import course5 from "../../assets/images/blue.png";
import course6 from "../../assets/images/yellow.png";


function CourseContainer() {

    const [visibleIndex, setVisibleIndex] = useState(-1);

    // for course animation
    const checkVisibility = () => {
      const elements = document.querySelectorAll('.courses_home img');
      let index = -1;
      for (let i = 0; i < elements.length; i++) {
        const rect = elements[i].getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          index = i;
        }
      }
      setVisibleIndex(index);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', checkVisibility);
      return () => {
        window.removeEventListener('scroll', checkVisibility);
      };
    }, []);



  return (
    <div className="course_container">
    <p>
      Courses at Philomathean
    </p>
    <div className={`courses_home ${visibleIndex !== -1 ? 'visible' : ''}`}>
      <img src={course1} alt="" style={{ animationDelay: '0.2s' }} />
      <img src={course2} alt="" style={{ animationDelay: '0.4s' }} />
      <img src={course3} alt="" style={{ animationDelay: '0.6s' }} />
      <img src={course4} alt="" style={{ animationDelay: '0.8s' }} />
      <img src={course5} alt="" style={{ animationDelay: '1s' }} />
      <img src={course6} alt="" style={{ animationDelay: '1.2s' }} />
    </div>
  </div>
  )
}

export default CourseContainer