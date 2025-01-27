import { motion } from "framer-motion";
import aboutVariants from "../../app/animations/aboutAnimate";

const [aboutInfo] = aboutVariants;

const MyInfo = () => {
  return (
    <div className="text-gray-600 font-medium dark:text-white text-clampBodyText leading-[1.7rem] tracking-wide py-4">
      <motion.p
        variants={aboutInfo}
        initial="initialState"
        animate="animateState"
      >
        My background is in chemical engineering and like many engineers we are
        driven by continuous learning, design and solving complex problems.
        <br />
        <br />
        As a developer, I am enthusiastic about learning new technologies and
        working on exciting projects. I follow the learn while you do approach
        instead of following prepared online projects, thus my projects are
        build with technologies I currently learn. This approach have helped me
        tremendoulsy to learn the fundamentals while at the same time I
        experienced problems where the answer is not in the course material.
      </motion.p>
      <br />
      <p>
        My earlier projects were build with vanillas javascript and later with
        react however Im currently using Nextjs with TypeScript to build my
        projects. The structure of the projects follow the SOLID design
        patterns, the styling Tailwindcss and the animations with Framer Motion.
      </p>

      <br />
      <p>
        Visit my project section to see my work with more detail on the build, I
        hope you like it!...
      </p>
    </div>
  );
};

export default MyInfo;
