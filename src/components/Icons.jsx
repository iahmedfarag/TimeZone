import React from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { FiUserPlus, FiUserMinus } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Icons = () => {
  return (
    <Wrapper>
      <button className="search-btn">
        <AiOutlineSearch />
      </button>
      <Link to={"/cart"} className="cart-btn">
        <AiOutlineShoppingCart />
      </Link>
      {/* <button className="loginBtn">
        Login
        <FiUserPlus />
      </button> */}
      <Link to={"/register"} className="registerBtn">
        Register
        <FiUserPlus />
      </Link>
      {/* <button className="logoutBtn">
        Logout
        <FiUserMinus />
      </button> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  a,
  button {
    display: flex;
    align-items: center;
    gap: 5px;
    transition: var(--main-trans);

    svg {
      display: flex;
      align-items: center;
      font-size: 22px;
    }
    &:hover {
      color: var(--main-color);
    }
  }
`;
export default Icons;
