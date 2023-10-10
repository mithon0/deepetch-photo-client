import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Services from "../Pages/Services/Services";
import OrderForm from "../Pages/OrderForm/OrderForm";
import Deshboard from "../layout/Deshboard/Deshboard";
import Ordermanagement from "../Pages/OrderManagement/Ordermanagement";
import Examples from "../Pages/Examples/Examples";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Payment from "../Pages/payment/Payment";
import Profile from "../Pages/Profile/Profile";
import PaymentHistory from "../Pages/PaymentHistory/PaymentHistory";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/signup",
          element:<SignUp></SignUp>
        },
        {
          path:"/services",
          element:<Services></Services>
        },
        {
          path:"/order/:email",
          element:<OrderForm></OrderForm>,
          loader:({params})=>`https://deepetch-photo-server-p7dkgndlk-mithon0.vercel.app/users/${params?.email}`
          
        },
        {
          path:"/examples",
          element:<Examples></Examples>
        },
        {
          path:"/contact",
          element:<ContactUs></ContactUs>
        }
      ]
    },
    {
      path:"/deshboard",
      element:<Deshboard></Deshboard>,
      children:[
        {
          path:"/deshboard",
          element:<Ordermanagement></Ordermanagement>
        },
        {
          path:"/deshboard/payment/:price",
          element:<Payment></Payment>
        },
        {
          path:"/deshboard/profile",
          element:<Profile></Profile>
        },
        {
          path:"/deshboard/payment-history",
          element:<PaymentHistory></PaymentHistory>
        }
      ]
    }
  ]);