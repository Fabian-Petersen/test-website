"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import useIsMobile from "@/app/customHooks/useScreenSize";

type ButtonProps = {
  className: string;
};

const CTAButton = ({ className }: ButtonProps) => {
  const isMobile = useIsMobile(640);
  const handleClick = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      variant="contact"
      className={className}
      onClick={handleClick}
      size={isMobile ? "sm" : "md"}
    >
      <Mail className="mr-2" />
      Contact Me
    </Button>
  );
};

export default CTAButton;
