import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Home,
  Login,
  Layout,
  Shop,
  Register,
  ProductDetails,
  Cart,
  About,
  Contact,
  WhishList,
} from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/shop", element: <Shop /> },
        { path: "/product-details/:id", element: <ProductDetails /> },
        { path: "/cart", element: <Cart /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/register", element: <Register /> },
        { path: "/login", element: <Login /> },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
