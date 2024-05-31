import React from 'react';
import puzzle from '../assets/workshop/puzzles-1/puzzle.svg'

const PuzzleBg1: React.FC = () => {
  return (
    <div>
        <div className="relative mobile:mt-[-10%] desktop:mt-[-20%] w-full">
            <div className="absolute inset-0 -z-10">
                <img 
                    src={puzzle}
                    className="absolute top-0 left-[3%] w-full mobile:scale-[1.2] desktop:scale-[1.15]"
                />
            </div>
        </div>
    </div>
  );
};

export default PuzzleBg1;