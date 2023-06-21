import React from "react";
import styled from "styled-components";
import LoginForm from "../components/Login/LoginForm";
import LoginLogo from "../components/Login/LoginLogo";
import KakaoLogin from "../components/Login/KaKaoLogin";
import JoinForm from "../components/Login/JoinForm";

const Container = styled.div`
  width: 330px;
  padding: 60px 30px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  border-radius: 6px;
  gap: 20px;
  border: 1px solid #ddd;
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