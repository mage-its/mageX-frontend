import React, { useState } from 'react';

const slides = [
  {
    header: "INTERNET OF THINGS",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
    subtext1: "Jorem ipsum dolor",
    subtext2: "Jorem ipsum dolor",
    color1: "#EC8562",
    color2: "linear-gradient(169.21deg, #FFFFFF -9.1%, #EFA264 101.73%)",
  },
  {
    header: "ROBOTIK",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
    subtext1: "Lorem Ipsum 2",
    subtext2: "Lorem Ipsum 2",
    color1: "#EC8562",
    color2: "linear-gradient(169.21deg, #FFFFFF -9.1%, #EFA264 101.73%)",
  },
  {
    header: "GAME DEVELOPMENT",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
    subtext1: "Lorem Ipsum 3",
    subtext2: "Lorem Ipsum 3",
    color1: "#6F56B4",
    color2: "linear-gradient(179.15deg, #FFFFFF -3.62%, #FCD5EB 36.28%, #F8AAD7 75.06%, #7E0F4F 108.78%)",
  },
  {
    header: "APPLICATION DEVELOPMENT",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
    subtext1: "Lorem Ipsum 4",
    subtext2: "Lorem Ipsum 4",
    color1: "#6F56B4",
    color2: "linear-gradient(179.15deg, #FFFFFF -3.62%, #FCD5EB 36.28%, #F8AAD7 75.06%, #7E0F4F 108.78%)",
  },
];

const WorkshopSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative flex items-center">
      <div className="flex-col items-center w-full h-[90vh] overflow-hidden rounded-2xl border-8 relative"
           style = {{ background: slides[currentIndex].color2, borderColor: slides[currentIndex].color1 }}>
        <div className="flex h-[90%] transition-transform duration-1000 w-full"
             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div className="w-full flex-shrink-0 p-5 box-border" key={index}>
              <div className="flex flex-col items-center h-full justify-center text-orange-800">
                {/* Title */}
                <div className="h-32 w-full flex items-center justify-center rounded mb-5 font-bold">
                  <span
                    style={{
                      position: 'absolute',
                      color: 'transparent',
                      textShadow: `
                        0 0 0 ${slide.color1}, 
                        1px 1px 0 ${slide.color1}, 
                        -1px -1px 0 ${slide.color1}, 
                        1px -1px 0 ${slide.color1}, 
                        -1px 1px 0 ${slide.color1},
                        2px 2px 0 ${slide.color1},
                        -2px -2px 0 ${slide.color1},
                        2px -2px 0 ${slide.color1},
                        -2px 2px 0 ${slide.color1},
                        3px 3px 2px rgba(0,0,0,0.3)
                      `,
                      pointerEvents: 'none',
                      zIndex: -1,
                    }}
                    className="font-airstrike font-italic font-bold text-center text-5xl w-full inline-block"
                  >
                    {slide.header}
                  </span>
                  <span
                    style={{
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                    }}
                    className="font-airstrike font-italic font-bold text-center text-5xl w-full bg-white inline-block"
                  >
                    {slide.header}
                  </span>
                </div>
                
                <div className="bg-white p-5 rounded mb-5 w-full">
                  {/* Content */}
                  <div className="text-gray-800 text-base mb-2">{slide.content}</div>
                  {/* Location and time */}
                  <div className="flex items-center mb-2">
                    <span className="material-icons">place</span>
                    <span className="ml-2">{slide.subtext1}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="material-icons">schedule</span>
                    <span className="ml-2">{slide.subtext2}</span>
                  </div>
                </div>

                <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full">
                  Daftar sekarang!
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-[-4rem] left-1/2 transform rounded-[2rem] -translate-x-1/2 flex bg-dark w-[12.5%] h-[5%]">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 m-auto rounded-full cursor-pointer transition-all duration-300 ${
                currentIndex === index ? 'bg-orange-purple-2 transform scale-125' : 'bg-white'
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 cursor-pointer left-[-30px] md:left-[-20px] sm:left-[-10px]"
        onClick={goToPrevious}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 cursor-pointer right-[-30px] md:right-[-20px] sm:right-[-10px]"
        onClick={goToNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default WorkshopSlide;
