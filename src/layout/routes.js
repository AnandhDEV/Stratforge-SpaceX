import Home from "../pages/Home/Home";
import LaunchDetail from "../pages/Launches/LaunchDetail";
import Launches from "../pages/Launches/Launches";

import Notfound from "../components/404";

export const outletRoutes = [
  {
    path: "*",
    element: <Notfound />,
  },
  { path: "home", element: <Home /> },
  { path: "launches", element: <Launches /> },
  { path: "launches/:id", element: <LaunchDetail /> },
];
