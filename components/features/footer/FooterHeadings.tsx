import React from "react";

type Props = {
  heading: string;
};

const FooterHeadings = ({ heading }: Props) => {
  return (
    <h3
      className={`text-clampFooterHeading font-bold tracking-wider ${heading === "Socials" ? "pb-0" : "pb-2"}`}
    >
      {heading}
    </h3>
  );
};

export default FooterHeadings;
