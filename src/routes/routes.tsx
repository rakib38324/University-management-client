import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPath } from "./adminrouters";
import { routeGenerators } from "../utiles/routesGenerators";
import { facultyPath } from "./facultyroutes";
import { studentPath } from "./studentroutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: routeGenerators(adminPath),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routeGenerators(facultyPath),
  },
  {
    path: "/student",
    element: <App />,
    children: routeGenerators(studentPath),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
