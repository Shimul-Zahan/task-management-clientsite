import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import Profile from "../Components/Profile";


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
                element: <h1>Hello</h1>
            },
            {
                path: '/dashboard/profile',
                element: <Profile />
            },
        ]
    }
])

export default router