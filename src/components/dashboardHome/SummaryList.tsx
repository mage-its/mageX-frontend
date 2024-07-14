import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "@/assets/dashboardHome/summaryLogo.svg";
import TrophyLogo from "@/assets/dashboardHome/trophyLogo.svg";
import useDragScroll from "./useDragScroll"; // Import the custom hook
import RollButton from "@/assets/dashboardHome/summaryRollButton.svg";

interface SummaryProps {
  id: number;
  title: string;
  content: string[];
  date: string;
  logo: string;
}

interface CompetitionProps extends SummaryProps {}

interface WorkshopProps extends SummaryProps {}

const Competition: React.FC<{ competition: CompetitionProps }> = ({
  competition,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-2">
      <div className="flex justify-between items-center p-[0.5rem] rounded-[1rem] bg-light cursor-pointer">
        <div>
          <div className="relative flex justify-center select-none">
            <span
              style={{
                position: "absolute",
                color: "transparent",
                textShadow: `
                                0 0 0 #FFFFFF, 
                                1px 1px 0 #FFFFFF, 
                                -1px -1px 0 #FFFFFF, 
                                1px -1px 0 #FFFFFF, 
                                -1px 1px 0 #FFFFFF,
                                2px 2px 0 #FFFFFF,
                                -2px -2px 0 #FFFFFF,
                                2px -2px 0 #FFFFFF,
                                -2px 2px 0 #FFFFFF,
                                6px 6px 6px #cA4F14,
                                12px 12px 12px #cA4F14
                            `,
                pointerEvents: "none",
                zIndex: -1,
              }}
              className="font-airstrike font-italic font-bold text-center w-full inline-block text-[20px]"
            >
              {competition.title}
            </span>
            <span
              style={{
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
              className="font-airstrike font-italic font-bold text-justify w-full bg-blue-purple-orange-1 inline-block text-[20px]"
            >
              {competition.title}
            </span>
          </div>
          <div className="flex">
            <img
              src={competition.logo}
              alt="Competition Logo"
              className="w-8 h-8 mr-2"
            />
          </div>
        </div>

        <motion.img
          src={RollButton}
          onClick={() => setIsOpen(!isOpen)}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ height: { duration: 0.5 }, opacity: { duration: 0.5 } }}
        className="overflow-hidden"
      >
        <div className="p-4 bg-dark">
          {competition.content.map((item, index) => (
            <div key={index} className="text-light my-2">
              <span className="material-icons mr-2">person</span>
              {item}
            </div>
          ))}
          <div className="text-light text-sm">{competition.date}</div>
        </div>
      </motion.div>
    </div>
  );
};

const Workshop: React.FC<{ workshop: WorkshopProps }> = ({ workshop }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-2">
      <div className="flex justify-between items-center p-[0.5rem] rounded-[1rem] bg-light cursor-pointer">
        <div>
          <div className="relative flex justify-center select-none">
            <span
              style={{
                position: "absolute",
                color: "transparent",
                textShadow: `
                                0 0 0 #FFFFFF, 
                                1px 1px 0 #FFFFFF, 
                                -1px -1px 0 #FFFFFF, 
                                1px -1px 0 #FFFFFF, 
                                -1px 1px 0 #FFFFFF,
                                2px 2px 0 #FFFFFF,
                                -2px -2px 0 #FFFFFF,
                                2px -2px 0 #FFFFFF,
                                -2px 2px 0 #FFFFFF,
                                6px 6px 6px #cA4F14,
                                12px 12px 12px #cA4F14
                            `,
                pointerEvents: "none",
                zIndex: -1,
              }}
              className="font-airstrike font-italic font-bold text-center w-full inline-block text-[20px]"
            >
              {workshop.title}
            </span>
            <span
              style={{
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
              className="font-airstrike font-italic font-bold text-justify w-full bg-blue-purple-orange-1 inline-block text-[20px]"
            >
              {workshop.title}
            </span>
          </div>
          <div className="flex">
            <img
              src={workshop.logo}
              alt="Workshop Logo"
              className="w-8 h-8 mr-2"
            />
          </div>
        </div>

        <motion.img
          src={RollButton}
          onClick={() => setIsOpen(!isOpen)}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ height: { duration: 0.5 }, opacity: { duration: 0.5 } }}
        className="overflow-hidden"
      >
        <div className="p-4 bg-dark">
          {workshop.content.map((item, index) => (
            <div key={index} className="text-light my-2">
              <span className="material-icons mr-2">person</span>
              {item}
            </div>
          ))}
          <div className="text-light text-sm">{workshop.date}</div>
        </div>
      </motion.div>
    </div>
  );
};

const SummaryList: React.FC<{
  competitions: CompetitionProps[];
  workshops: WorkshopProps[];
}> = ({ competitions, workshops }) => {
  const scrollRef = useDragScroll();

  return (
    <div className="overflow-hidden rounded-[2rem] w-full h-full shadow-lg select-none">
      <div className="flex p-4 items-center select-none bg-gray-1">
        <img
          src={Logo}
          className="mr-2 w-6 h-6 select-none"
          alt="Summary Logo"
        />
        <h2 className="text-light font-fredoka text-xl ml-[1rem] select-none">
          Summary
        </h2>
      </div>
      <div
        ref={scrollRef}
        className="p-4 bg-black opacity-[80%] overflow-auto custom-scroll no-scrollbar"
        style={{ maxHeight: "35rem", cursor: "grab" }}
      >
        <div className="flex font-fredoka">
          <img
            src={TrophyLogo}
            className="mr-2 select-none"
            alt="Competitions Logo"
          />
          <p className="text-light font-fredoka text-xl ml-[1rem] select-none">
            Competitions
          </p>
        </div>
        {competitions.map((competition) => (
          <Competition key={competition.id} competition={competition} />
        ))}
        <div className="flex font-fredoka mt-4">
          <img
            src={TrophyLogo}
            className="mr-2 select-none"
            alt="Workshops Logo"
          />
          <p className="text-light font-fredoka text-xl ml-[1rem] select-none">
            Workshops
          </p>
        </div>
        {workshops.map((workshop) => (
          <Workshop key={workshop.id} workshop={workshop} />
        ))}
      </div>
    </div>
  );
};

export default SummaryList;
