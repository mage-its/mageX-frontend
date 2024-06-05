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
        path: 'app',
        element: <Competition/>,
      },
      {
        path: 'game',
        element: <Competition/>,
      }
    ],
  },
]);

export default router;
