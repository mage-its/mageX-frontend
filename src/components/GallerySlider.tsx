import { about } from "@/constant/about";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useState } from "react";
import AboutCard from "@/pages/AboutCard";

import useMeasure from "react-use-measure";
import cn from "@/utils/cn";

export default function GallerySlider() {
  const [currentSlide, setCurrentSlide] = useState(about.length / 2);

  const [containerRef, { width: containerWidth }] = useMeasure();
  const [aboutCardRef, { width: aboutCardWitdh }] = useMeasure();

  const incrementSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  const decrementSlide = () => {
    setCurrentSlide((prev) => prev - 1);
  };
  return (
    <div>
      <div className="max-w-[1240px] overflow-hidden">
        <motion.div
          className="flex flex-nowrap gap-4 sm:mb-9 mb-4"
          ref={containerRef}
          // initial={{  }}
          animate={{
            x:
              -currentSlide * (aboutCardWitdh + 16) +
              containerWidth / 2 -
              (aboutCardWitdh + 16) / 2,
          }}
        >
          {about.map((item, index) => (
            <div ref={aboutCardRef} className="shrink-0 ">
              <AboutCard
                key={index}
                title={item.title}
                desc={item.desc}
                img={item.img}
              />
            </div>
          ))}
        </motion.div>
      </div>
      <div className="flex justify-between items-center">
        <motion.button
          className="sm:w-[44px] w-[22px] sm:h-[44px] h-[22px] rounded-full bg-light flex justify-center items-center"
          onClick={decrementSlide}
          disabled={currentSlide == 0}
          animate={{ opacity: currentSlide == 0 ? 0.5 : 1 }}
        >
          <FaAngleLeft
            className="sm:text-3xl text-lg"
            fill="url(#horizontal-gta)"
          />
        </motion.button>
        <div className="flex sm:gap-2.5 gap-1.5">
          {about.map((_, index) => (
            <motion.div
              className={cn(
                "sm:h-4 h-2 sm:w-4 w-2 bg-gray-2 rounded-full transition-all duration-300 ease-in-out",
                {
                  "bg-light w-[180px]":
                    currentSlide == index && window.innerWidth > 640,
                },
                {
                  "bg-light w-[100px]":
                    currentSlide == index && window.innerWidth < 640,
                }
              )}
            />
          ))}
        </div>
        <motion.button
          className="sm:w-[44px] w-[22px] sm:h-[44px] h-[22px] rounded-full bg-light flex justify-center items-center"
          onClick={incrementSlide}
          disabled={currentSlide == about.length - 1}
          animate={{ opacity: currentSlide == about.length - 1 ? 0.5 : 1 }}
        >
          <FaAngleRight
            className="sm:text-3xl text-lg"
            fill="url(#horizontal-gta)"
          />
        </motion.button>
      </div>
    </div>
  );
}
