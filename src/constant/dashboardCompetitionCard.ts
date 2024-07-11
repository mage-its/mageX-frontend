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
    to: "/home",
    description: "Innovate, Build, Triumph!",
    image: robotic,
  },
  {
    id: '2',
    title: "Game Dev",
    to: "/home",
    description: "Create, Compete, Dominate!",
    image: game,
  },
  {
    id: '3',
    title: "IoT",
    to: "/home",
    description: "Innovate, Connect, Win!",
    image: iot,
  },
  {
    id: '4',
    title: "App Dev",
    to: "/home",
    description: "Code, Compete, Conquer!",
    image: app,
  },
  {
    id: '5',
    title: "UI/UX",
    to: "/home",
    description: "Design, Impress, Win!",
    image: ui,
  },
  {
    id: '6',
    title: "Competitive Programming",
    to: "/home",
    description: "Code, Conquer, Triumph!",
    image: cp,
  },
  {
    id: '7',
    title: "Esport",
    to: "/home",
    description: "Game On, Win Big!",
    image: esport,
  },
];
