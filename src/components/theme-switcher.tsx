"use client";

import { Theme } from "@/types";
import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

interface ThemeSwitchProps {
  theme: Theme;
}

export default function ThemeSwitcher({ theme }: ThemeSwitchProps) {
  const [_theme, setTheme] = useState<Theme>(theme);

  const toogleTheme = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.toggle(Theme.dark);
    if (root.classList.contains(Theme.dark)) {
      setTheme(Theme.dark);
      document.cookie = `theme=${Theme.dark}`;
    } else {
      setTheme(Theme.light);
      document.cookie = `theme=${Theme.light}`;
    }
  };

  return (
    <button onClick={toogleTheme}>
      {_theme === Theme.dark ? (
        <FiSun className="size-8 text-yellow-500" />
      ) : (
        <FiMoon className="size-8" />
      )}
    </button>
  );
}
