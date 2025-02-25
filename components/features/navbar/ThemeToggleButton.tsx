// $ This component manages the theme of the website, dark theme or light theme.
// $ To use this the useSetTheme hook must be imported and used in the component to manage the theme state.
// $ The icons for the theme toggle are imported from the component ThemeToggleIcon.

"use client";
import useSetTheme from "@/app/customHooks/useSetDarkTheme";
import { useGlobalContext } from "@/app/useGlobalContext";
import { Tooltip } from "flowbite-react";
import { Moon, Sun } from "lucide-react";
import Button from "@/components/features/Button";
import useScreenSize from "@/app/customHooks/useScreenSize";

const ThemeToggleButton = () => {
  const { toggleDarkTheme } = useSetTheme();
  const { isDarkTheme } = useGlobalContext()!;
  const isMobile = useScreenSize(740);

  const handleClick = () => {
    toggleDarkTheme();
  };

  return (
    <div className="hover:cursor-pointer">
      {isDarkTheme ? (
        <Tooltip content="Dark" placement="bottom">
          <Button
            type="button"
            onClick={handleClick}
            className="dark:text-white text-fontDark"
          >
            <Moon size={isMobile ? 20 : 24} />
          </Button>
        </Tooltip>
      ) : (
        <Tooltip content="Light" placement="bottom">
          <Button
            type="button"
            onClick={handleClick}
            className="dark:text-white text-fontDark"
          >
            <Sun size={isMobile ? 20 : 24} />
          </Button>
        </Tooltip>
      )}
    </div>
  );
};

export default ThemeToggleButton;
