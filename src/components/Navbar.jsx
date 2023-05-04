import React from "react";
import styled from "styled-components";
import Links from "./Links.jsx";
import Icons from "./Icons.jsx";
import Logo from "./Logo.jsx";

const Navbar = () => {
  return (
    <Wrapper>
      <Logo />
      <Links />
      <Icons />
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background-color: #fff;
  height: 100px;
  padding: 0 150px;

  /* flex */
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
  }
  .links {
    ul {
      display: flex;
      gap: 30px;
      li {
        a {
          font-size: 18px;
          transition: var(--main-trans);
          text-transform: capitalize;
          &:hover {
            color: var(--main-color);
          }
        }
      }
    }
  }
  .icons {
    display: flex;
    gap: 15px;
    button {
      svg {
        display: flex;
        align-items: center;
        font-size: 22px;
        transition: var(--main-trans);

        &:hover {
          color: var(--main-color);
        }
      }
    }
  }
  @media (max-width: 1600px) {
    padding: 0 20px;
  }
  @media (max-width: 992px) {
    display: none;
  }
`;
export default Navbar;
