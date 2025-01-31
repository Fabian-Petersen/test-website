import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import aboutVariants from "../../app/animations/aboutAnimate";

const [aboutInfo] = aboutVariants;

const MyInfo = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative text-gray-600 font-medium dark:text-white text-clampBodyText leading-[1.7rem] tracking-wide py-4 mb-[5rem]">
      <motion.div
        className="space-y-4"
        variants={aboutInfo}
        initial="initialState"
        animate="animateState"
      >
        <p>
          I have been working as a developer for the past 3 years. I love
          working on exciting projects and to learn continuously while doing so.
          I follow the learn while you do approach, where I try to use the
          technologies I learn in my projects. This approach have helped me
          tremendously to learn the fundamentals while at the same time I
          experienced problems where the answer is not in the course material to
          develop my problem solving skills.
        </p>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p>
            I also have a passion for cloud technologies and cyber security. I
            recently completed the AWS Solutions Architecture Assosiate exam and
            is currently working on obtaining the ISC2 Cyber Security
            Certificate. This will help me to build secure, scalible fullstack
            applications.
          </p>
          <br />
          <p>
            I am also active member of FEDSA (Frontend Developers SA), AWS
            Commnuity for cloud technologies and the DevSecOps communities for
            cyber security. These communities have helped me to learn from
            others and to grow my network within these industries.
          </p>
          <br />
          <p>
            Visit my project section to see my work with more details on each
            project, I hope you like it!...
          </p>
        </motion.div>
        <div className="absolute top-[100%] left-[50%] -translate-x-[50%]">
          <button
            onClick={toggleReadMore}
            className="flex justify-center items-center border gap-2 bg-blue-500 text-white rounded-full py-1 px-4 transition-colors duration-200"
          >
            {isExpanded ? (
              <>
                Read Less
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Read More
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default MyInfo;
