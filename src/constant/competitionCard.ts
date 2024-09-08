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
    guidebook:
      "https://drive.google.com/file/d/1Xk3MHTWYfL-42uO_drPlqpa0_fgm5lgZ/view?usp=drive_link",
    image: robotic,
  },
  {
    title: "Game Dev",
    to: "/competition/game-development",
    description: "Create, Compete, Dominate!",
    guidebook:
      "https://drive.google.com/file/d/17cHExh0y4rBoJZtM8qFpZ6itsSbCbTOq/view?usp=drive_link",
    image: game,
  },
  {
    title: "IoT",
    to: "/competition/iot",
    description: "Innovate, Connect, Win!",
    guidebook:
      "https://drive.google.com/file/d/1TtARF18yuI7s0MhMygmwF7q5ROz4Gdpx/view?usp=drive_link",
    image: iot,
  },
  {
    title: "App Dev",
    to: "/competition/app-development",
    description: "Code, Compete, Conquer!",
    guidebook:
      "https://drive.google.com/file/d/1X6NyTTnSpSYljQKyCnKPSasBV-H8fLET/view?usp=drive_link",
    image: app,
  },
  {
    title: "UI/UX",
    to: "/competition/ui-ux",
    description: "Design, Impress, Win!",
    guidebook:
      "https://drive.google.com/file/d/1B7CYZBSldxNQ4RSqxWWNrBLAgZ_fwU6H/view?usp=sharing",
    image: ui,
  },
  {
    title: "Competitive Programming",
    to: "/competition/competitive-programming",
    description: "Code, Conquer, Triumph!",
    guidebook:
      "https://drive.google.com/file/d/1PIAiQ3bBiYWq55eB98ND-WJg94rnZARq/view?usp=sharing",
    image: cp,
  },
  {
    title: "Esport",
    to: "/competition/esport",
    description: "Game On, Win Big!",
    image: esport,
    guidebook: "https://drive.google.com/file/d/1MOTU9Cxwz-kWqD9GvsmNs37G-VZB0q70/view?usp=sharing",
    secondGuidebook: "https://drive.google.com/file/d/1kX-PqUAW9-d7cubIEx39ffkos9MhRoTN/view?usp=sharing"
  },
];
