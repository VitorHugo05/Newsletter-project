"use client";
import { useContext } from "react";

import { DarkModeSwitch } from "react-toggle-dark-mode";
import NavBar from "@/components/nav/navBar";
import { DarkModeContext } from "@/context/darkModeContext";

export default function Notice() {
  const { isDarkMode, togleDarkMode } = useContext(DarkModeContext);
  return (
    <main
      className={`${
        isDarkMode ? "bg-gray-900" : "bg-zinc-200"
      } min-w-screen relative flex min-h-screen flex-col items-center justify-center space-y-4 transition-colors `}
    >
      <NavBar
        style="bg-gray-800 border-b border-white/10"
        text="Veja seus dados"
        route="/profile"
      >
        <div className="flex items-center justify-center gap-6">
          <button className="text-lg transition-colors hover:cursor-pointer hover:border-b hover:border-gray-200 hover:text-gray-200">
            Relevantes
          </button>
          <button className="text-lg transition-colors hover:cursor-pointer hover:border-b hover:border-gray-200 hover:text-gray-200">
            Recentes
          </button>
        </div>
      </NavBar>

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
