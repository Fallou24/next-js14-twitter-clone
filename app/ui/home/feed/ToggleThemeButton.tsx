"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ToggleThemeButton() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      {theme === "light" ? (
        <button onClick={() => setTheme("dark")}>
          <Sun />
        </button>
      ) : (
        <button onClick={()=>setTheme("light")}>
          <Moon />
        </button>
      )}
    </>
  );
}
