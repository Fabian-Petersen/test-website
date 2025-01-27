// $ This hook takes in the skills data and return the unique list of categories
// $ Hook Output : uniqueCategories === ['UI/UX Design', 'frontEnd', 'backend', 'other']
// $ The returned value is used as the headings for the languages the developer is familiar with
// $ Exapmple : Frontend (Heading) --> HTML, CSS, JavaScript, React, TypeScript, Tailwind CSS etc.

import mySkillsData from "../../public/data/mySkillsData";

const useCategoriesHeadingsHook = () => {
  const uniqueCategories = [
    ...new Set(mySkillsData.map((item) => item.category)),
  ];
  return { uniqueCategories };
};

export default useCategoriesHeadingsHook;
