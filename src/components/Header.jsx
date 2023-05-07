import React from "react";
import styled from "styled-components";
import background from "../assets/images/background.png";
const Header = ({ title }) => {
  return (
    <Wrapper style={{ backgroundImage: `url(${background})` }}>
      <h1>{title}</h1>
    </Wrapper>
  );
};
const Wrapper = styled.header`
  margin-top: 100px;

  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;

  @media (max-width: 576px) {
    height: 260px;
    font-size: 20px;
  }
`;
export default Header;
