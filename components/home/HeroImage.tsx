import React from "react";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="hidden sm:flex sm:items-center sm:justify-center sm:h-full px-4">
      <Image
        src="/images/fabianImage.jpg"
        alt="hero"
        className="size-[15rem] md:size-[20rem] lg:size-[25rem] rounded-full object-cover border-[5px] border-green-500 my-auto"
        width={100}
        height={100}
        priority
      />
    </div>
  );
};

export default HeroImage;
