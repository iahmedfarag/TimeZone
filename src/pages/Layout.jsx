import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, SmallNavbar, Features, Footer } from "./../components";
import { getMenWatches } from "../features/productsSlice.jsx";
import { updateTotals } from "../features/cartSlice.jsx";

const Layout = () => {
  const dispatch = useDispatch();
  const { cart_products } = useSelector((store) => store.cart);
  useEffect(() => {
    dispatch(getMenWatches());
  }, []);

  useEffect(() => {
    dispatch(updateTotals());
  }, [cart_products]);
  return (
    <>
      <Navbar />
      <SmallNavbar />
      <Outlet />
      <Features />
      <Footer />
    </>
  );
};

export default Layout;
