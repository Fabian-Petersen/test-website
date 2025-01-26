"use client";

// use the react context hook to manage the state of navOpen (true or false) and setNavOpen to change the state

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// $ Step 0: Define the types and specify the navOpen type and set it to false initially'
type MobileNavContextType = {
  navOpen: boolean;
  setNavOpen: Dispatch<SetStateAction<boolean>>;
};

// $ Step 1: Create the context
// % The ThemeContext type takes in the ThemeContext type or null
const MobileNavContext = createContext<MobileNavContextType | null>(null);

type MobileNavContextProviderProps = {
  children: ReactNode;
};

// $ Step 2: Create the provider for the context
export default function MobileNavContextProvider({
  children,
}: MobileNavContextProviderProps) {
  // Typescript will throw an error if the theme is not set to light or dark, use <'light'|'dark'>
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <MobileNavContext.Provider value={{ navOpen, setNavOpen }}>
      {children}
    </MobileNavContext.Provider>
  );
}

// $ Step 3: Export the custom hook to be used in other components
export const useMobileNavContext = () => useContext(MobileNavContext);
