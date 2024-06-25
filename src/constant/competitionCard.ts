import app from "@/assets/brand/app.svg";
import iot from "@/assets/brand/iot.svg";
import robotic from "@/assets/brand/robotic.svg";
import ui from "@/assets/brand/ui.svg";
import cp from "@/assets/brand/cp.svg";
import esport from "@/assets/brand/esport.svg";
import game from "@/assets/brand/game.svg";

export const competition = [
  {
    title: "Robotics",
    to: "/competition/robotic",
    description: "Innovate, Build, Triumph!",
    image: robotic,
  },
  {
    title: "Game Dev",
    to: "/competition/game-development",
    description: "Create, Compete, Dominate!",
    guidebook:
      "https://drive.google.com/file/d/1fUYN_KoP2VN6w3Sbdbb_qHjKSSYH-cfZ/view?usp=sharing",
    image: game,
  },
  {
    title: "IoT",
    to: "/competition/iot",
    description: "Innovate, Connect, Win!",
    guidebook:
      "https://drive.google.com/file/d/1WVmC3Nz0t0nvwonCrYMiLyDoKQyHlAFW/view?usp=sharing",
    image: iot,
  },
  {
    title: "App Dev",
    to: "/competition/app-development",
    description: "Code, Compete, Conquer!",
    guidebook:
      "https://drive.google.com/file/d/1gVZWLBbBkE0HNgR-WMSclMD_z8zZ2tBZ/view?usp=sharing",
    image: app,
  },
  {
    title: "UI/UX",
    to: "/competition/ui-ux",
    description: "Design, Impress, Win!",
    image: ui,
  },
  {
    title: "Competitive Programming",
    to: "/competition/competitive-programming",
    description: "Code, Conquer, Triumph!",
    image: cp,
  },
  {
    title: "Esport",
    to: "/competition/esport",
    description: "Game On, Win Big!",
    image: esport,
  },
];
