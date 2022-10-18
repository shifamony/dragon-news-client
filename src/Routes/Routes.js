import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../Pages/Categories/Category";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/category/:id',
                element: <Category></Category>
            },
            {
                path:'/news/:id',
                element: <News></News>
            }
        ]
    }
]);