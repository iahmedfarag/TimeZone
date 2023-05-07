import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/images/product01.png";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineClose,
} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";
import Icons from "./Icons.jsx";
import Logo from "./Logo.jsx";
import Links from "../utils/links.jsx";

const SmallNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const menuStyles = {
    maxHeight: isOpen ? `${menuRef.current.scrollHeight + "px"}` : "0px",
  };
  return (
    <Wrapper>
      <header>
        <Logo />
        <Icons />
      </header>

      <div className="menu">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          MENU {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </button>
        <div className="links" ref={menuRef} style={menuStyles}>
          <ul>
            {Links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background-color: #fff;
  height: 70px;
  padding: 0 20px;
  display: none;

  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 40px);
  z-index: 33;

  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  header {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* icons */
  }
  /* menu */
  .menu {
    background-color: #333;
    margin-top: -20px;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    position: relative;
    z-index: 3;
    button {
      color: #fff;
      font-weight: bold;
      background-color: #111;
      padding: 5px;
      width: fit-content;
      margin-left: auto;
      /* flex */
      display: flex;
      align-items: center;
      gap: 2px;

      svg {
        font-size: 20px;
      }
    }
    .links {
      /* maxheight */
      max-height: 0;
      overflow: hidden;
      transition: var(--main-trans);
      ul {
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        color: #fff;
        li {
          overflow: hidden;
          a {
            display: block;
            width: 100%;
            padding: 10px;
            font-size: 16px;
            text-transform: capitalize;
            &:hover {
              background-color: var(--main-color);
            }
          }
        }
      }
    }
  }
  @media (max-width: 992px) {
    display: block;
  }
`;

export default SmallNavbar;
