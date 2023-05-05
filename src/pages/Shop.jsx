import React from "react";
import { Product, Header } from "../components";
import product1 from "../assets/images/product10.png";
import product2 from "../assets/images/product11.png";
import product3 from "../assets/images/product12.png";
import product4 from "../assets/images/product13.png";
import product5 from "../assets/images/product14.png";
import product6 from "../assets/images/product15.png";
import styled from "styled-components";
const Shop = () => {
  return (
    <Wrapper>
      <Header title={"Watch Shop"} />
      <section>
        <div className="container">
          <header>
            <div className="control">
              <button className="active">Newest Arrivals</button>
              <button>Price High To Low</button>
              <button>Most Popular</button>
            </div>
            <select name="" id="">
              <option value="06 Per Page">06 Per Page</option>
              <option value="12 Per Page">12 Per Page</option>
              <option value="18 Per Page">18 Per Page</option>
            </select>
          </header>
          <div className="products">
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
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  section {
    padding: 200px 0;
    .container {
      header {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 30px;
        margin-bottom: 50px;
        .control {
          display: flex;
          gap: 20px;
          button {
            font-size: 18px;
            padding: 5px 10px;
            &.active {
              border-bottom: 2px solid var(--main-color);
            }
          }
        }
      }
      select {
        padding: 5px;
      }
    }
  }

  .products {
    .wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
    }
  }

  @media (max-width: 992px) {
    section {
      padding: 100px;
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 60px 0;
    }
  }

  @media (max-width: 576px) {
    margin: 0 20px;
    section {
      .container {
        header {
          .control {
            gap: 5px;
            button {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
`;
export default Shop;
