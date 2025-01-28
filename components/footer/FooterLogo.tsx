import Link from "next/link";
import React from "react";

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
