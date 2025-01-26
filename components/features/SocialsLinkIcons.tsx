// $ This component renders the social links icons on the page for desktop view
// $ The data for each link is imported from the public data folder as socialLinks.
// $ The data is mapped and rendered as a list of icons.

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "flowbite-react";
import socialLinks from "@/public/data/socialsLinkData";
import Link from "next/link";
import Image from "next/image";

// import iconSocialLinksVariants from "../../animations/iconSocialLinksAnimate";
// import { motion } from "framer-motion";

const SocialsLinkIcons = () => {
  // const [parentContainer, childContainer] = iconSocialLinksVariants;
  return (
    <div>
      <ul
        className="flex gap-4"
        // variants={parentContainer}
        // initial="initialState"
        // animate="animateState"
      >
        {socialLinks.map((link) => {
          const { id, iconImage, href, tooltip, colorClass, className } = link;
          const isGithub = id === "github";

          return (
            <Tooltip
              key={id}
              content={tooltip}
              placement="bottom"
              className={`capitalize ${colorClass}`}
            >
              <Link href={href} className="">
                <li className={`pageLinkIcons relative ${isGithub ? "" : ""}`}>
                  <Image
                    className={`w-[1.8rem] h-[1.8rem] md:w-[2.1rem] md:h-[2.1rem]`}
                    src={iconImage}
                    alt="icon"
                  />
                </li>
              </Link>
            </Tooltip>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialsLinkIcons;
