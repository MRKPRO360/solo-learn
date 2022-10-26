import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Blog from "../pages/Blog";
import CourseCheckout from "../pages/CourseCheckout";
import CourseDetails from "../pages/CourseDetails";
import Courses from "../pages/Courses";
import Error from "../pages/Error";
import Faq from "../pages/Faq";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import Update from "../pages/Update";
import PrivateRoute from "./PrivateRoute";

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
        loader: () => fetch("https://solo-learn.vercel.app/courses"),
        element: <Courses />,
      },
      {
        path: "/courses/course-details/:id",
        loader: ({ params }) =>
          fetch(
            `https://solo-learn.vercel.app/courses/course-details/${params.id}`
          ),
        element: <CourseDetails />,
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
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/update-info",
        element: <Update />,
      },
      {
        path: "/courses/checkout/:id",
        loader: ({ params }) =>
          fetch(`https://solo-learn.vercel.app/courses/checkout/${params.id}`),
        element: (
          <PrivateRoute>
            <CourseCheckout />
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
export default router;

// server link: https://solo-learn.vercel.app
