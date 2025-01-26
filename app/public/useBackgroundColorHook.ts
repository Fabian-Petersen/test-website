import { useThemeContext } from "@/app/ContextAPI_Hooks/usethemeContext";

const useBackgroundColorHook = () => {
  const { theme } = useThemeContext();
  // $ Variables for the SVG color to make it easier to update uin the url
  const fillColor =
    theme === "dark" ? "rgba(5, 15, 26, 1)" : "rgba(239, 245, 245, 1)";

  const strokeColor =
    theme === "light" ? "rgba(5, 15, 26, 0.1)" : "rgba(239, 245, 245, 0.1)";

  return { fillColor, strokeColor };
};

export default useBackgroundColorHook;
