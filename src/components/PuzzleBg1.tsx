import React from 'react';
import orange1a from '../assets/workshop/puzzles-1/orange-1-a.svg'
import orange1b from '../assets/workshop/puzzles-1/orange-1-b.svg'
import orange2a from '../assets/workshop/puzzles-1/orange-2-a.svg'
import orange2b from '../assets/workshop/puzzles-1/orange-2-b.svg'
import orange3a from '../assets/workshop/puzzles-1/orange-3-a.svg'
import orange3b from '../assets/workshop/puzzles-1/orange-3-b.svg'

const PuzzleBg1: React.FC = () => {
  return (
    <div>
        <div className="relative mt-16">
            <div className="absolute inset-0 -z-10">
                {/*Top-1*/}
                <img 
                    src={orange2a}
                    className="absolute top-0 left-0"
                />
                {/*Top-2*/}
                <img 
                    src={orange3a}
                    className="absolute top-[1rem] right-[-3rem] rotate-12"
                />
                {/*Middle-1*/}
                <img 
                    src={orange3b}
                    className="absolute top-[14rem] left-[-1rem]"
                />
                {/*Middle-2*/}
                <img 
                    src={orange1a}
                    className="absolute top-[14rem] left-[9rem] rotate-[10deg]"
                />
                {/*Middle-4*/}
                <img 
                    src={orange2b}
                    className="absolute top-[14rem] right-[3rem]"
                />
                {/*Middle-3*/}
                <img 
                    src={orange1a}
                    className="absolute top-[16rem] right-[14rem] rotate-[-4deg]"
                />
                {/*Bottom-1*/}
                <img 
                    src={orange1a}
                    className="absolute top-[29rem] left-[-4rem] rotate-[4deg]"
                />
                {/*Bottom-2*/}
                <img 
                    src={orange3a}
                    className="absolute top-[27rem] left-[11rem] rotate-[4deg]"
                />
                {/*Bottom-3*/}
                <img 
                    src={orange2b}
                    className="absolute top-[27rem] left-[24.5rem] rotate-[92deg]"
                />
                {/*Bottom-4*/}
                <img 
                    src={orange1a}
                    className="absolute top-[30rem] left-[35.5rem] rotate-[90deg]"
                />
                {/*Bottom-5*/}
                <img 
                    src={orange2b}
                    className="absolute top-[27rem] right-[29.5rem] rotate-[90deg]"
                />
                {/*Bottom-6*/}
                <img 
                    src={orange3a}
                    className="absolute top-[27rem] right-[16rem]"
                />
                {/*Bottom-7*/}
                <img 
                    src={orange1b}
                    className="absolute top-[29rem] right-[3rem]"
                />
            </div>
        </div>
    </div>
  );
};

export default PuzzleBg1;