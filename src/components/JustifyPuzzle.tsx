import { HTMLMotionProps, motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

export interface JustifyPuzzleProps extends HTMLMotionProps<"img">{
  x?: number;
  y?: number;
  rotate?: number;
}

export function JustifyPuzzle({ x=0, y=0, rotate=0, ...props}: JustifyPuzzleProps) {
  const ref = useRef<HTMLImageElement>(null);
  const mainControls = useAnimation();
  useEffect(() => {
    mainControls.start("justify");
    mainControls.start("color");
  }, [mainControls]);
  return (
    <motion.img
      ref={ref}
      variants={{
        init: {rotate: rotate, x: x, y: y, filter: "grayscale(100%)"},
        justify: {
          rotate: 0, 
          x: 0, 
          y: 0, 
          transition: { 
            duration: 0.5, 
            ease: "easeInOut",
            delay: 1,
            type: 'spring',
            bounce: 0.5
          }
        },
        color: {
          filter: "grayscale(0)",
          transition: { 
            duration: 0.5, 
            ease: "easeInOut",
            delay: 1,
          }
        },
      }}
      animate={mainControls}
      initial="init"
      {...props}
    />
  )
}