import React from "react";
import product03 from "../assets/images/product03.png";
import product04 from "../assets/images/product04.png";
import product05 from "../assets/images/product05.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
const NewArrivals = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2>New Arrivals</h2>
        <div className="wrapper">
          <article>
            <img src={product03} alt="product" />
            <h3>
              <Link to={"/product-details/61"}>Thermo Ball Etip Gloves</Link>
            </h3>
            <h4>$ 45,743</h4>
          </article>
          <article>
            <img src={product04} alt="product" />
            <h3>
              <Link to={"/product-details/62"}>Thermo Ball Etip Gloves</Link>
            </h3>
            <h4>$ 45,743</h4>
          </article>
          <article>
            <img src={product05} alt="product" />
            <h3>
              <Link to={"/product-details/63"}>Thermo Ball Etip Gloves</Link>
            </h3>
            <h4>$ 45,743</h4>
          </article>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 200px 0;
  .container {
    h2 {
      font-size: 40px;
      margin-bottom: 50px;
    }
    .wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      article {
        width: calc(100% / 3 - 20px);
        text-align: center;
        overflow: hidden;
        img {
          width: 100%;
          overflow: hidden;
          transition: 0.5s;
          &:hover {
            transform: scale(1.03);
          }
        }
        h3 {
          font-size: 22px;
          margin: 0;
          margin-top: 20px;
          margin-bottom: 10px;
          transition: var(--main-trans);
          &:hover {
            color: var(--main-color);
          }
        }
        h4 {
          color: var(--main-color);
          margin: 0;
        }
      }
    }
  }
  @media (max-width: 992px) {
    padding: 100px 0;
    .container {
      .wrapper {
        article {
          width: calc(100% / 2 - 15px);
        }
      }
    }
  }
  @media (max-width: 768px) {
    padding: 60px 0;
    .container {
      .wrapper {
        flex-wrap: wrap;
        gap: 30px;
        article {
          width: calc(100% / 2 - 15px);
          h3 {
            font-size: 20px;
            margin-top: 20px;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
  @media (max-width: 576px) {
    padding-right: 20px;
    padding-left: 20px;
    .container {
      .wrapper {
        gap: 30px;
        article {
          width: calc(100%);
          h3 {
            font-size: 20px;
            margin-top: 20px;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
`;

export default NewArrivals;
