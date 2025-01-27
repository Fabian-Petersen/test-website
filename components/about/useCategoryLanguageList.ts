// $ This hook takes in the skills data and return the unique list of languages
// $ Hook Output : filteredLanguageList === ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS']
// $ The returned value is used as the subheadings for skills card
// $ Exapmple : Frontend (Heading) --> each will be a subheading HTML, CSS, JavaScript, React, TypeScript, Tailwind CSS etc.

import mySkillsData from "../../public/data/mySkillsData";
import useSingleCategoriesHook from "./useCategoriesHeadingsHook";

const useCategoryLanguageList = () => {
  const { uniqueCategories } = useSingleCategoriesHook();

  // Accumulate the filtered language lists
  const languageLists = uniqueCategories.map((category) => {
    return {
      category,
      filteredLanguageList: mySkillsData
        .filter((item) => item.category === category)
        .flatMap((item) => item.language),
    };
  });

  // Extract unique languages from the accumulated lists
  const uniqueLanguages = Array.from(
    new Set(languageLists.flatMap((item) => item.filteredLanguageList))
  );

  return uniqueLanguages;
};

export default useCategoryLanguageList;
