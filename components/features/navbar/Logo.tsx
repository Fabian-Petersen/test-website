type LogoProps = {
  isScrolled?: boolean;
  variant?: "navbar" | "footer";
};

const Logo = ({ isScrolled, variant }: LogoProps) => {
  const isNavbar = variant === "navbar";
  return (
    <div
      className={
        isNavbar
          ? "flex items-center logo h-full tracking-wide"
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
    </div>
  );
};

export default Logo;
