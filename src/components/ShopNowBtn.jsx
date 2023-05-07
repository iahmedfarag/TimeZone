import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ShopNowBtn = ({ text, padding, background, color }) => {
  return (
    <Wrapper
      className="animate__animated animate__fadeInLeft animate__slow"
      style={{
        padding: `${padding ? padding : "15px 30px"}`,
        background: `${background ? background : "#333"}`,
        color: `${color ? color : "#fff"}`,
      }}
    >
      <Link
        to={
          text === "Checkout" ? "/cart" : text === "Login" ? "/login" : "/shop"
        }
      >
        <p>{text}</p>
        <span
          style={{
            background: `${background ? "#333" : "var(--main-color)"}`,
          }}
        ></span>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  /* background-color: #333; */
  /* color: #fff; */
  /* padding: 15px 30px; */
  position: relative;
  overflow: hidden;
  p {
    display: inline;
    position: relative;
    z-index: 2;
  }

  span {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    /* background: var(--main-color); */
    left: -100%;
    top: 0;
    transition: 0.3s;
  }
  &:hover span {
    left: 0;
  }
`;
export default ShopNowBtn;
