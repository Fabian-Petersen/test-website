"use client";

import { IoIosArrowDropupCircle } from "react-icons/io";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      className={`fixed left-[90%] md:left-[95%] top-[90%] z-[1000] transition-all duration-600 ${
        isScrolled
          ? "animate-scrollToTop pointer-events-auto"
          : "translate-y-[100vh] opacity-0 pointer-events-none"
      }`}
    >
      <button
        className="text-white flex items-center justify-center rounded-full dark:bg-white dark:text-blue-500 bg-blue-500 hover:scale-105 transform transition-transform duration-800"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <IoIosArrowDropupCircle className="text-5xl w-10 h-10" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
