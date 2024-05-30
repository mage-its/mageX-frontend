import React from 'react';
import puzzle from '../assets/workshop/puzzles-1/puzzle.svg'
import orange1a from '../assets/workshop/puzzles-1/orange-1-a.svg'
import orange1b from '../assets/workshop/puzzles-1/orange-1-b.svg'
import orange2a from '../assets/workshop/puzzles-1/orange-2-a.svg'
import orange2b from '../assets/workshop/puzzles-1/orange-2-b.svg'
import orange3a from '../assets/workshop/puzzles-1/orange-3-a.svg'
import orange3b from '../assets/workshop/puzzles-1/orange-3-b.svg'

const PuzzleBg1: React.FC = () => {
  return (
    <div>
        <div className="relative mt-16 w-full">
            <div className="absolute inset-0 -z-10">
                <img 
                    src={puzzle}
                    className="absolute top-0 left-[3%] w-full scale-[1.15]"
                />
            </div>
        </div>
    </div>
  );
};

export default PuzzleBg1;