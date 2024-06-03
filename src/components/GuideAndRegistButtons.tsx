import React from 'react';

const GuideAndRegistButtons: React.FC = () => {
  return (
    <div className="relative flex justify-center mt-5 select-none">
      <button className="relative inline-block px-[2px] py-[2px] mx-[0.5rem] overflow-hidden">
        <div className="absolute inset-0 p-1 rounded-md bg-orange-grad"></div>
        <div className="relative bg-orange-primary-5 rounded-md flex items-center justify-center">
          <p className="font-fredoka font-medium tracking-wide px-2 py-1 text-[16px] text-orange-primary-3">
            Guide Book
          </p>
        </div>
      </button>
      <button className="relative inline-block px-[2px] py-[2px] mx-[0.5rem] overflow-hidden">
        <div className="absolute inset-0 p-1 rounded-md bg-orange-primary-5"></div>
        <div className="relative bg-orange-grad rounded-md flex items-center justify-center">
          <p className="font-fredoka font-medium tracking-wide px-7 py-1 text-[16px] text-orange-primary-5">
            Regist
          </p>
        </div>
      </button>
    </div>
  );
};

export default GuideAndRegistButtons;