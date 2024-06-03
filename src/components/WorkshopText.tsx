import React from 'react';

const WorkshopText: React.FC = () => {
  return (
    <div className="relative flex justify-center mt-16 select-none">
        <span
          style={{
            position: 'absolute',
            color: 'transparent',
            textShadow: '0 0 0 #FFFFFF',
            pointerEvents: 'none',
            zIndex: -1
          }}
          className="font-airstrike font-italic font-bold text-center md:text-9xl w-full drop-shadow-orange inline-block"
        >
          WORKSHOP
        </span>
        <span
          style={{
            background: 'linear-gradient(90deg, rgba(255,136,0,1) 0%, rgba(255,0,0,1) 100%)',
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