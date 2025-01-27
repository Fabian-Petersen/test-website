// $ This component renders the headings (UI/UX Design, FrontEnd etc) for the skills section from the skillsdata.ts file

import * as React from "react";

type AboutSkillsHeadingProps = {
  category: string | undefined;
};

const AboutSkillsHeading = (props: AboutSkillsHeadingProps) => {
  const { category } = props;

  return (
    <div className="py-4 tracking-wider">
      <h3
        className="uppercase text-clampH3 dark:text-fontLight text-fontDark"
        // custom={id}
        // variants={skillsHeading}
        // initial="initialState"
        // animate="animateState"
      >
        {category}
      </h3>
    </div>
  );
};

export default AboutSkillsHeading;
