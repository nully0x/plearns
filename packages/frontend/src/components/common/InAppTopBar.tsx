import React, { useState } from "react";
import BitcoinLogo from "../assets/BitcoinLogo";
import { inAppNavBarLinks, navBarLinks } from "@/data/dummy";
import { FilledButton, GhostButton, OutlinedButton } from "../common/Button";
import PlearnSm from "./PlearnSm";
import PageLinkBar from "./PageLinkBar";

const InAppNavBar = () => {
  const [navBar] = useState(navBarLinks);
  return (
    <div className="flex w-full bg-white border-b border-b-light-neutral-4 items-center h-[100px] pt-10 px-4 xl:px-24 justify-between">
      <PlearnSm/>
      <div className="flex gap-6 ">
        {inAppNavBarLinks.map(({  text, ...rest }) => (
          <PageLinkBar key={text} text={text}  {...rest} />
        ))}
      </div>

      <div className="flex gap-4">
        <GhostButton>Login</GhostButton>
        <FilledButton>Signup</FilledButton>
      </div>
    </div>
  );
};

export default InAppNavBar;
