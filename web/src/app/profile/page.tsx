"use client";

import NavBar from "@/components/nav/navBar";
import { DarkModeContext } from "@/context/darkModeContext";
import { useContext } from "react";

import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Profile() {
  const { isDarkMode, togleDarkMode } = useContext(DarkModeContext);
  return (
    <main
      className={`${
        isDarkMode ? "bg-gray-900" : "bg-zinc-200"
      } min-w-screen relative flex min-h-screen flex-col items-center justify-center space-y-4 transition-colors `}
    >
      <NavBar
        style="bg-gray-800 border-b border-white/10"
        text="Mais Notícias"
        route="/notices"
      />

      <div className="">
        <div className="absolute bottom-0 right-0 ">
          <DarkModeSwitch
            style={{
              marginBottom: "2rem",
              marginRight: "2rem",
            }}
            checked={isDarkMode}
            onChange={togleDarkMode}
            size={60}
          />
        </div>
      </div>
    </main>
  );
}
