import react, { useState, useEffect } from "react";

// Change the Navbar bg to white when scrolled

const useIsScrolled = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return { isScrolled };
};

export default useIsScrolled;
