import React from "react";
import ShopNowBtn from "./ShopNowBtn.jsx";
import { AiOutlineHome, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import styled from "styled-components";
const ContactForm = () => {
  return (
    <Wrapper>
      <form>
        <h2>Get in Touch</h2>

        <div className="row">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Enter Message"
          ></textarea>
        </div>

        <div className="row">
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Email" />
        </div>

        <div className="row">
          <input type="text" placeholder="Enter Subject" />
        </div>

        <button type="submit">SEND</button>
      </form>

      <div className="info">
        <h2></h2>
        <div className="line">
          <div className="icon">
            <AiOutlineHome />
          </div>
          <div className="content">
            <h4>Giza, Egypt</h4>
            <p>Rosemead, CA 91770</p>
          </div>
        </div>
        <div className="line">
          <div className="icon">
            <AiOutlinePhone />
          </div>
          <div className="content">
            <h4>+0201069858429</h4>
            <p>Mon to Fri 9am to 6pm</p>
          </div>
        </div>
        <div className="line">
          <div className="icon">
            <AiOutlineMail />
          </div>
          <div className="content">
            <h4>ahmedfarag1k@gmail.com</h4>
            <p>Send us your query anytime!</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 100px;
  h2 {
    margin: 0;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
    .row {
      display: flex;
      gap: 20px;
      textarea {
        width: 100%;
        padding: 10px;
        outline: none;
        border: 1px solid gray;
        transition: var(--main-trans);
        &:focus {
          outline: 1px solid var(--main-color);
        }
      }
      input {
        padding: 10px;
        width: 100%;
        border: 1px solid gray;
        outline: none;
        transition: var(--main-trans);

        &:focus {
          outline: 1px solid var(--main-color);
        }
      }
    }
    button {
      padding: 10px 40px;
      background-color: #333;
      color: #fff;
      transition: var(--main-trans);
      width: fit-content;
      &:hover {
        background-color: var(--main-color);
      }
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 30px;

    .line {
      display: flex;
      align-items: center;
      gap: 10px;
      .icon {
        font-size: 30px;
      }
      .content {
        h4 {
          margin: 0;
          margin-bottom: 10px;
        }
        p {
          margin: 0;
        }
      }
    }
  }

  @media (max-width: 1400px) {
    gap: 50px;
  }
  @media (max-width: 1200px) {
    gap: 30px;
  }
  @media (max-width: 992px) {
    /* gap: 20px; */

    form {
      width: 100%;
      h2 {
        margin: 0;
      }
    }
    .info {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 576px) {
    form {
      .row {
        display: flex;
        flex-direction: column;
        textarea {
          padding: 0;
          padding: 10px;
          width: calc(100% - 20px);
        }
        input {
          width: calc(100% - 20px);
          padding: 10px;
        }
      }
    }
  }
`;
export default ContactForm;
