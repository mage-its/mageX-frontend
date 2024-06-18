import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import Workshop from "./Workshop";
import Competition from "./Competition";
import DashboardHome from "./Dashboard-Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: 'workshop',
        element: <Workshop />,
      },
      {
        path: 'competition',
        element: <Competition />,
      }
    ],
  },
]);

export default router;
