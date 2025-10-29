import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "./layout/RootLayout";
import ErrorLayout from "./layout/ErrorLayout";
import { lazy } from "react";
const Home = lazy(() => import("./page/Home"));
const Collection = lazy(() => import("./page/Collections"));
const Detail = lazy(() => import("./page/Detail"));
const Cart = lazy(() => import("./page/CartPage"));
const Checkout = lazy(() => import("./page/Checkout"));
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Collections/:category",
        element: <Collection />,
      },
      {
        path: "Collections/:category/:productname",
        element: <Detail />,
      },
      {
        path: "Cart",
        element: <Cart />,
      },
      {
        path: "Checkout",
        element: <Checkout />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={Router}></RouterProvider>;
};

export default App;
