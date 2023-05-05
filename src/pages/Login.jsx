import React from "react";
import { FormCard, FormTemplate, Header } from "./../components";
import styled from "styled-components";

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
          <FormTemplate
            header={[`Welcome Back ! `, <br />, `Please Sign in now`]}
            button={`Signin`}
          />
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
export default Login;
