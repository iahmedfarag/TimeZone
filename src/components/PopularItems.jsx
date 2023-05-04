import React from "react";
import styled from "styled-components";
import { BsHeart } from "react-icons/bs";
import product1 from "../assets/images/product10.png";
import product2 from "../assets/images/product11.png";
import product3 from "../assets/images/product12.png";
import product4 from "../assets/images/product13.png";
import product5 from "../assets/images/product14.png";
import product6 from "../assets/images/product15.png";
import ShopNowBtn from "./ShopNowBtn.jsx";
const PopularItems = () => {
  return (
    <Wrapper>
      <div className="container">
        <header>
          <h2>Popular Items</h2>
          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. <span></span> Quis ipsum suspendisse
            ultrices gravida.
          </p>
        </header>
        <div className="wrapper">
          <article>
            <div className="img">
              <img src={product1} alt="" />
              <button className="addToCart">Add to cart</button>
              <button className="addToWhish">
                <BsHeart />
              </button>
            </div>
            <h3>Thermo Ball Etip Gloves</h3>
            <h4>$ 45,743</h4>
          </article>

          <article>
            <div className="img">
              <img src={product2} alt="" />
              <button className="addToCart">Add to cart</button>
              <button className="addToWhish">
                <BsHeart />
              </button>
            </div>
            <h3>Thermo Ball Etip Gloves</h3>
            <h4>$ 45,743</h4>
          </article>

          <article>
            <div className="img">
              <img src={product3} alt="" />
              <button className="addToCart">Add to cart</button>
              <button className="addToWhish">
                <BsHeart />
              </button>
            </div>
            <h3>Thermo Ball Etip Gloves</h3>
            <h4>$ 45,743</h4>
          </article>

          <article>
            <div className="img">
              <img src={product4} alt="" />
              <button className="addToCart">Add to cart</button>
              <button className="addToWhish">
                <BsHeart />
              </button>
            </div>
            <h3>Thermo Ball Etip Gloves</h3>
            <h4>$ 45,743</h4>
          </article>

          <article>
            <div className="img">
              <img src={product5} alt="" />
              <button className="addToCart">Add to cart</button>
              <button className="addToWhish">
                <BsHeart />
              </button>
            </div>
            <h3>Thermo Ball Etip Gloves</h3>
            <h4>$ 45,743</h4>
          </article>

          <article>
            <div className="img">
              <img src={product6} alt="" />
              <button className="addToCart">Add to cart</button>
              <button className="addToWhish">
                <BsHeart />
              </button>
            </div>
            <h3>Thermo Ball Etip Gloves</h3>
            <h4>$ 45,743</h4>
          </article>
        </div>

        <ShopNowBtn text="VIEW MORE PRODUCTS" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 200px 0;
  text-align: center;
  .container {
    header {
      margin-bottom: 50px;
      h2 {
        font-size: 40px;
        margin: 0;
      }
      p {
        line-height: 1.5;
        span {
          display: block;
        }
      }
    }
    .wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      margin-bottom: 50px;
      article {
        position: relative;
        width: calc(100% / 3 - 60px / 3);
        overflow: hidden;
        .img {
          border-bottom: 3px solid var(--main-color);
          position: relative;
          overflow: hidden;
          img {
            width: 100%;
          }
          .addToCart {
            padding: 10px;
            background-color: var(--main-color);
            color: #fff;
            position: absolute;
            bottom: -50px;
            left: 0;
            width: 100%;
            /* z-index: 2; */
            transition: var(--main-trans);
          }
          .addToWhish {
            font-size: 24px;
            position: absolute;
            top: 10px;
            right: 10px;
            transition: var(--main-trans);
            opacity: 0;
          }
        }
        h3 {
          font-size: 22px;
          margin: 0;
          margin-top: 20px;
          margin-bottom: 10px;
        }
        h4 {
          margin: 0;
        }

        &:hover {
          .img {
            .addToCart {
              bottom: 0px;
            }
            .addToWhish {
              opacity: 1;
            }
          }
        }
      }
    }
  }
  @media (max-width: 992px) {
    padding: 100px 0;
    .container {
      header {
        p {
          span {
            display: inline;
          }
        }
      }
      .wrapper {
        article {
          width: calc(100% / 2 - 15px);
        }
      }
    }
  }
  @media (max-width: 768px) {
    padding: 60px 0;
  }
  @media (max-width: 576px) {
    margin: 0 20px;
    .container {
      .wrapper {
        article {
          width: calc(100%);
        }
      }
    }
  }
`;

export default PopularItems;
