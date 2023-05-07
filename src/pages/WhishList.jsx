import React, { useEffect } from "react";
import { Product, Header } from "./../components";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { clearWhishlist, removeItem } from "../features/whishlistSlice.jsx";

const WhishList = () => {
  const dispatch = useDispatch();
  const { isLoading, whishlist_products } = useSelector(
    (store) => store.whishlist
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <Header title={"Whish List"} />
      <section>
        <div className="container">
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <div className="products">
              {whishlist_products.length === 0 ? (
                <h1>your whish list is empty...</h1>
              ) : (
                <div className="wrapper">
                  {whishlist_products?.map((product) => {
                    console.log(product);
                    const { id, title, price, image } = product;
                    return (
                      <Product
                        key={id}
                        image={image}
                        title={title}
                        price={price}
                        id={id}
                      />
                    );
                  })}
                  <button
                    onClick={() => {
                      dispatch(clearWhishlist());
                    }}
                  >
                    clear
                  </button>
                </div>
              )}
            </div>
          )}
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
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 30px;
        margin-bottom: 50px;
        .control {
          display: flex;
          gap: 20px;
          button {
            font-size: 18px;
            padding: 5px 10px;
            &.active {
              border-bottom: 2px solid var(--main-color);
            }
          }
        }
      }
      select {
        padding: 5px;
      }
    }
  }

  .products {
    .wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
    }
  }

  @media (max-width: 992px) {
    section {
      padding: 100px;
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 60px 0;
    }
  }

  @media (max-width: 576px) {
    margin: 0 20px;
    section {
      .container {
        header {
          .control {
            gap: 5px;
            button {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
`;
export default WhishList;
