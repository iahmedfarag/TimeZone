import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FormCard = ({ header, text, button }) => {
  return (
    <Wrapper>
      <h2>{header}</h2>
      <p>{text}</p>
      <button>
        <Link to={button === "Signin" ? "/login" : "/register"}>{button}</Link>
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: calc(50% - 15px);
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  /* padding: 10px; */
  background: #c21500;
  background: -webkit-linear-gradient(to right, #ffc500, #c21500);
  background: linear-gradient(to right, #ffc500, #c21500);
  h2 {
    margin-bottom: 10px;
  }

  p {
    padding: 0 10px;
    line-height: 1.5;
    span {
      display: block;
    }
  }

  button {
    margin-top: 10px;
    color: #fff;
    border: 1px solid #fff;
    padding: 15px 60px;
    transition: var(--main-trans);
    &:hover {
      background-color: #fff;
      color: var(--main-color);
    }
  }

  @media (max-width: 992px) {
    height: 400px;
    p {
      span {
        display: inline;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    p {
      span {
        display: block;
      }
    }
  }
`;
export default FormCard;
