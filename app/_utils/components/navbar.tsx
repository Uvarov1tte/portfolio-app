"use client";

import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { useState } from "react";
import "./navbar.css";
import Waves from "./waves/waves";
import { useTheme } from "next-themes";

export default function Navbar() {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [lines, setLines] = useState(false);
  const { theme } = useTheme();

  // toggle burger menu change
  let initiatedLines = false;
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("hidden");
    }
    setIsMenuClicked(!isMenuClicked);
    if (lines === false) {
      setLines(true);
    }
  };

  return (
    <div className="navigation">
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>

        <ThemeToggle />
      </nav>

      <div
        className={`menu grid-cols-12 grid-rows-16 gap-x-[32px] ${menu_class}`}
      >
        <Link onClick={updateMenu} className="nav-link" href={"/"}>
          /home
        </Link>
        <Link onClick={updateMenu} className="nav-link" href={"/about"}>
          /about
        </Link>
        <Link onClick={updateMenu} className="nav-link" href={"/experience"}>
          /experience
        </Link>
        <Link onClick={updateMenu} className="nav-link" href={"/playground"}>
          /playground
        </Link>
        <Link onClick={updateMenu} className="nav-link" href={"/contact"}>
          /contact
        </Link>
        <div className="nav-contact">
          <p>find me at</p>
          <p>twitter</p>
          <p>bluesky</p>
          <p>discord</p>
          <p>or just email me at email@domain.com</p>
        </div>
        {lines === true && (
          <Waves
            className="wave"
            lineColor={theme === "light" ? "#222222" : "#f6f6f6"}
            backgroundColor="transparent"
            waveSpeedX={0.07}
            waveSpeedY={0.01}
            waveAmpX={30}
            waveAmpY={0}
            friction={0.72}
            tension={0.02}
            maxCursorMove={10}
            xGap={40}
            yGap={10}
          />
        )}
      </div>
    </div>
  );
}
