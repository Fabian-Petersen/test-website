"use client";

import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size="lg"
        className="w-full border-none bg-red-400 hover:bg-red-300"
        variant="outline"
        onClick={() => {}}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        className="w-full border-none dark:bg-blue-500 dark:hover:bg-blue-400"
        variant="outline"
        onClick={() => {}}
      >
        <FaFacebook className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Social;
