import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Plants from "../pages/Plants";
import MyProfile from "../pages/MyProfile";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Error from "../components/Error";
import Loader from "../components/Loader";
import PrivateRoute from "./PrivateRoute";
import PlantDetails from "../pages/PlantDetails";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        errorElement:<Error></Error>,
        hydrateFallbackElement: <Loader></Loader>,
        children:[
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path:'/plants',
                element:<Plants></Plants>
            },
            {
                path:'/myprofile',
                element: <PrivateRoute>
                    <MyProfile></MyProfile>
                </PrivateRoute>
            }
        ]

    },
    {
        path:'/auth',
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/login',
                element: <Login></Login>
            },
            {
                path:'/auth/signup',
                element: <Signup></Signup>,
            }
        ]
    },
    {
        path:'/plantDetails/:id',
        element: <PrivateRoute>
            <PlantDetails></PlantDetails>
        </PrivateRoute>
    }
]);
