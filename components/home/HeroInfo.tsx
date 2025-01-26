import React from "react";
import CTAButtonsContainer from "./cta_buttons/CTAButtonsContainer";

const HeroInfo = () => {
  return (
    <div className="flex flex-col gap-4 justify-center h-full w-full px-4 py-8">
      <h3 className="text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] tracking-wide capitalize font-bold italic">
        Hello, Its me
      </h3>
      <h1 className="text-[2rem] sm:text-[2.3rem] md:text-[2.7rem] lg:text-[4rem] font-bold">
        <span className=" text-primaryColor">Fabian </span>
        Petersen v1.0
      </h1>
      <p className="~text-sm/xl tracking-wider leading-2 normal-case mb-8 w-[80%]">
        Welcome to my portfolio website showcasing my work as a
        <span className="text-primaryColor"> Front End Developer.</span>
      </p>
      <CTAButtonsContainer />
    </div>
  );
};

export default HeroInfo;
