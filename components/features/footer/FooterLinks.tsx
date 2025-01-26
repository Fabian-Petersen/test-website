import React from "react";

type FooterLinkProps = {
  className?: string; // $ optional if not always passed
  numberOfItems?: number;
  data: { id?: string; name?: string; url?: string }[];
};

const ProjectFooterLinks: React.FC<FooterLinkProps> = ({
  className = "", // $ Default to an empty string if no className is passed
  data = [],
  numberOfItems = data.length,
}) => {
  return (
    <article>
      <ul
        className={`${className} hover:cursor-pointer flex flex-col gap-4 sm:gap-4`}
      >
        {data.slice(0, numberOfItems).map((item) => (
          <li key={item.id}>
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ProjectFooterLinks;
