import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import Workshop from "./Workshop";
import ComingSoon from "./ComingSoon";
import Competition from "./Competition";
import Profile from "./Dashboard/User/Profile";
import DashboardHome from "./Dashboard/User/DashboardHome";
import DashboardWorkshop from "./Dashboard/User/DashboardWorkshop";
import DashboardCompetition from "./Dashboard/User/DashboardCompetition";
import Error from "./Error";
import DataUser from "./Dashboard/Admin/DataUser";
import DataTeam from "./Dashboard/Admin/DataTeam";
import DataWorkshop from "./Dashboard/Admin/DataWorkshop";
import DataAnnouncement from "./Dashboard/Admin/DataAnnouncement";
import AddAnnouncement from "./Dashboard/Admin/AddAnnouncement";
import EditAnnouncement from "./Dashboard/Admin/EditAnnouncement";

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
        path: "/dashboard/workshop/robotika",
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
      {
        path: "/admin/user",
        element: <DataUser />,
      },
      {
        path: "/admin/team",
        element: <DataTeam />,
      },
      {
        path: "/admin/workshop",
        element: <DataWorkshop />,
      },
      {
        path: "/admin/announcement",
        element: <DataAnnouncement />,
      },
      {
        path: "/admin/announcement/add",
        element: <AddAnnouncement />,
      },
      {
        path: "/admin/announcement/edit/:id",
        element: <EditAnnouncement />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default router;
