import React, { useEffect, useState } from "react";
import { FormCard, Header } from "./../components";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, loginUser } from "../features/userSlice.jsx";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || !name) {
      console.log("fill inputs");
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  return (
    <Wrapper>
      <Header title={"Signup"} />
      <section>
        <div className="container">
          <FormCard
            header={`Already Have An Account?`}
            text={`There are advances being made in science and technology
        <span></span>
        everyday, and a good example of this is the`}
            button={"Signin"}
          />
          <form onSubmit={handleSubmit}>
            <div className="wrapper">
              <h2>
                Welcome Back ! <br /> Please Signup now
              </h2>

              <input
                type="text"
                placeholder="Name"
                name="name"
                id="name"
                onChange={handleChange}
                value={values.name}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                onChange={handleChange}
                value={values.email}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                onChange={handleChange}
                value={values.password}
              />

              <button disabled={isLoading}>
                {isLoading ? "Loading..." : "Signup"}
              </button>
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
            transition: var(--main-trans);
            &:not(:last-child) {
              margin-bottom: 10px;
            }
            &:focus {
              border-bottom: 1px solid var(--main-color);
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
export default Register;
