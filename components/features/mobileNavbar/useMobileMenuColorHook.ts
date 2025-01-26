// $ This hook manages the color of the mobile menu icon
import { useThemeContext } from "@/app/ContextAPI_Hooks/usethemeContext";

const useMobileMenuColorHook = () => {
  const { theme } = useThemeContext();

  const menuColor = theme === "dark" ? "#fff" : "#000000";

  return { menuColor };
};

export default useMobileMenuColorHook;
