import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import About from "../Pages/About";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Profile from "../Pages/Profile";
import Home from "../Pages/Home";


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/sign-in',
                element: <SignIn></SignIn>
            },
            {
                path:'/sign-out',
                element:<SignUp></SignUp>
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            },
        ]
    }
])
export default router;