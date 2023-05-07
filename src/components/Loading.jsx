import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <span class="loader"></span>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 200px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .loader {
    width: 64px;
    height: 64px;
    position: relative;
    animation: rotate 1.5s ease-in infinite alternate;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      color: var(--main-color);
      background: currentColor;
      width: 64px;
      height: 32px;
      border-radius: 0 0 50px 50px;
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 10%;
      background: #eee;
      width: 8px;
      height: 64px;
      animation: rotate 1.2s linear infinite alternate-reverse;
    }
    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
export default Loading;
