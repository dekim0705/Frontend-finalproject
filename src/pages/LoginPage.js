import React from "react";
import styled from "styled-components";
import LoginForm from "../components/Login/LoginForm";
import LoginLogo from "../components/Login/LoginLogo";
import KakaoLogin from "../components/Login/KaKaoLogin";
import JoinForm from "../components/Login/JoinForm";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  gap: 20px;
`;

const LoginPage = () => {

  return (
    <>
      <Container>
        <LoginLogo />
        <LoginForm />
        <KakaoLogin />
        <JoinForm />
      </Container>
    </>
  );
}

export default LoginPage;