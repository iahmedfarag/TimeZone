import React, { useEffect } from "react";
import { CartProduct, CartTotals, Header } from "../components";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { updateTotals } from "../features/cartSlice.jsx";

const Cart = () => {
  const { isLoading, isError, cart_products } = useSelector(
    (store) => store.cart
  );
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(updateTotals());
  }, [cart_products]);

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
            <p className="remove"></p>
          </header>

          <div className="wrapper">
            {cart_products.length > 0 ? (
              cart_products.map((product, index) => {
                const { id, image, title, price, amount } = product;
                return (
                  <CartProduct
                    key={id}
                    id={id}
                    image={image}
                    title={title}
                    price={price}
                    amount={amount}
                  />
                );
              })
            ) : (
              <h1>your cart is empty...</h1>
            )}
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
          width: calc(35% / 3);
        }
        .remove {
          width: 5%;
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
            width: calc(45% / 3);
          }
          .remove {
            width: 5%;
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
            width: calc(55% / 3);
          }
          .remove {
            width: 5%;
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
            width: calc(65% / 3);
          }
          .remove {
            width: 5%;
          }
        }
      }
    }
  }
`;
export default Cart;
