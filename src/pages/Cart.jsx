import React from "react";
import { CartProduct, CartTotals, Header } from "../components";
import product1 from "../assets/images/product10.png";
import styled from "styled-components";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Cart = () => {
  return (
    <Wrapper>
      <Header title={"Cart List"} />
      <section>
        <div className="container">
          <header>
            <p className="content">Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </header>

          <div className="wrapper">
            <CartProduct image={product1} />
            <hr />
            <CartProduct image={product1} />
          </div>

          <CartTotals />
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
        border-bottom: 1px solid gray;
        p {
          width: calc(40% / 3);
        }
        .content {
          width: 60%;
        }
      }
    }
  }

  @media (max-width: 992px) {
    section {
      padding: 100px;
      .container {
        header {
          p {
            width: calc(50% / 3);
          }
          .content {
            width: 50%;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 60px 0;
      .container {
        header {
          p {
            width: calc(60% / 3);
          }
          .content {
            width: 40%;
          }
        }
      }
    }
  }

  @media (max-width: 576px) {
    margin: 0 20px;
    section {
      .container {
        header {
          p {
            width: calc(70% / 3);
          }
        }
      }
    }
  }
`;
export default Cart;
