import React from "react";
import styled from "styled-components";
import product1 from "../assets/images/product10.png";
import product2 from "../assets/images/product11.png";
import product3 from "../assets/images/product12.png";
import product4 from "../assets/images/product13.png";
import product5 from "../assets/images/product14.png";
import product6 from "../assets/images/product15.png";
import ShopNowBtn from "./ShopNowBtn.jsx";
import Product from "./Product";

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
          <Product
            image={product1}
            title={"Thermo Ball Etip Gloves"}
            price={"$ 45,743"}
          />
          <Product
            image={product2}
            title={"Thermo Ball Etip Gloves"}
            price={"$ 45,743"}
          />
          <Product
            image={product3}
            title={"Thermo Ball Etip Gloves"}
            price={"$ 45,743"}
          />
          <Product
            image={product4}
            title={"Thermo Ball Etip Gloves"}
            price={"$ 45,743"}
          />
          <Product
            image={product5}
            title={"Thermo Ball Etip Gloves"}
            price={"$ 45,743"}
          />
          <Product
            image={product6}
            title={"Thermo Ball Etip Gloves"}
            price={"$ 45,743"}
          />
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
    }
  }
  @media (max-width: 768px) {
    padding: 60px 0;
  }
  @media (max-width: 576px) {
    margin: 0 20px;
  }
`;

export default PopularItems;
