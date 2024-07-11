import logo from "@/assets/brand/logo.svg";
import { IconType } from "react-icons";
import { GoHomeFill } from "react-icons/go";
import { PiTrophyFill, PiChalkboardTeacherFill } from "react-icons/pi";
import {
  FaAngleLeft,
  FaAngleRight,
  FaCaretUp,
  FaPlus,
  FaUser,
} from "react-icons/fa6";
import { IoExit } from "react-icons/io5";
import DashboardSummaryItem from "./DashboardSummaryItem";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import cn from "@/utils/cn";
import { FaCaretDown } from "react-icons/fa6";

interface DashboardSideBarItemProps {
  title: string;
  Icon: IconType;
  isExpanded: boolean;
  isActive?: boolean;
  collapseItem?: string[];
}

const DashboardSideBarItem = ({
  title,
  Icon,
  isExpanded,
  isActive,
  collapseItem,
}: DashboardSideBarItemProps) => {
  const expansionControl = useAnimation();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);
  const collapseControl = useAnimation();
  useEffect(() => {
    if (isExpanded) {
      expansionControl.start("expanded");
    } else {
      expansionControl.start("notExpanded");
      setIsCollapsed(true);
    }
  }, [isExpanded, expansionControl]);
  useEffect(() => {
    if (isCollapsed) {
      collapseControl.start("hidden");
    } else {
      collapseControl.start("visible");
    }
  }, [isCollapsed, collapseControl]);
  return (
    <div onClick={toggleCollapse}>
      <div
        className={cn(
          "flex gap-[23px] items-center justify-start p-2 md:p-[15px] cursor-pointer rounded-2xl",
          { "bg-vertical-gta": isActive }
        )}
      >
        <div>
          <Icon
            className={cn("text-white/50 text-[23px]", {
              "text-white": isActive,
            })}
          />
        </div>
        <motion.p
          variants={{
            notExpanded: {
              width: "0%",
              opacity: 0,
              display: "none",
            },
            expanded: {
              width: "100%",
              opacity: 1,
              display: "block",
            },
          }}
          animate={expansionControl}
          className={cn("text-white/50 font-fredoka font-medium text-base", {
            "text-white": isActive,
          })}
        >
          {title}
        </motion.p>
        {collapseItem && isExpanded && (
          <div>
            {isCollapsed ? (
              <FaCaretDown
                className={cn("text-white/50 text-[23px]", {
                  "text-white": isActive,
                })}
              />
            ) : (
              <FaCaretUp
                className={cn("text-white/50 text-[23px]", {
                  "text-white": isActive,
                })}
              />
            )}
          </div>
        )}
      </div>
      <motion.div
        variants={{
          hidden: {
            height: 0,
            width: 0,
            opacity: 0,
          },
          visible: {
            height: "auto",
            width: "auto",
            opacity: 1,
          },
        }}
        animate={collapseControl}
        className="flex flex-col gap-2"
      >
        {collapseItem?.map((item) => (
          <div
            className={cn(
              "border-gray-2 border-[1px] rounded-xl px-2 md:px-[15px] py-1.5"
              // { "mt-2": !isCollapsed }
            )}
          >
            <p className="text-white/50 font-fredoka font-medium text-base">
              {item}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function DashboardSideBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const expansionControl = useAnimation();
  const currentRoute = window.location.pathname.split("/")[2];

  const toggleExpansion = () => {
    if (window.innerWidth <= 768) {
      setIsVisible(!isVisible);
    } else {
      setIsExpanded(!isExpanded);
    }
  };

  const setTrueExpansion = () => {
    setIsExpanded(true);
  };

  useEffect(() => {
    if (window.innerWidth <= 768) {
      if (isVisible) {
        expansionControl.start("visible");
      } else {
        expansionControl.start("hidden");
      }
    }
  }, [isVisible, expansionControl]);

  useEffect(() => {
    if (isExpanded) {
      expansionControl.start("expanded");
    } else {
      expansionControl.start("notExpanded");
    }
  }, [isExpanded, expansionControl]);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsExpanded(true);
    }
  }, []);

  return (
    <nav>
      {window.innerWidth <= 768 && (
        <div className="flex justify-between items-center fixed h-[67px] w-screen bg-black py-[15px] px-[25px]">
          <div
            onClick={toggleExpansion}
            className="flex gap-3 justify-center items-center rounded-[9px] bg-gray-5 px-3 py-[9px]"
          >
            <p className="font-fredoka font-medium text-base text-white">
              Menu
            </p>
            <FaAngleRight className="text-white text-[14px]" />
          </div>
          <div className="flex gap-[15px] justify-center items-center">
            <img className="h-[54px]" src={logo} alt="logo" />
            <h1 className="bg-vertical-gta bg-clip-text text-transparent font-airstrike text-3xl pr-2">
              MAGE X
            </h1>
          </div>
        </div>
      )}
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            display: "none",
          },
          visible: {
            opacity: 1,
            display: "block",
          },
        }}
        animate={expansionControl}
        initial="hidden"
        className="fixed h-screen w-screen bg-black/70 "
      />
      <motion.div
        variants={{
          notExpanded: {
            position: "relative",
            marginLeft: "27px",
            marginTop: "31px",
            marginBottom: "31px",
            minHeight: "calc(100vh - 62px)",
            width: "103px",
            borderRadius: "40px",
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "30px",
            paddingBottom: "30px",
          },
          expanded: {
            position: "relative",
            marginLeft: "0px",
            marginTop: "0px",
            marginBottom: "0px",
            minHeight: "100vh",
            width: `${window.innerWidth <= 768 ? 250 : 260}px`,
            borderRadius: "0px",
            paddingLeft: `${window.innerWidth <= 768 ? 25 : 35}px`,
            paddingRight: `${window.innerWidth <= 768 ? 25 : 35}px`,
            paddingTop: `${window.innerWidth <= 768 ? 25 : 35}px`,
            paddingBottom: `${window.innerWidth <= 768 ? 25 : 35}px`,
          },
          hidden: {
            position: "absolute",
            left: "-110%",
          },
          visible: {
            position: "absolute",
            left: "0%",
          },
        }}
        animate={expansionControl}
        transition={{
          duration: 0.5,
          type: "tween",
          ease: "easeInOut",
        }}
        className="bg-black flex flex-col items-center justify-between"
      >
        <div className="mb-4 relative">
          <div
            onClick={toggleExpansion}
            className="flex flex-col justify-center items-center absolute -right-10 top-12 w-8 h-8 bg-gray-5 rounded-[9px] cursor-pointer"
          >
            {isExpanded ? (
              <FaAngleRight className="text-white text-[14px]" />
            ) : (
              <FaAngleLeft className="text-white text-[14px]" />
            )}
          </div>
          <div className="flex gap-[15px] justify-center items-center mb-[30px] md:mb-[60px]">
            <img className="h-[54px]" src={logo} alt="logo" />
            <motion.h1
              variants={{
                notExpanded: {
                  width: "0%",
                  opacity: 0,
                  display: "none",
                },
                expanded: {
                  width: "100%",
                  opacity: 1,
                  display: "block",
                },
              }}
              animate={expansionControl}
              className="bg-vertical-gta bg-clip-text text-transparent font-airstrike text-3xl pr-2"
            >
              MAGE X
            </motion.h1>
          </div>
          <div className="flex flex-col gap-[10px] md:gap-[30px]">
            <DashboardSideBarItem
              isExpanded={isExpanded}
              title="Home"
              Icon={GoHomeFill}
              isActive={currentRoute === "home"}
            />
            <div onClick={setTrueExpansion}>
              <DashboardSideBarItem
                isExpanded={isExpanded}
                title="Competition"
                Icon={PiTrophyFill}
                isActive={currentRoute === "competition"}
                collapseItem={[
                  "competition",
                  "competition-detail",
                  "competition-create",
                  "competition-edit",
                ]}
              />
            </div>
            <DashboardSideBarItem
              isExpanded={isExpanded}
              title="Workshop"
              Icon={PiChalkboardTeacherFill}
              isActive={currentRoute === "workshop"}
            />
            <DashboardSideBarItem
              isExpanded={isExpanded}
              title="Profile"
              Icon={FaUser}
              isActive={currentRoute === "profile"}
            />
          </div>
        </div>
        <motion.div
          variants={{
            notExpanded: {
              width: "53px",
            },
            expanded: {
              width: "190px",
            },
          }}
          animate={expansionControl}
          className="w-[190px] h-fit"
        >
          <motion.div
            variants={{
              notExpanded: {
                width: "0%",
                height: "0%",
                opacity: 0,
                display: "none",
              },
              expanded: {
                width: "100%",
                height: "fit-content",
                opacity: 1,
                display: "block",
              },
            }}
            animate={expansionControl}
            initial="notExpanded"
            className="bg-diagonal-gta h-fit w-full rounded-xl mb-[11px]"
          >
            <div className="flex flex-col gap-[5px] p-2 md:p-3 w-full h-full bg-black/50 rounded-xl">
              <DashboardSummaryItem
                key={1}
                competition="MAGE X"
                teamName="Team 1"
                teamMembers={["A", "B", "C"]}
              />
              <DashboardSummaryItem
                key={2}
                competition="MAGE X"
                teamName="Team 1"
                teamMembers={["A", "B", "C"]}
              />
              <DashboardSummaryItem
                key={3}
                competition="MAGE X"
                teamName="Team 1"
                teamMembers={["A", "B", "C"]}
              />
              <div className="p-1 md:p-2.5 bg-white/30 rounded-lg border-white border-dashed border-[1px] mt-2 md:mt-3">
                <div className="flex justify-center items-center gap-[6px] cursor-pointer">
                  <div className="flex flex-col items-center justify-center w-3.5 h-3.5 border-[1px] border-white rounded-md">
                    <FaPlus className="text-white text-[10px]" />
                  </div>
                  <p className="text-white font-fredoka font-medium text-[10px]">
                    Register
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <div>
            <div className="flex justify-center items-center gap-[6px] p-1.5 md:p-3 bg-red-1 rounded-xl cursor-pointer">
              <IoExit className="text-white text-[32px] rotate-180" />
              <motion.p
                variants={{
                  notExpanded: {
                    width: "0%",
                    opacity: 0,
                  },
                  expanded: {
                    width: "fit-content",
                    opacity: 1,
                  },
                }}
                animate={expansionControl}
                className="text-white font-fredoka font-medium text-base"
              >
                Logout
              </motion.p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </nav>
  );
}
