import { picturesLink } from "@/data/dummy";
import React, { useState } from "react";

const PictureGrid = () => {
  const [allPictureLinks] = useState(picturesLink);
  return (
    <div className="grid grid-cols-4 items-stretch place-items-center align-middle px-[6.25rem] gap-6 mt-20 max-w-[1240px] w-full mx-auto">
      {allPictureLinks.map((picture) => (
        <img className={`object-cover ${picture.className}`} key={picture.link} src={picture.link} alt={picture.alt} />
      ))}
    </div>
  );
};

export default PictureGrid;
