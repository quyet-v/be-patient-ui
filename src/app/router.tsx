import {createBrowserRouter, RouterProvider} from "react-router";
import {LoginRoute} from "./routes/login.tsx";
import {HomeRoute} from "./routes/home.tsx";
import {RegisterRoute} from "./routes/register.tsx";

export const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomeRoute />
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