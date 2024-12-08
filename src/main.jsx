import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./Components/HomePage/HomeLayout";
import Error from "./Components/HomePage/Error";
import HomeMain from "./Components/HomeMain/HomeMain";
import AuthProvider from "./Components/Provider/AuthProvider";
import Login from "./Components/Users/Login";
import Register from "./Components/Users/Register";
import AddMovie from "./Components/Movies/AddMovie";
import AllMovies from "./Components/Movies/AllMovies";
import Favorites from "./Components/Movies/Favorites";
import PrivateRoute from "./Components/Routes/PrivateRoute";
import MovDetails from "./Components/Movies/MovDetails";
import UpdateMovie from "./Components/Movies/UpdateMovie";
import Feedback from "./Components/HomePage/Feedback";
import ForgetPassword from "./Components/Users/ForgetPassword";
import UpdateProfile from "./Components/Users/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomeMain />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/edit-profile",
        element: <UpdateProfile />,
      },
      {
        path: "/feedback",
        element: <Feedback />,
      },
      {
        path: "/add-movie",
        element: (
          <PrivateRoute>
            <AddMovie />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-movies",
        element: (
          <PrivateRoute>
            <AllMovies />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-movie/:id",
        element: (
          <PrivateRoute>
            <UpdateMovie />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://starflix-server.vercel.app/movies/${params.id}`),
      },
      {
        path: "/favorites",
        element: (
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        ),
      },
      {
        path: "/movie-details/:id",
        element: (
          <PrivateRoute>
            <MovDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://starflix-server.vercel.app/movies/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
