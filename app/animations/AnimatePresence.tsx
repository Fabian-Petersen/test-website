"use client";

import { motion, AnimatePresence } from "framer-motion";

type ComponentProps = {
  children: React.ReactNode;
};

type AnimateProps = {
  initial?: { opacity?: number; y?: number; x?: number; scale?: number }; // Specify motion's "initial" prop
  animate?: { opacity?: number; y?: number; x?: number; scale?: number }; // Specify motion's "animate" prop
  transition?: {
    type?: "spring" | "tween" | "inertia" | "keyframes";
    staggerChildren?: number;
    duration?: number;
    y?: { duration?: number };
    x?: { duration?: number };
    opacity?: { duration?: number; delay?: number };
    exit?: { scale?: number; opacity?: number };
  }; // Specify motion's "transition" prop for timing
};

type AnimationProps = ComponentProps & AnimateProps;
function FramerAnimatePresence({
  children,
  initial = { opacity: 0, scale: 0 },
  animate = { opacity: 1, scale: 1 },
  transition = {
    type: "spring",
    duration: 1.5,
    staggerChildren: 0.3,
    exit: { scale: 0 },
  },
}: AnimationProps) {
  return (
    <AnimatePresence>
      <motion.div initial={initial} animate={animate} transition={transition}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default FramerAnimatePresence;
