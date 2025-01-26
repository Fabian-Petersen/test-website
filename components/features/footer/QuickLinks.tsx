import React from "react";
import pageLinkData, { PageLinksTypes } from "@/data/pageLinkData";

type QuickLinksProps = {
  className?: string;
};

const QuickLinks = ({ className = "" }: QuickLinksProps) => {
  return (
    <article className={`text-fontDark dark:text-fontLight`}>
      <ul className={`${className} hover:cursor-pointer`}>
        {pageLinkData.map((link) => (
          <li key={link.id}>
            <a href={`/#${link.url}`}>{link.name}</a>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default QuickLinks;
