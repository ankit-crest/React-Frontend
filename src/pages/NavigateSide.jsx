import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GetApi from "./UserApi";
import AppMain from "../layout/Layout";
import Layout from "../layout/Layout";
import Register from "./auth/Register";
import Login from "./auth/login";
import Details from "./Component/Details";
import { Provider } from "react-redux";
import { StoreManage } from "../storage/StoreManage";
import Category from "./Component/Ecommerce/CategoryComponent";

const Navigate = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/user",
          element: <GetApi />,
        },
        {
          path: "/details",
          element: <Details />,
        },
        {
          path: "/category",
          element: <Category />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default Navigate;
