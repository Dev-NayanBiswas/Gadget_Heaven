import { createBrowserRouter } from "react-router-dom"
import MainLayout from "./MainLayout"
import ErrorPage from "./Pages/ErrorPage"
import Home from "./Pages/Home/Home"
import Statics from "./Pages/Statics/Statics"
import DashBoard from "./Pages/DashBoard.jsx/DashBoard"
import AboutUs from "./Pages/AboutUs/AboutUs"
import FAQ from "./Pages/FAQ/FAQ"
import Cart from "./Pages/Cart/Cart"
import WishList from "./Pages/WishList/WishList"
import AllProducts from "./Pages/Home/Children/AllProducts"
import Laptops from "./Pages/Home/Children/Laptops"
import Phones from "./Pages/Home/Children/Phones"
import Accessories from "./Pages/Home/Children/Accessories"
import SmartWatches from "./Pages/Home/Children/SmartWatches"
import MacBook from "./Pages/Home/Children/MacBook"
import IPhone from "./Pages/Home/Children/IPhone"

const routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
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
                        path:"laptops",
                        element:<Laptops/>
                    },
                    {
                        path:"phones",
                        element:<Phones/>
                    },
                    {
                        path:"accessories",
                        element:<Accessories/>,
                    },
                    {
                        path:"smartWatches",
                        element:<SmartWatches/>
                    },
                    {
                        path:"macBook",
                        element:<MacBook/>
                    },
                    {
                        path:"iPhone",
                        element:<IPhone/>
                    }
                ]
            },
            {
                path:"statics",
                element:<Statics/>
            },
            {
                path:"dashboard",
                element:<DashBoard/>,
                children:[
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