// $ This component only renders the skills icons from the skillsdata.ts file

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export type SkillCardProps = {
  image?: string | StaticImport;
  name?: string | undefined;
  language?: string | undefined;
};

const SkillCard = ({ image, name }: SkillCardProps) => {
  return (
    <div className="flex gap-8 justify-center items-center w-full p-4 bg-slate-100 dark:bg-gray-800 dark:text-white rounded-[1rem] shadow-md shadow-slate-300 text-fontDark dark:shadow-fontDark hover:scale-[102%] hover:cursor-pointer">
      <div className="flex flex-col gap-4 justify-center items-center">
        <Image
          className="size-8 sm:size-8 lg:size-10 xl:size-12"
          src={image || "/default-image.png"}
          alt="html"
        />
        <p
          className={`${
            name == "html" || name == "css" ? "uppercase" : "capitalize"
          } text-clampBodyText`}
        >
          {name}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
