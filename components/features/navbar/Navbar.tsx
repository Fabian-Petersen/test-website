"use client";

import Logo from "./Logo";
import useIsScrolled from "@/app/customHooks/useIsScrolled";
import HeaderLinks from "./HeaderLinks";
import NavbarProgressBar from "./NavbarProgressBar";
import NavbarActionButtons from "./NavbarActionButtons";

const Navbar = () => {
  const { isScrolled } = useIsScrolled();
  return (
    <>
      <nav
        className={`${
          isScrolled
            ? "fixed top-0 h-[var(--navbarHeight)] left-0 w-full z-[1000] py-4 md:flex md:items-center border-opacity-50 dark:border-opacity-5 bg-white dark:bg-navbarDark shadow-md bg-opacity-100 transition-all duration-300 ease-in "
            : "fixed bg-opacity-0 top-0 left-0 w-full z-[2000] md:flex md:items-center transition-all py-4"
        }`}
      >
        <div className="flex w-full items-center justify-between px-10">
          <Logo isScrolled={isScrolled} variant="navbar" />
          <HeaderLinks />
          <NavbarActionButtons />
        </div>
      </nav>
      <NavbarProgressBar className="justify-end z-[1000]" />
    </>
  );
};
export default Navbar;
