"use client";

import React, { useEffect, useState } from "react";
import useIsScrolled from "@/app/customHooks/useIsScrolled";

type Props = {
  className?: string;
};

const NavbarProgressBar = ({ className = "" }: Props) => {
  const { isScrolled } = useIsScrolled();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={
        isScrolled
          ? `{${className} w-full fixed top-[calc(var(--navbarHeight)-var(--progressBarHeight))] z-[1000]}`
          : "hidden"
      }
    >
      <div
        className={`h-[var(--progressBarHeight)] ${scrollProgress < 70 ? "bg-green-400" : scrollProgress > 70 && scrollProgress < 90 ? "bg-yellow-400" : "bg-red-500"} transition-colors duration-150`}
        style={{ transform: `translateX(${scrollProgress - 100}%)` }}
      />
    </div>
  );
};

export default NavbarProgressBar;
