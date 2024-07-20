import { Navbar } from "@/components/Navbar";
import gtaX from "@/assets/brand/gtaX.svg";
import {
  animate,
  motion,
  useAnimation,
  useDragControls,
  useMotionValue,
  useWillChange,
} from "framer-motion";
import logo from "@/assets/brand/logo.svg";
import puzzle1 from "@/assets/puzzle/puzzle1.svg";
import puzzle2 from "@/assets/puzzle/puzzle2.svg";
import puzzle3 from "@/assets/puzzle/puzzle3.svg";
import puzzle4 from "@/assets/puzzle/puzzle4.svg";
import puzzle5 from "@/assets/puzzle/puzzle5.svg";
import puzzle6 from "@/assets/puzzle/puzzle6.svg";
import puzzle7 from "@/assets/puzzle/puzzle7.svg";
import puzzle8 from "@/assets/puzzle/puzzle8.svg";
import puzzle9 from "@/assets/puzzle/puzzle9.svg";
import puzzle10 from "@/assets/puzzle/puzzle10.svg";
import puzzle11 from "@/assets/puzzle/puzzle11.svg";
import puzzle12 from "@/assets/puzzle/puzzle12.svg";
import puzzle13 from "@/assets/puzzle/puzzle13.svg";
import puzzleGta from "@/assets/puzzle/puzzleGta.svg";
import mascot from "@/assets/brand/mascot.png";

import ig from "@/assets/sosialMedia/ig.svg";
import mail from "@/assets/sosialMedia/mail.svg";
import tiktok from "@/assets/sosialMedia/tiktok.svg";
import line from "@/assets/sosialMedia/line.svg";
import linkedin from "@/assets/sosialMedia/linkedin.svg";
import puzzleFooter from "@/assets/puzzle/puzzleFooter.svg";

import jagoTeknik from "@/assets/medparAndSponsor/jagoteknik.png";

import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { HiCursorClick } from "react-icons/hi";
import { JustifyPuzzle } from "@/components/JustifyPuzzle";
import { useEffect, useRef, useState } from "react";
import { RevealButton } from "@/components/RevealButton";
import useMeasure from "react-use-measure";
import InfoCard from "@/components/InfoCard";
import Timeline from "@/components/Timeline";
import { timeline } from "@/constant/timeline";
import WorkshopCard from "@/components/WorkshopCard";
import Footer from "@/components/Footer";
import CompetitionCard from "@/components/CompetitionCard";
import { competition } from "@/constant/competitionCard";
import SocialMediaCard from "@/components/SocialMediaCard";
import NeonSquare from "@/components/NeonSquare";
import GallerySlider from "@/components/GallerySlider";
import { Link } from "react-router-dom";
import FrequentlyAskedQuestion from "./FAQ";

const RunningText = () => {
  return (
    <div className="flex flex-nowrap sm:gap-14 gap-7 items-center w-[230px] sm:w-[461px]">
      <img className="sm:w-24 w-12" src={logo} alt="" />
      <h1 className="bg-vertical-gta bg-clip-text text-transparent font-airstrike text-3xl  sm:text-[64px] pr-4">
        MAGE X
      </h1>
    </div>
  );
};

interface MascotNameProps extends React.ComponentPropsWithoutRef<"div"> {
  name: string;
}

const MascotName = ({ name, ...props }: MascotNameProps) => {
  return (
    <div
      className="bg-vertical-gta bg-clip-text leading-none text-transparent font-black font-roboto w-full text-[75px] sm:text-[120px] lg:text-[165px] flex justify-between"
      {...props}
    >
      {name.split("").map((char) => (
        <span>{char}</span>
      ))}
    </div>
  );
};

export default function Home() {
  const [runningRef, { width: runningWidth }] = useMeasure();
  const runningXTranslate = useMotionValue(0);
  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutControl = useAnimation();
  const [isAbout, setIsAbout] = useState(false);
  const competitionCardControl = useAnimation();
  const dragCompetitionControl = useDragControls();
  const [isCompetitionMore, setIsCompetitionMore] = useState(false);
  const [competitionCardRef, { width: competitionCardWidth }] = useMeasure();
  const [isFLip, setIsFLip] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const isAboutHandle = () => {
    setIsAbout(!isAbout);
  };
  useEffect(() => {
    if (isAbout) {
      aboutControl.start("popUp");
      aboutControl.start("blur");
    } else {
      aboutControl.start("popDown");
      aboutControl.start("noBlur");
    }
  });

  useEffect(() => {
    const runningFinalPosition =
      -runningWidth + 461 + window.innerWidth - (window.innerWidth % 461);

    const runningControls = animate(
      runningXTranslate,
      [0, runningFinalPosition],
      {
        duration: 15,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        repeatDelay: 0,
      }
    );

    return runningControls.stop;
  }, [runningWidth, runningXTranslate]);

  const handleComepetitionMore = () => {
    setIsCompetitionMore(true);
    if (!isCompetitionMore) {
      competitionCardControl.start("more");
    } else {
      // competitionCardControl.start("init");
    }
  };

  const handleFLip = (index: number) => {
    if (isCompetitionMore) {
      console.log("flip");
      setIsFLip((prev) => {
        const newFLip = [...prev];
        newFLip[index] = !newFLip[index];
        return newFLip;
      });
      competitionCardControl.start(index.toString());
      console.log(isFLip);
    }
  };

  const willChange = useWillChange();

  return (
    <main className="h-fit bg-gradient-to-r from-dark to-black overflow-clip">
      <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
        <defs>
          <linearGradient
            x1="50%"
            y1="92.034%"
            x2="50%"
            y2="7.2%"
            id="horizontal-gta"
          >
            <stop offset="0%" stop-color=" #435ECF" />
            <stop offset="35%" stop-color="#E24BB3" />
            <stop offset="100%" stop-color="#FF9433" />
          </linearGradient>
        </defs>
      </svg>
      <Navbar theme="black" />

      {/* start landing section */}
      <div className="bg-gradient-to-r from-dark to-black h-screen text-center relative overflow-clip -mt-[75px]">
        <motion.div
          initial={{ y: "-100vh", x: "-50%" }}
          animate={{ y: "40vh" }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
            delay: 0.5,
          }}
          className="bg-horizontal-gta rounded-full blur-2xl w-16 h-16 absolute left-1/2 z-10"
        />
        <div className="h-full flex flex-col justify-center items-center pb-16">
          <h1 className="bg-transparent-white-1 bg-clip-text text-transparent font-airstrike text-3xl sm:text-5xl md:text-6xl">
            MAGE
          </h1>
          <div className="flex items-center justify-center gap-[10px] pb-9">
            <motion.p
              className="bg-vertical-gta bg-clip-text text-transparent text-sm sm:text-2xl md:text-3xl font-fredoka font-medium"
              animate={{ filter: "grayscale(0)" }}
              initial={{ filter: "grayscale(100%)" }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.9,
              }}
            >
              A New Decade
            </motion.p>
            <motion.img
              src={gtaX}
              alt="x"
              className="w-[130px] md:w-[300px] sm:w-[200px]"
              animate={{ filter: "grayscale(0)" }}
              initial={{ filter: "grayscale(100%)" }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.9,
              }}
            />
            <motion.p
              className="bg-vertical-gta bg-clip-text text-transparent text-sm sm:text-2xl md:text-3xl font-fredoka font-medium"
              animate={{ filter: "grayscale(0)" }}
              initial={{ filter: "grayscale(100%)" }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.9,
              }}
            >
              A New Journey
            </motion.p>
          </div>
        </div>
        <RevealButton
          className="xl:-mt-[16%] lg:-mt-[20%] sm:-mt-[26%] -mt-[37%]"
          text="Tentang Mage"
          onClick={isAboutHandle}
        />

        <div className=" transition-all duration-500 ">
          <JustifyPuzzle
            src={puzzle1}
            className="absolute -bottom-[8.9vw] -left-[1.5vw] w-[18vw] "
            alt=""
          />
          <JustifyPuzzle
            rotate={5}
            y={-10}
            src={puzzle2}
            className="absolute -bottom-[8.9vw] left-[12.6vw] h-[18vw] z-10"
            alt=""
          />
          <JustifyPuzzle
            src={puzzle3}
            className="absolute -bottom-[8.4vw] left-[24.6vw] w-[20.4vw]"
            alt=""
          />
          <JustifyPuzzle
            src={puzzle4}
            className="absolute -bottom-[8.9vw] left-[41.3vw] h-[18vw]"
            alt=""
          />
          <JustifyPuzzle
            src={puzzle5}
            className="absolute -bottom-[8.4vw] left-[53.3vw] w-[20.4vw]"
            alt=""
          />
          <JustifyPuzzle
            x={30}
            y={-20}
            src={puzzle6}
            className="absolute -bottom-[8.9vw] left-[70vw] h-[18vw] z-10"
            alt=""
          />
          <JustifyPuzzle
            src={puzzle13}
            className="absolute -bottom-[8.9vw] left-[82vw] w-[18vw]"
            alt=""
          />

          <JustifyPuzzle
            src={puzzle7}
            className="absolute bottom-[2.6vw] -left-[1.5vw] w-[15.3vw]"
            alt=""
          />
          <JustifyPuzzle
            rotate={10}
            y={-40}
            src={puzzle8}
            className="absolute bottom-[5.3vw] left-[10vw]  w-[20.9vw]"
            alt=""
          />

          <JustifyPuzzle
            src={puzzle10}
            className="absolute bottom-[2.6vw] -right-[0.8vw] w-[15.3vw]"
            alt=""
          />
          <JustifyPuzzle
            rotate={-4}
            x={-20}
            src={puzzle9}
            className="absolute bottom-[5.3vw] right-[10.6vw]  w-[20.9vw]"
            alt=""
          />

          <JustifyPuzzle
            rotate={-103}
            x={40}
            y={-40}
            src={puzzle11}
            className="absolute bottom-[19.8vw] -left-[4.3vw]  w-[20.5vw]"
            alt=""
          />

          <JustifyPuzzle
            rotate={120}
            x={30}
            src={puzzle12}
            className="absolute bottom-[19.8vw] -right-[3.6vw]  w-[20.5vw]"
            alt=""
          />
        </div>
      </div>
      {/* end landing section */}

      {/* start about section */}
      <motion.div
        ref={aboutRef}
        className="fixed top-0 z-20"
        variants={{
          popUp: { top: 0 },
          popDown: { top: 1500 },
        }}
        initial="popDown"
        animate={aboutControl}
        transition={{
          duration: 0.5,
          ease: "circInOut",
        }}
      >
        <div className="w-screen h-screen flex flex-col justify-center items-center pt-6 px-6">
          <div className="sm:rounded-[50px] rounded-[25px] max-w-[1370px] border-4 border-[#323232] bg-dark mb-5 px-6 sm:px-20 py-8">
            <h1 className="font-roboto text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-light font-bold text-center mb-4">
              Discover the Depths of
              <span className="ml-4 bg-vertical-gta bg-clip-text text-transparent font-roboto font-black">
                MAGE
              </span>
            </h1>
            <p className="font-fredoka font-medium text-xs sm:text-base md:text-lg lg:text-xl text-center text-light mb-[30px]">
              MAGE ( Multimedia dan Game Event ) adalah suatu serangkaian acara
              yang diadakan oleh Departemen Teknik Komputer Fakultas dari FTEIC
              Institut Teknologi Sepuluh Nopember Surabaya yang meliputi
              perlombaan-perlombaan serta workshop. MAGE juga adalah media untuk
              pelajar dan akademisi dalam mengeksplor kreativitas, inovasi, dan
              kemampuan di berbagai bidang IT.
            </p>
            <GallerySlider />
          </div>
          <RevealButton
            text="Tutup"
            color="red"
            onClick={isAboutHandle}
            isAnimate={isAbout}
            className="mb-4"
          />
        </div>
      </motion.div>
      <motion.div
        ref={aboutRef}
        className="w-full h-screen z-10 fixed bg-black top-0"
        variants={{
          blur: { opacity: 0.8, display: "block" },
          noBlur: { opacity: 0, display: "none" },
        }}
        initial="noBlur"
        animate={aboutControl}
        transition={{
          duration: 0.5,
          ease: "circInOut",
        }}
      />
      {/* end about section */}

      <div className="bg-gray-1 h-fit text-center relative overflow-hidden pt-[25px] sm:pt-[50px] px-6 sm:p-14 md:px-16 lg:px-20 flex flex-col gap-8 sm:gap-10">
        {/* start running text section */}

        <motion.div
          ref={runningRef}
          className="flex flex-nowrap absolute left-0"
          style={{ x: runningXTranslate }}
        >
          {Array.from({ length: 9 }).map((_, index) => (
            <RunningText key={index} />
          ))}
        </motion.div>
        {/* end running text section */}

        {/* start infographic section */}
        <div className="flex flex-wrap gap-y-4 sm:gap-y-8 justify-evenly mt-[70px] sm:mt-[140px] mb-0 sm:mb-16">
          <InfoCard title="Event Terlaksana" value="10" />
          <InfoCard title="Total peserta" value="10000+" />
          <InfoCard title="Panitia berkontribusi setiap tahun" value="80+" />
          <InfoCard title="Sponsor & media partner terlibat" value="50+" />
        </div>
        {/* end infographic section */}

        {/* start timeline section */}
        <div className="relative pt-2 sm:pt-16">
          <div className="max-w-[350px] sm:max-w-[800px] mb-6">
            <h1 className="font-roboto text-[28px] sm:text-5xl md:text-6xl text-light font-bold text-start">
              Unravel Our
            </h1>
            <h1 className="bg-vertical-gta bg-clip-text text-transparent font-bold font-roboto w-fit text-[28px] sm:text-5xl md:text-6xl text-start mb-3 sm:mb-10">
              Event Schedule
            </h1>
            <p className="font-fredoka text-light text-[10px] sm:text-2xl opacity-50 text-start">
              Navigate through the chronological journey of MAGE X events.
              Discover the dates and details of this year’s workshops and
              competitions!
            </p>
          </div>
          <img
            src={puzzleGta}
            className="absolute h-[46px] sm:h-[100px] md:h-[135px] lg:h-[178px] top-0 right-0 rotate-[-135deg]"
            alt=""
          />
          <img
            src={puzzleGta}
            className="absolute top-[15vw] lg:top-[10vw] h-[31px] sm:h-[65px] md:h-[80px] lg:h-[101px] right-[15%]  lg:right-[18%] rotate-[135deg]"
            alt=""
          />
          <img
            src={puzzleGta}
            className="absolute top-[10vw] lg:top-[8vw] h-[20px] sm:h-[40px] md:h-[50px] lg:h-[66px] right-[30%] lg:right-[32%] rotate-[90deg]"
            alt=""
          />
          <div className="bg-light/10 rounded-lg sm:rounded-[20px] w-full h-fit py-2 sm:py-5 px-3 sm:px-[30px] flex justify-center items-center gap-4 mx-auto mb-6">
            <HiCursorClick className="text-xs sm:text-3xl text-light" />

            <p className="font-fredoka text-[10px] sm:text-2xl text-light">
              Swipe Left to See More Events
            </p>
          </div>
          <div className="h-[300px] sm:h-[450px] border-[5px] border-gray-2 rounded-[17px] sm:rounded-[35px] p-4 sm:p-10 overflow-hidden">
            <Timeline items={timeline} />
          </div>
        </div>
        {/* end timeline section */}

        {/* start workshop section */}
        <div className="py-3">
          <div className="flex flex-col justify-center items-center gap-2 sm:gap-[29px] w-full h-fit">
            <p className="text-center font-roboto text-[28px] sm:text-5xl md:text-6xl font-bold text-light max-w-[255px] sm:max-w-[545px]">
              Elevate Your Skills Through
              <span className="bg-vertical-gta text-transparent bg-clip-text ">
                {" "}
                Workshops
              </span>
            </p>
            <p className="text-center font-fredoka text-[10px] sm:text-2xl font-light opacity-50 text-light">
              Immerse yourself in a world of learning and innovation with our
              lineup of MAGE X workshops. Explore hands-on experiences, expert
              insights, and invaluable knowledge to sharpen your skills and stay
              ahead of the curve
            </p>
          </div>

          <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-3 sm:gap-[30px] mt-[27px] sm:mt-[56px]">
            <WorkshopCard title="Multimedia" to="/workshop">
              Master coding skills in many language
            </WorkshopCard>
            <WorkshopCard title="Internet of Things (IoT)" to="/workshop">
              Discover IoT and hands-on learning
            </WorkshopCard>
            <WorkshopCard title="Robotics" to="/workshop">
              Explore robotics basics for innovation
            </WorkshopCard>
          </div>
        </div>
        {/* end workshop section */}

        {/* start mascot section */}
        <div className="relative">
          <div className="w-full mb-[80px] sm:mb-[130px] text-center flex flex-col gap-0 sm:gap-2 justify-center items-center">
            <h1 className="font-roboto text-[28px] sm:text-5xl md:text-6xl text-light font-bold">
              Meet Our
            </h1>
            <h1 className="bg-vertical-gta bg-clip-text text-transparent font-bold font-roboto w-fit text-[28px] sm:text-5xl md:text-6xl mb-2 sm:mb-4">
              Futuristic Feline Bots!
            </h1>
            <p className="font-fredoka max-w-[1085px] text-light text-[10px] sm:text-2xl opacity-50">
              Blending the charm of felines with the power of technology,
              introducing our Mascot: EXE. EXE is a futuristic robotic-cat that
              will accompany your journey all throughout MAGE X!
            </p>
          </div>
          <div className="relative">
            <img
              src={mascot}
              className="absolute left-1/2 -translate-x-1/2 -top-12 z-10 w-[285px] sm:w-[400px] lg:w-[550px] "
              alt=""
            />
            <div className="w-full h-fit ">
              {Array.from({ length: 5 }).map((_, index) => (
                <MascotName
                  name="EXEEXE"
                  style={{
                    filter: `blur(${index * 2}px)`,
                    opacity: 1 - index / 4.5,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        {/* end mascot section */}

        {/* start competition section */}
        <div>
          <div className="flex flex-col justify-center items-center gap-3 sm:gap-[29px] mb-[19px] sm:mb-[45px]">
            <h1 className="text-center font-roboto text-[28px] sm:text-6xl font-bold max-w-[545px] text-light">
              Explore Our Exciting
              <span className="bg-vertical-gta text-transparent bg-clip-text ">
                {" "}
                Competitions
              </span>
            </h1>
            <p className="font-fredoka max-w-[1085px] text-light text-[10px] sm:text-2xl opacity-50">
              Show your talent and innovative ideas to compete in our
              competitions for all skill levels and interests. Contribute to the
              future of technology with MAGE X!
            </p>
            <div className="bg-light/50 rounded-lg sm:rounded-[20px] w-fit h-fit py-2 sm:py-5 px-3 sm:px-[30px] flex justify-center items-center gap-4">
              <HiCursorClick className="text-xs sm:text-3xl text-light" />

              <p className="font-fredoka text-[10px] sm:text-2xl text-light">
                Click or Touch the Cards to View All Competitions
              </p>
            </div>
          </div>
          <motion.div className="w-full h-[39vw] lg:h-[32vw] overflow-hidden relative">
            <motion.div
              onClick={handleComepetitionMore}
              drag="x"
              dragListener={isCompetitionMore}
              dragConstraints={{
                left:
                  -competition.length *
                    (competitionCardWidth - innerWidth / 12) +
                  window.innerWidth -
                  150,
                right: 0,
              }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 100 }}
              dragControls={dragCompetitionControl}
              dragMomentum={false}
              className="flex flex-nowrap h-full w-full"
              style={{ willChange }}
            >
              {competition.map((item, index) => (
                <div className="w-fit h-fit">
                  <CompetitionCard
                    ref={competitionCardRef}
                    {...item}
                    onClick={() => handleFLip(index)}
                    isFlipped={isFLip[index]}
                    theme={index % 2 == 0 ? "orange" : "purple"}
                    initial="init"
                    variants={{
                      more: {
                        left: index * (competitionCardWidth - innerWidth / 12),
                        x: 0,
                        rotate: 0,
                        scale: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                          ease: "easeInOut",
                        },
                      },
                      init: {
                        position: "absolute",
                        bottom: "0%",
                        x: `${-50 + 30 * (index - 3)}%`,
                        y: `${4 + 4 * Math.abs(index - 3)}vw`,
                        left: "50%",
                        scale: 1.15,
                        rotate: 4 * (index - 3) + "deg",
                        zIndex: -2 * Math.abs(index - 3) + 10,
                      },
                      [index]: {
                        rotateY: isFLip[index] ? 0 : 180,
                        transition: {
                          duration: 0.7,
                          ease: "easeInOut",
                        },
                      },
                    }}
                    animate={competitionCardControl}
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        {/* end competition section */}

        {/* start socialmedia section */}
        <div className="flex flex-col items-center gap-10 w-full px-[30px] sm:px-[51px] py-0 sm:py-20 mb-0 sm:mb-12  relative">
          <div className="flex flex-col w-full items-center text-center sm:mb-14">
            <div className="flex flex-col sm:gap-2 mb-2 sm:mb-[29px]">
              <p className="text-white font-roboto font-bold text-[28px] sm:text-6xl">
                Stay Connected On
              </p>
              <p className="text-white font-roboto font-bold text-[28px] sm:text-6xl">
                Our{" "}
                <span className=" bg-vertical-gta text-transparent bg-clip-text">
                  Social Media
                </span>
              </p>
            </div>
            <p className="text-white text-opacity-50 font-fredoka font-light text-[10px] sm:text-2xl">
              Get our latest update from another social media platform.
            </p>
            <p className="text-white text-opacity-50 font-fredoka font-light text-[10px] sm:text-2xl">
              Stay informed, get inspired, and be a part of our journey.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 lg:gap-28 mb-56 sm:mb-80 lg:mb-40 xl:mb-0 w-full">
            <div className="grid lg:flex flex-row lg:justify-between w-full gap-6">
              <div className="relative">
                <SocialMediaCard
                  href="https://www.instagram.com/mage_its"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  description="mage_its"
                  img={ig}
                  className="relative z-10"
                  rotate={innerWidth > 1024 ? 5.684 : 0}
                />
                <SocialMediaCard
                  href="https://www.instagram.com/mage_its"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  description="mage_its"
                  img={ig}
                  rotate={innerWidth > 1024 ? 5.684 : 0}
                  className="absolute scale-[1.05] top-0 left-0 blur-lg animate-pulse"
                />
              </div>

              <div className="relative justify-self-end">
                <SocialMediaCard
                  href="mailto:mage.ce.its@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Email"
                  description="mage.ce.its@gmail.com"
                  img={mail}
                  className="relative z-10 "
                  rotate={innerWidth > 1024 ? -3.62 : 0}
                />
                <SocialMediaCard
                  href="mailto:mage.ce.its@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Email"
                  description="mage.ce.its@gmail.com"
                  img={mail}
                  className="absolute scale-[1.05] top-0 left-0 blur-lg animate-pulse"
                  rotate={innerWidth > 1024 ? -3.62 : 0}
                />
              </div>
            </div>

            <div className="grid lg:flex flex-row lg:justify-between w-full gap-6">
              <div className="relative">
                <SocialMediaCard
                  href="https://www.tiktok.com/@magex_its"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Tiktok"
                  description="magex_its"
                  img={tiktok}
                  className="relative z-10 xl:ml-[53%]"
                  rotate={innerWidth > 1024 ? -3.62 : 0}
                />
                <SocialMediaCard
                  href="https://www.tiktok.com/@magex_its"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Tiktok"
                  description="magex_its"
                  img={tiktok}
                  className="absolute scale-[1.05] top-0 left-0 blur-lg animate-pulse xl:ml-[53%]"
                  rotate={innerWidth > 1024 ? -3.62 : 0}
                />
              </div>
              <div className="relative justify-self-end">
                <SocialMediaCard
                  href="https://line.me/R/ti/p/rio5948f"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Line"
                  description="@rio5498f"
                  img={line}
                  className="relative z-10 xl:-ml-[53%]"
                  rotate={innerWidth > 1024 ? 6.44 : 0}
                />
                <SocialMediaCard
                  href="https://line.me/R/ti/p/@rio5948f"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Line"
                  description="@rio5498f"
                  img={line}
                  className="absolute scale-[1.05] top-0 left-0 blur-lg animate-pulse  xl:-ml-[53%]"
                  rotate={innerWidth > 1024 ? 6.44 : 0}
                />
              </div>
            </div>
            <div className="w-full grid lg:flex lg:justify-center">
              <div className="relative">
                <SocialMediaCard
                  href="https://www.linkedin.com/company/mage-x"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Linkedin"
                  description="mage_its"
                  img={linkedin}
                  className="relative z-10"
                />
                <SocialMediaCard
                  href="https://www.linkedin.com/company/mage-x"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Linkedin"
                  description="mage_its"
                  img={linkedin}
                  className="absolute scale-[1.05] top-0 left-0 blur-lg animate-pulse"
                />
              </div>
            </div>
          </div>
          <NeonSquare className="absolute -left-[2%] sm:left-[3%] bottom-24 sm:bottom-56 z-10 scale-[0.6] sm:scale-[1.5] rotate-[20deg]" />
          <NeonSquare className="absolute left-[15%] sm:left-[25%] bottom-10 sm:bottom-20 z-10 scale-[0.4] sm:scale-[0.8] rotate-[-45deg]" />
          <NeonSquare className="absolute left-[30%] sm:left-[38%] bottom-4 sm:-bottom-8 z-10 scale-[0.2] sm:scale-[0.4] rotate-[50deg]" />
          <NeonSquare className="absolute -bottom-4 sm:-bottom-20 z-10 sm:scale-[0.2] scale-[0.1] rotate-[50deg]" />
          <NeonSquare className="absolute right-[30%] sm:right-[38%] bottom-4 sm:-bottom-8 z-10 scale-[0.2] sm:scale-[0.4] rotate-[40deg]" />
          <NeonSquare className="absolute right-[15%] sm:right-[25%] bottom-10 sm:bottom-20 z-10 scale-[0.4] sm:scale-[0.8] rotate-[45deg]" />
          <NeonSquare className="absolute -right-[2%] sm:right-[3%] bottom-24 sm:bottom-56 z-10 scale-[0.6] sm:scale-[1.5] rotate-[-20deg]" />
        </div>
        {/* end socialmedia section */}
        <div className="w-fit h-fit bg-gray-1 mx-auto p-4 z-10">
          <div className="font-roboto lg:text-[80px] sm:text-[60px] font-bold">
            <span className="bg-vertical-gta bg-clip-text text-transparent font-bold font-roboto w-fit text-3xl sm:text-5xl md:text-6xl">
              Thank You
            </span>
          </div>
          <div className="text-white font-roboto font-bold text-[10px] sm:text-base md:text-xl z-10">
            <span>To All Sponsors and Media Partner!</span>
          </div>
        </div>
        <div className="lg:h-[672px] sm:h-[372px] p-2 bg-vertical-gta place-items-center rounded-[10px] mt-[-80px] sm:mt-[-120px] md:mt-[-130px] z-0">
          <div className="bg-gray-1 w-full h-full rounded-[10px] pt-5">
            <img
              src={jagoTeknik}
              className="lg:w-[600px] md:w-[400px] sm:w-[300px] w-[200px] mx-auto"
            />
          </div>
        </div>

        <div className="bg-vertical-gta h-fit rounded-xl md:rounded-[40px] py-[15px] sm:py-[38px] relative overflow-hidden mt-10">
          <div className="relative z-10">
            <h1 className="font-roboto font-bold text-xl sm:text-3xl lg:text-5xl text-light mb-2">
              Your Journey Begins Here!
            </h1>
            <p className="font-fredoka text-[8px] sm:text-sm lg:text-xl text-light mb-[21px] sm:mb-[77px]">
              Challenge yourself and compete with the best!
            </p>
            <button className="flex items-center gap-2 sm:gap-3.5 mx-auto rounded-full py-[5px] sm:py-[13px] px-2 sm:px-5 bg-dark">
              <Link to="dashboard/home">
                <p className="font-fredoka text-[8px] sm:text-base lg:text-xl text-light">
                  {" "}
                  Register Now!
                </p>
              </Link>
              <IoArrowForwardCircleOutline className="text-xs sm:text-3xl text-light" />
            </button>
          </div>
          <img
            src={puzzleFooter}
            alt=""
            className="absolute top-0 -left-10 sm:-left-32 lg:-left-20 xl:left-0 h-full"
          />
          <img
            src={puzzleFooter}
            alt=""
            className="absolute top-0 -right-10 sm:-right-32 lg:-right-20 xl:right-0 rotate-180 h-full"
          />
        </div>
      </div>
      <FrequentlyAskedQuestion/>
      <Footer />
    </main>
  );
}
