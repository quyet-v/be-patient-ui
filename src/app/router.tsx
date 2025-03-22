import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router";
import {LoginRoute} from "./routes/login.tsx";
import {HomeRoute} from "./routes/home.tsx";

export const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomeRoute />
        },
        {
            path: "/auth/login",
            element: <LoginRoute />
        }
    ])

    return <RouterProvider router={router} />
}