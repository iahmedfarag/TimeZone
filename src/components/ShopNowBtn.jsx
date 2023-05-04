import React from "react";
import styled from "styled-components";

const ShopNowBtn = ({ text }) => {
  return (
    <Wrapper className="animate__animated animate__fadeInLeft animate__slow">
      <p>{text}</p>
      <span></span>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  background-color: #333;
  color: #fff;
  padding: 15px 30px;
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
    background-color: var(--main-color);
    left: -100%;
    top: 0;
    transition: 0.3s;
  }
  &:hover span {
    left: 0;
  }
`;
export default ShopNowBtn;
