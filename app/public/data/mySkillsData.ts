import skillsIconImages from "../icons/skill-icons/index";
import { v4 as uuidv4 } from "uuid";

// $ The Skills Icons Images comes from the index.ts file in the skill-icons folder
// $ The image links are imported from the index.ts file in the skill-icons folder and then used in the mySkillsData.ts file

export type SkillsDataType = {
  id: string;
  language: string;
  iconImage?: string | undefined;
  category?: string;
  className?: string;
};

const {
  html,
  css,
  javascript,
  react,
  bootstrap,
  figma,
  visualstudiocode,
  nextjs,
  github,
  typescript,
  tailwind,
  aws,
  python,
  redux,
} = skillsIconImages;

const mySkillsData: SkillsDataType[] = [
  {
    id: uuidv4(),
    language: "figma",
    iconImage: figma,
    category: "UI/UX Design",
    className: "figma",
  },
  {
    id: uuidv4(),
    language: "html",
    iconImage: html,
    category: "frontEnd",
    className: "html",
  },
  {
    id: uuidv4(),
    language: "css",
    iconImage: css,
    category: "frontEnd",
    className: "css",
  },
  {
    id: uuidv4(),
    language: "javascript",
    iconImage: javascript,
    category: "frontEnd",
    className: "javascript",
  },
  {
    id: uuidv4(),
    language: "react",
    iconImage: react,
    category: "frontEnd",
    className: "react",
  },
  {
    id: uuidv4(),
    language: "python",
    iconImage: python,
    category: "backend",
    className: "api",
  },
  {
    id: uuidv4(),
    language: "next",
    iconImage: nextjs,
    category: "frontEnd",
    className: "api",
  },
  {
    id: uuidv4(),
    language: "AWS",
    iconImage: aws,
    category: "backend",
    className: "aws",
  },
  {
    id: uuidv4(),
    language: "tailwind",
    iconImage: tailwind,
    category: "frontEnd",
    className: "api",
  },
  {
    id: uuidv4(),
    language: "redux",
    iconImage: redux,
    category: "frontEnd",
    className: "api",
  },
  {
    id: uuidv4(),
    language: "typescript",
    iconImage: typescript,
    category: "frontEnd",
    className: "typescript",
  },
];

export default mySkillsData;
