import React from "react";
import product1 from "../assets/images/product10.png";
import product2 from "../assets/images/product11.png";
import product3 from "../assets/images/product12.png";
import styled from "styled-components";
import Slider from "react-slick";

const ProductImages = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper className="images">
      <Slider {...settings}>
        <img src={product1} alt="" />
        <img src={product2} alt="" />
        <img src={product1} alt="" />
        <img src={product3} alt="" />
      </Slider>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: calc(50% - 15px);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export default ProductImages;
