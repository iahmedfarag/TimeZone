import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, SmallNavbar, Features, Footer } from "./../components";
import { getMenWatches } from "../features/productsSlice.jsx";
import { clearCart, updateTotals } from "../features/cartSlice.jsx";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  const dispatch = useDispatch();
  const { cart_products } = useSelector((store) => store.cart);
  const { user } = useSelector((store) => store.user);

  // ! get watches when open the website
  useEffect(() => {
    dispatch(getMenWatches());
  }, []);

  // ! update totals every cart_products change
  useEffect(() => {
    dispatch(updateTotals());
  }, [cart_products]);

  // ! when logout clear the cart
  useEffect(() => {
    if (!user) {
      dispatch(clearCart());
    }
  }, [user]);

  return (
    <>
      <Navbar />
      <SmallNavbar />
      <Outlet />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Features />
      <Footer />
    </>
  );
};

export default Layout;
