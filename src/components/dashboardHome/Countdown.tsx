import { useState } from 'react';
import { motion, wrap, AnimatePresence } from "framer-motion";
import UseCountdown from '@/components/dashboardHome/useCountdown'; // Make sure to import the Countdown component
import DashedLine2 from '@/assets/dashboardHome/dashedLine2.svg'
import left from '@/assets/dashboardHome/leftButton.svg';
import right from '@/assets/dashboardHome/rightButton.svg';

const slides = [
  {
    header: "Robotik Competition",
    content: <UseCountdown targetDate="2024-11-10T23:59:00" />
  },
  {
    header: "IoT Competition",
    content: <UseCountdown targetDate="2024-08-31T00:00:00" />
  },
  {
    header: "Game Development Competition",
    content: <UseCountdown targetDate="2024-08-31T00:00:00" />
  },
  {
    header: "App Development Competition",
    content: <UseCountdown targetDate="2024-08-31T00:00:00" />
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
    <div className="w-full h-full">
      {/* Desktop Display */}
      <div className="relative select-none justify-center w-full h-full mobile:hidden ipad:hidden desktop:block">
        <div
          className="bg-transparent_black w-full h-full transition-colors duration-500 ease-in items-center overflow-hidden rounded-[2rem] relative"
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
                  <div key={slideIndex} className="w-full h-full px-[3rem] py-[2rem] font-fredoka flex-shrink-0 box-border flex justify-center">
                    <div className="h-full w-[50%] text-light justify-center">
                      <div className="h-[60%] text-[24px] flex items-center leading-none">
                        Waktu Pendaftaran
                      </div>
                      <div className="rounded-[1rem] text-[16px] h-[40%] px-[1rem] flex justify-center items-center w-fit bg-blue-purple-orange-1">
                        {slides[getSlideIndex()].header}
                      </div>
                    </div>
                    <div className="w-[50%] h-full text-light">
                      {slides[getSlideIndex()].content}
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

      {/* Mobile and iPad Display */}
      <div className="relative select-none justify-center w-full h-full mobile:block ipad:block desktop:hidden">
        <div
          className="bg-transparent_black h-full transition-colors duration-500 ease-in items-center overflow-hidden  relative
                     mobile:mt-6 mobile:mx-6 mobile:rounded-[1rem]
                     ipad:mt-6 ipad:mx-[8rem] ipad:rounded-[2rem]"
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
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {slides.map((_, slideIndex) => {
                const offsetIndex = (slideIndex - index + slides.length) % slides.length;
                if (offsetIndex > 1 && offsetIndex < slides.length - 1) {
                  return null;
                }
                return (
                  <div key={slideIndex} className="w-full h-full p-[1rem] font-fredoka flex-col flex-shrink-0 box-border flex justify-center">
                    <div className="w-full h-[50%] text-light">
                      {slides[getSlideIndex()].content}
                    </div>
                    <img src={DashedLine2}></img>
                    <div className="w-full h-[50%] text-light">
                      <div className="h-[50%] text-[23px] flex items-center justify-center">
                        Waktu Pendaftaran
                      </div>
                      <div className="text-[23px] h-[40%] px-[1rem] leading-none flex items-center justify-center rounded-[1rem] bg-blue-purple-orange-1">
                        {slides[getSlideIndex()].header}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Left and right button */}
        <button className="absolute top-1/2 transform -translate-y-1/2 text-white p-2 cursor-pointer mobile:left-[1.2rem] ipad:left-[8rem]" onClick={prevSlide}>
          <img src={left} className="scale-50" alt="Previous" />
        </button>
        <button className="absolute top-1/2 transform -translate-y-1/2 text-white p-2 cursor-pointer mobile:right-[1.2rem] ipad:right-[8rem]" onClick={nextSlide}>
          <img src={right} className="scale-50" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default CountdownSlide;
