"use client";

import { Button } from "../ui/button";
import { motion } from "framer-motion";
import useIsMobile from "@/customHooks/useScreenSize";

type Props = {
  title: string;
  filterByValue: (value: string) => void;
};

function ProjectFilterButton({ title, filterByValue }: Props) {
  const isMobile = useIsMobile(640);
  // $ Function to handle the filter by value

  const handleFilterByValue = (title: string) => {
    // $ Filter the items based on the category using the custom hook useFilter
    filterByValue(title);

    // $ Add active class to the clicked button
    const btnElementList = document.querySelectorAll(".btn");
    btnElementList.forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove("active");
        btn.classList.add("active");
        console.log("btnElement", btn);
      });
    });
  };

  return (
    <motion.div whileTap={{ scale: 0.98 }} whileHover={{ scale: 1.02 }}>
      <Button
        onClick={() => handleFilterByValue(title)}
        variant={"default"}
        className="btn hover:bg-blue-400 capitalize"
        size={isMobile ? "sm" : "md"}
      >
        {title}
      </Button>
    </motion.div>
  );
}

export default ProjectFilterButton;
