import React from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

const Icons = () => {
  return (
    <div className="icons">
      <button className="search-btn">
        <AiOutlineSearch />
      </button>
      <button className="cart-btn">
        <AiOutlineShoppingCart />
      </button>
    </div>
  );
};

export default Icons;
