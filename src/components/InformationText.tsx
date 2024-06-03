import React from 'react';
import info from '../assets/workshop/information.svg'

const InformationText: React.FC = () => {
  return (
    <div>
      <img 
        src={info}
        className="w-full"
      />
    </div>
  );
};

export default InformationText;