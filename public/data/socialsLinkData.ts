// npm install react-icons --save
import facebook from "@/public/icons/icons8-facebook.svg";
import twitter from "@/public/icons/icons8-twitter.svg";
import linkedin from "@/public/icons/icons8-linkedin.svg";
import github from "@/public/icons/icons8-github.svg";
// import githubIcon from "../icons/githubIcon";
const socialLinks = [
  {
    id: "facebook",
    href: "facebook",
    tooltip: "facebook",
    iconImage: facebook,
    color: "#3b5998",
    colorClass: "facebookColor",
    animationClass: "animate-facebookOpenAnimation",
    animationCloseClass: "animate-facebookCloseAnimation socialIconStyles",
    className: "",
  },
  {
    id: "twitter",
    href: "/twitter",
    tooltip: "twitter",
    iconImage: twitter,
    color: "#1da1f2",
    colorClass: "twitterColor",
    animationClass: "animate-twitterOpenAnimation",
    animationCloseClass: "animate-twitterCloseAnimation socialIconStyles",
    className: "",
  },
  {
    id: "linkedin",
    href: "/linkedin",
    tooltip: "linkedin",
    iconImage: linkedin,
    color: "#0077b5",
    colorClass: "linkedinColor",
    animationClass: "animate-linkedInOpenAnimation",
    animationCloseClass: "animate-linkedInCloseAnimation socialIconStyles",
    className: "",
  },
  {
    id: "github",
    href: "/github",
    tooltip: "github",
    iconImage: github,
    color: "#333",
    colorClass: "githubColor",
    animationClass: "animate-gitHubOpenAnimation",
    animationCloseClass: "animate-gitHubCloseAnimation socialIconStyles",
    className:
      "relative before:content-[''] before:absolute before:inset-0 before:dark:bg-white before:rounded-full dark:before:block",
  },
];

export default socialLinks;
