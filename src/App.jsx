import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "./layout/RootLayout";
import { Home, Collection } from "./page";
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
    ],
  },
]);
const App = () => {
  return <RouterProvider router={Router}></RouterProvider>;
};

export default App;
