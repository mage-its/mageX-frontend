import { useState } from 'react';
import { motion, wrap, AnimatePresence } from "framer-motion";
import UseCountdown from './useCountdown'; // Make sure to import the Countdown component
import left from '@/assets/dashboardHome/leftButton.svg';
import right from '@/assets/dashboardHome/rightButton.svg';

const slides = [
  {
    header: "Competition & Workshop",
    content: <UseCountdown targetDate="2024-07-10T00:00:00" />
  },
  {
    header: "B",
    content: <UseCountdown targetDate="2024-09-23T00:00:00" />
  },
  {
    header: "C",
    content: <UseCountdown targetDate="2024-10-03T00:00:00" />
  },
];



const CountdownSlide: React.FC = () => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const nextSlide = () => setCurrentIndex(([index]) => [index + 1, 1]);
  const prevSlide = () => setCurrentIndex(([index]) => [index - 1, -1]);

  const index = wrap(0, slides.length, currentIndex);

  function getSlideIndex() {
    if (slides.length === 0)
      return 0;
    else
      return (currentIndex % slides.length + slides.length) % slides.length;
  }

  return (
    <div>
      <div className="relative select-none block justify-center
                      ipad:h-[20vh] ipad:h-w-[55vw]
                      desktop:h-[20vh] desktop:w-[55vw]">
        <div
          className="bg-black opacity-[80%] w-full h-full transition-colors duration-500 ease-in items-center overflow-hidden rounded-[2rem] relative"
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              className="absolute w-full h-full flex-shrink-0 box-border flex"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {slides.map((_, slideIndex) => {
                const offsetIndex = (slideIndex - index + slides.length) % slides.length;
                if (offsetIndex > 1 && offsetIndex < slides.length - 1) {
                  return null;
                }
                return (
                  <div key={slideIndex} className="w-full font-fredoka flex-shrink-0 box-border flex justify-center my-auto">
                    <div className="text-[20px] ml-[4rem] w-[50%] text-light justify-cente my-auto">
                      <div>
                        Waktu Pendaftaran
                      </div>
                      <div className="mt-[0.5rem] rounded-[1rem] p-[0.5rem] w-fit bg-blue-purple-orange-1">
                        {slides[getSlideIndex()].header}
                      </div>
                    </div>
                    <div className="w-[50%] text-light my-auto">
                      <div className="text-[70px]">
                        {slides[getSlideIndex()].content}
                      </div>
                      <div className="mt-[-1rem] text-[15px]">
                        Hari Jam Menit
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Left and right button */}
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2 cursor-pointer" onClick={prevSlide}>
          <img src={left} className="scale-50" alt="Previous" />
        </button>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2 cursor-pointer" onClick={nextSlide}>
          <img src={right} className="scale-50" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default CountdownSlide;
