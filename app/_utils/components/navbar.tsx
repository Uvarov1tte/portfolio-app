"use client";

import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  return (
    <div>
      <div>
        <Link href={"/"}>/home</Link>
        <Link href={"/about"}>/about</Link>
        <Link href={"/experience"}>/experience</Link>
        <Link href={"/playground"}>/playground</Link>
        <Link href={"/contact"}>/contact</Link>
      </div>
      <ThemeToggle />
    </div>
  );
}
