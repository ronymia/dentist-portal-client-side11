import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import { Appointment, Home } from "../../pages";
import Login from "../../pages/Auth/Login/Login";
import SignUp from "../../pages/Auth/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../../layouts/Dashboard";
import MyAppointment from "../../pages/Dashoard/MyAppointment/MyAppointment";

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
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                index: true,
                element: <MyAppointment />
            }
        ]
    }

]);