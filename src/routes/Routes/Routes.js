import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import { Appointment, Home } from "../../pages";
import Login from "../../pages/Auth/Login/Login";
import SignUp from "../../pages/Auth/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/auth/signup",
                element: <SignUp />
            },
            {
                path: "/auth/login",
                element: <Login />
            },
            {
                path: "/appointment",
                element: <PrivateRoute><Appointment /></PrivateRoute>
            }
        ]
    },

]);