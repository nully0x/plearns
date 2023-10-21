import Link from "next/link";
import React, { useState } from "react";
import ArrowBlackLeft from "../assets/ArrowBlack";

const TopBar = () => {
  return (
    <div className="flex w-full bg-white border-b border-b-light-neutral-4 items-center h-[100px] pt-10 px-4 xl:px-24 justify-between">
      <Link href={"/"}>
        <div className="flex items-center gap-2">
          <ArrowBlackLeft />
          <p className="text-sm text-primary-gray font-medium">Back to home</p>
        </div>
      </Link>
    </div>
  );
};

export default TopBar;
