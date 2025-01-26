import { motion } from "framer-motion";

type LogoProps = {
  isScrolled?: boolean;
  variant?: "navbar" | "footer";
};

// $ Logo Animation
const logoVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
  },
};

const Logo = ({ isScrolled, variant }: LogoProps) => {
  const isNavbar = variant === "navbar";
  return (
    <motion.div
      variants={logoVariants}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={
        isNavbar
          ? "flex items-center logo ml-[3rem] h-full tracking-wide"
          : " flex pt-4 w-full h-full"
      }
    >
      <p className="dark:text-white text-gray-700 font-greatvibes tracking-wider text-clampLogo">
        <span
          className={`font-extrabold text-primaryColor ${
            isScrolled && "text-[clamp(1.5rem, 3vw,2rem)]"
          }
`}
        >
          P
        </span>
        ortfolio
        <span className="text-primaryColor">.</span>
        <span>.</span>
        <span>.</span>
      </p>
    </motion.div>
  );
};

export default Logo;
