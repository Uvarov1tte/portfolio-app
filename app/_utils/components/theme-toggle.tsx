"use client";

import { useTheme } from "next-themes";
import { LuSun, LuMoon } from "react-icons/lu";
import { IconContext } from "react-icons";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={handleClick}>
      {theme === "light" ? (
        <LuSun className="h-5 w-5 rotate-0 scale-100"></LuSun>
      ) : (
        <LuMoon className="h-5 w-5 rotate-0 scale-100"></LuMoon>
      )}
    </button>
  );
}
