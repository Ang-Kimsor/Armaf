import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "./layout/RootLayout";
import { Home, Collection, Detail, Cart, Checkout } from "./page";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    errorElement: <h1>This is error</h1>,
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
