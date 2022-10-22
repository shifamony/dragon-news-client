import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../Pages/Categories/Category";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";
import Login from "../Pages/Shared/Login/Login";
import Register from "../Pages/Shared/RighttSideNav/Register/Register";

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
                element: <News></News>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path:'/login',
                element: <Login></Login>,
               
            },
            {
                path:'/register',
                element: <Register></Register>  
            }
        ]
    }
]);