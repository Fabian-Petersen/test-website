import React from "react";
import Link from "next/link";

const FooterLogo = () => {
  return (
    <div className="md:flex justify-center">
      <Link
        href="/#landing"
        className="hidden sm:block text-clampFooterLogoText font-semibold tracking-widest"
      >
        Portfolio
        <span className="text-primaryColor">.</span>
      </Link>
    </div>
  );
};

export default FooterLogo;
