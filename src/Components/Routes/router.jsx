import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Main/Main";
import AddCoffee from "../Pages/AddCoffee";
import AllCoffees from "../Pages/AllCoffees";
import UpdateCoffee from "../Pages/UpdateCoffee";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:'/home',
        element:<Home/>,
      },
      {
        path:'/allCoffees',
        element:<AllCoffees/>
      },

      {
        path:'/addCoffee',
        element:<AddCoffee/>
      },
      {
        path:'/updateCoffee',
        element:<UpdateCoffee/>
      }
    ],
  },
]);
