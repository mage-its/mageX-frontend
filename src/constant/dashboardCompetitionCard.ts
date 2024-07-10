import app from "@/assets/brand/app.svg";
import iot from "@/assets/dashboardHome/iotCompetition.svg";
import robotic from "@/assets/brand/robotic.svg";
import ui from "@/assets/dashboardHome/uiLogo.svg";
import cp from "@/assets/brand/cp.svg";
import esport from "@/assets/brand/esport.svg";
import game from "@/assets/brand/game.svg";

export const competition = [
  {
    id: '1',
    title: "Robotics",
    to: "/competition/robotic",
    description: "Innovate, Build, Triumph!",
    image: robotic,
  },
  {
    id: '2',
    title: "Game Dev",
    to: "/competition/game-development",
    description: "Create, Compete, Dominate!",
    guidebook:
      "https://drive.google.com/file/d/1fUYN_KoP2VN6w3Sbdbb_qHjKSSYH-cfZ/view?usp=sharing",
    image: game,
  },
  {
    id: '3',
    title: "IoT",
    to: "/competition/iot",
    description: "Innovate, Connect, Win!",
    guidebook:
      "https://drive.google.com/file/d/1WVmC3Nz0t0nvwonCrYMiLyDoKQyHlAFW/view?usp=sharing",
    image: iot,
  },
  {
    id: '4',
    title: "App Dev",
    to: "/competition/app-development",
    description: "Code, Compete, Conquer!",
    guidebook:
      "https://drive.google.com/file/d/1gVZWLBbBkE0HNgR-WMSclMD_z8zZ2tBZ/view?usp=sharing",
    image: app,
  },
  {
    id: '5',
    title: "UI/UX",
    to: "/competition/ui-ux",
    description: "Design, Impress, Win!",
    image: ui,
  },
  {
    id: '6',
    title: "Competitive Programming",
    to: "/competition/competitive-programming",
    description: "Code, Conquer, Triumph!",
    image: cp,
  },
  {
    id: '7',
    title: "Esport",
    to: "/competition/esport",
    description: "Game On, Win Big!",
    image: esport,
  },
];
