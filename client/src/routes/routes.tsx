import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Courses from "../Pages/courses/Courses";
import Home from "../Pages/Home/Home";
import Tutions from "../Pages/Tuitions/Tutions";
import Tutors from "../Pages/Tutors/Tutors";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children: [
            {
                path:'/',
                element: <Home/>,
                
    },
    {
        path:'/courses',
        element:<Courses/>
    },
    {
        path:'/course/'
    },
    {
        path:'/find-tutions',
        element:<Tutions/>
    },
    {
        path:'/tutors',
        element:<Tutors/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/signup',
        element:<SignUp/>
    }
]
}
])