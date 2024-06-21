import React from 'react';
import type1 from '../assets/workshop/puzzles-2/type-1.svg'
import type2 from '../assets/workshop/puzzles-2/type-2.svg'
import type3 from '../assets/workshop/puzzles-2/type-3.svg'
import type4 from '../assets/workshop/puzzles-2/type-4.svg'

const PuzzleBg2: React.FC = () => {
  return (
    <div>
        <div className="relative mt-16">
            <div className="absolute inset-0 -z-10">
                {/*First diagonal*/}
                <img 
                    src={type2}
                    className="absolute top-[0rem] left-[94rem] rotate-[162.91deg]"
                />
                <img 
                    src={type4}
                    className="absolute top-[5rem] left-[75rem] rotate-[251.25deg]"
                />
                <img 
                    src={type1}
                    className="absolute top-[10rem] left-[58rem] rotate-[270deg]"
                />
                <img 
                    src={type2}
                    className="absolute top-[16rem] left-[38rem] rotate-[162.91deg]"
                />
                <img 
                    src={type4}
                    className="absolute top-[21rem] left-[19rem] rotate-[251.25deg]"
                />
                <img 
                    src={type1}
                    className="absolute top-[26rem] left-[2rem] rotate-[270deg]"
                />
                {/*Second diagonal*/}
                <img 
                    src={type3}
                    className="absolute top-[20rem] left-[90rem] rotate-[350.34deg]"
                />
                <img 
                    src={type1}
                    className="absolute top-[23rem] left-[74rem] rotate-[241.12deg]"
                />
                <img 
                    src={type4}
                    className="absolute top-[30rem] left-[51rem] rotate-[251.25deg]"
                />
                <img 
                    src={type3}
                    className="absolute top-[36rem] left-[34rem] rotate-[350.34deg]"
                />
                <img 
                    src={type1}
                    className="absolute top-[39rem] left-[18rem] rotate-[241.12deg]"
                />
                <img 
                    src={type4}
                    className="absolute top-[46rem] left-[-5rem] rotate-[251.25deg]"
                />
                {/*Third diagonal*/}
                <img 
                    src={type2}
                    className="absolute top-[30rem] left-[102rem] rotate-[162.91deg]"
                />
                <img 
                    src={type4}
                    className="absolute top-[35rem] left-[83rem] rotate-[251.25deg]"
                />
                <img 
                    src={type1}
                    className="absolute top-[40rem] left-[66rem] rotate-[270deg]"
                />
                <img 
                    src={type2}
                    className="absolute top-[46rem] left-[46rem] rotate-[162.91deg]"
                />
                <img 
                    src={type4}
                    className="absolute top-[51rem] left-[27rem] rotate-[251.25deg]"
                />
                <img 
                    src={type1}
                    className="absolute top-[56rem] left-[10rem] rotate-[270deg]"
                />
                {/*Fourth diagonal*/}
                <img 
                    src={type3}
                    className="absolute top-[50rem] left-[98rem] rotate-[350.34deg]"
                />
                <img 
                    src={type1}
                    className="absolute top-[53rem] left-[82rem] rotate-[241.12deg]"
                />
                <img 
                    src={type4}
                    className="absolute top-[60rem] left-[59rem] rotate-[251.25deg]"
                />
                <img 
                    src={type3}
                    className="absolute top-[66rem] left-[42rem] rotate-[350.34deg]"
                />
                <img 
                    src={type1}
                    className="absolute top-[69rem] left-[26rem] rotate-[241.12deg]"
                />
                <img 
                    src={type4}
                    className="absolute top-[76rem] left-[3rem] rotate-[251.25deg]"
                />
                {/*Fifth diagonal*/}
                <img 
                    src={type2}
                    className="absolute top-[60rem] left-[110rem] rotate-[162.91deg]"
                />
                <img 
                    src={type4}
                    className="absolute top-[65rem] left-[91rem] rotate-[251.25deg]"
                />
                <img 
                    src={type1}
                    className="absolute top-[70rem] left-[74rem] rotate-[270deg]"
                />
                <img 
                    src={type2}
                    className="absolute top-[76rem] left-[54rem] rotate-[162.91deg]"
                />
                <img 
                    src={type4}
                    className="absolute top-[81rem] left-[35rem] rotate-[251.25deg]"
                />
                <img 
                    src={type1}
                    className="absolute top-[86rem] left-[18rem] rotate-[270deg]"
                />
                <img 
                    src={type2}
                    className="absolute top-[92rem] left-[-2rem] rotate-[162.91deg]"
                />
                {/*Sixth diagonal*/}
                <img 
                    src={type3}
                    className="absolute top-[80rem] left-[106rem] rotate-[350.34deg]"
                />
                <img 
                    src={type1}
                    className="absolute top-[83rem] left-[90rem] rotate-[241.12deg]"
                />
                <img 
                    src={type4}
                    className="absolute top-[90rem] left-[67rem] rotate-[251.25deg]"
                />
                <img 
                    src={type3}
                    className="absolute top-[96rem] left-[50rem] rotate-[350.34deg]"
                />
                <img 
                    src={type1}
                    className="absolute top-[99rem] left-[34rem] rotate-[241.12deg]"
                />
                <img 
                    src={type4}
                    className="absolute top-[106rem] left-[11rem] rotate-[251.25deg]"
                />
                <img 
                    src={type3}
                    className="absolute top-[112rem] left-[-6rem] rotate-[350.34deg]"
                />
            </div>
        </div>
    </div>
  );
};

export default PuzzleBg2;