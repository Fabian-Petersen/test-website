"use client";

// $ This component is the mobile navbar menu button that is displayed on mobile devices ONLY.
// $ The button controls the opening and closing of the navbar menu items with the navlinks.

import pageLinkData from "@/public/data/pageLinkData";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";

import { useThemeContext } from "@/app/ContextAPI_Hooks/usethemeContext";
import MenuCloseButton from "../MenuCloseButton";

const MenuButton = () => {
  // $ Get the theme from the context API to change the button color whith the theme changes.
  const { theme } = useThemeContext();

  // $ Initialise the flowbite library to enable the dropdown menu in the navbar to open and close.
  useEffect(() => {
    initFlowbite();
  }, []);

  // $ Define the interface for the pageLinkData array.
  type PageLink = {
    id: number;
    href: string;
    icon: any;
    name: string;
  };

  return (
    <div
    // className={`${
    //   theme === "light" ? "text-bgDark" : "text-white"
    // } flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse`}
    >
      <button
        data-collapse-toggle="navbar-sticky"
        type="button"
        className={`inline-flex items-center p-2 w-10 h-10 justify-center text:text-gray-500 rounded-lg md:hidden focus:outline-none dark:hover:bg-gray-700 dark:focus:ring-gray-600`}
        aria-controls="navbar-sticky"
        aria-expanded="false"
        onClick={() => {}}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <MenuCloseButton />

      {/* // $ This is the menu items that are displayed when the menu button is clicked. */}
      <div
        className="absolute top-[var(--navbarHeight)] left-0 right-0 w-full items-center justify-between hidden md:flex md:order-1 bg-gray-500"
        id="navbar-sticky"
      >
        <ul className="flex flex-col p-4 md:p-0 mt-4 text-center font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          {pageLinkData.map((link) => {
            const { id, url, name } = link;
            return (
              <li key={id}>
                <a
                  href={url}
                  className="capitalize block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MenuButton;
