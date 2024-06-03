import { Navbar } from "@/components/Navbar"
import gtaX from "@/assets/brand/gtaX.svg";
import {  animate, motion, useAnimation, useMotionValue } from 'framer-motion';
import logo from "@/assets/brand/logo.svg";
import puzzle1 from "@/assets/components/puzzle1.svg";
import puzzle2 from "@/assets/components/puzzle2.svg";
import puzzle3 from "@/assets/components/puzzle3.svg";
import puzzle4 from "@/assets/components/puzzle4.svg";
import puzzle5 from "@/assets/components/puzzle5.svg";
import puzzle6 from "@/assets/components/puzzle6.svg";
import puzzle7 from "@/assets/components/puzzle7.svg";
import puzzle8 from "@/assets/components/puzzle8.svg";
import puzzle9 from "@/assets/components/puzzle9.svg";
import puzzle10 from "@/assets/components/puzzle10.svg";
import puzzle11 from "@/assets/components/puzzle11.svg";
import puzzle12 from "@/assets/components/puzzle12.svg";
import puzzle13 from "@/assets/components/puzzle13.svg";

import Juara1App9 from '@/assets/gallery/Juara1App9.png'
import Juara1Iot9 from '@/assets/gallery/Juara1Iot9.png'
import Juara1Robotic9 from '@/assets/gallery/Juara1Robotic9.png'
import Juara1Game5 from '@/assets/gallery/Juara1Game5.png'
import Juara1Iot5 from '@/assets/gallery/Juara1Iot5.png'
import Juara2App5 from '@/assets/gallery/Juara2App5.png'

import { FaAngleRight, FaAngleLeft, FaComment  } from "react-icons/fa6";
import { JustifyPuzzle } from "@/components/JustifyPuzzle";
import { useEffect, useRef, useState } from "react";
import { RevealButton } from "@/components/RevealButton";
import AboutCard from "./AboutCard";
import useMeasure from "react-use-measure";
import InfoCard from "@/components/InfoCard";
import Timeline, { TimelineCard } from "@/components/Timeline";
import { timeline } from "@/constant/timeline";

const RunningText = () => {
  return (
    <div className="flex flex-nowrap gap-14 items-center w-[461px]">
      <img className="w-24" src={logo} alt="" />
      <h1 className="bg-vertical-gta bg-clip-text text-transparent font-airstrike text-[64px] pr-4">
        MAGE X
      </h1>
    </div>
  )
}

export default function Home() {
  const [runningRef, { width: runningWidth }] = useMeasure()
  const [timlineRef, { width: timelineWidth }] = useMeasure()
  const runningXTranslate = useMotionValue(0)
  const aboutRef = useRef<HTMLDivElement>(null)
  const aboutControl = useAnimation()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAbout, setIsAbout] = useState(false)
  
  const isAboutHandle = () => {
    setIsAbout(!isAbout)
  }
  useEffect(() => {
    if(isAbout) {
      aboutControl.start("popUp")
      aboutControl.start("blur")
    } else {
      aboutControl.start("popDown")
      aboutControl.start("noBlur")
    }
  })

  useEffect(() => {
    const runningFinalPosition = -runningWidth+ 461 + window.innerWidth - ( window.innerWidth % 461);
    console.log(runningFinalPosition)

    const runningControls = animate(runningXTranslate,[0, runningFinalPosition], {
      duration: 15,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
      repeatDelay: 0,
    })

    return runningControls.stop;
  }, [runningWidth, runningXTranslate])

  const incrementSlide = () => {
    setCurrentSlide((prev) => prev + 1)
  }

  const decrementSlide = () => {
    setCurrentSlide((prev) => prev - 1)
  }

  return (
    <main className="h-fit bg-gradient-to-r from-dark to-black">
      <svg xmlns='http://www.w3.org/2000/svg' width="0" height="0">
        <defs>
          <linearGradient x1="50%" y1="92.034%" x2="50%" y2="7.2%" id="horizontal-gta">
            <stop offset="0%" stop-color=" #435ECF" />
            <stop offset="35%" stop-color="#E24BB3" />
            <stop offset="100%" stop-color="#FF9433" />
          </linearGradient>
        </defs>
      </svg>
      <Navbar theme="black"/>

      <div className="bg-gradient-to-r from-dark to-black h-screen text-center relative overflow-clip">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 300 }}
          transition={{ 
            duration: 0.2,
            ease: "easeOut",
            delay: 0.5
          }}
          className="bg-horizontal-gta rounded-full blur-2xl w-16 h-16 absolute right-[49%] z-10"
        />
        <div className="">
          <h1 className="bg-transparent-white-1 bg-clip-text text-transparent font-airstrike text-[60px] -mb-6 pt-20">
            MAGE
          </h1>
            <div className="flex items-center justify-center gap-[10px]">
            <motion.p 
              className="bg-vertical-gta bg-clip-text text-transparent text-[30px] font-fredoka font-medium"
              animate={{ filter: "grayscale(0)" }}
              initial={{ filter: "grayscale(100%)" }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.9
              }}
            >
              A New Decade
            </motion.p>
            <motion.img
              src={gtaX}
              alt="x"
              animate={{ filter: "grayscale(0)" }}
              initial={{ filter: "grayscale(100%)" }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.9
              }}
            />
            <motion.p 
              className="bg-vertical-gta bg-clip-text text-transparent text-[30px] font-fredoka font-medium"
              animate={{ filter: "grayscale(0)" }}
              initial={{ filter: "grayscale(100%)" }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.9
              }}
            >
              A New Journey
            </motion.p>
          </div>
        </div>
        <RevealButton text="Tentang Mage" onClick={isAboutHandle}/>
        <div className=" transition-all duration-500 ">
            <JustifyPuzzle src={puzzle1} className="absolute -bottom-[8.9vw] -left-[1.5vw] w-[18vw] " alt="" />
            <JustifyPuzzle rotate={5} y={-10} src={puzzle2} className="absolute -bottom-[8.9vw] left-[12.6vw] h-[18vw] z-10" alt="" />
            <JustifyPuzzle src={puzzle3} className="absolute -bottom-[8.4vw] left-[24.6vw] w-[20.4vw]" alt="" />
            <JustifyPuzzle src={puzzle4} className="absolute -bottom-[8.9vw] left-[41.3vw] h-[18vw]" alt="" />
            <JustifyPuzzle src={puzzle5} className="absolute -bottom-[8.4vw] left-[53.3vw] w-[20.4vw]" alt="" />
            <JustifyPuzzle x={30} y={-20} src={puzzle6} className="absolute -bottom-[8.9vw] left-[70vw] h-[18vw] z-10" alt="" />
            <JustifyPuzzle src={puzzle13} className="absolute -bottom-[8.9vw] left-[82vw] w-[18vw]" alt="" />

            <JustifyPuzzle src={puzzle7} className="absolute bottom-[2.6vw] -left-[1.5vw] w-[15.3vw]" alt="" />
            <JustifyPuzzle rotate={10} y={-40} src={puzzle8} className="absolute bottom-[5.3vw] left-[10vw]  w-[20.9vw]" alt="" />

            <JustifyPuzzle src={puzzle10} className="absolute bottom-[2.6vw] -right-[0.8vw] w-[15.3vw]" alt="" />
            <JustifyPuzzle rotate={-4} x={-20} src={puzzle9} className="absolute bottom-[5.3vw] right-[10.6vw]  w-[20.9vw]" alt="" />

            <JustifyPuzzle rotate={-103} x={40} y={-40} src={puzzle11} className="absolute bottom-[19.8vw] -left-[4.3vw]  w-[20.5vw]" alt=""/>

            <JustifyPuzzle rotate={120} x={30} src={puzzle12} className="absolute bottom-[19.8vw] -right-[3.6vw]  w-[20.5vw]" alt="" />
        </div>
      </div>
      <motion.div 
        ref={aboutRef}
        className="fixed top-0 z-20"
        variants={{
          popUp: {top: 0},
          popDown: {top: 1500}
        }}
        initial="popDown"
        animate={aboutControl}
        transition={{
          duration: 0.5,
          ease: "circInOut"
        }}
      >
        <div className="w-screen h-screen flex flex-col justify-center items-center pt-4">
        <div className="rounded-[50px] max-w-[1370px] border-4 border-[#323232] bg-dark h-full mb-5 pt-[20px] px-20 pb-[10px]">
          <h1 className="font-roboto text-[50px] text-light font-bold text-center mb-4">
            Discover the Depths of 
            <span className="ml-4 bg-vertical-gta bg-clip-text text-transparent font-roboto font-black">MAGE</span>
          </h1>
          <p className="font-fredoka font-medium text-xl text-center text-light mb-[30px]">
            MAGE ( Multimedia dan Game Event ) adalah suatu serangkaian acara yang diadakan oleh Departemen Teknik 
            Komputer Fakultas dari FTEIC Institut Teknologi Sepuluh Nopember Surabaya yang meliputi perlombaan-perlombaan
            serta workshop. MAGE juga adalah media untuk pelajar dan akademisi dalam mengeksplor kreativitas, inovasi, 
            dan kemampuan di berbagai bidang IT.
          </p>
          <div className="overflow-hidden">
            <motion.div 
              className="flex flex-nowrap gap-4 mb-9"
              animate={{ x: -currentSlide * 405 * 3 }}
            >
              <div className="flex gap-4 justify-center">
                <AboutCard title="MAGE 9" desc="Juara 1: App Development kategori Mahasiswa" img={Juara1App9}/>
                <AboutCard title="MAGE 9" desc="Tim TEKERJET CAROX’Z meraih Juara 1 pada kompetisi Robotic" img={Juara1Robotic9}/>
                <AboutCard title="MAGE 9" desc="Tim TheNextWay meraih Juara 1 pada kompetisi IoT" img={Juara1Iot9}/>
              </div>
              
              <div className="flex gap-4 justify-center">
                <AboutCard title="MAGE 5" desc="Mahasiswa Telkom University menjadi juara pada sebuah event skala nasional yang terselenggara di Institut Teknologi Sepuluh November (ITS) Surabaya, yaitu Multimedia and Game Event (MAGE) 5." img={Juara1Iot5}/>
                <AboutCard title="MAGE 5" desc="Mendominasi di Final, Tim AMCC Universitas Amikom Yogyakarta Juara MAGE 5 di Institut Teknologi Sepuluh November Surabaya" img={Juara2App5}/>
                <AboutCard title="MAGE 5" desc="Tim GAT Juara 1 pada Kompetisi Multimedia and Game Event (MAGE) 5" img={Juara1Game5}/>
              </div>

            </motion.div>
          </div>
          <div className="flex justify-between items-center">
            <motion.button 
              className="w-[44px] h-[44px] rounded-full bg-light flex justify-center items-center" 
              onClick={decrementSlide} 
              disabled={currentSlide == 0}
              animate={{ opacity: currentSlide == 0 ? 0.5 : 1}}
            >
                <FaAngleLeft className="text-[30px]" fill="url(#horizontal-gta)"/>
            </motion.button>
            <div className="flex gap-2.5">
              <motion.div
                className="w-[180px] h-4 bg-light rounded-full"
                animate={{ width: currentSlide == 0 ? 180 : 16}}
              />
              <motion.div
                className="w-4 h-4 bg-gray-1 rounded-full"
                animate={{ width: currentSlide == 1 ? 180 : 16}}
              />
            </div>
            <motion.button 
              className="w-[44px] h-[44px] rounded-full bg-light flex justify-center items-center" 
              onClick={incrementSlide} 
              disabled={currentSlide == 1}
              animate={{ opacity: currentSlide == 1 ? 0.5 : 1}}
            >
                <FaAngleRight className="text-[30px]" fill="url(#horizontal-gta)"/>
            </motion.button>
          </div>
        </div>
        <RevealButton text="Tutup" color="red" onClick={isAboutHandle} isAnimate={isAbout} className="mb-4"/>
        </div>
      </motion.div>
      <motion.div 
        ref={aboutRef}
        className="w-full h-screen z-10 fixed bg-black top-0"
        variants={{
          blur: {opacity: 0.8, display: "block"},
          noBlur: {opacity: 0, display: "none"}
        }}
        initial="noBlur"
        animate={aboutControl}
        transition={{
          duration: 0.5,
          ease: "circInOut"
        }}
      >

      </motion.div>
      <div className="bg-black h-fit text-center relative overflow-hidden pt-[50px] px-20">
        <motion.div ref={runningRef} className="flex flex-nowrap absolute left-0" style={{x: runningXTranslate}}>
        {Array.from({ length: 9 }).map((_, index) => (
          <RunningText key={index} />
        ))}
        </motion.div>

        <div className="flex flex-wrap gap-y-8 justify-evenly mt-[150px] mb-28">
          <InfoCard title="Event Terlaksana" value="10"/>
          <InfoCard title="Peserta Terdaftar Setiap Tahun" value="50+"/>
          <InfoCard title="Panitia berkontribusi setiap tahun" value="80+"/>
          <InfoCard title="Sponsor & media partner terlibat" value="50+"/>
        </div>
        <div className="w-[800px] mb-6">
          <h1 className="font-roboto text-6xl text-light font-bold text-start">
            Unravel Our
          </h1>
          <h1 className="bg-vertical-gta bg-clip-text text-transparent font-bold font-roboto w-fit text-6xl text-start mb-8">Event Schedule</h1>
          <p className="font-fredoka text-light text-2xl text-start">
            Navigate through the chronological journey of MAGE X events.
            Discover the dates and details of this year’s workshops and competitions!
          </p>
        </div>
        <div className="h-[450px] border-[5px] border-gray-1 rounded-[35px] p-10 overflow-hidden">
          <Timeline items={timeline}/>
        </div>
      </div>
    </main>
  );
}