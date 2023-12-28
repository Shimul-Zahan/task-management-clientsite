import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import Profile from "../Components/Profile";
import AddTask from "../Components/addTask";
import Login from "../Page/Login";
import Registration from "../Page/Registration";
import Contact from "../Page/Contact/Contact";
import About from "../Page/About/About";
import PrivateRoute from "./PrivateRoute";
import SeePreviousTask from "../Components/SeePreviousTask";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/contact',
                element: <PrivateRoute><Contact /></PrivateRoute>
            },
            {
                path: '/about',
                element: <PrivateRoute><About /></PrivateRoute>
            },
            {
                path: '/register',
                element: <Registration />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: '/dashboard/add-task',
                element: <PrivateRoute><AddTask /></PrivateRoute>
            },
            {
                path: '/dashboard/profile',
                element: <PrivateRoute><Profile /></PrivateRoute>
            },
            {
                path: '/dashboard/all-task',
                element: <PrivateRoute><SeePreviousTask /></PrivateRoute>
            },
        ]
    }
])

export default router