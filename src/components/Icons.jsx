import React from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { FiUserPlus, FiUserMinus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logoutUser } from "../features/userSlice.jsx";

const Icons = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  return (
    <Wrapper>
      <button className="search-btn">
        <AiOutlineSearch />
      </button>
      <Link to={"/cart"} className="cart-btn">
        <AiOutlineShoppingCart />
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
