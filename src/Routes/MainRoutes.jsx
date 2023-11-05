import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PageError from "../Pages/PageError/PageError";
import AllFood from "../Pages/AllFood/AllFood";
import Blog from "../Pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";
import AddProduct from "../Pages/AddProduct/AddProduct";
import SingleFood from "../Pages/SingleFood/SingleFood";
import OrderedFood from "../Pages/OrderedFood/OrderedFood";

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
                element:<AllFood/>
            },
            {
                path:'/allfood/:id',
                element:<SingleFood/>,
                loader:({params})=>fetch(`http://localhost:5000/all-food/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blog/>
            },
            {
                path:'/add-item',
                element:<PrivateRoute><AddProduct/></PrivateRoute>
            },
            {
                path:'/allfood/:id/order',
                element:<PrivateRoute><OrderedFood/></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/all-food/${params.id}`)
            }
        ]
    },
   
])


export default MainRoutes;