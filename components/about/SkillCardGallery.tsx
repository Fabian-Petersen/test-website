import React from "react";
import AboutSkillsHeading from "./AboutSkillsHeading";
import mySkillsData from "@/public/data/mySkillsData";
import SkillCard from "./SkillCard";

// $ Hook which returns the unique list of categories in the mySkillsData array
import useCategoriesHeadingsHook from "./useCategoriesHeadingsHook";

const SkillCardGallery = () => {
  // $ The uniqueCategories array is destructured from the returned object for the headings
  const { uniqueCategories } = useCategoriesHeadingsHook();
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      {uniqueCategories.map((category, index) => (
        <div className="h-auto" key={index}>
          <AboutSkillsHeading category={category} />
          <div className="grid grid-cols-skillsGallery gap-4 place-items-start">
            {mySkillsData
              .filter((item) => item.category === category)
              .map(({ id, language, iconImage }) => (
                <SkillCard key={id} name={language} image={iconImage} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCardGallery;
