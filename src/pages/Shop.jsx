import React, { useEffect, useState } from "react";
import { Product, Header, Loading } from "../components";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getMenWatches, sort, getBrands, productsFilter } from "../features/productsSlice.jsx";
const Shop = () => {
    const { isLoading, isError, all_products, filtered_products, brands } = useSelector((store) => store.products);
    const dispatch = useDispatch();
    const [active, setActive] = useState(0);

    const sortProducts = (name, value) => {
        dispatch(sort({ type: name, sort: value }));
    };

    useEffect(() => {
        dispatch(sort({ type: "time", sort: "newest" }));
        dispatch(getBrands());
    }, [all_products]);

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getMenWatches());
    }, []);

    return (
        <Wrapper>
            <Header title={"Watch Shop"} />
            <section>
                <div className="container">
                    <header>
                        <div className="control">
                            <button
                                className={active === 0 ? "active" : ""}
                                onClick={() => {
                                    setActive(0);
                                    sortProducts("time", "newest");
                                }}>
                                Newest Arrivals
                            </button>
                            <button
                                className={active === 1 ? "active" : ""}
                                onClick={() => {
                                    setActive(1);
                                    sortProducts("price", "highest-price");
                                }}>
                                Price High To Low
                            </button>
                            <button
                                className={active === 2 ? "active" : ""}
                                onClick={() => {
                                    setActive(2);
                                    sortProducts("price", "lowest-price");
                                }}>
                                Price Low To High
                            </button>
                        </div>

                        <select
                            name=""
                            id=""
                            onChange={(e) => dispatch(productsFilter(e.target.value))}>
                            <option value="All">All</option>
                            {brands?.map((brand, index) => {
                                return (
                                    <option
                                        value={brand}
                                        key={index}>
                                        {brand}
                                    </option>
                                );
                            })}
                        </select>
                    </header>
                    {isLoading ? (
                        <Loading />
                    ) : (
                        <div className="products">
                            <div className="wrapper">
                                {filtered_products?.map((product) => {
                                    const { id, title, description, price, discountPercentage, thumbnail } = product;
                                    return (
                                        <Product
                                            key={id}
                                            image={thumbnail}
                                            title={title}
                                            price={price}
                                            id={id}
                                        />
                                    );
                                })}
                            </div>
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
export default Shop;
