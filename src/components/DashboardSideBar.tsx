import logo from "@/assets/brand/logo.svg";
import { IconType } from "react-icons";
import { GoHomeFill } from "react-icons/go";
import { PiTrophyFill } from "react-icons/pi";
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
import { useLeadTeams } from "@/services/team";
import { Link } from "react-router-dom";

interface DashboardSideBarItemProps {
  title: string;
  Icon: IconType;
  isExpanded: boolean;
  isActive?: boolean;
  collapseItem?: { name: string; id: string }[];
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
    <div onClick={toggleCollapse} className="overflow-hidden">
      <div
        className={cn(
          "flex gap-[23px] items-center justify-start p-2 md:p-[15px] cursor-pointer rounded-2xl mb-2",
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
          <Link
            to={`/dashboard/competition`}
            key={item.id}
            className={cn(
              "border-gray-2 border-[1px] rounded-xl px-2 md:px-[15px] py-1.5"
              // { "mt-2": !isCollapsed }
            )}
          >
            <p className="text-white/50 font-fredoka font-medium text-base">
              {item.name}
            </p>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default function DashboardSideBar() {
  const { data: teams } = useLeadTeams();
  const [isExpanded, setIsExpanded] = useState(
    window.innerWidth > 1024 ? false : true
  );
  const [isVisible, setIsVisible] = useState(false);
  const expansionControl = useAnimation();
  const currentRoute = window.location.pathname.split("/")[2];

  const toggleExpansion = () => {
    if (window.innerWidth <= 1024) {
      setIsVisible(!isVisible);
    } else {
      setIsExpanded(!isExpanded);
    }
  };

  const setTrueExpansion = () => {
    setIsExpanded(true);
  };

  useEffect(() => {
    if (window.innerWidth <= 1024) {
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

  return (
    <>
      {window.innerWidth <= 1024 && (
        <div className="flex justify-between items-center fixed z-20 h-[67px] w-screen bg-black py-[15px] px-[25px]">
          <div
            onClick={toggleExpansion}
            className="flex gap-3 justify-center items-center rounded-[9px] bg-gray-5 px-3 py-[9px]"
          >
            <p className="font-fredoka font-medium text-base text-white">
              Menu
            </p>
            <FaAngleRight className="text-white text-[14px]" />
          </div>
          <Link to="/" className="flex gap-[15px] justify-center items-center">
            <img className="h-[54px]" src={logo} alt="logo" />
            <h1 className="bg-vertical-gta bg-clip-text text-transparent font-airstrike text-3xl pr-2">
              MAGE X
            </h1>
          </Link>
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
            position: `${window.innerWidth <= 1024 ? "fixed" : "relative"}`,
            marginLeft: "0px",
            marginTop: "0px",
            marginBottom: "0px",
            minHeight: "100vh",
            width: `${window.innerWidth <= 1024 ? 250 : 260}px`,
            borderRadius: "0px",
            paddingLeft: `${window.innerWidth <= 1024 ? 25 : 35}px`,
            paddingRight: `${window.innerWidth <= 1024 ? 25 : 35}px`,
            paddingTop: `${window.innerWidth <= 1024 ? 25 : 35}px`,
            paddingBottom: `${window.innerWidth <= 1024 ? 25 : 35}px`,
          },
          hidden: {
            position: "fixed",
            left: "-110%",
          },
          visible: {
            position: "fixed",
            left: "0%",
            zIndex: 60,
          },
        }}
        animate={expansionControl}
        initial={window.innerWidth <= 1024 ? "visible" : "notExpanded"}
        transition={{
          duration: 0.5,
          type: "tween",
          ease: "easeInOut",
        }}
        className=" bg-black flex flex-col items-center justify-between z-40"
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
          <Link
            to="/"
            className="flex gap-[15px] justify-center items-center mb-[30px] md:mb-[60px]"
          >
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
              initial="notExpanded"
              className="bg-vertical-gta bg-clip-text text-transparent font-airstrike text-3xl pr-2"
            >
              MAGE X
            </motion.h1>
          </Link>
          <div className="flex flex-col gap-[10px] md:gap-[30px]">
            <Link to="/dashboard/home">
              <DashboardSideBarItem
                isExpanded={isExpanded}
                title="Home"
                Icon={GoHomeFill}
                isActive={currentRoute === "home"}
              />
            </Link>
            <div onClick={setTrueExpansion}>
              {teams && (
                <DashboardSideBarItem
                  isExpanded={isExpanded}
                  title="Competition"
                  Icon={PiTrophyFill}
                  isActive={currentRoute === "competition"}
                  collapseItem={[
                    {
                      name: teams?.divisi || "",
                      id: teams?.id || "",
                    },
                  ]}
                />
              )}
            </div>
            {/* <DashboardSideBarItem
              isExpanded={isExpanded}
              title="Workshop"
              Icon={PiChalkboardTeacherFill}
              isActive={currentRoute === "workshop"}
            /> */}
            <Link to="/dashboard/profile">
              <DashboardSideBarItem
                isExpanded={isExpanded}
                title="Profile"
                Icon={FaUser}
                isActive={currentRoute === "profile"}
              />
            </Link>
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
          initial="notExpanded"
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
              {teams && (
                <div className=" mb-2 md:mb-3">
                  <DashboardSummaryItem
                    key={1}
                    competition={teams?.divisi || ""}
                    teamName={teams?.nama || ""}
                    teamMembers={teams?.anggota || [""]}
                  />
                </div>
              )}

              <div className="p-1 md:p-2.5 bg-white/30 rounded-lg border-white border-dashed border-[1px]">
                <div className="flex justify-center items-center gap-[6px] cursor-pointer">
                  <div className="flex flex-col items-center justify-center w-3.5 h-3.5 border-[1px] border-white rounded-md">
                    <FaPlus className="text-white text-[10px]" />
                  </div>
                  <Link to="/dashboard/home">
                    <p className="text-white font-fredoka font-medium text-[10px]">
                      Register
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
          <div>
            <a
              href="https://api.mage-its.id/users/logout"
              className="flex justify-center items-center gap-[6px] p-1.5 md:p-3 bg-red-1 rounded-xl cursor-pointer"
            >
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
                initial="notExpanded"
                className="text-white font-fredoka font-medium text-base"
              >
                Logout
              </motion.p>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
