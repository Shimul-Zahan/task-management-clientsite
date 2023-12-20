import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home";


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
])

export default router