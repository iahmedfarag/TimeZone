import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import ShopNowBtn from "./ShopNowBtn.jsx";
import styled from "styled-components";

const AddSection = () => {
  return (
    <Wrapper className="addSection">
      <div className="control">
        <button className="decrease">
          <AiOutlineMinus />
        </button>
        <h4>1</h4>
        <button className="increase">
          <AiOutlinePlus />
        </button>
      </div>
      <ShopNowBtn
        text={"Add To Cart"}
        padding={"10px 20px"}
        background={"var(--main-color)"}
      />
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
      padding: 5px 10px;
    }
  }
  .addBtn {
    background-color: var(--main-color);
    color: #fff;
    padding: 0 15px;
  }
`;
export default AddSection;
