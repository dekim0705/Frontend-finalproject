import React from "react";
import styled from "styled-components";
import kakaoPayLogo from "../../resource/카카오페이.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;
  padding: 40px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  border: 1px solid var(--line-color);
  border-radius: 8px;
  gap: 30px;
  margin: 0 auto;
  @media screen and (max-width:768px) {
    width: 90%;
  }
`;

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 10px;
  img {
    width: 100px;
    align-self: center;
    margin-bottom: 18px;
  }
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 10px;
  @media screen and (max-width:768px) {
    font-size: 1em;
  }
`;

const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 600;
`;

const Success = () => {

  return (
    <Container>
      <HeaderStyled>
        <img src={kakaoPayLogo} alt="" />
        <h1>카카오페이 결제가 정상적으로 완료되었습니다.</h1>
        <h1>이제 광고 없는 <span style={{color: "#FF62AD"}}>오늘의 데이트</span>를 즐겨보세요. 😊</h1>
      </HeaderStyled>
      <ContentStyled>
        <h3>결제 일시 : </h3>
        <h3>상품명 : </h3>
        <h3>결제 금액 : </h3>
      </ContentStyled>
    </Container>
  );
}

export default Success;

/* 
카카오페이 결제가 정상적으로 완료되었습니다.
결제 일시
상품명
결제 금액
*/