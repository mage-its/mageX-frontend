import logo from "@/assets/brand/logo.svg";
import cn from "@/utils/cn";
import { Link } from "react-router-dom";
import { CgMenuLeft } from "react-icons/cg";
import { FaXmark, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import DottedLine from "@/assets/DottedLine.svg";
import { motion, useAnimation } from "framer-motion";
import { competition } from "@/constant/competitionCard";
import { useState } from "react";
import { useUserData } from "@/services/users";
import { GoHomeFill } from "react-icons/go";

export type theme = "orange" | "purple" | "black" | "pink";
interface NavItemProps extends React.ComponentPropsWithoutRef<"button"> {
  children: string;
  active?: boolean;
  theme: theme;
}

interface NavbarProps {
  theme?: theme;
}

function NavItem({ children, active = false, theme, className }: NavItemProps) {
  return (
    <button
      className={cn("px-[23px] py-[9px] text-center rounded-[47px]", {
        "bg-vertical-gta": active,
      })}
    >
      <p
        className={cn(
          "font-roboto font-light text-[18px] text-light/30",
          { "font-medium": active },
          { "text-light": active },
          { "text-light": innerWidth <= 768 && theme != "black" },
          { "font-fredoka": innerWidth <= 768 },
          className
        )}
      >
        {children}
      </p>
    </button>
  );
}

interface NavCollapsibleItemProps
  extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  title?: string;
  theme: theme;
  active?: boolean;
}

function NavCollapsibleItem({
  children,
  title = "Competition",
  className,
  theme,
  active = false,
}: NavCollapsibleItemProps) {
  const [isNotCollapse, setActive] = useState(false);
  const handleActiveOnClick = () => {
    if (innerWidth <= 768) {
      if (isNotCollapse) {
        collapseControl.start("collapse");
      } else {
        collapseControl.start("active");
      }
      setActive(!isNotCollapse);
    }
  };
  const handleActiveHover = () => {
    if (innerWidth > 768) {
      if (isNotCollapse) {
        collapseControl.start("collapse");
      } else {
        collapseControl.start("active");
      }
      setActive(!isNotCollapse);
    }
  };
  const collapseControl = useAnimation();
  return (
    <div
      onMouseEnter={handleActiveHover}
      onMouseLeave={handleActiveHover}
      className={cn("w-[248px] h-fit relative", className)}
    >
      <div
        onClick={handleActiveOnClick}
        className={cn(
          "flex justify-center rounded-xl items-center gap-2.5 cursor-pointer transition-all",
          { "bg-none": theme == "black" },
          { "bg-light/10": theme != "black" && innerWidth <= 768 },
          { " mb-[15px]": innerWidth <= 768 }
        )}
      >
        <NavItem active={active} theme="black">
          {title}
        </NavItem>
        {innerWidth <= 768 && (
          <div>
            <FaChevronDown
              className={cn("text-2xl text-light/30", {
                hidden: isNotCollapse,
              })}
            />
            <FaChevronUp
              className={cn("text-2xl text-light/30", {
                hidden: !isNotCollapse,
              })}
            />
          </div>
        )}
      </div>
      <motion.div
        initial="collapse"
        variants={{
          active: {
            maxHeight: "500px",
            paddingTop: "15px",
            paddingBottom: "15px",
            opacity: 1,
            marginBottom: "20px",
          },
          collapse: {
            maxHeight: "0px",
            paddingTop: "0px",
            paddingBottom: "0px",
            marginBottom: "0px",
            opacity: 0.3,
          },
        }}
        animate={collapseControl}
        className={cn(
          " bg-light/10 rounded-xl flex flex-col justify-center items-center gap-[10px] py-[15px] overflow-hidden",
          { "bg-gray-2": theme == "black" || innerWidth > 768 },
          { "absolute top-[70px]": innerWidth > 768 },
          { "bg-[#812D5E]": theme == "pink" && innerWidth > 768 },
          { "bg-[#2E2052]": theme == "purple" && innerWidth > 768 },
          { "bg-[#794626]": theme == "orange" && innerWidth > 768 }
        )}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function Navbar({ theme = "orange" }: NavbarProps) {
  const currentRoute = window.location.pathname.split("/")[1];
  const [isAppear, setActive] = useState(false);
  const sideBarControl = useAnimation();
  const handleAppear = () => {
    setActive(!isAppear);
    if (isAppear) {
      sideBarControl.start("hidden");
    } else {
      sideBarControl.start("appear");
    }
  };
  const { data: user } = useUserData();
  console.log(user);
  const logoutRedirectURL = "https://api.mage-its.id/users/logout";
  const loginRedirectURL = "https://api.mage-its.id/users/login";

  return (
    <nav
      className={cn(
        "sticky top-0 z-20 w-full rounded-b-[20px] bg-light/10 backdrop-blur-sm",
        { "bg-dark/10": theme == "orange" }
      )}
    >
      {window.innerWidth > 768 ? (
        <div className="flex justify-between items-center py-3 px-[51px]">
          <a href="/">
            <img src={logo} className="h-[51px]" alt="logo" />
          </a>
          <div className="flex gap-5">
            <Link to="/">
              <NavItem active={currentRoute == ""} theme={theme}>
                Home
              </NavItem>
            </Link>
            <NavCollapsibleItem
              theme={theme}
              active={currentRoute == "competition"}
            >
              {competition.map((item) => (
                <Link to={item.to}>
                  <NavItem
                    className="hover:text-orange-primary-2/40"
                    theme={theme}
                  >
                    {item.title}
                  </NavItem>
                </Link>
              ))}
            </NavCollapsibleItem>
            <Link to="/workshop">
              <NavItem active={currentRoute == "workshop"} theme={theme}>
                Workshop
              </NavItem>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            {user?.is_logged_in ? (
              <div className="flex justify-center items-center">
                <button
                  onClick={() => (window.location.href = logoutRedirectURL)}
                  className={cn("px-5 py-2 rounded-2xl bg-vertical-gta")}
                >
                  <p
                    className={cn(
                      "font-roboto font-medium tracking-wide text-base text-light"
                    )}
                  >
                    Log Out
                  </p>
                </button>
                <Link to="/dashboard/home">
                  <button
                    className={cn("px-5 py-2 rounded-2xl bg-vertical-gta ml-4")}
                  >
                    <GoHomeFill
                      className={cn(
                        "font-roboto font-medium tracking-wide text-2xl text-light"
                      )}
                    />
                  </button>
                </Link>
              </div>
            ) : (
              <button
                onClick={() => (window.location.href = loginRedirectURL)}
                className={cn("px-5 py-2 rounded-2xl bg-vertical-gta")}
              >
                <p
                  className={cn(
                    "font-roboto font-medium tracking-wide text-base text-light"
                  )}
                >
                  Login
                </p>
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="flex items-center p-5 relative">
          <CgMenuLeft onClick={handleAppear} className="text-light text-3xl" />
          <div className="w-full flex justify-center">
            <a href="/">
              <img src={logo} className="h-[51px] mr-8" alt="logo" />
            </a>
          </div>
          <motion.div
            variants={{
              hidden: {
                left: -329,
              },
              appear: {
                left: 0,
              },
            }}
            animate={sideBarControl}
            initial="hidden"
            className={cn(
              "fixed z-20 h-screen top-0 left-0 w-[329px] py-[30px] px-8 mb-6 overflow-auto",
              { "bg-black": theme == "black" },
              { "bg-[#2E2052]": theme == "purple" },
              { "bg-[#794626]": theme == "orange" },
              { "bg-[#812D5E]": theme == "pink" }
            )}
          >
            <FaXmark
              onClick={handleAppear}
              className="text-light text-3xl mx-auto mb-3"
            />
            <div className="flex justify-center items-center gap-2.5">
              <a href="/">
                <img src={logo} className="h-[51px]" alt="logo" />
              </a>
              <h1 className="bg-vertical-gta bg-clip-text text-transparent font-airstrike text-[40px] pr-2">
                MAGE X
              </h1>
            </div>
            <img src={DottedLine} alt={DottedLine} className="mb-6" />
            <div
              className="flex flex-col items-center mb-6 "
              style={{ minHeight: `${window.innerHeight - 260}px` }}
            >
              <Link to="/">
                <button
                  className={cn(
                    "px-[30px] py-2 font-fredoka font-light text-[18px] text-light/30 mb-6",
                    {
                      "rounded-full bg-vertical-gta font-medium tracking-wide text-base text-light":
                        theme == "black",
                    }
                  )}
                >
                  Home
                </button>
              </Link>
              <NavCollapsibleItem theme={theme}>
                {competition.map((item) => (
                  <Link to={item.to}>
                    <NavItem
                      className="hover:text-orange-primary-2/40"
                      theme={theme}
                    >
                      {item.title}
                    </NavItem>
                  </Link>
                ))}
              </NavCollapsibleItem>
              <NavCollapsibleItem title="Workshop" theme={theme}>
                <Link to="/workshop">
                  <NavItem
                    className="hover:text-orange-primary-2/40"
                    theme={theme}
                  >
                    Multimedia
                  </NavItem>
                </Link>
                <Link to="/workshop">
                  <NavItem
                    className="hover:text-orange-primary-2/40"
                    theme={theme}
                  >
                    IoT
                  </NavItem>
                </Link>
                <Link to="/workshop">
                  <NavItem
                    className="hover:text-orange-primary-2/40"
                    theme={theme}
                  >
                    Robotic
                  </NavItem>
                </Link>
              </NavCollapsibleItem>
            </div>
            <div className="flex gap-[10px] justify-center items-center">
              {user?.is_logged_in ? (
                <div className="flex justify-center items-center">
                  <button
                    onClick={() => (window.location.href = logoutRedirectURL)}
                  >
                    <p
                      className={cn(
                        "font-roboto font-medium tracking-wide text-base text-light"
                      )}
                    >
                      Log Out
                    </p>
                  </button>
                  <Link to="dashboard/home">
                    <p
                      className={cn(
                        "font-roboto font-medium tracking-wide text-base text-light ml-4"
                      )}
                    >
                      <GoHomeFill className="text-xl" />
                    </p>
                  </Link>
                </div>
              ) : (
                <button
                  onClick={() => (window.location.href = loginRedirectURL)}
                >
                  <p
                    className={cn(
                      "font-roboto font-light text-[18px] text-light/30"
                    )}
                  >
                    Login
                  </p>
                </button>
              )}
            </div>
          </motion.div>
          <motion.div
            animate={sideBarControl}
            initial="hidden"
            variants={{
              hidden: {
                opacity: 0,
                display: "none",
              },
              appear: {
                opacity: 1,
                display: "block",
              },
            }}
            className="absolute z-10 top-0 left-0 w-screen h-screen bg-black/50 blur-2xl"
          />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
