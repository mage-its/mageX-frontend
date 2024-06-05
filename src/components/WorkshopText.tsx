import React from 'react';

const WorkshopText: React.FC = () => {
  return (
    <div className="relative flex justify-center mobile:mt-8 desktop:mt-16 select-none">
      <span
        style={{
          position: 'absolute',
          color: 'transparent',
          textShadow: `
            0 0 0 #FFFFFF, 
            1px 1px 0 #FFFFFF, 
            -1px -1px 0 #FFFFFF, 
            1px -1px 0 #FFFFFF, 
            -1px 1px 0 #FFFFFF,
            2px 2px 0 #FFFFFF,
            -2px -2px 0 #FFFFFF,
            2px -2px 0 #FFFFFF,
            -2px 2px 0 #FFFFFF,
            6px 6px 6px #cA4F14,
            12px 12px 12px #cA4F14
          `,
          pointerEvents: 'none',
          zIndex: -1
        }}
        className="font-airstrike font-italic font-bold text-center w-full inline-block mobile:text-5xl ipad:text-8xl desktop:text-9xl "
      >
        WORKSHOP
      </span>
      <span
        style={{
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
        className="font-airstrike font-italic font-bold text-center w-full bg-orange-grad-3 inline-block mobile:text-5xl ipad:text-8xl desktop:text-9xl "
      >
        WORKSHOP
      </span>
    </div>
  );
};

export default WorkshopText;
