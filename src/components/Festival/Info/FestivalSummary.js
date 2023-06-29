import React from 'react';
import styled from 'styled-components';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DefaultImage from "../../../resource/축제기본이미지.jpeg";
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  padding-top: 20px;
`;

const Summary = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  margin: 0 auto;
  width: 85%;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const PosterImage = styled.img`
  height: 250px;
  margin-right: 50px;
  border-radius: 10px;
  max-width: 350px;
  @media (max-width: 768px) {
    margin-right: 0px;
    max-width: 97%;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  margin-bottom: 10px;
  padding: 9px;
  
  @media (max-width: 768px) {
    padding-top: 20px;
    margin-bottom: 0px;
  }
  svg {
    margin-right: 10px;
    color: var(--point-color);
  }
`;

const Line = styled.hr`
  width: 85%;
  margin: 40px 0;
`;

const Title = styled.h1`
  font-size: 1.4rem;
  margin-left: 10px;
  width: 90%;
  padding-left: 25px;
  padding-bottom: 30px;
  font-weight: bold;
`;

const FestivalSummary = ({ page, contentId, apiData }) => {
  const festivalData = apiData.find(item => item.contentid.toString() === contentId);

  return (
    <Container>
      <Line />
      <Summary>
        {festivalData && festivalData.mainImage ? (
          <PosterImage src={festivalData.mainImage} />
        ) : (
          <PosterImage src={DefaultImage} />
        )}

        <div>
          <InfoItem>
            <CalendarMonthIcon />
            <span> 시작일 :  {festivalData && `${festivalData.eventStartDate.slice(0, 4)}년 ${festivalData.eventStartDate.slice(4, 6)}월 ${festivalData.eventStartDate.slice(6)}일`}  </span>
          </InfoItem>
          <InfoItem>
            <CalendarMonthIcon />
            <span> 종료일 : {festivalData && `${festivalData.eventEndDate.slice(0, 4)}년 ${festivalData.eventEndDate.slice(4, 6)}월 ${festivalData.eventEndDate.slice(6)}일`}</span>
          </InfoItem>
          <InfoItem>
            <LocationOnIcon />
            <span>{festivalData && festivalData.address}</span>
          </InfoItem>
          <InfoItem>
            <CallIcon />
            <span>{festivalData && festivalData.tel}</span>
          </InfoItem>
        </div>
      </Summary>
      <Line />
      <Title>행사 위치</Title>
    </Container>
  );
};

export default FestivalSummary;
