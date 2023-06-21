import React from "react";
import styled from "styled-components";
import LoginForm from "../components/Login/LoginForm";
import LoginLogo from "../components/Login/LoginLogo";
import JoinForm from "../components/Login/JoinForm";
import coupleImage from "../resource/로그인_이미지.jpeg";

const Container = styled.div`
  width: 340px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  border-radius: 30px;
  gap: 20px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  border: 1px solid #ddd;
  @media screen and (max-width:768px) {
    width: 100%;
    margin-top: 30px;
    border: none;
  }
`;

const Image = styled.img`
  width: 100%; 
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

const LoginPage = () => {

  return (
    <Container>
      <LoginLogo />
      <LoginForm />
      <JoinForm />
      <Image src={coupleImage} alt="couple" />
    </Container>
  );
}

export default LoginPage;
