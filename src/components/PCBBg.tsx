import React from 'react';
import pcbLeft from "../assets/workshop/pcb/left.svg";
import pcbRight from "../assets/workshop/pcb/right.svg";

const PCBBg: React.FC = () => {
  return (
    <div className="relative mt-16">
      <div className="absolute inset-0 -z-10 w-full">
        <img 
            src={pcbLeft}
            className="absolute top-0 mobile:left-[-10rem] desktop:left-0 mobile:scale-[0.5] desktop:scale-[1]"
        />
        <img 
            src={pcbRight}
            className="absolute top-0 mobile:right-[-10rem] desktop:right-0 mobile:scale-[0.5] desktop:scale-[1]"
        />
      </div>
    </div>
  );
};

export default PCBBg;
