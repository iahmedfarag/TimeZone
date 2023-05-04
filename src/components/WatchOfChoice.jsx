import React from "react";
import styled from "styled-components";

import ShopNowBtn from "./ShopNowBtn.jsx";
const WatchOfChoice = ({ textDirection, image }) => {
  return (
    <Wrapper>
      <div
        className="container"
        style={{
          flexDirection: textDirection === "left" ? "row" : "row-reverse",
        }}
      >
        <div className="content">
          <h2>Watch of Choice</h2>
          <p>
            Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
          <ShopNowBtn text="SHOW WATCHES" />
        </div>
        <img src={image} alt="" />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 100px 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 100px;
    flex-wrap: wrap;
    .content {
      width: calc(100% / 2 - 50px);
      h2 {
        font-size: 40px;
      }
      p {
        line-height: 1.5;
        font-size: 17px;
        margin-bottom: 40px;
      }
    }
    img {
      width: calc(100% / 2 - 50px);
    }
  }
  @media (max-width: 992px) {
    .container {
      .content {
        h2 {
          font-size: 35px;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .container {
      .content {
        width: 100%;
      }
      img {
        width: 100%;
      }
    }
  }
  @media (max-width: 576px) {
    margin: 0 20px;
  }
`;
export default WatchOfChoice;
