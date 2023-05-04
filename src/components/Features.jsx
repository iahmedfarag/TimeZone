import React from "react";
import { FaShippingFast, FaCcVisa } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import styled from "styled-components";
const Features = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="wrapper">
          <article>
            <div className="icon">
              <FaShippingFast />
            </div>
            <h3>Free Shipping Method</h3>
            <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd</p>
          </article>
          <article>
            <div className="icon">
              <FaCcVisa />
            </div>
            <h3>Secure Payment System</h3>
            <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd</p>
          </article>
          <article>
            <div className="icon">
              <BiSupport />
            </div>
            <h3>Free Support 24/7</h3>
            <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd</p>
          </article>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container {
    background-color: var(--main-color);
    color: #fff;
    .wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      padding: 20px;
      article {
        width: calc(100% / 3 - 60px / 3);
        .icon {
          font-size: 40px;
        }
        h3 {
          margin: 0;
          margin: 10px 0;
        }
        p {
          margin: 0;
          line-height: 1.5;
        }
      }
    }
  }
  @media (max-width: 992px) {
    .container {
      .wrapper {
        article {
          width: calc(100% / 2 - 30px / 2);
        }
      }
    }
  }
  @media (max-width: 576px) {
    .container {
      .wrapper {
        article {
          width: calc(100%);
        }
      }
    }
  }
`;
export default Features;
