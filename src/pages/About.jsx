import React, { useEffect } from "react";
import { Header } from "./../components";
import styled from "styled-components";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
      <Header title={"About"} />
      <section>
        <div className="container">
          <article>
            <h2>
              <span></span> Our Mission
            </h2>
            <p>
              Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt
              labore et dolore magna aliqua. Quis ipsum suspendisces gravida.
              Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan
              lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas
              accumsan lacus.
            </p>
            <p>
              Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan
              lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas
              accumsan.
            </p>
          </article>
          <article>
            <h2>
              <span></span> Our Vision
            </h2>
            <p>
              Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt
              labore et dolore magna aliqua. Quis ipsum suspendisces gravida.
              Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan
              lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas
              accumsan lacus.
            </p>
            <p>
              Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan
              lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas
              accumsan.
            </p>
          </article>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  section {
    padding: 200px;
    .container {
      display: flex;
      flex-direction: column;
      gap: 30px;

      article {
        h2 {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 30px;
          span {
            display: block;
            width: 50px;
            height: 2px;
            background-color: var(--main-color);
          }
        }
        p {
          line-height: 1.5;
        }
      }
    }
  }
  @media (min-width: 1200px) {
    .container {
      max-width: 960px;
    }
  }
  @media (max-width: 992px) {
    section {
      padding: 100px;
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 60px 0;
    }
  }

  @media (max-width: 576px) {
    margin: 0 20px;
  }
`;
export default About;
