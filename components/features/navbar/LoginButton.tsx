"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Button from "@/components/features/Button";
import { User2 } from "lucide-react";
import { Tooltip } from "flowbite-react";
import useScreenSize from "@/app/customHooks/useScreenSize";

const LoginButton = () => {
  const router = useRouter();
  const isMobile = useScreenSize(740);

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div className="hover:cursor-pointer">
      <Tooltip content="Login" placement="bottom">
        <Button
          type="button"
          onClick={handleLogin}
          className="dark:text-white text-fontDark"
        >
          <User2 size={isMobile ? 20 : 24} />
        </Button>
      </Tooltip>
    </div>
  );
};

export default LoginButton;
