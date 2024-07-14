import { useAnimation, motion, useDragControls } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { competition } from "@/constant/dashboardCompetitionCard";
import CompetitionCard from "@/components/dashboardHome/DashboardCompetitionCard";
import TrophyLogo from "@/assets/dashboardHome/trophyLogo.svg";
import Seven from "@/assets/dashboardHome/seven.svg";
import Popup from "@/components/dashboardHome/PopUp";
import { useNavigate } from "react-router-dom";
import { useCreateTeam, useLeadTeams } from "@/services/team";
import { useUserData } from "@/services/users";

const CompetitionComponent: React.FC = () => {
  const navigate = useNavigate();
  const { mutateAsync: createTeam } = useCreateTeam();
  const { data: teams } = useLeadTeams();
  const { data: user } = useUserData();
  console.log("User data:", user);
  const handleYesClick = async () => {
    await createTeam(popupDestination);
    navigate(`/dashboard/competition`);
  };

  const competitionCardControl = useAnimation();
  const dragCompetitionControl = useDragControls();
  const competitionCardRef = useRef<HTMLDivElement>(null);
  const [competitionCardDimensions, setCompetitionCardDimensions] = useState({
    width: 0,
  });
  useEffect(() => {
    const { width } = competitionCardRef.current?.getBoundingClientRect() || {
      width: 0,
    };
    setCompetitionCardDimensions({ width });
  }, []);

  const competitionCardWidth = competitionCardDimensions.width;
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupDestination, setPopupDestination] = useState("");

  const [dragConstraints, setDragConstraints] = useState({
    left: 0,
    right: 0,
  });

  useEffect(() => {
    competitionCardControl.start("more");
  }, [competitionCardControl]);

  const handleDragEnd = (info: any) => {
    if (info && info.offset && typeof info.offset.x === "number") {
      setDragOffset(
        Math.max(
          dragConstraints.left,
          Math.min(dragOffset + info.offset.x, dragConstraints.right)
        )
      );
    } else {
      console.error("Invalid drag information:", info);
    }
  };

  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const cardWidthWithMargin = competitionCardWidth + 16;
        const totalWidth = cardWidthWithMargin * competition.length;
        const rightConstraint = totalWidth - width;
        setDragConstraints({
          left: -rightConstraint,
          right: 0,
        });
      }
    };

    updateContainerWidth();
    window.addEventListener("resize", updateContainerWidth);

    return () => {
      window.removeEventListener("resize", updateContainerWidth);
    };
  }, [competitionCardWidth]);

  const handleCardClick = (destination: string) => {
    setPopupDestination(destination);
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div
      className="h-full
                    mobile:mt-12 mobile:mx-6 mobile:bg-transparent_black mobile:rounded-[1rem]
                    ipad:mt-12 ipad:mx-[8rem] ipad:bg-transparent_black ipad:rounded-[2rem]
                    desktop:mx-0 desktop:mt-0 desktop:bg-transparent desktop:w-full relative"
    >
      <div
        className="flex p-4 items-center select-none bg-gray-5 mobile:rounded-t-[1rem] ipad:rounded-t-[2rem]
                      mobile:h-[5rem] ipad:h-[5rem] desktop:h-[3rem]"
      >
        <img
          src={TrophyLogo}
          className="select-none mobile:w-[2rem] mobile:h-[2rem] ipad:w-[2rem] ipad:h-[2rem] desktop:w-5 desktop:h-5"
          alt="Trophy Logo"
        />
        <h2
          className="text-light font-fredoka mx-[1rem] select-none
                       mobile:text-[23px] ipad:text-[23px] desktop:text-[1rem]"
        >
          Competitions
        </h2>
        <img
          src={Seven}
          className="select-none mobile:w-[2rem] mobile:h-[2rem] ipad:w-[2rem] ipad:h-[2rem] desktop:w-5 desktop:h-5"
          alt="Seven"
        />
      </div>
      <div className="w-full h-[calc(100%_-_3rem)]">
        <motion.div
          className="w-full h-full overflow-hidden relative
                               mobile:px-2 mobile:py-9 ipad:px-2 ipad:py-9 desktop:p-2"
          ref={containerRef}
        >
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
              <div
                className="mr-4"
                key={index}
                onClick={() => handleCardClick(item.title)}
              >
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
      {user?.status === "verified" ? (
        teams == undefined ? (
          <Popup
            isVisible={isPopupVisible}
            onClose={handleClosePopup}
            handleYesClick={handleYesClick}
            text="You will be registered as Team Leader Do you want to continue?"
          />
        ) : (
          <Popup
            isVisible={isPopupVisible}
            onClose={handleClosePopup}
            text="You're already leader of a team. Cannot create another team"
          />
        )
      ) : (
        <Popup
          isVisible={isPopupVisible}
          onClose={handleClosePopup}
          text="You are not verified. Please complete your data first"
        />
      )}
    </div>
  );
};

export default CompetitionComponent;
