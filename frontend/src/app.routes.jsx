import { createBrowserRouter } from "react-router"
import Login from "../src/features/Auth/pages/Login"
import Register from "../src/features/Auth/pages/Register"
import Protected from "./features/Auth/components/Protected"

const router = createBrowserRouter([

    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/",
        element: <Protected><h1>HOME PAGE.....</h1></Protected>
    }


])

export default router;


