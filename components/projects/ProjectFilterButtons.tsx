"use client";
import ProjectFilterButton from "./ProjectFilterButton";
import { motion } from "framer-motion";
import ScrollAnimation from "@/app/animations/ScrollAnimation";
type Props = {
  uniqueItems: (string | "all")[];
  filterByValue: (value: string | "all") => void;
};

const ProjectFilterButtons = ({ uniqueItems, filterByValue }: Props) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: -150, scale: 0 },
    visible: { opacity: 1, x: 0, scale: 1 },
    transition: {
      type: "spring",
      duration: 0.8,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="flex sm:gap-2 gap-1 justify-center w-full"
    >
      {uniqueItems.map((item, index) => (
        <motion.div key={index} variants={childVariants}>
          <ScrollAnimation>
            <ProjectFilterButton
              title={item}
              filterByValue={() => filterByValue(item)}
            />
          </ScrollAnimation>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectFilterButtons;
