import { useState } from "react";
import { motion, wrap, AnimatePresence } from "framer-motion";
import left from "../assets/workshop/leftButton.svg";
import right from "../assets/workshop/rightButton.svg";
import timeIcon1 from "../assets/workshop/timeIcon1.svg";
import locationIcon1 from "../assets/workshop/locationIcon1.svg";
import timeIcon2 from "../assets/workshop/timeIcon2.svg";
import locationIcon2 from "../assets/workshop/locationIcon2.svg";
import { Link } from "react-router-dom";

const slides = [
  {
    header: "MULTIMEDIA",
    content:
      "Workshop ini adalah workshop yang mempelajari mengenai dasar dari pemrograman dalam Bahasa pemrograman seperti python dan dasar dasar multimedia. Workshop dilakukan selama 2 hari. Hari pertama mempelajari dasar dasar pemrograman dan hari kedua adalah project dan review project",
    tempat: "To be announced",
    waktu: "20 & 28 Juli 2024",
    pemateri1: "To be announced",
    pemateri2: "To be announced",
    color1: "#F77F5A",
    color2: "linear-gradient(169.21deg, #FFFFFF -9.1%, #EFA264 101.73%)",
    color3: "linear-gradient(180deg, #F77F5A 0%, #FFC291 100%)",
    color4: "#CA4F14",
    timeIcon: timeIcon1,
    locationIcon: locationIcon1,
  },
  {
    header: "ROBOTIK",
    content:
      "Workshop robotika menyediakan pembelajaran dasar ilmu ilmu robotik, membantu anda mengaktualisasi ide robotik anda, mulai penggunaan sensor dan aktuator hingga melatih ketrampilan pemrograman anda.",
    tempat: "To be announced",
    waktu: "24 & 25 Agustus 2024",
    pemateri1: "To be announced",
    pemateri2: "To be announced",
    color1: "#6F56B4",
    color2:
      "linear-gradient(179.15deg, #FFFFFF -3.62%, #FCD5EB 36.28%, #F8AAD7 75.06%, #7E0F4F 108.78%)",
    color3: "linear-gradient(180deg, #6F56B4 0%, #713E79 100%)",
    color4: "#6F56B4",
    timeIcon: timeIcon2,
    locationIcon: locationIcon2,
  },
  {
    header: "INTERNET OF THINGS",
    content:
      "Workshop IoT (Internet Of Things) merupakan salah satu pelaksanaan pelatihan yang diadakan oleh Teknik Komputer. Workshop ini dinaungi oleh salah satu lab Teknik Komputer yaitu B300. Workshop IoT berfokus kepada topik-topik pengolahan sinyal digital dan pengembangan teknologi berbasis digital. Seperti namanya, inovasi-inovasi yang diciptakan memiliki unsur internet yang berperan penting dalam proses kerjanya.",
    tempat: "To be announced",
    waktu: "21 September 2024",
    pemateri1: "To be announced",
    pemateri2: "To be announced",
    color1: "#F77F5A",
    color2: "linear-gradient(169.21deg, #FFFFFF -9.1%, #EFA264 101.73%)",
    color3: "linear-gradient(180deg, #F77F5A 0%, #FFC291 100%)",
    color4: "#CA4F14",
    timeIcon: timeIcon1,
    locationIcon: locationIcon1,
  },
];

const WorkshopSlide = () => {
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

  // Mobile content
  const mobileContent = [];
  for (let i = 0; i < 3; i++) {
    mobileContent.push(
      <div
        className="flex-col mb-[1rem] transition-colors duration-1000 ease-in items-center w-full h-[45vh] overflow-hidden rounded-2xl border-4 relative"
        style={{ background: slides[i].color2, borderColor: slides[i].color4 }}
      >
        <div
          className="flex h-[90%] transition-transform duration-1000 w-full"
          style={{ transform: `translateX(-${i * 100}%)` }}
        >
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
                      pointerEvents: "none",
                      zIndex: -1,
                    }}
                    className="font-airstrike text-white mt-[3rem] font-italic text-left text-[20px] leading-[2rem] w-full inline-block"
                  >
                    {slide.header}
                  </span>
                </div>

                <div className="ml-[1rem] text-gray-4 font-fredoka p-5 rounded h-full w-full">
                  {/* Content */}
                  <div className="text-gray-800 text-[0.75vh] mb-2">
                    {slides[i].content}
                  </div>
                  {/* Location and time */}
                  <div className="flex gap-[15px]">
                    <div className="flex relative items-center w-[50%]">
                      <img src={slides[i].locationIcon} className="w-[15%]" />
                      <span
                        className="relative ml-2 text-[0.8vh] w-[90%]"
                        style={{ color: slides[i].color1 }}
                      >
                        {slide.tempat}
                      </span>
                    </div>
                    <div className="flex relative items-center w-[50%]">
                      <img src={slides[i].timeIcon} className="w-[15%]" />
                      <span
                        className="relative ml-2 text-[0.8vh] w-[90%]"
                        style={{ color: slides[i].color1 }}
                      >
                        {slide.waktu}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[50%] mt-[5%] h-[75%] flex items-center justify-center">
                {/* Placeholder for image*/}
                <div className="w-full h-full mx-[12%] mt-[20%] bg-white flex items-center justify-center rounded-[1rem]">
                  <span
                    className="text-5xl"
                    style={{ color: slides[i].color1 }}
                  >
                    ?
                  </span>
                </div>
              </div>

              <div className="flex absolute top-[85%] w-full">
                <Link
                  to="/dashboard/home"
                  className="inset-0 p-0.5 rounded-[0.5rem] mx-[10%] w-[30%] h-[2.3rem] flex items-center justify-center"
                  style={{ background: slides[i].color3 }}
                >
                  <button
                    className="bg-light text-center font-bold py-1 px-2 rounded-[0.4rem]"
                    style={{
                      color: slides[i].color1,
                      fontSize: "1vh",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    Daftar sekarang!
                  </button>
                </Link>
                <div
                  className="relative transition-colors duration-1000 ease-in text-white font-bold py-1 px-2 rounded-[1.5rem] text-[1vh] text-center mx-[2.5%] w-[45%] h-[2.3rem] flex items-center justify-center"
                  style={{ background: slides[i].color1 }}
                >
                  {slides[i].pemateri1}
                  <br />
                  {slides[i].pemateri2}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function getSlideIndex() {
    if (slides.length === 0) return 0;
    else
      return ((currentIndex % slides.length) + slides.length) % slides.length;
  }

  return (
    <div>
      {/* For Ipad and Desktop */}
      <div className="relative items-center hidden select-none ipad:block desktop:block">
        <div
          className="flex-col drop-shadow-lg transition-colors duration-500 ease-in items-center w-full overflow-hidden rounded-2xl border-8 relative min-h-[550px] ipad:h-[43vh] desktop:h-[88vh]"
          style={{
            background: slides[index].color2,
            borderColor: slides[index].color4,
          }}
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
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {slides.map((_, slideIndex) => {
                const offsetIndex =
                  (slideIndex - index + slides.length) % slides.length;
                if (offsetIndex > 1 && offsetIndex < slides.length - 1) {
                  return null;
                }
                return (
                  <div
                    key={slideIndex}
                    className="w-full flex-shrink-0 box-border flex"
                  >
                    <div className="w-[60%] mt-[2rem] mb-[2.5rem] flex flex-col justify-center">
                      {/* Title */}
                      <div className="h-[5rem] mb-[3rem] ml-[2rem] left-0 flex break-words items-center justify-center rounded font-bold">
                        <span
                          style={{
                            textShadow: `
                              0 0 0 ${slides[getSlideIndex()].color1},
                              1px 1px 0 ${slides[getSlideIndex()].color1},
                              -1px -1px 0 ${slides[getSlideIndex()].color1},
                              1px -1px 0 ${slides[getSlideIndex()].color1},
                              -1px 1px 0 ${slides[getSlideIndex()].color1},
                              2px 2px 0 ${slides[getSlideIndex()].color1},
                              -2px -2px 0 ${slides[getSlideIndex()].color1},
                              2px -2px 0 ${slides[getSlideIndex()].color1},
                              -2px 2px 0 ${slides[getSlideIndex()].color1},
                              3px 3px 0 ${slides[getSlideIndex()].color1},
                              -3px -3px 0 ${slides[getSlideIndex()].color1},
                              3px -3px 0 ${slides[getSlideIndex()].color1},
                              -3px 3px 0 ${slides[getSlideIndex()].color1},
                              3px 3px 2px rgba(0,0,0,0.3)
                            `,
                            pointerEvents: "none",
                            zIndex: -1,
                          }}
                          className="font-airstrike text-white mt-[3rem] font-italic text-left w-full inline-block ipad:text-[4.5vw] ipad:leading-[3rem] desktop:text-[5vw] desktop:leading-[4.5rem]"
                        >
                          {slides[getSlideIndex()].header}
                        </span>
                      </div>

                      <div className="ml-[1rem] text-gray-4 font-fredoka p-5 rounded mb-[4rem] w-full">
                        {/* Content */}
                        <div className="text-gray-800 mb-2 ipad:text-[12px] ipad:leading-[1rem] desktop:text-[1rem] desktop:leading-[1.5rem]">
                          {slides[getSlideIndex()].content}
                        </div>
                        {/* Location and time */}
                        <div className="flex">
                          <div className="flex items-center w-[50%]">
                            <img
                              src={slides[getSlideIndex()].locationIcon}
                              alt="Location Icon"
                            />
                            <span
                              className="ml-2 ipad:text-[1rem] desktop:text-[1.5rem]"
                              style={{ color: slides[getSlideIndex()].color1 }}
                            >
                              {slides[getSlideIndex()].tempat}
                            </span>
                          </div>
                          <div className="flex items-center w-[50%]">
                            <img
                              src={slides[getSlideIndex()].timeIcon}
                              alt="Time Icon"
                            />
                            <span
                              className="ml-2 ipad:text-[1rem] desktop:text-[1.5rem]"
                              style={{ color: slides[getSlideIndex()].color1 }}
                            >
                              {slides[getSlideIndex()].waktu}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-[40%] h-[75%] flex items-center justify-center ipad:mt-[10%] desktop:mt-[5%]">
                      {/* Placeholder for image*/}
                      <div className="w-full h-full mx-[12%] mt-[20%] bg-white flex items-center justify-center rounded-[2rem]">
                        <span
                          className="text-9xl"
                          style={{ color: slides[getSlideIndex()].color1 }}
                        >
                          ?
                        </span>
                      </div>
                    </div>

                    <div className="flex absolute top-[85%] w-full">
                      <div
                        className="inset-0 p-1 rounded-[0.5rem] mx-[10%] w-[40%] h-[4rem]"
                        style={{ background: slides[getSlideIndex()].color3 }}
                      >
                        <Link to="/dashboard/home">
                          <button
                            className="relative bg-light text-center w-full h-full font-bold py-2 px-4 rounded-[0.4rem] ipad:text-[1.25rem] desktop:text-[1.5rem]"
                            style={{
                              color: slides[getSlideIndex()].color1,
                              borderColor: slides[getSlideIndex()].color2,
                            }}
                          >
                            Daftar sekarang!
                          </button>
                        </Link>
                      </div>
                      <div
                        className="relative transition-colors duration-1000 ease-in text-white font-bold py-2  px-4 rounded-[1.5rem] text-center mx-[2.5%] w-[35%] h-[4rem]"
                        style={{ background: slides[getSlideIndex()].color1 }}
                      >
                        {slides[getSlideIndex()].pemateri1}
                        <br />
                        {slides[getSlideIndex()].pemateri2}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider */}
        <div className="absolute left-1/2 transform rounded-[2rem] -translate-x-1/2 flex bg-dark p-[0.5rem] ipad:bottom-[-4rem] ipad:h-[5%] ipad:w-[20%] desktop:bottom-[-4rem] desktop:h-[5%] desktop:w-[14%]">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 m-auto rounded-full cursor-pointer transition-all duration-500 ${
                index === idx
                  ? "bg-orange-purple-2 transform scale-125"
                  : "bg-white"
              }`}
              onClick={() =>
                setCurrentIndex([idx, idx > currentIndex ? 1 : -1])
              }
            ></div>
          ))}
        </div>
        {/* Left and right button */}
        <button
          className="left-[-3rem] absolute top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 cursor-pointer"
          onClick={prevSlide}
        >
          <img src={left} alt="Previous" />
        </button>
        <button
          className="right-[-3rem] absolute top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 cursor-pointer"
          onClick={nextSlide}
        >
          <img src={right} alt="Next" />
        </button>
      </div>

      {/* For mobile */}
      <div className="relative items-center hidden mobile:block ipad:hidden desktop:hidden">
        {mobileContent}
      </div>
    </div>
  );
};

export default WorkshopSlide;
