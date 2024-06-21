import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import Workshop from "./Workshop";
import Competition from "./Competition";

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
        path: 'workshop',
        element: <Workshop />,
      },
      {
        path: 'app_development',
        element: <Competition/>,
      },
      {
        path: 'game_development',
        element: <Competition/>
      },
      {
        path: 'iot',
        element: <Competition/>
      },
      {
        path : 'robotic',
        element: <Competition/>
      },
      {
        path: 'ui_ux',
        element: <Competition/>
      },
      {
        path: 'esport',
        element: <Competition/>,
      },
      {
        path: 'competitive_programming',
        element: <Competition/>
      }
    ],
  },
]);

export default router;
