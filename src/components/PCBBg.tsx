import React from 'react';
import pcbLeft from "../assets/workshop/pcb/left.svg";
import pcbRight from "../assets/workshop/pcb/right.svg";

const PCBBg: React.FC = () => {
  return (
    <div className="relative mt-16">
      <div className="absolute inset-0 -z-10">
        <img 
            src={pcbLeft}
            className="absolute top-0 left-0"
        />
        <img 
            src={pcbRight}
            className="absolute top-0 right-0"
        />
      </div>
    </div>
  );
};

export default PCBBg;
