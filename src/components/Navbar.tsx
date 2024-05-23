import  logo  from "@/assets/brand/logo.svg";
import cn from "@/utils/cn";
import { Link } from "react-router-dom";

interface NavItemProps {
  children: string;
  active?: boolean;
  theme: string;
}

interface NavbarProps {
  theme?: string;
}

function NavItem({ children, active=false, theme }: NavItemProps) {
  return (
    <button className={cn(
      "px-[23px] py-[9px] text-center rounded-[47px]",
      { "bg-transparent-white-1" : active && theme == "black" },
      { "bg-orange-white" : active && theme == "orange" },
      { "bg-purple-white" : active && theme == "purple" },
      )}>
      <p className={cn(
        "font-roboto font-light text-[18px] text-light/30",
        { "font-medium": active},
        { "text-light": active && theme == "black" },
        { "text-orange-hover-2": active && theme == "orange" },
        { "text-purple-1": active && theme == "purple" },
        )}>
        {children}
      </p>
    </button>
  );
}

export function Navbar({ theme="black" }: NavbarProps) {
  const currentRoute = window.location.pathname.split('/')[1];
  console.log(currentRoute);
  
  return (
    <nav className="sticky top-0 flex justify-between items-center rounded-b-[20px] bg-light/10 py-3 px-[51px]">
      <img src={logo} className="h-[51px]" alt="logo" />
      <div className="flex gap-5">
        <Link to="/">
          <NavItem active={currentRoute == ''} theme={theme}>
            Home
          </NavItem>
        </Link>
        <Link to="/competition">
          <NavItem active={currentRoute == 'competition'} theme={theme}>
            Competition

          </NavItem>
        </Link>
        <Link to="/workshop">
          <NavItem active={currentRoute == 'workshop'} theme={theme}>
            Workshop

          </NavItem>
        </Link>
      </div>
      <button className={cn(
          "px-5 py-2 rounded-2xl",
          {"bg-vertical-gta": theme == "black"},
          {"bg-skin-grad": theme == "orange"},
          {"bg-purple-grad-3": theme == "purple"},
        )}>
        <p className={cn(
            "font-roboto font-medium tracking-wide text-[16px]",
            {"text-light": theme == "black"},
            {"text-orange-hover-2": theme == "orange"},
            {"text-purple-1": theme == "purple"},
          )}>
          Login
        </p>
      </button>
    </nav>
  )
}
