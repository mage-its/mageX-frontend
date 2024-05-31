import { useState } from 'react';
import left from '../assets/workshop/leftButton.svg';
import right from '../assets/workshop/rightButton.svg';
import timeIcon1 from '../assets/workshop/timeIcon1.svg';
import locationIcon1 from '../assets/workshop/locationIcon1.svg';
import timeIcon2 from '../assets/workshop/timeIcon2.svg';
import locationIcon2 from '../assets/workshop/locationIcon2.svg';

const slides = [
  {
    header: "INTERNET OF THINGS",
    content: "ALorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
    subtext1: "Jorem ipsum dolor",
    subtext2: "Jorem ipsum dolor",
    color1: "#F77F5A",
    color2: "linear-gradient(169.21deg, #FFFFFF -9.1%, #EFA264 101.73%)",
    color3: "linear-gradient(180deg, #F77F5A 0%, #FFC291 100%)",
    timeIcon: timeIcon1,
    locationIcon: locationIcon1,
  },
  {
    header: "ROBOTIK",
    content: "BLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
    subtext1: "Jorem ipsum dolor",
    subtext2: "Jorem ipsum dolor",
    color1: "#F77F5A",
    color2: "linear-gradient(169.21deg, #FFFFFF -9.1%, #EFA264 101.73%)",
    color3: "linear-gradient(180deg, #F77F5A 0%, #FFC291 100%)",
    timeIcon: timeIcon1,
    locationIcon: locationIcon1,
  },
  {
    header: "GAME DEVELOPMENT",
    content: "CLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
    subtext1: "Jorem ipsum dolor",
    subtext2: "Jorem ipsum dolor",
    color1: "#6F56B4",
    color2: "linear-gradient(179.15deg, #FFFFFF -3.62%, #FCD5EB 36.28%, #F8AAD7 75.06%, #7E0F4F 108.78%)",
    color3: "linear-gradient(180deg, #6F56B4 0%, #713E79 100%)",
    timeIcon: timeIcon2,
    locationIcon: locationIcon2,
  },
  {
    header: "APPLICATION DEVELOPMENT",
    content: "DLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
    subtext1: "Jorem ipsum dolor",
    subtext2: "Jorem ipsum dolor",
    color1: "#6F56B4",
    color2: "linear-gradient(179.15deg, #FFFFFF -3.62%, #FCD5EB 36.28%, #F8AAD7 75.06%, #7E0F4F 108.78%)",
    color3: "linear-gradient(180deg, #6F56B4 0%, #713E79 100%)",
    timeIcon: timeIcon2,
    locationIcon: locationIcon2,
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

  // Card
  const mobileContent = [];
  for(let i = 0; i < 4; i++)
  {
    mobileContent.push(
        <div className="flex-col mb-[1rem] transition-colors duration-1000 ease-in items-center w-full h-[45vh] overflow-hidden rounded-2xl border-4 relative"
            style={{ background: slides[i].color2, borderColor: slides[i].color1 }}>
          <div className="flex h-[90%] transition-transform duration-1000 w-full"
              style={{ transform: `translateX(-${i * 100}%)` }}>
            {slides.map((slide, index) => (
              <div className="w-full flex-shrink-0 box-border flex" key={index}>
                <div className="w-[50%] mb-[2.5rem] flex flex-col justify">
                  {/* Title */}
                  <div className="h-[5rem] mt-[10%] ml-[2rem] left-0 flex break-words items-center justify-center rounded font-bold">
                    <span
                      style={{
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
                      className="font-airstrike text-white mt-[3rem] font-italic text-left text-[4.5vw] leading-[2rem] w-full inline-block"
                    >
                      {slide.header}
                    </span>
                  </div>
                  
                  <div className="ml-[1rem] text-gray font-fredoka p-5 rounded mb-[4rem] w-full">
                    {/* Content */}
                    <div className="text-gray-800 text-[1vh] mb-2">{slides[i].content}</div>
                    {/* Location and time */}
                    <div className="flex">
                      <div className="flex relative items-center w-[50%]">
                        <img
                          src={ slides[i].locationIcon }
                          className="w-[10%]"
                        />
                        <span
                          className="relative ml-2 text-[1vh] w-[90%]"
                          style = {{ color: slides[i].color1 }}
                        >
                          {slide.subtext1}
                        </span>
                      </div>
                      <div className="flex relative items-center w-[50%]">
                        <img
                          src={ slides[i].timeIcon }
                          className="w-[10%]"
                        />
                        <span
                          className="relative ml-2 text-[1vh] w-[90%]"
                          style = {{ color: slides[i].color1 }}
                        >
                          {slide.subtext2}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[50%] mt-[5%] h-[75%] flex items-center justify-center">
                  {/* Placeholder for image*/}
                  <div className="w-full h-full mx-[12%] mt-[20%] bg-white flex items-center justify-center rounded-[1rem]">
                    <span
                      className="text-9xl"
                      style={{ color: slides[i].color1 }}
                    >
                      ?
                    </span>
                  </div>
                </div>
                
                <div className="flex absolute top-[85%] w-full">
                  <div
                    className="inset-0 p-0.5 rounded-[0.5rem] mx-[10%] w-[30%] h-[2.3rem] flex items-center justify-center"
                    style={{ background: slides[i].color3 }}
                  >
                    <button
                      className="bg-light text-center font-bold py-1 px-2 rounded-[0.4rem]"
                      style={{ color: slides[i].color1, fontSize: '1vh', width: '100%', height: '100%' }}
                    >
                      Daftar sekarang!
                    </button>
                  </div>
                  <div
                    className="relative transition-colors duration-1000 ease-in text-white font-bold py-1 px-2 rounded-[1.5rem] text-[1vh] text-center mx-[2.5%] w-[45%] h-[2.3rem] flex items-center justify-center"
                    style={{ background: slides[i].color1 }}
                  >
                    Jorem ipsum dolor
                    <br />
                    Jorem ipsum dolor
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
  }

  return (
    <div>
      <div className="relative items-center hidden desktop:block">
        <div className="flex-col transition-colors duration-1000 ease-in items-center w-full h-[90vh] overflow-hidden rounded-2xl border-8 relative"
            style={{ background: slides[currentIndex].color2, borderColor: slides[currentIndex].color1 }}>
          <div className="flex h-[90%] transition-transform duration-1000 w-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {slides.map((slide, index) => (
              <div className="w-full flex-shrink-0 box-border flex" key={index}>
                <div className="w-[60%] mt-[4rem] mb-[2.5rem] flex flex-col justify-center">
                  {/* Title */}
                  <div className="h-[5rem] mb-[3rem] ml-[2rem] left-0 flex break-words items-center justify-center rounded font-bold">
                    <span
                      style={{
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
                          3px 3px 0 ${slide.color1},
                          -3px -3px 0 ${slide.color1},
                          3px -3px 0 ${slide.color1},
                          -3px 3px 0 ${slide.color1},
                          3px 3px 2px rgba(0,0,0,0.3)
                        `,
                        pointerEvents: 'none',
                        zIndex: -1,
                      }}
                      className="font-airstrike text-white mt-[3rem] font-italic text-left text-[5vw] leading-[4.5rem] w-full inline-block"
                    >
                      {slide.header}
                    </span>
                  </div>
                  
                  <div className="ml-[1rem] text-gray font-fredoka p-5 rounded mb-[4rem] w-full">
                    {/* Content */}
                    <div className="text-gray-800 text-base mb-2">{slides[currentIndex].content}</div>
                    {/* Location and time */}
                    <div className="flex">
                      <div className="flex items-center w-[50%]">
                        <img
                          src={ slides[currentIndex].locationIcon }
                        />
                        <span
                          className="ml-2 text-[1.5rem]"
                          style = {{ color: slides[currentIndex].color1 }}
                        >
                          {slide.subtext1}
                        </span>
                      </div>
                      <div className="flex items-center w-[50%]">
                        <img
                          src={ slides[currentIndex].timeIcon }
                        />
                        <span
                          className="ml-2 text-[1.5rem]"
                          style = {{ color: slides[currentIndex].color1 }}
                        >
                          {slide.subtext2}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[40%] h-[85%] flex items-center justify-center">
                  {/* Placeholder for image*/}
                  <div className="w-full h-full mx-[12%] mt-[20%] bg-white flex items-center justify-center rounded-[2rem]">
                    <span
                      className="text-9xl"
                      style={{ color: slides[currentIndex].color1 }}
                    >
                      ?
                    </span>
                  </div>
                </div>
                
                <div className="flex absolute top-[85%] w-full">
                  <div
                    className="inset-0 p-1 rounded-[0.5rem] mx-[10%] w-[40%] h-[4rem]"
                    style = {{ background: slides[currentIndex].color3 }}
                  >
                    <button
                      className="relative bg-light text-center text-[1.5rem] w-full h-full font-bold py-2 px-4 rounded-[0.4rem]"
                      style={{ color: slides[currentIndex].color1, borderColor: slides[currentIndex].color2 }}
                    >
                      Daftar sekarang!
                    </button>
                  </div>
                  <div
                    className="relative transition-colors duration-1000 ease-in text-white font-bold py-2  px-4 rounded-[1.5rem] text-center mx-[2.5%] w-[35%] h-[4rem]"
                    style={{ background: slides[currentIndex].color1 }}
                    >
                    Jorem ipsum dolor
                    <br />
                    Jorem ipsum dolor
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-[-4rem] left-1/2 transform rounded-[2rem] -translate-x-1/2 flex bg-dark w-[12.5%] h-[5%]">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 m-auto rounded-full cursor-pointer transition-all duration-500 ${
                currentIndex === index ? 'bg-orange-purple-2 transform scale-125' : 'bg-white'
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
        {/* Left and right button */}
        <button
          className="left-[-3rem] absolute top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 cursor-pointer"
          onClick={goToPrevious}
        >
          <img src={left} alt="Previous"/>
        </button>
        <button
          className="right-[-3rem] absolute top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 cursor-pointer"
          onClick={goToNext}
        >
          <img src={right} alt="Next"/>
        </button>
      </div>

      {/* For mobile */}
      <div className="relative items-center hidden mobile:block desktop:hidden">
          {mobileContent}
      </div>
    </div>
  );
};

export default WorkshopSlide;
