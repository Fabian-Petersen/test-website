"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Button from "@/components/features/Button";
import { motion } from "framer-motion";
import { MessageSquareDiff } from "lucide-react";
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
  const isScreenMobile = useScreenSize(740);
  const router = useRouter();

  const handleLogin = () => {
    router.push("/create_testimonial");
  };

  return (
    <motion.div
      variants={loginVariants}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.8 }}
      className="flex items-center justify-center"
    >
      {isScreenMobile ? (
        <Button
          type="button"
          onClick={handleLogin}
          className="dark:text-white text-fontDark rounded-full"
        >
          <MessageSquareDiff />
        </Button>
      ) : (
        <Button
          buttonLabel="Add Testimonial"
          type="button"
          onClick={handleLogin}
          className="hover:scale-[102%] bg-primaryColor text-white hover:text-white transition-all duration-300 text-[0.8rem] dark:text-fontLight sm:py-2 sm:px-4 py-4 px-6 rounded-full tracking-wide"
        />
      )}
    </motion.div>
  );
};

export default AddTestimonialButton;
