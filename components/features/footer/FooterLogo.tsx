import React from "react";

type Props = {};

const FooterLogo = (props: Props) => {
  return (
    <div className="md:flex justify-center">
      <a
        href="/#landing"
        className="hidden sm:block text-clampFooterLogoText font-semibold tracking-widest"
      >
        Portfolio
        <span className="text-primaryColor">.</span>
      </a>
    </div>
  );
};

export default FooterLogo;
