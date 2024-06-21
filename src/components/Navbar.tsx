import logo from "@/assets/brand/logo.svg";
import cn from "@/utils/cn";
import { Link } from "react-router-dom";
import { CgMenuLeft } from "react-icons/cg";
import { FaXmark, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import DottedLine from "@/assets/DottedLine.svg";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

export type theme = "orange" | "purple" | "black" | "pink";
interface NavItemProps {
  children: string;
  active?: boolean;
  theme: theme;
}

interface NavbarProps {
  theme?: theme;
}

function NavItem({ children, active = false, theme }: NavItemProps) {
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
          { "text-light": innerWidth <= 640 && theme != "black" },
          { "font-fredoka": innerWidth <= 640 }
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
}

function NavCollapsibleItem({
  children,
  title = "Competition",
  className,
  theme,
  // active = false,
}: NavCollapsibleItemProps) {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    if (active) {
      collapseControl.start("collapse");
    } else {
      collapseControl.start("active");
    }
    setActive(!active);
  };
  const collapseControl = useAnimation();
  return (
    <div className={cn("w-[248px] h-fit", className)}>
      <div
        onClick={handleActive}
        className={cn(
          "flex justify-center mb-[15px] rounded-xl items-center gap-2.5 cursor-pointer transition-all",
          { "bg-none": theme == "black" },
          { "bg-light/10": theme != "black" }
        )}
      >
        <NavItem active={false} theme="black">
          {title}
        </NavItem>
        <FaChevronDown
          className={cn("text-2xl text-light/30", { hidden: active })}
        />
        <FaChevronUp
          className={cn("text-2xl text-light/30", { hidden: !active })}
        />
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
          { "bg-gray-2": theme == "black" }
        )}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function Navbar({ theme = "orange" }: NavbarProps) {
  const currentRoute = window.location.pathname.split("/")[1];
  console.log(currentRoute);
  const [active, setActive] = useState(false);
  const sideBarControl = useAnimation();
  console.log(active);
  const handleActive = () => {
    console.log(active);
    setActive(!active);
    if (active) {
      sideBarControl.start("hidden");
    } else {
      sideBarControl.start("appear");
    }
  };
  return (
    <nav
      className={cn(
        "sticky top-0 z-20 rounded-b-[20px] bg-light/10 backdrop-blur-sm",
        { "bg-dark/10": theme == "orange" }
      )}
    >
      {window.innerWidth > 768 ? (
        <div className="flex justify-between items-center py-3 px-[51px]">
          <img src={logo} className="h-[51px]" alt="logo" />
          <div className="flex gap-5">
            <Link to="/">
              <NavItem active={currentRoute == ""} theme={theme}>
                Home
              </NavItem>
            </Link>
            <Link to="/competition">
              <NavItem active={currentRoute == "competition"} theme={theme}>
                Competition
              </NavItem>
            </Link>
            <Link to="/workshop">
              <NavItem active={currentRoute == "workshop"} theme={theme}>
                Workshop
              </NavItem>
            </Link>
          </div>
          <button className={cn("px-5 py-2 rounded-2xl bg-vertical-gta")}>
            <p
              className={cn(
                "font-roboto font-medium tracking-wide text-base text-light"
              )}
            >
              Login
            </p>
          </button>
        </div>
      ) : (
        <div className="flex items-center p-5 relative">
          <CgMenuLeft onClick={handleActive} className="text-light text-3xl" />
          <div className="w-full flex justify-center">
            <img src={logo} className="h-[51px] mr-8" alt="logo" />
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
              onClick={handleActive}
              className="text-light text-3xl mx-auto mb-3"
            />
            <div className="flex justify-center items-center gap-2.5">
              <img src={logo} className="h-[51px]" alt="logo" />
              <h1 className="bg-vertical-gta bg-clip-text text-transparent font-airstrike text-[40px] pr-2">
                MAGE X
              </h1>
            </div>
            <img src={DottedLine} alt={DottedLine} className="mb-6" />
            <div
              className="flex flex-col items-center mb-6 "
              style={{ minHeight: `${window.innerHeight - 260}px` }}
            >
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
              <NavCollapsibleItem theme={theme}>
                <NavItem theme={theme}>App Dev</NavItem>
                <NavItem theme={theme}>Game Dev</NavItem>
                <NavItem theme={theme}>IoT</NavItem>
                <NavItem theme={theme}>Robotic</NavItem>
                <NavItem theme={theme}>UI/UX</NavItem>
                <NavItem theme={theme}>Competitive Programing</NavItem>
              </NavCollapsibleItem>
              <NavCollapsibleItem title="Workshop" theme={theme}>
                <NavItem theme={theme}>App Dev</NavItem>
                <NavItem theme={theme}>Game Dev</NavItem>
                <NavItem theme={theme}>Robotic</NavItem>
              </NavCollapsibleItem>
            </div>
            <div className="flex gap-[10px] justify-center items-center">
              <NavItem theme={theme}>Sign Up</NavItem>
              <div className="h-5 w-[2px] bg-light rounded-3xl" />
              <NavItem theme={theme}>Login</NavItem>
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
