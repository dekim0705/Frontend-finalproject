import React from "react";
import styled from "styled-components";
import kakaopayBtn from "../../resource/카카오페이.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  border: 2px solid #eee;
  border-radius: 15px;
  margin: 0 auto;
  color: var(--text-color);
  box-shadow: 3px 3px 3px #999;
  .title {
    padding: 15px;
    align-self: flex-start;
    font-weight: bold;
    font-size: 1.4em;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const StyledMembership = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Version = styled.div`
  border-top: 1px solid #eee;
  border-right: 1px solid #eee;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  h1 {
    font-weight: 900;
    font-size: 1.6em;
  }
  .box {
    width: 100%;
    padding: 15px;
    text-align: center;
    border-radius: 10px;
  }
  .free {
    background-color: var(--hover-color);
    color: #818087;
  }
  .premium {
    background-color: var(--point-color);
    color: #fff;
    font-weight: 500;
  }
  p {
    font-size: 1.1em;
    font-weight: 500;
    letter-spacing: -1.8px;
    word-spacing: 2px;
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  h2 {
    color: var(--point-color);
    font-weight: 900;
    font-size: 1.5em;
    text-decoration: line-through;
  }
  img {
    width: 40%;
    cursor: pointer;
  }
`;

const Desc = () => {
  return (
    <Container>
      <div className="title">멤버십</div>
      <StyledMembership>
        <Version>
          <h1>Free</h1>
          <div className="box free">Your current version</div>
        </Version>
        <Version>
          <h1>Premium</h1>
          <div className="box premium">Upgrade version</div>
          <p>✅ 광고 없는 피드</p>
          <p>✅ 실제 결제는 이루어지지 않습니다.</p>
          <div className="wrapper">
            <h2>1,990원</h2>
            <img src={kakaopayBtn} alt="" />
          </div>
        </Version>
      </StyledMembership>
    </Container>
  );
};

export default Desc;
