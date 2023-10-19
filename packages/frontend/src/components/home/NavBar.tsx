import React, { useState } from "react";
import BitcoinLogo from "../assets/BitcoinLogo";
import { navBarLinks } from "@/data/dummy";
import LinkBar from "./LinkBar";
import { FilledButton, GhostButton, OutlinedButton } from "../common/Button";

const NavBar = () => {
  const [navBar] = useState(navBarLinks);
  return (
    <div className="flex w-full bg-white border-b border-b-light-neutral-4 items-center h-[100px] pt-10 px-4 xl:px-24 justify-between">
      <BitcoinLogo />
      <div className="flex gap-6 ">
        {navBar.map(({ link, text }) => (
          <LinkBar key={text} text={text} link={link} />
        ))}
      </div>

      <div className="flex gap-4">
        <GhostButton>Login</GhostButton>
        <FilledButton>Signup</FilledButton>
      </div>
    </div>
  );
};

export default NavBar;
