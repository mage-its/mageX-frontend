import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import Workshop from "./Workshop";
import ComingSoon from "./ComingSoon";

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
        path: "workshop",
        element: <Workshop />,
      },
      {
        path: "coming-soon",
        element: <ComingSoon />,
      },
    ],
  },
]);

export default router;
