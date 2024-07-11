import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import Workshop from "./Workshop";
import ComingSoon from "./ComingSoon";
import Competition from "./Competition";
import Profile from "./Dashboard/User/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
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
    ],
  },
]);

export default router;
