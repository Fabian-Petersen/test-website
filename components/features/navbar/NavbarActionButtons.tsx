import React from "react";
import LoginButton from "./LoginButton";
import AddTestimonialButton from "./AddTestimonialButton";
import ThemeToggleButton from "@/components/features/navbar/ThemeToggleButton";

const NavbarActionButtons = () => {
  return (
    <div className="flex sm:gap-6 gap-4 justify-end items-center">
      <LoginButton />
      <AddTestimonialButton />
      <ThemeToggleButton />
    </div>
  );
};

export default NavbarActionButtons;
