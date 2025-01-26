import pageLinkData from "@/public/data/pageLinkData";
import React from "react";
import { motion } from "framer-motion";

const HeaderLinks: React.FC = () => {
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
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
    transition: {
      duration: 0.8,
    },
  };

  return (
    // $ The mobile menu links for the portfolio section of the site.
    <motion.div
      className="dark:text-fontLight text-fontDark"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <ul className="flex justify-evenly sm:gap-4 gap-12 items-center h-full">
        {pageLinkData.map((link) => (
          <motion.li key={link.id} variants={childVariants}>
            <a
              href={`${link.url}`}
              className="text-clampNavLinks uppercase tracking-wider hover:text-buttonBlueColor transition-all duration-100"
            >
              {link.name}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default HeaderLinks;
