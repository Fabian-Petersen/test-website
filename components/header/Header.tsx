"use client";

import React, { useState } from "react";
import MobileHeader from "../features/navbar/MobileHeader";
import MobileSidebar from "../features/navbar/MobileSidebar";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <main className="z-[2000]">
      <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <MobileHeader isOpen={isOpen} setIsOpen={setIsOpen} />
    </main>
  );
};

export default Header;
