import React from "react";
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
const Home = () => {
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
