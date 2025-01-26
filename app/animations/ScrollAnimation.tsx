"use client";
// $ This animation triggers when the component comes into view
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type ScrollAnimationProps = {
  children: React.ReactNode;
  initial?: { opacity?: number; y?: number; x?: number };
  animate?: { opacity?: number; y?: number; x?: number };
  transition?: {
    duration?: number;
    y?: { duration?: number };
    x?: { duration?: number };
    opacity?: { duration?: number; delay?: number };
  };
};

function ScrollAnimation({
  children,
  initial = { opacity: 0, y: 0, x: 0 }, // default values for initial
  animate = { opacity: 1, y: 0, x: 0 }, // default values for animate
  transition = {
    duration: 0.8,
    y: { duration: 0.8 },
    x: { duration: 0.8 },
    opacity: { duration: 1.5, delay: 0.3 },
  }, // default duration
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : initial} // Apply animation only when in view
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

export default ScrollAnimation;
