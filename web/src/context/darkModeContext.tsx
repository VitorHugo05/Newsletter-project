"use client";

import { ReactNode, createContext, useState } from "react";

interface DarkModeContextProps {
  isDarkMode: boolean;
  togleDarkMode: () => void;
}

interface DarkModeProps {
  children: ReactNode;
}

export const DarkModeContext = createContext({} as DarkModeContextProps);

export function DarkMode(props: DarkModeProps) {
  const [isDarkMode, setDarkMode] = useState(true);

  function togleDarkMode() {
    if (!isDarkMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }

  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode,
        togleDarkMode,
      }}
    >
      {props.children}
    </DarkModeContext.Provider>
  );
}
