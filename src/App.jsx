import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "./layout/RootLayout";
import { Home } from "./page";
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
    ],
  },
]);
const App = () => {
  return <RouterProvider router={Router}></RouterProvider>;
};

export default App;
