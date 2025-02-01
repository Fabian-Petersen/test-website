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
          const { id, iconImage, href, tooltip, colorClass } = link;
          const isGithub = id === "github";

          return (
            <Tooltip
              key={id}
              content={tooltip}
              placement="bottom"
              className={`capitalize ${colorClass}`}
            >
              <Link href={href} className="">
                <li
                  className={`pageLinkIcons relative sm:size-[2.5rem] size-[3rem] ${
                    isGithub ? "" : ""
                  }`}
                >
                  <Image src={iconImage} alt="icon" />
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
