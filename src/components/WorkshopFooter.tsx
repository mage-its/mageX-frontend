import React from 'react';

const WorkshopFooter: React.FC = () => {
  return (
    <div className="relative mt-20 bottom-0 w-full mb-8 bg-orange-3 py-2">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <div className="flex gap-5">
          <div className="w-6 h-6 bg-white rounded-full flex justify-center items-center cursor-pointer"></div>
          <div className="w-6 h-6 bg-white rounded-full flex justify-center items-center cursor-pointer"></div>
          <div className="w-6 h-6 bg-white rounded-full flex justify-center items-center cursor-pointer"></div>
          <div className="w-6 h-6 bg-white rounded-full flex justify-center items-center cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopFooter;
