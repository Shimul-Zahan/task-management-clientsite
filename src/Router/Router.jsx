import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import Profile from "../Components/Profile";
import AddTask from "../Components/addTask";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
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