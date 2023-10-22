import { usePathname } from "next/navigation";
import React, { SVGProps } from "react";

const PageLinkBar = ({
  text,
  link,
  ActiveIcon,
InActiveIcon
}: {
  text: string;
  link: string;
  ActiveIcon: any;
  InActiveIcon: any;
}) => {
  const pathname = usePathname();
  const isActive = pathname === link ? true : false;
  return (
    <a
      href={link}
      className={`${
        isActive ? "border-b border-primary-green" : ""
      } font-bold flex  items-center  text-base`}
    >
        {isActive?<ActiveIcon/>:<InActiveIcon/>}
      <p
        className={`${
          isActive ? "text-primary-green" : "text-[#404040]"
        } leading-[57px]`}
      >
        {text}
      </p>
    </a>
  );
};

export default PageLinkBar;
