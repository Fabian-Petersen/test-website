// $ This component manages the theme of the website, dark theme or light theme.
// $ To use this the useSetTheme hook must be imported and used in the component to manage the theme state.
// $ The icons for the theme toggle are imported from the component ThemeToggleIcon.

"use client";
import Icons from "@/public/icons/icons";
import useSetTheme from "@/app/customHooks/useSetDarkTheme";
import ThemeToggleIcon from "./ThemeToggleIcon";
import { useGlobalContext } from "@/app/useGlobalContext";

const ThemeToggleMenu = () => {
  const { toggleDarkTheme } = useSetTheme();
  const { isDarkTheme } = useGlobalContext()!;
  const { faMoon, faSun } = Icons;

  const handleClick = () => {
    toggleDarkTheme();
  };

  return (
    <div
      className="text-buttonBlueColor w-[2rem] h-[2rem]
        flex items-center justify-center rounded-full border-2 border-blue-500 bg-white dark:bg-white hover:cursor-pointer relative"
    >
      {isDarkTheme ? (
        <ThemeToggleIcon
          handleClick={handleClick}
          icon={faMoon}
          placement="bottom"
          content="Dark"
        />
      ) : (
        <ThemeToggleIcon
          handleClick={handleClick}
          icon={faSun}
          content="Light"
          placement="bottom"
        />
      )}
    </div>
  );
};

export default ThemeToggleMenu;
