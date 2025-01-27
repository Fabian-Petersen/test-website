"use client";

import React from "react";
import { useRouter } from "next/navigation";

type LoginButtonProps = {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
};

// $ Login Button Animation
const loginVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
  },
};

const LoginButton = ({ children, mode = "redirect" }: LoginButtonProps) => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  if (mode === "modal") {
    return <span>TODO:Implement Modal</span>;
  }

  return (
    <span className="cursor-pointer" onClick={handleLogin}>
      {children}
    </span>
  );
};
export default LoginButton;
