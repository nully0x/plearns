"use client";

import AboutUs from "@/components/home/AboutUs";
import Content from "@/components/home/Content";
import Footer from "@/components/home/Footer";
import HowItWorks from "@/components/home/HowItWorks";
import NavBar from "@/components/home/NavBar";
import PictureGrid from "@/components/home/PictureGrid";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="bg-hero bg-cover bg-no-repeat w-full ">
        <NavBar />
        <Content />
        <PictureGrid />
      </div>
      <AboutUs />
      <HowItWorks />
      <Footer />
    </div>
  );
}
