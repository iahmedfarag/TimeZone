import React from "react";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";
import { FiUserPlus, FiUserMinus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logoutUser } from "../features/userSlice.jsx";

const Icons = () => {
  const { user } = useSelector((store) => store.user);
  const { totalItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  return (
    <Wrapper>
      {/* <button className="search-btn">
        <AiOutlineSearch />
      </button> */}

      {/* <Link to={"/whishlist"} className="whishlist-btn">
        <AiOutlineHeart />
        <span>0</span>
      </Link> */}
      <Link to={"/cart"} className="cart-btn">
        <AiOutlineShoppingCart />
        <span>{totalItems}</span>
      </Link>
      {user ? (
        <>
          <button className="logoutBtn" onClick={logout}>
            Logout
            <FiUserMinus />
          </button>
        </>
      ) : (
        <>
          <Link to={"/login"} className="loginBtn">
            Login
            <FiUserPlus />
          </Link>
          <Link to={"/register"} className="registerBtn">
            Register
            <FiUserPlus />
          </Link>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
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
    position: relative;
    span {
      background-color: var(--main-color);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: -7px;
      right: -10px;
      width: 20px;
      height: 20px;
      text-align: center;
      font-size: 14px;
      line-height: 20px;
    }
  }
`;
export default Icons;
