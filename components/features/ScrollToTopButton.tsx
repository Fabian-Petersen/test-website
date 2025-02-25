"use client";

import { ChevronUp } from "lucide-react";
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
      className={`fixed left-[50%] -translate-x-[50%] md:left-[95%] top-[90%] z-[1000] transition-all duration-500 ${
        isScrolled
          ? "animate-scrollToTop pointer-events-auto"
          : "translate-y-[100vh] opacity-0 pointer-events-none"
      }`}
    >
      <button
        className={`text-white flex items-center justify-center rounded-full dark:bg-white bg-gray-500  hover:scale-105 transform transition-transform duration-800`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ChevronUp className="size-10 dark:text-gray-500 text-white" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
