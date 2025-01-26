//? npm i --save @fortawesome/free-brands-svg-icons
import {
  faHtml5,
  faBootstrap,
  faCss3,
  faSass,
  faReact,
  faJs,
} from "@fortawesome/free-brands-svg-icons";

// npm install react-icons --save
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { PiGithubLogoFill } from "react-icons/pi";

const brandIcons = {
  facebook: FaFacebookF,
  twitter: FaTwitter,
  linkedin: GrLinkedinOption,
  github: PiGithubLogoFill,
  html: faHtml5,
  bootstrap: faBootstrap,
  css3: faCss3,
  sass: faSass,
  react: faReact,
  javascript: faJs,
};

export default brandIcons;
