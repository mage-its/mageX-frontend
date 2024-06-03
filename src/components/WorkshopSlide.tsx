import React, { useState } from 'react';

const slides = [
  { header: "INTERNET OF THINGS", content: "Lorem Ipsum 1", subtext: "Lorem Ipsum 1" },
  { header: "ROBOTIK", content: "Lorem Ipsum 2", subtext: "Lorem Ipsum 2" },
  { header: "GAME DEVELOPMENT", content: "Lorem Ipsum 3", subtext: "Lorem Ipsum 3" },
  { header: "APPLICATION DEVELOPMENT", content: "Lorem Ipsum 4", subtext: "Lorem Ipsum 4" }
];

const WorkshopSlide: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative flex items-center">
      <div className="flex flex-col items-center w-full h-[50vh] overflow-hidden rounded-2xl bg-orange-1 relative">
        <div className="flex h-[90%] transition-transform duration-500 w-full" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div className="w-full flex-shrink-0 p-5 rounded-lg box-border" key={index}>
              <div className="bg-orange-3 h-10 rounded mb-5">{slide.header}</div>
              <div className="bg-orange-4 p-5 rounded mb-5">
                <div className="bg-orange-5 h-5 mb-2 rounded">{slide.content}</div>
                <div className="bg-orange-5 h-5 rounded">{slide.subtext}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-5">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 bg-gray-400 rounded-full cursor-pointer ${currentIndex === index ? 'bg-gray-800' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
      <button className="absolute top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 cursor-pointer left-[-30px] md:left-[-20px] sm:left-[-10px]" onClick={goToPrevious}>&lt;</button>
      <button className="absolute top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 cursor-pointer right-[-30px] md:right-[-20px] sm:right-[-10px]" onClick={goToNext}>&gt;</button>
    </div>
  );
};

export default WorkshopSlide;
