"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Button from "@/components/features/Button";
import { Heart } from "lucide-react";
import { Tooltip } from "flowbite-react";
import useScreenSize from "@/app/customHooks/useScreenSize";

const AddTestimonialButton = () => {
  const router = useRouter();
  const isMobile = useScreenSize(740);
  const handleLogin = () => {
    router.push("/create_testimonial");
  };

  return (
    <div className="hover:cursor-pointer">
      <Tooltip content="Add testimonial" placement="bottom">
        <Button
          type="button"
          onClick={handleLogin}
          className="dark:text-white text-fontDark rounded-full"
        >
          <Heart size={isMobile ? 20 : 24} />
        </Button>
      </Tooltip>
    </div>
  );
};

export default AddTestimonialButton;
