import React from "react";
import thumb from "../assets/images/product16.png";
import video from "../assets/videos/video.mp4";
import { AiOutlineArrowRight } from "react-icons/ai";
import styled from "styled-components";
const Video = () => {
  return (
    <Wrapper>
      <video controls muted poster={thumb}>
        <source src={video} type="video/mp4" />
      </video>
      {/* <div className="next">
        <h3>NEXT VIDEO</h3>
        <AiOutlineArrowRight />
      </div> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  video {
    object-fit: cover;
    width: 100%;
    height: 700px;
  }

  @media (max-width: 1200px) {
    video {
      height: 400px;
    }
  }
  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    video {
      height: 320px;
    }
  }
  @media (max-width: 576px) {
    video {
      height: 400px;
    }
  }
`;

export default Video;
