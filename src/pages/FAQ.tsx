import cn from "@/utils/cn";
import { useState } from "react";
import puzzleUp1 from "@/assets/faq/puzzleTop1.svg"
import puzzleUp2 from "@/assets/faq/puzzleTop2.svg"
import puzzleBottom1 from "@/assets/faq/puzzleBottom1.svg"
import puzzleBottom2 from "@/assets/faq/puzzleBottom2.svg"

import { 
  AppDevelopmentFAQ,
  GameDevelopmentFAQ,
  GeneralFAQ,
  RoboticFAQ,
  IotFAQ,
} from "@/components/FAQ/FaqCard";

export default function FrequentlyAskedQuestion() {
  const [status, setStatus] = useState("gamedev")
  const handleClickedGeneral = () => {
    if(status != "general"){
      setStatus("general")
    }
  }
  const handleClickedAppDev = () => {
    if(status != "appdev"){
      setStatus("appdev")
    }
  }
  const handleClickedGameDev = () => {
    if(status != "gamedev"){
      setStatus("gamedev")
    }
  }
  const handleClickedIot = () => {
    if(status != "iot"){
      setStatus("iot")
    }
  }
  const handleClickedRobotic = () => {
    if(status != "robotic"){
      setStatus("robotic")
    }
  }
  
  return(
    <>
        <div className="relative h-fit bg-black-pink overflow-hidden">
          <img 
            src={puzzleUp1}
            className="absolute top-[7.8vw] left-[3.8vw] opacity-20 lg:block mobile:hidden">
          </img>
          <img 
            src={puzzleUp2}
            className="absolute top-0 left-[25.2vw] opacity-20 rotate-45 lg:block mobile:hidden">
          </img>
          <img 
            src={puzzleUp1}
            className="absolute top-0 left-2/3 opacity-20 lg:block mobile:hidden">
          </img>
          <img 
            src={puzzleUp2}
            className="absolute top-[22vw] right-[-2vw] opacity-20 rotate-180 lg:block mobile:hidden">
          </img>
          <img 
            src={puzzleUp1}
            className="absolute top-[23vw] left-[-4vw] opacity-20 rotate-180 lg:block mobile:hidden">
          </img>
          <img 
            src={puzzleUp1}
            className="absolute top-[90px] right-[6vw] opacity-20 rotate-45 lg:block mobile:hidden">
          </img>
          <img 
            src={puzzleBottom1}
            className="absolute bottom-0 left-[6.8vw] opacity-10 lg:block mobile:hidden">
          </img>
          <img 
            src={puzzleBottom2}
            className="absolute bottom-[10vw] left-[-4.8vw] opacity-10 lg:block mobile:hidden">
          </img>
          <img 
            src={puzzleBottom1}
            className="absolute bottom-[15vw] right-[-4.8vw] opacity-10 lg:block mobile:hidden">
          </img>
          <img 
            src={puzzleBottom2}
            className="absolute bottom-0 left-[46.8vw] opacity-10 lg:block mobile:hidden">
          </img>
          <img 
            src={puzzleBottom1}
            className="absolute bottom-[4.8vw] right-[6.8vw] opacity-10 rotate-180 lg:block mobile:hidden">
          </img>
          <img 
            src={puzzleBottom2}
            className="absolute bottom-[6.8vw] right-[24.8vw] opacity-10 rotate-180 lg:block mobile:hidden">
          </img>
          <img 
            src={puzzleBottom1}
            className="absolute bottom-[-3.8vw] right-[20.8vw] opacity-10 rotate-12 lg:block mobile:hidden">
          </img>
          <img 
            src={puzzleBottom1}
            className="absolute bottom-[-4.8vw] left-[21.8vw] opacity-10 rotate-180 lg:block mobile:hidden">
          </img>
          <img 
            src={puzzleBottom2}
            className="absolute bottom-[4.8vw] left-[28.8vw] opacity-10 rotate-180 lg:block mobile:hidden">
          </img>

          <div className="w-auto grid justify-center text-center mx-auto mt-[100px]">
            <p className="text-light font-fredoka text-[64px] font-semibold">FAQ</p>
            <p className="text-light font-fredoka text-xl font-medium">Most things to ask to US</p>
          </div>

          <div className="lg:w-screen mobile:w-screen ipad:w-screen md:w-screen flex justify-center lg:gap-[30px] mobile:gap-[4px] mx-auto mt-[38px] z-10">
            <div 
              onClick={handleClickedGeneral}
              className={cn("lg:w-[90px] sm:w-fit lg:h-[27px] sm:h-fit  rounded-[30px] py-[5px] px-[10px] text-center cursor-pointer z-10 transition ease-linear hover:-translate-y-2",
                {"bg-horizontal-gta": status == "general"},
                {"bg-[#383838]": status != "general"}
              )}>
              <p className="text-light font-fredoka text-sm font-medium">General</p>
            </div>
            <div 
              onClick={handleClickedAppDev}
              className={cn("lg:w-[90px] sm:w-fit lg:h-[27px] sm:h-fit rounded-[30px] py-[5px] px-[10px] text-center cursor-pointer z-10 transition ease-linear hover:-translate-y-2",
                {"bg-horizontal-gta": status == "appdev"},
                {"bg-[#383838]": status != "appdev"}
              )}>
              <p className="text-light font-fredoka text-sm font-medium">App Dev</p>
            </div>
            <div 
              onClick={handleClickedGameDev}
              className={cn("lg:w-[90px] sm:w-fit lg:h-[27px] sm:h-fit rounded-[30px] py-[5px] px-[10px] text-center cursor-pointer z-10 transition ease-linear hover:-translate-y-2",
                {"bg-horizontal-gta": status == "gamedev"},
                {"bg-[#383838]": status != "gamedev"}
              )}>
              <p className="text-light font-fredoka text-sm font-medium">Game Dev</p>
            </div>
            <div 
              onClick={handleClickedIot}
              className={cn("lg:w-[90px] sm:w-fit lg:h-[27px] sm:h-fit rounded-[30px] py-[5px] px-[10px] text-center cursor-pointer z-10 transition ease-linear hover:-translate-y-2",
                {"bg-horizontal-gta": status == "iot"},
                {"bg-[#383838]": status != "iot"}
              )}>
              <p className="text-light font-fredoka text-sm font-medium">IoT</p>
            </div>
            <div 
              onClick={handleClickedRobotic}
              className={cn("lg:w-[90px] sm:w-fit lg:h-[27px] sm:h-fit rounded-[30px] py-[5px] px-[10px] text-center cursor-pointer z-10 transition ease-linear hover:-translate-y-2",
                {"bg-horizontal-gta": status == "robotic"},
                {"bg-[#383838]": status != "robotic"}
              )}>
              <p className="text-light font-fredoka text-sm font-medium">Robotic</p>
            </div>
          </div>
          
          <div className="lg:w-[1150px] mobile:w-[330px] md:w-[680px] h-fit lg:px-[120px] lg:py-[50px] mobile:px-[40px] mobile:py-[20px]  bg-[#0C0C0C] opacity-80 rounded-[15px] mt-[15px] mb-[129px] mx-auto">
            {status == "general" && <GeneralFAQ/>}
            {status == "appdev" && <AppDevelopmentFAQ/>}
            {status == "gamedev" && <GameDevelopmentFAQ/>}
            {status == "iot" && <IotFAQ/>}
            {status == "robotic" && <RoboticFAQ/>}
          </div>
        </div>
    </>
  )
}