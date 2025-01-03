import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Main/Main";
import AddCoffee from "../Pages/AddCoffee";
import AllCoffees from "../Pages/AllCoffees";
import CoffeeDetails from "../Pages/CoffeeDetails";
import UpdateCoffee from "../Pages/UpdateCoffee";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader:()=>fetch('http://localhost:5000/coffees')
        
      },
      {
        path:'/home',
        element:<Home/>,
        loader:()=>fetch('http://localhost:5000/coffees')
      },
      {
        path:'/coffees',
        element:<AllCoffees/>,
        loader:()=>fetch('http://localhost:5000/coffees')
      },
      {
        path:'/coffees/:id',
        element:<CoffeeDetails/>,
        loader:({params})=>fetch(`http://localhost:5000/coffees/${params.id}`)
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
