import { useAnimation, motion, useDragControls } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { competition } from "@/constant/dashboardCompetitionCard";
import CompetitionCard from "@/components/Dashboard/User/Home/DashboardCompetitionCard";
import TrophyLogo from "@/assets/dashboardHome/trophyLogo.svg";
import Popup from "@/components/Dashboard/User/Home/PopUp";
// import { useNavigate } from "react-router-dom";
// import { useCreateTeam, useLeadTeams } from "@/services/team";
// import { useUserData } from "@/services/users";
import Select, { Option } from "@/components/Select";

const CompetitionComponent: React.FC = () => {
  // const navigate = useNavigate();
  // const { mutateAsync: createTeam } = useCreateTeam();
  // const { data: teams } = useLeadTeams();
  // const { data: user } = useUserData();
  // console.log("User data:", user);

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
  const [isPopupEsportVisible, setIsPopupEsportVisible] = useState(false);
  const [popupDestination, setPopupDestination] = useState("");

  // const handleYesClick = async () => {
  //   await createTeam(popupDestination);
  //   navigate(`/dashboard/competition`);
  // };

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
    console.log(destination);
    if (destination === "Esport") {
      setPopupDestination("Mobile Legends");
      setIsPopupEsportVisible(true);
    } else {
      console.log(destination);
      setIsPopupEsportVisible(false);
      setPopupDestination(destination);
      setIsPopupVisible(true);
    }
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handleSelectEsport = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setPopupDestination(e.target.value);
  };

  return (
    <div
      className="h-full
                    mobile:mt-12 mobile:mx-6 mobile:bg-transparent_black mobile:rounded-[1rem]
                    ipad:mt-12 ipad:mx-[8rem] ipad:bg-transparent_black ipad:rounded-[2rem]
                    lg:mx-0 lg:mt-0 lg:bg-transparent lg:w-full relative"
    >
      <div
        className="flex p-4 items-center select-none bg-gray-5 mobile:rounded-t-[1rem] ipad:rounded-t-[2rem]
                      mobile:h-[5rem] ipad:h-[5rem] lg:h-[3rem]"
      >
        <img
          src={TrophyLogo}
          className="select-none mobile:w-[2rem] mobile:h-[2rem] ipad:w-[2rem] ipad:h-[2rem] lg:w-5 lg:h-5"
          alt="Trophy Logo"
        />
        <h2
          className="text-light font-fredoka mx-[1rem] select-none
                       mobile:text-[23px] ipad:text-[23px] lg:text-[1rem]"
        >
          Competitions
        </h2>
        <h2
          className="text-gray-5 w-fit font-medium bg-light rounded-[1rem] px-2 py-1 font-fredoka select-none
                           mobile:text-[9px] ipad:text-[18px] desktop:text-[1rem]"
        >
          Swipe to see more
        </h2>
      </div>
      <div className="w-full h-[calc(100%_-_3rem)]">
        <motion.div
          className="w-full h-full overflow-hidden relative
                               mobile:px-2 mobile:py-9 ipad:px-2 ipad:py-9 lg:p-2"
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

      <Popup
        text="Registration Closed"
        isVisible={isPopupVisible}
        onClose={handleClosePopup}
      />

      <Popup
        isVisible={isPopupEsportVisible}
        onClose={() => setIsPopupEsportVisible(false)}
        handleYesClick={() => handleCardClick(popupDestination)}
        text="Please select the e-sport category you would like to compete in"
      >
        <Select onChange={handleSelectEsport}>
          <Option value="Mobile Legends">Mobile Legends</Option>
          <Option value="Valorant">Valorant</Option>
        </Select>
      </Popup>
    </div>
  );
};

export default CompetitionComponent;
