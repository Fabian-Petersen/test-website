import React from "react";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="hidden sm:flex sm:items-center sm:justify-center sm:h-full">
      <Image
        src="/images/fabianImage.png"
        alt="hero"
        className="size-clampHeroImage rounded-full"
        width={100}
        height={100}
        priority
      />
    </div>
  );
};

export default HeroImage;
