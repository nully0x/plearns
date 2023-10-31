import { howItWorksSteps } from "@/data/dummy";
import React, { useState } from "react";
import { FilledButton } from "../common/Button";
import ArrowWhite from "../assets/ArrowWhite";

const HowItWorks = () => {
  const [howItWorks] = useState(howItWorksSteps);
  return (
    <div className="bg-hero py-[6.125rem] flex justify-center bg-cover bg-no-repeat">
      <div className="max-w-[1014px] flex flex-col items-center w-full">
        <div className="flex items-center gap-x-6">
          <div className="w-[113px] h-[1px] bg-light-neutral-7" />
          <h5 className="text-lg font-medium text-primary-gray">
            HOW IT WORKS
          </h5>
          <div className="w-[113px] h-[1px] bg-light-neutral-7" />
        </div>

        <div className="flex flex-col mt-10 gap-8">
          {howItWorks.map((work) => (
            <div className="flex flex-col items-center gap-4">
              <img className="w-[4rem]" src={work.stepSVG} />
              <div className="flex gap-2 text-[2rem] tracking-[0.01rem] flex-col text-center">
                <p className={`${work?.invert ? "font-bold" : "font-normal"}`}>
                  {work.title}
                </p>
                <p className={`${!work?.invert ? "font-bold" : "font-normal"}`}>
                  {work.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/*  */}
        <div className="flex flex-col mt-14 items-center gap-4">
        <FilledButton className="max-w-[max-content] rounded-[4.5rem]"   RightIcon={ArrowWhite}>
        Sign up now to get started
          </FilledButton>
          <p>It is free, and takes less than a minute</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
