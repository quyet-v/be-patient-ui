import {createBrowserRouter, RouterProvider} from "react-router";
import {LoginRoute} from "./routes/login.tsx";
import {HomeRoute} from "./routes/home.tsx";
import {RegisterRoute} from "./routes/register.tsx";
import { AppRoute } from "./routes/app.tsx";
import { NavBarLayout } from "../components/layouts/nav-bar-layout.tsx";

export const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomeRoute />
        },
        {
            path: "/app",
            element: <NavBarLayout />,
            children: [
                { index: true, element: <AppRoute /> },
            ]
        },
        {
            path: "/auth/login",
            element: <LoginRoute />
        },
        {
            path: "/auth/register",
            element: <RegisterRoute />
        }
    ])

    return <RouterProvider router={router} />
}