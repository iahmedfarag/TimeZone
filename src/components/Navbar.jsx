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

  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 300px);
  z-index: 33;

  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

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
  @media (max-width: 1600px) {
    padding: 0 20px;
    width: calc(100% - 40px);
  }
  @media (max-width: 992px) {
    display: none;
  }
`;
export default Navbar;
