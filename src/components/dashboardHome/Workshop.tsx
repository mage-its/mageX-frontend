import { useAnimation, motion, useDragControls } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { competition } from "@/constant/dashboardWorkshopCard";
import CompetitionCard from "@/components/dashboardHome/DashboardCompetitionCard";
import useMeasure from "react-use-measure";
import WorkshopLogo from "@/assets/dashboardHome/workshopLogo.svg";
import Three from "@/assets/dashboardHome/three.svg";

const App: React.FC = () => {
  const competitionCardControl = useAnimation();
  const dragCompetitionControl = useDragControls();
  const [competitionCardRef, { width: competitionCardWidth }] = useMeasure();
  const [dragOffset, setDragOffset] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const [dragConstraints, setDragConstraints] = useState({
    left: 0,
    right: 0,
  });

  useEffect(() => {
    competitionCardControl.start("more");
  }, [competitionCardControl]);

  const handleDragEnd = (event: any, info: any) => {
    setDragOffset(Math.max(dragConstraints.left, Math.min(dragOffset + info.offset.x, dragConstraints.right)));
  };

  useEffect(() => {
    if (containerRef.current) {
      const updateContainerWidth = () => {
        const width = containerRef.current?.offsetWidth || 0;
        setContainerWidth(width); // Set container width in state
        const cardWidthWithMargin = competitionCardWidth + 16;
        const totalWidth = cardWidthWithMargin * competition.length;
        const rightConstraint = totalWidth - width;
        setDragConstraints({
          left: -rightConstraint,
          right: 0,
        });
      };

      updateContainerWidth();

      // Add event listener for window resize to recalculate widths
      window.addEventListener("resize", updateContainerWidth);

      return () => {
        window.removeEventListener("resize", updateContainerWidth);
      };
    }
  }, [competition.length, competitionCardWidth]);

  return (
    <div className="w-full h-full">
      <div className="flex p-4 items-center h-[3rem] select-none bg-gray-5">
        <img src={WorkshopLogo} className="w-5 h-5 select-none" />
        <h2 className="text-light font-fredoka text-[1rem] mx-[1rem] select-none">Workshop</h2>
        <img src={Three} className="w-5 h-5 select-none" />
      </div>
      <div className="w-full h-[calc(100%_-_3rem)]">
        <motion.div className="w-full h-full overflow-hidden relative p-2" ref={containerRef}>
          <motion.div
            drag="x"
            dragControls={dragCompetitionControl}
            dragConstraints={dragConstraints}
            dragMomentum={false}
            onDragEnd={handleDragEnd}
            className="flex flex-nowrap h-full w-full"
            style={{ x: -dragOffset }}
          >
            {competition.map((item, index) => (
              <div className="mr-4" key={index}>
                <CompetitionCard
                  ref={competitionCardRef}
                  {...item}
                  theme={index % 2 === 0 ? "orange" : "purple"}
                  initial="more"
                  variants={{
                    more: {
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
                  }}
                  animate={competitionCardControl}
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default App;
