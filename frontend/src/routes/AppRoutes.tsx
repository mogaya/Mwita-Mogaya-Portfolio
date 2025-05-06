import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import DevProjects from "../pages/DevProjects";
import GraphicProjects from "../pages/GraphicProjects";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dev-projects",
        element: <DevProjects />,
      },
      {
        path: "/graphic-projects",
        element: <GraphicProjects />,
      },
    ],
  },
]);

export default AppRoutes;
