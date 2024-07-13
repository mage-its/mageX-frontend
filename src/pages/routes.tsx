import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import Workshop from "./Workshop";
import ComingSoon from "./ComingSoon";
import Competition from "./Competition";
import DashboardHome from "./Dashboard-Home"
import DashboardWorkshop from "./Dashboard-Workshop"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/dashboardHome",
        element: <DashboardHome />,
      },
      {
        path: "/dashboardWorkshop",
        element: <DashboardWorkshop />,
      },
      {
        path: "/home",
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
        path: "/dashboard-Home",
        element: <DashboardHome />,
      }
    ],
  },
]);

export default router;
