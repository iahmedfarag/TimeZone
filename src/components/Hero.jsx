import React from "react";
import watch from "../assets/images/product02.png";
import styled from "styled-components";
import ShopNowBtn from "./ShopNowBtn.jsx";
const Hero = () => {
  return (
    <Wrapper>
      <div className="container">
        <section className="content">
          <h2 className="animate__animated animate__fadeInLeft">
            select your new perfect style
          </h2>
          <p className="animate__animated animate__fadeInLeft">
            Marxism tbh fixie tote bag ethical vaporware. Copper mug
            dreamcatcher messenger bag, <span></span> green juice schlitz
            slow-carb heirloom ramps.
          </p>
          <ShopNowBtn text="SHOP NOW" />
        </section>
        <section className="watch animate__animated animate__wobble animate__repeat-3 animate__slower">
          <img src={watch} alt="" />
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  margin-top: 100px;
  background-color: #eee;
  height: 960px;

  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    .content {
      width: 70%;
      h2 {
        --animate-duration: 0.3s;
        font-size: 100px;
        text-transform: capitalize;
        margin: 0;
      }
      p {
        --animate-duration: 0.4s;
        margin: 30px 0;
        margin-bottom: 40px;
        line-height: 1.5;
        span {
          display: block;
        }
      }
      button {
        --animate-duration: 0.5s;
      }
    }
    .watch {
      width: 30%;
      img {
        width: 100%;
      }
    }
  }

  @media (max-width: 1200px) {
    height: 500px;
    .container {
      .content {
        h2 {
          font-size: 60px;
        }
        p {
          span {
          }
        }
      }
      .watch {
        width: auto;
        img {
          height: 500px;
        }
      }
    }
  }

  @media (max-width: 992px) {
    .container {
      .content {
        h2 {
          font-size: 50px;
        }
        p {
          span {
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .container {
      .content {
        h2 {
          font-size: 40px;
        }
        p {
          span {
          }
        }
      }
    }
  }

  @media (max-width: 576px) {
    .container {
      .content {
        width: 100%;
        padding: 0 20px;
        h2 {
          font-size: 30px;
        }
        p {
          margin: 15px 0;
          margin-bottom: 20px;
          span {
            display: inline-block;
          }
        }
      }
      .watch {
        display: none;
      }
    }
  }
`;

export default Hero;
