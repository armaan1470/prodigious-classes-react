import React, { useState, useEffect } from "react";
import "./CourseContainer.css";
import course1 from "../../assets/images/Courses.jpg";
import course2 from "../../assets/images/Courses 2.jpg";
import course3 from "../../assets/images/Courses 3.jpg";
import course4 from "../../assets/images/Courses 4.jpg";
import course5 from "../../assets/images/Courses 5.jpg";
import course6 from "../../assets/images/Courses 6.jpg";

function CourseContainer() {
  const [visibleIndex, setVisibleIndex] = useState(-1);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const delay = 2000; // Delay in milliseconds between each card animation

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % 6);
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);

  return (
    <div className="course_container">
      <p>
        Featured <span> Courses</span> at Philomathean
      </p>
      <div className={`courses_home ${visibleIndex !== -1 ? 'visible' : ''}`}>
        <img
          src={course1}
          alt=""
          style={{ animationDelay: '0.2s', transform: currentCardIndex === 0 ? 'scale(1.06)' : 'scale(0.9)' }}
        />
        <img
          src={course2}
          alt=""
          style={{ animationDelay: '0.4s', transform: currentCardIndex === 1 ? 'scale(1.06)' : 'scale(0.9)' }}
        />
        <img
          src={course3}
          alt=""
          style={{ animationDelay: '0.6s', transform: currentCardIndex === 2 ? 'scale(1.06)' : 'scale(0.9)' }}
        />
        <img
          src={course4}
          alt=""
          style={{ animationDelay: '0.8s', transform: currentCardIndex === 3 ? 'scale(1.06)' : 'scale(0.9)' }}
        />
        <img
          src={course5}
          alt=""
          style={{ animationDelay: '1s', transform: currentCardIndex === 4 ? 'scale(1.06)' : 'scale(0.9)' }}
        />
        <img
          src={course6}
          alt=""
          style={{ animationDelay: '1.2s', transform: currentCardIndex === 5 ? 'scale(1.06)' : 'scale(0.9)' }}
        />
      </div>
    </div>
  );
}

export default CourseContainer;
