"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import anime from "animejs/lib/anime.es.js";


const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);// ditampilkan
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    anime({
      targets: document.documentElement, // Mengarahkan animasi ke elemen html
      scrollTop: 0, // Tujuan scroll
      duration: 1000, // Durasi animasi dalam milidetik
      easing: 'easeInQuart', // Fungsi easing untuk animasi
    });
  };
  

  return (
    <button
      onClick={scrollToTop}
      name="scrollUp"
      type="button"
      className={`fixed left-[84%] top-[90%] z-[9999] h-[50px] w-[50px] rounded-full bg-primary text-center leading-[49px] transition-opacity duration-500 ease-in-out opacity-${
        isVisible ? "100" : "0"
      }`}
    >
      <FontAwesomeIcon
        icon={faChevronUp}
        className="align-middle text-[22px] font-bold text-white"
      />
    </button>
  );
};

export default ScrollUp;
