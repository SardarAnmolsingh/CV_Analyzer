import { createBrowserRouter } from "react-router"
import Login from "../src/features/Auth/pages/Login"
import Register from "../src/features/Auth/pages/Register"
// import Protected from "./features/Auth/components/Protected"
import Home from "./features/AI/pages/Home"

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
        element:<Home />
    }


])

export default router;


