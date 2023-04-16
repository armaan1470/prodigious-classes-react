import React, { useState, useEffect } from "react";
import "./Counter.css";

function Counter() {
  const [maxValue, setMaxValue] = useState(1000);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 5000; // total duration in milliseconds
    const interval = setInterval(() => {
      setProgress((prev) => prev + 50);
    }, 50);
    setTimeout(() => clearInterval(interval), duration);
  }, []);

  const lectures = Math.min(Math.round((progress / 5000) * maxValue), maxValue);
  const tutors = Math.min(Math.round((progress / 5000) * 25), 25);
  const batches = Math.min(Math.round((progress / 5000) * 96), 96);
  const students = Math.min(Math.round((progress / 5000) * 200), 200);

  return (
    <div className="counter-div">
      <div className="n1 lp1">
        <p>{lectures}</p>
        <p>Lecture Conducted</p>
      </div>
      <div className="n1 lp2">
        <p>{tutors}</p>
        <p>Expert Tutors</p>
      </div>
      <div className="n1 lp3">
        <p>{batches}</p>
        <p>Batches</p>
      </div>
      <div className="n1 lp4">
        <p>{students}</p>
        <p>Emerging Students</p>
      </div>
    </div>
  );
}

export default Counter;
