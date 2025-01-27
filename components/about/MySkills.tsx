// import { } from "framer-motion;
import PageSubHeading from "../PageSubHeading";
import SkillCardGallery from "./SkillCardGallery";

const MySkills = () => {
  return (
    <section className="flex flex-col gap-6 text-gray-600 dark:text-white">
      <PageSubHeading title="my skills" size="h2" className="capitalize" />
      <SkillCardGallery />
    </section>
  );
};

export default MySkills;
