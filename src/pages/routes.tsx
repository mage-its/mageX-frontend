import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import Workshop from "./Workshop";
import ComingSoon from "./ComingSoon";
import Competition from "./Competition";
import Profile from "./Dashboard/User/Profile";
import DashboardHome from "./DashboardHome";
import DashboardWorkshop from "./DashboardWorkshop";
import DashboardCompetition from "./DashboardCompetition";
import Error from "./Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/dashboard/workshop/multimedia",
        element: <DashboardWorkshop />,
      },
      {
        path: "/dashboard/workshop/robotics",
        element: <DashboardWorkshop />,
      },
      {
        path: "/dashboard/workshop/iot",
        element: <DashboardWorkshop />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/workshop",
        element: <Workshop />,
      },
      {
        path: "/competition/app-development",
        element: <Competition />,
      },
      {
        path: "/competition/game-development",
        element: <Competition />,
      },
      {
        path: "/competition/iot",
        element: <Competition />,
      },
      {
        path: "/competition/robotic",
        element: <Competition />,
      },
      {
        path: "/competition/ui-ux",
        element: <Competition />,
      },
      {
        path: "/competition/esport",
        element: <Competition />,
      },
      {
        path: "/competition/competitive-programming",
        element: <Competition />,
      },
      {
        path: "/coming-soon",
        element: <ComingSoon />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/home",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/competition",
        element: <DashboardCompetition />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default router;
