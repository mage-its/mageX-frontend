import multimedia from "@/assets/dashboardHome/multimediaLogo.svg"
import iot from "@/assets/dashboardHome/iotCompetition.svg"
import robotic from "@/assets/brand/robotic.svg";

export const competition = [
  {
    title: "Multimedia",
    to: "/competition/robotic",
    description: "Innovate, Build, Triumph!",
    image: multimedia,
  },
  {
    title: "IoT",
    to: "/competition/game-development",
    description: "Create, Compete, Dominate!",
    guidebook:
      "https://drive.google.com/file/d/1fUYN_KoP2VN6w3Sbdbb_qHjKSSYH-cfZ/view?usp=sharing",
    image: iot,
  },
  {
    title: "Robotic",
    to: "/competition/iot",
    description: "Innovate, Connect, Win!",
    guidebook:
      "https://drive.google.com/file/d/1WVmC3Nz0t0nvwonCrYMiLyDoKQyHlAFW/view?usp=sharing",
    image: robotic,
  }
];
