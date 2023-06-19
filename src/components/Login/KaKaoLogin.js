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
  width: 240px;
  height: 50px;
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
  }
`

const KakaoLogin = () => {
  const loginWithKakao = () => {
    const REDIRECT_URI = `${process.env.REACT_APP_KAKAO_REDIRECT_URI}`;
    const CLIENT_ID = `${process.env.REACT_APP_RESTAPI_KAKAO_APP_KEY}`;
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = KAKAO_AUTH_URL;
  };
  return (
    <Container>
      <h1>다른 방식으로 로그인</h1>
      <StyledImage>
        <img 
          onClick={loginWithKakao}
          src={kakaoButton} 
          alt="카카오 로그인" />
      </StyledImage>
    </Container>
  );
}

export default KakaoLogin;