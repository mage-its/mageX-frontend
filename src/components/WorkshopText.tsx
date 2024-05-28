import React from 'react';

const WorkshopText: React.FC = () => {
  return (
    <div className="relative flex justify-center mt-16 select-none">
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
            6px 6px 6px rgba(0,0,0,0.3),
            12px 12px 12px rgba(0,0,0,0.2)
          `,
          pointerEvents: 'none',
          zIndex: -1
        }}
        className="font-airstrike font-italic font-bold text-center md:text-9xl w-full drop-shadow-orange inline-block"
      >
        WORKSHOP
      </span>
      <span
        style={{
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
        className="font-airstrike font-italic font-bold text-center md:text-9xl w-full drop-shadow-orange bg-orange-grad-3 inline-block"
      >
        WORKSHOP
      </span>
    </div>
  );
};

export default WorkshopText;
