import React from "react";
import styled from "styled-components";

const FormTemplate = ({ header, button }) => {
  return <></>;
};
const Wrapper = styled.form`
  form {
    width: calc(50% - 15px);
    display: flex;
    justify-content: center;

    .wrapper {
      display: flex;
      flex-direction: column;
      width: 80%;
      h2 {
        margin-bottom: 50px;
      }
      input {
        border: 0;
        outline: 0;
        border-bottom: 1px solid gray;
        padding: 10px;
        &:not(:last-child) {
          margin-bottom: 10px;
        }
      }
      button {
        margin-top: 50px;
        border: 1px solid var(--main-color);
        color: var(--main-color);
        transition: var(--main-trans);
        padding: 15px 0;
        font-size: 18px;
        &:hover {
          background-color: var(--main-color);
          color: #fff;
        }
      }
    }
  }

  @media (max-width: 992px) {
    .wrapper {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    .wrapper {
      h2 {
        margin: 0;
        margin-bottom: 30px;
      }
      button {
        margin-top: 30px;
      }
    }
  }
`;
export default FormTemplate;
