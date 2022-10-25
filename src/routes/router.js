import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Blog from "../pages/Blog";
import Courses from "../pages/Courses";
import Error from "../pages/Error";
import Faq from "../pages/Faq";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
export default router;
