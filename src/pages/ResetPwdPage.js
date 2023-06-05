import React from "react";
import styled from "styled-components";
import LoginLogo from "../components/Login/LoginLogo";
import EmailForm from "../components/ResetPwd/EmailForm";

const Container = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
  gap: 40px;
  h1 {
    font-size: 0.95em;
    align-self: flex-start;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const ResetPwdPage = () => {

  return (
    <Container>
      <LoginLogo />
      <EmailForm />
    </Container>
  );
}

export default ResetPwdPage;