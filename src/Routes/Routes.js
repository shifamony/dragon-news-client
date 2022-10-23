import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../Pages/Categories/Category";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";
import Login from "../Pages/Shared/Login/Login";
import TermsAndConditions from "../Pages/Shared/Others/TermsAndConditions";
import Profile from "../Pages/Shared/Profile/Profile";
import Register from "../Pages/Shared/RighttSideNav/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: ({params}) => fetch(`http://localhost:5000/news`)
            },
            {
                path:'/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path:'/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path:'/login',
                element: <Login></Login>,
               
            },
            {
                path:'/register',
                element: <Register></Register>  
            },
            {
                path:'/terms',
                element: <TermsAndConditions></TermsAndConditions>  
            },
            {
                path:'/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>  
            }
        ]
    }
]);