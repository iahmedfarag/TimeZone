import React from "react";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import styled from "styled-components";
import { removeItem, toggleAmount } from "../features/cartSlice.jsx";
import { useDispatch } from "react-redux";

const CartProduct = ({ id, image, title, price, amount }) => {
  const dispatch = useDispatch();
  const toggle = (type, id, value) => {
    dispatch(toggleAmount({ type, id, value }));
  };
  const remove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <>
      <Wrapper className="product">
        <div className="content">
          <img src={image} alt="" />
          <h4>{title}</h4>
        </div>

        <h4 className="price">${price}</h4>

        <div className="quantity">
          <input
            type="number"
            placeholder={amount}
            value={amount}
            onChange={(e) => {
              toggle("change", id, e.target.value);
            }}
            disabled
          />
          <div className="control">
            <button
              className="increase"
              onClick={() => {
                toggle("inc", id, amount);
              }}
            >
              <AiOutlinePlus />
            </button>
            <button
              className="decrease"
              onClick={() => {
                toggle("dec", id, amount);
              }}
            >
              <AiOutlineMinus />
            </button>
          </div>
        </div>

        <p className="total">${price * amount}</p>

        <button
          className="remove"
          onClick={() => {
            remove(id);
          }}
        >
          <AiOutlineDelete />
        </button>
      </Wrapper>
      <hr />
    </>
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
    width: calc(35% / 3);
    display: flex;
    align-items: center;
  }

  .quantity {
    width: calc(35% / 3);
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
    width: calc(35% / 3);
    display: flex;
    align-items: center;
  }

  .remove {
    color: #790202;
    font-size: 20px;
    &:hover {
      color: #bf0505;
    }
  }
  @media (max-width: 992px) {
    padding: 5px 0;
    margin: 0;
    .content {
      width: 50%;
      /* flex-direction: column;
      align-items: flex-start; */
      img {
        width: 150px;
        height: 100px;
        object-fit: cover;
      }
      h4 {
        width: 100%;
        font-size: 14px;
      }
    }
    h4.price {
      width: calc(45% / 3);
    }

    .quantity {
      width: calc(45% / 3);
    }

    .total {
      width: calc(45% / 3);
    }
  }

  @media (max-width: 768px) {
    .content {
      width: 40%;
      flex-direction: column;
      align-items: flex-start;
    }
    h4.price {
      width: calc(55% / 3);
    }

    .quantity {
      width: calc(55% / 3);
    }

    .total {
      width: calc(55% / 3);
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
      width: calc(65% / 3);
    }

    .quantity {
      width: calc(65% / 3);
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
      width: calc(65% / 3);
    }
  }
`;
export default CartProduct;
