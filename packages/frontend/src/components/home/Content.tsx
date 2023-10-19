import React from "react";
import { FilledButton } from "../common/Button";
import ArrowCurveRight from "../assets/ArrowCurveRight";
import ArrowWhite from "../assets/ArrowWhite";

const Content = () => {
  return (
    <div className="px-6 mt-[4.4rem] w-full mx-auto max-w-[1000px] relative">
        <ArrowCurveRight className="absolute" />
        <ArrowCurveRight className="absolute rotate-180 bottom-0 right-0" />
      <div className="flex flex-col mt-4 gap-6 w-full mx-auto max-w-[838px]">
        <div className="flex flex-col gap-2">
          <p className="text-[64px] leading-[76.8px] text-center text-primary-dark_green font-semibold">
            Task rewards - <span className="text-primary-gray">Complete Tasks, Get Paid</span>
          </p>
          <p className="text-2xl leading-[43.2px] text-center">
            Earn Bitcoin by Completing a Wide Range of Tasks, From Recycling to
            a World of Exciting Opportunities, All in One Platform
          </p>
        </div>
        {/* Button */}
        <div className=" flex w-full justify-center">
        <FilledButton RightIcon={ArrowWhite} className="max-w-[140px] w-full">
            Get Started
        </FilledButton>
        </div>
      
      </div>
    </div>
  );
};

export default Content;
