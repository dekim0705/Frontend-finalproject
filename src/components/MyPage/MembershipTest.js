import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import NavLink from './NavLink';
import { RowWrapper } from '../Join/Wrappers';
import LogoText from '../../resource/오늘의 데이트 로고 문자.svg';

const StyledMembershipText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  align-items: center;
  gap: 10px;
  span {
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.3em;
  }
`;

const StyledNormalText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  span {
    font-weight: bold;
  }
  .container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    font-size: 1.4em;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  padding: 10px;
  margin: 80px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 200px;
  border: 1px solid #FF62AD;
  border-radius: 15px;
  box-shadow: 3px 3px 3px #999;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 300px;
    margin: 20px auto;
  }
`;

const LogoImg = styled.img`
  width: 180px;
  @media screen and (max-width: 768px) {
    width: 160px;
  }
`;

const MembershipTest = () => {
  const location = useLocation();
  const isMembership = true; // 멤버십 회원 여부 설정

  const membershipText = isMembership ? (
    <>
      <StyledMembershipText>
        <p><span>자바광팬아님</span> 님은 <span>2023년 5월 30일</span> 부터</p>
        <LogoImg src={LogoText} alt="로고 문자" />
        <p><span>멤버십 회원</span> 입니다.❣️</p>
      </StyledMembershipText>
    </>
  ) : (
    <>
      <StyledNormalText>
      <Link to='/membership' style={{textDecoration: 'none', color: 'var(--text-color)'}}>
        <p><span>자바광팬아님</span>님, <span>광고없는</span></p>
        <div className="container">
          <LogoImg src={LogoText} alt="로고 문자" />
          <p>를 이용해 보세요.❣️</p>
        </div>
      </Link>
      </StyledNormalText>
    </>
  );

  return(
    <>
      <RowWrapper gap="10px">
        <NavLink to='/mypage/settings/membership' label='멤버십 설정' isActive={location.pathname === '/mypage/settings/membership'}/>
        <NavLink to='/mypage/settings/notification' label='알림 설정' isActive={location.pathname === '/mypage/settings/notification'}/>
        <NavLink to='/mypage/settings/info' label='정보 수정' isActive={location.pathname === '/mypage/settings/info'}/>
      </RowWrapper>
      <TextContainer>{membershipText}</TextContainer>
    </>
  );
}
export default MembershipTest;