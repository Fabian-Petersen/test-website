"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Button from "@/components/features/Button";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Tooltip } from "flowbite-react";
import useScreenSize from "@/app/customHooks/useScreenSize";

// $ Login Button Animation
const loginVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
  transition: {
    delay: 2.6,
    duration: 0.8,
  },
};

const AddTestimonialButton = () => {
  const router = useRouter();
  const isMobile = useScreenSize(740);
  const handleLogin = () => {
    router.push("/create_testimonial");
  };

  return (
    <motion.div
      variants={loginVariants}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.0, duration: 0.8 }}
      className="hover:cursor-pointer"
    >
      <Tooltip content="Add testimonial" placement="bottom">
        <Button
          type="button"
          onClick={handleLogin}
          className="dark:text-white text-fontDark rounded-full"
        >
          <Heart size={isMobile ? 20 : 24} />
        </Button>
      </Tooltip>
    </motion.div>
  );
};

export default AddTestimonialButton;
