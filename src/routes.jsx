import { createBrowserRouter, Navigate } from "react-router-dom"
import MainLayout from "./MainLayout"
import ErrorPage from "./Pages/ErrorPage"
import Home from "./Pages/Home/Home"
import Statics from "./Pages/Statics/Statics"
import DashBoard from "./Pages/DashBoard/DashBoard"
import Cart from "./Pages/DashBoard/Cart/Cart"
import WishList from "./Pages/DashBoard/WishList/WishList"
import AboutUs from "./Pages/AboutUs/AboutUs"
import FAQ from "./Pages/FAQ/FAQ"
import AllProducts from "./Pages/Home/Children/AllProducts"
import ProductCards from "./Components/ProductCards"
import DetailsCard from "./Components/DetailsCard"

const routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        loader:()=>fetch('../public/allCategories.json'),
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Home/>,
                children:[
                    {
                        path:"/",
                        element:<AllProducts/>
                    },
                    {
                        path:"productCards/:category",
                        element:<ProductCards/>
                    }
                    
                ]
            },
            {
                path:"statics",
                element:<Statics/>
            },
            {
                path:"detailsCard/:ID",
                loader:()=>fetch('../public/allCategories.json'),
                element:<DetailsCard/>
            },
            {
                path:"dashboard",
                element:<DashBoard/>,
                children:[
                    {
                        index:true,
                        element:<Navigate to="cart" replace/>
                    },
                    {
                        path:"cart",
                        element:<Cart/>
                    },
                    {
                        path:"wishList",
                        element:<WishList/>
                    }
                ]
            },
            {
                path:"aboutUs",
                element:<AboutUs/>
            },
            {
                path:"FAQ",
                element:<FAQ/>
            }
        ]
    }
])

export default routes