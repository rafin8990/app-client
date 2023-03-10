import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Upload from "../Pages/Upload/Upload";
import Welcome from "../Pages/Welcome/Welcome";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Login></Login>
    },
    {
        path:'/home',
        element:<Home></Home>
    },
    {
        path:'/welcome',
        element:<Welcome></Welcome>
    },
    {
        path:'/allapplication',
        element:<Dashboard></Dashboard>
    },
    {
        path:'/upload/:id',
        element:<Upload></Upload>,
        loader:({params})=>fetch(`http://localhost:5000/updateData/${params?.id}`)
    },
    
    
    
])