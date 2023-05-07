import React, { useEffect } from "react";
import product1 from "../assets/images/product18.png";
import product2 from "../assets/images/product19.png";

import {
  Hero,
  Images,
  NewArrivals,
  PopularItems,
  Video,
  WatchOfChoice,
} from "../components";
import { getMenWatches } from "../features/productsSlice.jsx";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <NewArrivals />
      <Images />
      <PopularItems />
      <Video />
      <WatchOfChoice textDirection="left" image={product1} />
      <WatchOfChoice textDirection="right" image={product2} />
    </>
  );
};

export default Home;
