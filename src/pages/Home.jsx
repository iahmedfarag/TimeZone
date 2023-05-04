import React from "react";
import product1 from "../assets/images/product18.png";
import product2 from "../assets/images/product19.png";

import {
  Features,
  Footer,
  Hero,
  Images,
  Navbar,
  NewArrivals,
  PopularItems,
  SmallNavbar,
  Video,
  WatchOfChoice,
} from "../components";
const Home = () => {
  return (
    <>
      <Navbar />
      <SmallNavbar />
      <Hero />
      <NewArrivals />
      <Images />
      <PopularItems />
      <Video />
      <WatchOfChoice textDirection="left" image={product1} />
      <WatchOfChoice textDirection="right" image={product2} />
      <Features />
      <Footer />
    </>
  );
};

export default Home;
