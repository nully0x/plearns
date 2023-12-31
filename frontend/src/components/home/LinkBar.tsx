import { usePathname } from 'next/navigation'
import React from "react";

const LinkBar = ({ text, link }: { text: string; link: string }) => {
  const pathname = usePathname();
  const isActive = pathname === link ? true : false;
  return (
    <div
      className={`${
        isActive ? "border-b border-primary-green" : ""
      } font-semibold flex flex-col  text-base`}
    >
      <a
        href={link}
        className={`${isActive ? "text-primary-green" : "text-[#404040]"} leading-[57px]`}
      >
        {text}
      </a>
    </div>
  );
};

export default LinkBar;
