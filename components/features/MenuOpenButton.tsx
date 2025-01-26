// $ The button component is used to open and the mobile navbar menu.

// $ The useMobileContext hook is used to get the navOpen state from the context API.
import { useGlobalContext, T } from "@/app/useGlobalContext";

import useMobileMenuColorHook from "./mobileNavbar/useMobileMenuColorHook";

const MenuCloseButton = () => {
  const { menuColor } = useMobileMenuColorHook();
  // $ The ! indicates that the value will never be null or undefined.
  const { theme, setNavOpen }: T = useGlobalContext()!;

  return (
    <button
      type="button"
      className="inline-flex items-center dark:text-white text-green-500 p-2 w-10 h-10 justify-center text-sm md:hidden focus:visible dark:hover:bg-gray-700"
      onClick={() => {
        setNavOpen(true);
      }}
    >
      <svg
        viewBox="0 0 50 50"
        width="100px"
        height="100px"
        fill={theme === "light" ? "" : "white"}
        strokeWidth="1"
      >
        <path d="M 5 9 L 5 11 L 45 11 L 45 9 L 5 9 z M 5 24 L 5 26 L 45 26 L 45 24 L 5 24 z M 5 39 L 5 41 L 45 41 L 45 39 L 5 39 z" />
      </svg>
    </button>
  );
};

export default MenuCloseButton;
