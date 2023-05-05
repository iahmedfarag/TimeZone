import React from "react";
import { ContactForm, ContactMap, Header } from "./../components";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <Header title={"Contact"} />
      <section>
        <div className="container">
          {/* <ContactMap /> */}
          <ContactForm />
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  section {
    padding: 200px;
    .container {
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
export default Contact;
