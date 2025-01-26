import React from "react";

import { useMobileNavContext } from "@/app/ContextAPI_Hooks/useMobileNavbarContext";
import useMobileMenuColorHook from "@/components/features/mobileNavbar/useMobileMenuColorHook";

const MenuCloseButton = () => {
  const { setNavOpen } = useMobileNavContext()!;
  const { menuColor } = useMobileMenuColorHook();
  return (
    <button
      data-collapse-toggle="navbar-solid-bg"
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      onClick={() => {
        setNavOpen(false);
      }}
    >
      <svg viewBox="0,0,256,256" width="128px" height="128px">
        <g
          fill={menuColor}
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
        >
          <g transform="scale(3.55556,3.55556)">
            <path d="M19,15c-1.023,0 -2.04812,0.39087 -2.82812,1.17188c-1.562,1.562 -1.562,4.09425 0,5.65625l14.17188,14.17188l-14.17187,14.17188c-1.562,1.562 -1.562,4.09425 0,5.65625c0.78,0.78 1.80513,1.17188 2.82813,1.17188c1.023,0 2.04812,-0.39088 2.82813,-1.17187l14.17188,-14.17187l14.17188,14.17188c1.56,1.562 4.09525,1.562 5.65625,0c1.563,-1.563 1.563,-4.09325 0,-5.65625l-14.17187,-14.17187l14.17188,-14.17187c1.562,-1.562 1.562,-4.09425 0,-5.65625c-1.56,-1.561 -4.09625,-1.562 -5.65625,0l-14.17187,14.17188l-14.17187,-14.17187c-0.78,-0.78 -1.80513,-1.17187 -2.82812,-1.17187z"></path>
          </g>
        </g>
      </svg>
    </button>
  );
};

export default MenuCloseButton;
