import React from "react";
import image1 from "../assets/images/product06.png";
import image2 from "../assets/images/product07.png";
import image3 from "../assets/images/product08.png";
import image4 from "../assets/images/product09.png";
import styled from "styled-components";
const Images = () => {
  return (
    <Wrapper>
      <div className="num1 img">
        <img src={image1} alt="image" className="num1" />
        <div className="overlay"></div>
      </div>
      <div className="num2 img">
        <img src={image2} alt="image" className="num2" />
        <div className="overlay"></div>
      </div>
      <div className="wrapper">
        <div className="num3 img">
          <img src={image3} alt="image" className="num3" />
          <div className="overlay"></div>
        </div>
        <div className="num4 img">
          <img src={image4} alt="image" className="num4" />
          <div className="overlay"></div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  .img {
    position: relative;
    &:hover {
      .overlay {
        opacity: 0.5;
      }
    }
    .overlay {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: var(--main-trans);
      opacity: 0;
    }
  }
  .num1 {
    width: calc(50% - 40px / 3);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .num2 {
    width: calc(25% - 40px / 3);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .wrapper {
    width: calc(25% - 40px / 3);
    display: flex;
    flex-direction: column;
    gap: 20px;
    .num3 {
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .num4 {
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  @media (max-width: 992px) {
    .num1 {
      width: calc(50% - 15px);
    }
    .num2 {
      width: calc(50% - 15px);
    }
    .wrapper {
      width: 100%;
      flex-direction: row;
      .num3 {
        width: calc(50% - 15px);
      }
      .num4 {
        width: calc(50% - 15px);
      }
    }
  }
  @media (max-width: 576px) {
    margin: 0 20px;
    .num1 {
      width: 100%;
    }
    .num2 {
      width: 100%;
    }
    .wrapper {
      width: 100%;
      flex-direction: column;
      .num3 {
        width: 100%;
      }
      .num4 {
        width: 100%;
      }
    }
  }
`;

export default Images;
