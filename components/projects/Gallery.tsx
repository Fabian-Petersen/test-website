"use client";

// $ The component display the grid of the individual projects.
// $ The data is imported from a separate file.
// $ The data is mapped to the ProjectsCard component.

import { ProjectCardDataType } from "@/public/data/projectData";
import FramerAnimatePresence from "@/app/animations/AnimatePresence";
import { motion, stagger } from "framer-motion";
import ProjectsCard from "./ProjectsCard";

type GalleryProps = {
  items: ProjectCardDataType[];
  isPending: boolean;
};

const Gallery = ({ items }: GalleryProps) => {
  return (
    <motion.section
      initial
      animate
      layout
      transition={{ duration: 0.5, staggerChildren: 0.3 }}
      className="grid gap-6 grid-cols-gallery space-y-2"
    >
      {items.map((item: ProjectCardDataType) => (
        <FramerAnimatePresence key={item.id}>
          <div>
            <ProjectsCard key={item.id} {...item} />
          </div>
        </FramerAnimatePresence>
      ))}
    </motion.section>
  );
};
export default Gallery;
