import React from "react";
import { AddSection, Header, ProductImages } from "../components";
import styled from "styled-components";
import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductDetails = () => {
  return (
    <Wrapper>
      <Header title={"Product Details"} />
      <section>
        <div className="container">
          <ProductImages />
          <div className="info">
            <h2 className="title">Thermo Ball Etip Gloves</h2>
            <h4 className="rating">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </h4>
            <p className="description">
              An apple mobile which is nothing like apple
            </p>
            <div className="price">
              <h4 className="oldPrice">$229.99</h4>
              <h4 className="newPrice">$129.99</h4>
            </div>
            <AddSection />
            <hr />
            <p>
              <BiSupport /> Support Avaiable 24/7 For You
            </p>
            <p>
              <FaShippingFast /> Free Shipping On Orders $50+
            </p>
            <p>You Save 20$</p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  section {
    padding: 200px;
    .container {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      .info {
        width: calc(50% - 15px);
        .title {
        }
        p {
        }
        .price {
          display: flex;
          gap: 20px;
          .oldPrice {
            text-decoration: line-through red 1px;
          }
          .newPrice {
          }
        }
        .rating {
          color: #968001;
        }
      }
    }
  }
  @media (max-width: 992px) {
    section {
      padding: 100px;
      .container {
        .info {
          width: 100%;
        }
        .images {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 60px 0;
    }
  }

  @media (max-width: 576px) {
    margin: 0 20px;
  }
`;
export default ProductDetails;
