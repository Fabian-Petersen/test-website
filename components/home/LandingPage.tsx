"use client";

import HeroImage from "./HeroImage";
import HeroInfo from "./HeroInfo";
import useScreenSize from "@/app/customHooks/useScreenSize";

const LandingPage = () => {
  const isMobile = useScreenSize(640);
  return (
    <main id="landing" className="w-full bg-bgLight dark:bg-bgDark">
      <div
        className={`mx-auto max-w-6xl grid grid-flow-row grid-cols-[minmax(200px,400px),1fr] md:grid-cols-[minmax(300px,1fr),auto] ${isMobile && "grid-cols-[1fr]"} items-start justify-center text-gray-600 dark:text-white tracking-wider w-full sm:min-h-screen h-[40rem]`}
      >
        <HeroInfo />
        <HeroImage />
      </div>
    </main>
  );
};

export default LandingPage;
