import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";

const CartProduct = ({ image }) => {
  return (
    <Wrapper className="product">
      <div className="content">
        <img src={image} alt="" />
        <h4>Minimalistic shop for multipurpose use</h4>
      </div>

      <h4 className="price">$360.00</h4>

      <div className="quantity">
        <input type="text" placeholder="1" />
        <div className="control">
          <button className="increase">
            <AiOutlinePlus />
          </button>
          <button className="decrease">
            <AiOutlineMinus />
          </button>
        </div>
      </div>

      <p className="total">$720.00</p>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  display: flex;

  .content {
    width: 60%;
    display: flex;
    align-items: center;
    margin-right: 10px;
    img {
      width: 150px;
      object-fit: cover;
    }
    h4 {
      width: 100%;
    }
  }

  h4.price {
    width: calc(40% / 3);
    display: flex;
    align-items: center;
  }

  .quantity {
    width: calc(40% / 3);
    display: flex;
    align-items: center;
    input {
      border: 1px solid gray;
      outline: none;
      width: 40px;
      height: 46.79px;
      text-align: center;
      font-size: 18px;
    }
    .control {
      display: flex;
      flex-direction: column;
      button {
        border: 1px solid gray;
        transition: var(--main-trans);
        &:hover {
          color: var(--main-color);
        }
      }
    }
  }

  .total {
    width: calc(40% / 3);
    display: flex;
    align-items: center;
  }

  @media (max-width: 992px) {
    .content {
      width: 50%;
      img {
        width: 150px;
        object-fit: cover;
      }
      h4 {
        width: 100%;
        font-size: 14px;
      }
    }
    h4.price {
      width: calc(50% / 3);
    }

    .quantity {
      width: calc(50% / 3);
    }

    .total {
      width: calc(50% / 3);
    }
  }

  @media (max-width: 768px) {
    .content {
      width: 40%;
      flex-direction: column;
      align-items: flex-start;
    }
    h4.price {
      width: calc(60% / 3);
    }

    .quantity {
      width: calc(60% / 3);
    }

    .total {
      width: calc(60% / 3);
    }
  }

  @media (max-width: 576px) {
    .content {
      width: 30%;
      flex-direction: column;
      align-items: flex-start;
      img {
        width: 100px;
        object-fit: cover;
      }
      h4 {
        display: none;
      }
    }
    h4.price {
      width: calc(70% / 3);
    }

    .quantity {
      width: calc(70% / 3);
      input {
        width: 30px;
        height: 37.79px;
        font-size: 16px;
      }
      .control {
        button {
          font-size: 12px;
          border: 1px solid gray;
          transition: var(--main-trans);
          &:hover {
            color: var(--main-color);
          }
        }
      }
    }

    .total {
      width: calc(70% / 3);
    }
  }
`;
export default CartProduct;
