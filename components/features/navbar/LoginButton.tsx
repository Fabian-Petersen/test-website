"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Button from "@/components/features/Button";
import { User2 } from "lucide-react";
import { motion } from "framer-motion";
import { Tooltip } from "flowbite-react";
import useScreenSize from "@/app/customHooks/useScreenSize";

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
  const isMobile = useScreenSize(740);

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <motion.div
      variants={loginVariants}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.8 }}
      className="hover:cursor-pointer"
    >
      <Tooltip content="Login" placement="bottom">
        <Button
          type="button"
          onClick={handleLogin}
          className="dark:text-white text-fontDark"
        >
          <User2 size={isMobile ? 20 : 24} />
        </Button>
      </Tooltip>
    </motion.div>
  );
};

export default LoginButton;
