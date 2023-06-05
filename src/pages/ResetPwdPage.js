import React from "react";
import styled from "styled-components";
import LoginLogo from "../components/Login/LoginLogo";
import EmailForm from "../components/ResetPwd/EmailForm";

const Container = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
  gap: 20px;
  h1 {
    font-size: 0.95em;
    align-self: flex-start;
  }
`;

const ResetPwdPage = () => {

  return (
    <Container>
      <LoginLogo />
      <h1>가입한 이메일 주소를 입력해주세요.</h1>
      <EmailForm />
      <button>이메일로 인증코드 받기</button>
    </Container>
  );
}

export default ResetPwdPage;