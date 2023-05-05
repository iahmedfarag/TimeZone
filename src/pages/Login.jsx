import React from "react";
import { FormCard, FormTemplate, Header } from "./../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Wrapper>
      <Header title={"Signin"} />
      <section>
        <div className="container">
          <FormCard
            header={`New to our Shop?`}
            text={`There are advances being made in science and technology
        <span></span>
        everyday, and a good example of this is the`}
            button={"Create An Account"}
          />
          <form>
            <div className="wrapper">
              <h2>
                Welcome Sir! <br /> Signin Now
              </h2>

              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />

              <button>Signin</button>

              <Link to={"/register"}>forget password?</Link>
            </div>
          </form>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  section {
    padding: 200px 0;
    .container {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 30px;
      form {
        width: calc(50% - 15px);
        display: flex;
        justify-content: center;

        .wrapper {
          display: flex;
          flex-direction: column;
          width: 80%;
          h2 {
            margin-bottom: 50px;
          }
          input {
            border: 0;
            outline: 0;
            border-bottom: 1px solid gray;
            padding: 10px;
            &:not(:last-child) {
              margin-bottom: 10px;
            }
          }
          button {
            margin-top: 50px;
            border: 1px solid var(--main-color);
            color: var(--main-color);
            transition: var(--main-trans);
            padding: 15px 0;
            font-size: 18px;
            &:hover {
              background-color: var(--main-color);
              color: #fff;
            }
          }
          a {
            margin-top: 15px;
            display: block;
            margin-left: auto;
          }
        }
      }
    }
  }

  @media (max-width: 992px) {
    section {
      padding: 100px;
      .container {
        form {
          .wrapper {
            width: 100%;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 60px 0;
      .container {
        form {
          width: 100%;
          .wrapper {
            h2 {
              margin: 0;
              margin-bottom: 30px;
            }
            button {
              margin-top: 30px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 576px) {
    margin: 0 20px;
  }
`;
export default Login;
