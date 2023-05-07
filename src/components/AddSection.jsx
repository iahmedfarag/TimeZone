import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";
import { addToCart } from "../features/cartSlice.jsx";
import { useDispatch, useSelector } from "react-redux";

const AddSection = ({ id, image, title, price }) => {
  const dispatch = useDispatch();
  const [prductAmount, setProductAmount] = useState(1);
  const AddToCart = (id, image, title, price, amount = 1) => {
    dispatch(addToCart({ id, image, title, price, amount }));
  };
  return (
    <Wrapper className="addSection">
      <div className="control">
        <button
          className="decrease"
          onClick={() => {
            if (prductAmount === 1) {
              return;
            }
            setProductAmount(prductAmount - 1);
          }}
        >
          <AiOutlineMinus />
        </button>
        <h4>{prductAmount}</h4>
        <button
          className="increase"
          onClick={() => {
            setProductAmount(prductAmount + 1);
          }}
        >
          <AiOutlinePlus />
        </button>
      </div>
      <button
        className="animate__animated animate__fadeInLeft animate__slow addBtn"
        onClick={() => {
          AddToCart(id, image, title, price, prductAmount);
        }}
      >
        <p>Add To Cart</p>
        <span></span>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  .control {
    display: flex;
    align-items: center;
    border: 1px solid gray;
    border-radius: 25px;
    padding: 0;
    margin: 0;
    button {
      font-size: 24px;
      margin: 0;
      display: flex;
      align-items: center;
      padding: 10px 20px;
      &:hover {
        color: var(--main-color);
      }
    }
    h4 {
      margin: 0;
      font-size: 20px;
      padding: 5px;
      width: 15px;
      text-align: center;
    }
  }
  .addBtn {
    background-color: var(--main-color);
    color: #fff;
    padding: 0 15px;
    position: relative;
    overflow: hidden;
    p {
      display: inline;
      position: relative;
      z-index: 2;
    }

    span {
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      background: #333;
      left: -100%;
      top: 0;
      transition: 0.3s;
    }
    &:hover span {
      left: 0;
    }
  }
`;
export default AddSection;
