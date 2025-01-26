// { id: uuidv4()https://fabian-portfolio.netlify.app/", name: "Home" }
import { IconBaseProps } from "react-icons/lib";
import navIcons from "../icons/navIcons";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
const { house, user, clipboard, phone, comment } = navIcons;
import { v4 as uuidv4 } from "uuid";

export type PageLinksTypes = {
  id: string;
  url: string;
  name: string;
  icon: IconDefinition;
  tooltip_content: string;
};

const pageLinkData: PageLinksTypes[] = [
  {
    id: uuidv4(),
    url: "/#landing",
    name: "home",
    icon: house,
    tooltip_content: "home",
  },
  {
    id: uuidv4(),
    url: "/#about",
    name: "about",
    icon: user,
    tooltip_content: "about",
  },
  {
    id: uuidv4(),
    url: "/#projects",
    name: "projects",
    icon: clipboard,
    tooltip_content: "projects",
  },
  {
    id: uuidv4(),
    url: "/#testimonials",
    name: "testimonials",
    icon: comment,
    tooltip_content: "testimonials",
  },
  {
    id: uuidv4(),
    url: "/#contact",
    name: "contact",
    icon: phone,
    tooltip_content: "contact",
  },
];

export default pageLinkData;
