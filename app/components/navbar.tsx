"use client";

import Link from "next/link";
import LightDarkButton from "./light-dark-button";

export default function Navbar() {
  const handleClick = () => {
    console.log("theme switched");
  };

  return (
    <div>
      <div>
        <Link href={"/"}>/home</Link>
        <Link href={"/about"}>/about</Link>
        <Link href={"/experience"}>/experience</Link>
        <Link href={"/playground"}>/playground</Link>
        <Link href={"/contact"}>/contact</Link>
      </div>
      <LightDarkButton onClick={handleClick} />
    </div>
  );
}
