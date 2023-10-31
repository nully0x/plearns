import Image from "next/image";
import React from "react";
import { FilledButton } from "../common/Button";
import ArrowWhite from "../assets/ArrowWhite";

const AboutUs = () => {
  return (
    <div className="flex flex-col pt-[6.25rem] bg-light-neutral-3">
      <div className="bg-container pb-[6.125rem]">
        <div className="flex items-center gap-x-6">
          <div className="w-[113px] h-[1px] bg-light-neutral-7" />
          <h5 className="text-lg font-medium text-primary-gray">ABOUT US</h5>
        </div>
        {/* Stories about */}
        <div className="flex mt-[3.125rem] items-stretch gap-6">
          <div className="max-w-[444px] min-w-[444px] w-full">
            <h4 className="text-5xl font-medium leading-[120%] tracking-[0.1px]">
              At PLEarn, Our dream is a world where everyone can do good things
              and get rewarded for it.
            </h4>
          </div>
          <div className="min-w-[5px]   bg-light-neutral-4" />
          <div className="text-2xl font-normal">
            <p>
              Our main goal is to connect folks with meaningful tasks, starting
              with waste management. We're on a mission to promote proper waste
              disposal, recycling, and taking care of the environment. With
              PlEarn, we want to bring together a global community of people who
              care
            </p>
            <p className="mt-10">
              We picked waste management as our first mission because it's a big
              global problem that affects us all. Plastics and other materials
              that don't break down are harming our oceans, and landfills are
              filling up. By focusing on waste management, we hope to make a
              difference and show how important it is to handle waste properly.
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex">
        <div className="max-w-[50%] w-full">
          <img src="/images/side-dashboard.png" />
        </div>
        <div className="flex pb-[6.29rem] flex-col gap-4 max-w-[533px] mt-[7rem]  w-full">
          <div className="flex items-center gap-x-6">
            <div className="w-[113px] h-[1px] bg-light-neutral-7" />
            <h5 className="text-lg font-medium text-primary-gray">OUR TASK</h5>
          </div>
          <div className="max-w-[444px]  w-full ">
            <h4 className="text-5xl text-primary-gray_body font-semibold leading-[120%] tracking-[0.1px]">
              Turn waste into wealth by recycling
            </h4>
          </div>
          <p className="text-[2rem] font-normal tracking-[0.1px] text-primary-gray_body">
            By participating in PlEarn waste management task, you can help
            reduce waste, promote recycling, and contribute to a cleaner
            environment
          </p>
          <FilledButton className="max-w-[max-content]"   RightIcon={ArrowWhite}>
          Start recycling waste now
          </FilledButton>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
