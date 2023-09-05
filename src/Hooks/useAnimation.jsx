import React, { useEffect } from "react";

export default function useAnimation(classname) {
  const handleScroll = () => {
    const elements = document.querySelectorAll(`.${classname}`);
      elements.forEach((element) => {
      const { top } = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (top < windowHeight * 1) {
        if (element.classList.contains("animation_1")) {
          element.classList.add("animate_2");
        } else if (element.classList.contains("animation_2")) {
          element.classList.add("animate_3");
        } else if (element.classList.contains("animation_3")) {
          element.classList.add("fadein");
        }
      }
    });
  };

  useEffect(() => {
    handleScroll()
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return handleScroll();
};


