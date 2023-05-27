import React from "react";
import kakaoButton from "../../resource/카카오 로그인.png";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: var(--text-color);
  h1 {
    font-size: 1.2em;
    font-weight: 900;
    text-align: center
  }
`;

const StyledImage = styled.div`
  width: 238px;
  height: 50px;
  img {
    width: 100%;
    height: auto;
  }
`

const KakaoLogin = () => {

  return (
    <Container>
      <h1>다른 방식으로 로그인</h1>
      <StyledImage>
        <img src={kakaoButton} alt="카카오 로그인" />
      </StyledImage>
    </Container>
  );
}

export default KakaoLogin;