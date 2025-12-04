import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Course from "../pages/Course/Course/Course";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
//import CourseDetails from "../pages/Course/CourseDetails/CourseDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Course />,
      },
      // {
      //   path: "/courses-details/:id",
      //   element: <CourseDetails />,
      // },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
