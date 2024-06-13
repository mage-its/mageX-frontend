import logo from "@/assets/brand/logo.svg";
import cn from "@/utils/cn";
import { Link } from "react-router-dom";
import { CgMenuLeft } from "react-icons/cg";
import { FaXmark, FaChevronDown } from "react-icons/fa6";
import DottedLine from "@/assets/DottedLine.svg";

interface NavItemProps {
  children: string;
  active?: boolean;
  theme: string;
}

interface NavbarProps {
  theme?: string;
}

function NavItem({ children, active = false, theme }: NavItemProps) {
  return (
    <button
      className={cn(
        "px-[23px] py-[9px] text-center rounded-[47px]",
        { "bg-transparent-white-1": active && theme == "black" },
        { "bg-orange-white": active && theme == "orange" },
        { "bg-purple-white": active && theme == "purple" }
      )}
    >
      <p
        className={cn(
          "font-roboto font-light text-[18px] text-light/30",
          { "font-medium": active },
          { "text-light": active && theme == "black" },
          { "text-orange-hover-2": active && theme == "orange" },
          { "text-purple-1": active && theme == "purple" }
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
}

function NavCollapsibleItem({
  children,
  // active = false,
}: NavCollapsibleItemProps) {
  return (
    <div>
      <div className="flex justify-center items-center gap-2.5 mb-[15px]">
        <NavItem active={false} theme="black">
          Competition
        </NavItem>
        <FaChevronDown className="text-2xl text-light/30" />
      </div>
      <div className=" bg-gray-2 rounded-xl flex flex-col justify-center items-center gap-[15px] py-[15px]">
        {children}
      </div>
    </div>
  );
}

export function Navbar({ theme = "orange" }: NavbarProps) {
  const currentRoute = window.location.pathname.split("/")[1];
  console.log(currentRoute);

  return (
    <nav className="sticky top-0 z-20 rounded-b-[20px] bg-light/10 backdrop-blur-sm ">
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
          <button
            className={cn(
              "px-5 py-2 rounded-2xl",
              { "bg-vertical-gta": theme == "black" },
              { "bg-skin-grad": theme == "orange" },
              { "bg-purple-grad-3": theme == "purple" }
            )}
          >
            <p
              className={cn(
                "font-roboto font-medium tracking-wide text-base",
                { "text-light": theme == "black" },
                { "text-orange-hover-2": theme == "orange" },
                { "text-purple-1": theme == "purple" }
              )}
            >
              Login
            </p>
          </button>
        </div>
      ) : (
        <div className="flex items-center p-5 relative">
          <CgMenuLeft className="text-light text-3xl" />
          <div className="w-full -m-8 flex justify-center">
            <img src={logo} className="h-[51px]" alt="logo" />
          </div>
          <div className="fixed bg-black h-screen top-0 left-0 w-[329px] py-[30px] px-8 mb-6">
            <FaXmark className="text-light text-3xl mx-auto mb-3" />
            <div className="flex justify-center items-center gap-2.5">
              <img src={logo} className="h-[51px]" alt="logo" />
              <h1 className="bg-vertical-gta bg-clip-text text-transparent font-airstrike text-[40px] pr-2">
                MAGE X
              </h1>
            </div>
            <img src={DottedLine} alt={DottedLine} className="mb-6" />
            <div className="flex flex-col justify-center items-center">
              <button className="px-[30px] py-2 rounded-full bg-vertical-gta font-roboto font-medium tracking-wide text-base text-light mb-[25px]">
                Home
              </button>
              <NavCollapsibleItem>
                <NavItem theme={theme}>Home</NavItem>
              </NavCollapsibleItem>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
