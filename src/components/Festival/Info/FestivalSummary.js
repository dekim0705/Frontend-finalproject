import React from 'react';
import styled from 'styled-components';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LaunchIcon from '@mui/icons-material/Launch';
import PaidIcon from '@mui/icons-material/Paid';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import poster from '../../../resource/poster.jpg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  padding-top: 20px;

`;

const Description = styled.p`
  font-size: 1.0rem;
  margin: 10px;
  padding: 15px;
  line-height: 1.6;
`;

const Summary = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  margin: 0 auto;
  width: 80%;
  @media (max-width: 768px) {
    flex-direction: column;
    padding : 20px;
  }
`;

const PosterImage = styled.img`
  height: 250px;
  margin-right: 50px;
  border-radius: 10px;
  @media (max-width: 768px) {
  margin-right : 0px;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-bottom: 10px;
  padding : 9px;
  @media (max-width: 768px) {
    padding-top : 20px;
    margin-bottom: 0px;
  }
  svg {
    margin-right: 10px;
    color : var(--point-color)
  }
`;
const Line = styled.hr`
  width: 100%;
  margin: 20px 0;
`;
const Title = styled.h1`
  font-size: 1.3rem; 
  margin-left : 10px;
  width: 100%;
  padding-left: 30px;
  font-weight: bold;
`;


const FestivalSummary = () => {

  return (
    <Container>
      <Description>
      ‘2023 형산강 연등문화축제’는 동국대 WISE캠퍼스와 불국사, 경상북도, 경주시가 신라 연등회 맥을 잇고 ‘불기 2567년 부처님 오신 날’을 봉축키 위해 개최한 것이다. 이번 축제는 금장대 맞은편 형산강 둔치에서 5월 3일 개막식, 점등식, 제등행렬, 회향식을 개최하고 5일까지 시민들이 참여할 수 있는 문화 체험 행사와 전통한지 장엄등을 전시한다. 축제기간 동안 생태숲에서 금장대까지 형산강을 밝히는 연등 숲과 서천교에서 금장교까지 이어지는 거리연등 전시로 희망의 불을 밝힌다. 
      </Description>
      <Line />
      <Summary>
        <PosterImage src={poster} />
        <div>
          <InfoItem>
            <LaunchIcon />
            <span>공식 홈페이지가기</span>
          </InfoItem>
          <InfoItem>
            <CalendarMonthIcon />
            <span>2023.05.03 ~ 2023.05.29</span>
          </InfoItem>
          <InfoItem>
            <LocationOnIcon />
            <span>경상북도 경주시 석장동 </span>
          </InfoItem>
          <InfoItem>
            <PaidIcon />
            <span>이용요금</span>
          </InfoItem>
          <InfoItem>
            <CallIcon />
            <span>전화번호</span>
          </InfoItem>
        </div>
      </Summary>
      <Line />
      <Title>위치</Title>
    </Container>
    
  );
};

export default FestivalSummary;
