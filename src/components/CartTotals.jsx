import React from "react";
import ShopNowBtn from "./ShopNowBtn.jsx";
import styled from "styled-components";
import { FaShippingFast } from "react-icons/fa";
import { useSelector } from "react-redux";

const CartTotals = () => {
  const { totalItems, totalAmount, tax, subtotal } = useSelector(
    (store) => store.cart
  );
  return (
    <Wrapper>
      <div className="container">
        <div className="notes">
          {totalAmount > 50 ? (
            <>
              <p>
                Your Order Cost More Than <span>50$</span>!
              </p>
              <h4>
                <span>Congrats</span> You Are Eligible Fore Free Shipping{" "}
                <FaShippingFast />
              </h4>
            </>
          ) : (
            <>
              <p>
                If Your Total Amount Equal Or More Than <span>50$</span>!
              </p>
              <h4>
                You Will Get Free <span>Shipping</span>
                <FaShippingFast />
              </h4>
            </>
          )}
        </div>
        <div className="checkout">
          <div>
            <h4>Total Items:</h4>
            <p>{totalItems} items</p>
          </div>
          <div>
            <h4>Subtotal:</h4>
            <p>${subtotal}</p>
          </div>
          <div>
            <h4>Sales Taxes:</h4>
            <p>${tax}.00</p>
          </div>
          <div>
            <h4>Grand Total:</h4>
            <p className="total">${totalAmount}.00</p>
          </div>
          <br />
          <ShopNowBtn text={"Checkout"} padding={"15px 50px"} />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 25px 0;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
    .notes {
      span {
        border-bottom: 2px solid var(--main-color);
      }

      h4 {
        line-height: 1.5;
        svg {
          margin-left: 5px;
          color: var(--main-color);
        }
      }
    }
    .checkout {
      width: 375px;
      margin-left: auto;

      & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:not(:last-child) {
          border-bottom: 1px solid gray;
        }
        .total {
          font-weight: bolder;
          font-size: 18px;
          letter-spacing: 1.5px;
        }
      }
    }
  }
`;
export default CartTotals;
