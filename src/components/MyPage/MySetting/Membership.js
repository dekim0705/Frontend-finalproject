import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoText from '../../../resource/오늘의 데이트 로고 문자.svg';
import { SettingsNav } from '../Navs';

export const Text = styled.p`
  font-size: 1.6rem;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const TextContainer = styled.div`
  margin: 80px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 200px;
  border: 1px solid #FF62AD;
  border-radius: 15px;
  box-shadow: 3px 3px 3px #999;
  .responsive {
    display: none;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 300px;
    margin: 20px auto;
    flex-direction: column;
    .web {
      display: none;
    }
    .responsive {
    display: block;
  }
  }
`;

const LogoImg = styled.img`
  width: 180px;
  @media screen and (max-width: 768px) {
    width: 160px;
  }
`;

const Membership = () => {
  const isMembership = true; // 멤버십 회원 여부 설정

  const membershipText = isMembership ? (
    <>
      <div className='web'>
        <Text>
          <BoldText>자바광팬아님</BoldText>님은&nbsp;
          <BoldText>2023년 5월 30일</BoldText>부터&nbsp;
          <LogoImg src={LogoText} alt="로고 문자" />&nbsp;
          <BoldText>멤버십 회원</BoldText>입니다 ❣️
        </Text>
      </div>
      <div className='responsive'>
        <Text>
          <BoldText>자바광팬아님</BoldText>님은
        </Text>
        <br />      
        <Text>
          <BoldText>2023년 5월 30일</BoldText>부터
        </Text>
        <br />
        <Text>
          <LogoImg src={LogoText} alt="로고 문자" />
        </Text>
        <br />      
        <Text>
          <BoldText>멤버십 회원</BoldText>입니다 ❣️
        </Text>      
        </div>
    </>
  ) : (
    <>
      <div className='web'>
        <Link to='/membership' style={{textDecoration: 'none', color: 'var(--text-color)'}}>
          <Text>
            <BoldText>자바광팬아님</BoldText>님,&nbsp;
            <BoldText>광고없는</BoldText>&nbsp;
            <LogoImg src={LogoText} alt="로고 문자" />를 이용해 보세요 ❣️
          </Text>
        </Link>
      </div>
      <div className='responsive'>
        <Link to='/membership' style={{textDecoration: 'none', color: 'var(--text-color)'}}>
          <Text>
            <BoldText>자바광팬아님</BoldText>님,
          </Text>
          <br />      
          <Text>
            <BoldText>광고없는</BoldText>
          </Text>
          <br />
          <Text>
            <LogoImg src={LogoText} alt="로고 문자" />를
          </Text>
          <br />      
          <Text>
            이용해 보세요 ❣️
          </Text>    
        </Link>
      </div>
    </>
  );

  return(
    <>
      <SettingsNav />
      <TextContainer>{membershipText}</TextContainer>
    </>
  );
}
export default Membership;