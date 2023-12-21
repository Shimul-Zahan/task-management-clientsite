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
                path: '/register',
                element: <Registration />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard/add-task',
                element: <AddTask />
            },
            {
                path: '/dashboard/profile',
                element: <Profile />
            },
        ]
    }
])

export default router