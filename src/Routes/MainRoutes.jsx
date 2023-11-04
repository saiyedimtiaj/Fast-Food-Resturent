import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PageError from "../Pages/PageError/PageError";
import AllFood from "../Pages/AllFood/AllFood";
import Blog from "../Pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";

const MainRoutes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<PageError/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'register',
                element:<Register/>
            },
            {
                path:'/allfood',
                element:<PrivateRoute><AllFood/></PrivateRoute>
            },
            {
                path:'/blog',
                element:<PrivateRoute><Blog/></PrivateRoute>
            }
        ]
    },
   
])


export default MainRoutes;