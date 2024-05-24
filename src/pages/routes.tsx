import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import Workshop from "./Workshop";

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
    ],
  },
]);

export default router;
