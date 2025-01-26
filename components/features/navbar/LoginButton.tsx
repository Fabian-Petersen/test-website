"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Button from "@/components/features/Button";
import { motion } from "framer-motion";

// $ Login Button Animation
const loginVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
  transition: {
    delay: 1.8,
    duration: 0.8,
  },
};

const LoginButton = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <motion.div
      variants={loginVariants}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.8 }}
    >
      <Button
        buttonLabel="Admin"
        type="button"
        onClick={handleLogin}
        className="hover:bg-buttonBlueColor hover:text-white transition-all duration-300 text-md text-fontDark dark:text-fontLight py-2 px-4 rounded-full"
      />
    </motion.div>
  );
};

export default LoginButton;
