import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dropButton from "@/assets/faq/faqDropButton.svg"
import { 
  questionsAppDev,
  questionsGamedev,
  questionsGeneral,
  questionsIot,
  questionsRobotic
 } from "@/constant/faq";


const Accordion = ({ question, isOpen, onOpen }: any) => {
  return (
    <>
      <motion.header
        initial={false}
      >
        <div className="w-auto h-fit lg:flex md:flex mobile:grid justify-between mb-[7px] mt-[20px]">
          <div className="font-fredoka text-light lg:text-xl md:text-[15px] font-medium mobile:text-[20px] ">
            <span className="bg-vertical-gta bg-clip-text text-transparent">{question.label}</span>
          </div>
          <motion.div 
            onClick={onOpen}
            className="cursor-pointer lg:w-[20px] md:w-[20px] mobile:w-[15px] lg:h-[20px] md:w-[20px] mobile:h-[15px] lg:mt-0 md:mt-0 mobile:mt-[5px] lg:ml-0 md:ml-0 mobile:ml-auto"
            whileHover={{
              scale: 1.5,
            }}
            animate={{
              rotate: isOpen ? -180 : 0
            }}
            transition={{
              type: "tween",
            }}>
            <img src={dropButton}></img>
          </motion.div>
        </div>
        <div className="w-auto h-fit border-[#FF9437] border-t-[1px] border-dashed">  </div>
      </motion.header>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <p className="text-orange-primary-5 font-fredoka lg:text-base md:text-[14px] sm:text-xs lg:font-medium md:font-medium sm:font-extralight">{question.answer}</p>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export const AppDevelopmentFAQ = () => {
  const [expanded, setExpanded] = useState<any>(null);

  return questionsAppDev.map((question) => {
    const isOpen = expanded === question.id;
    return (
      <Accordion
        key={question.id}
        question={question}
        isOpen={isOpen}
        onOpen={() => setExpanded(isOpen ? null : question.id)}
      />
    );
  });
};

export const GameDevelopmentFAQ = () => {
  const [expanded, setExpanded] = useState<any>(null);

  return questionsGamedev.map((question) => {
    const isOpen = expanded === question.id;
    return (
      <Accordion
        key={question.id}
        question={question}
        isOpen={isOpen}
        onOpen={() => setExpanded(isOpen ? null : question.id)}
      />
    );
  });
};

export const GeneralFAQ = () => {
  const [expanded, setExpanded] = useState<any>(null);

  return questionsGeneral.map((question) => {
    const isOpen = expanded === question.id;
    return (
      <Accordion
        key={question.id}
        question={question}
        isOpen={isOpen}
        onOpen={() => setExpanded(isOpen ? null : question.id)}
      />
    );
  });
};

export const IotFAQ = () => {
  const [expanded, setExpanded] = useState<any>(null);

  return questionsIot.map((question) => {
    const isOpen = expanded === question.id;
    return (
      <Accordion
        key={question.id}
        question={question}
        isOpen={isOpen}
        onOpen={() => setExpanded(isOpen ? null : question.id)}
      />
    );
  });
};

export const RoboticFAQ = () => {
  const [expanded, setExpanded] = useState<any>(null);

  return questionsRobotic.map((question) => {
    const isOpen = expanded === question.id;
    return (
      <Accordion
        key={question.id}
        question={question}
        isOpen={isOpen}
        onOpen={() => setExpanded(isOpen ? null : question.id)}
      />
    );
  });
};