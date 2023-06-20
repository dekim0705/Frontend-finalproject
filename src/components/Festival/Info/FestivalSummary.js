import React from 'react';
import styled from 'styled-components';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LaunchIcon from '@mui/icons-material/Launch';
import PaidIcon from '@mui/icons-material/Paid';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import poster from '../../../resource/poster.jpg';
import FestivalAPI from '../FestivalAPI';
import { useParams } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
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
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const PosterImage = styled.img`
  height: 250px;
  margin-right: 50px;
  border-radius: 10px;
  @media (max-width: 768px) {
    margin-right: 0px;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
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
  width: 100%;
  margin: 40px 0;
`;

const Title = styled.h1`
  font-size: 1.4rem;
  margin-left: 10px;
  width: 90%;
  padding-left: 25px;
  padding-bottom: 10px;
  font-weight: bold;
`;

const FestivalSummary = ({ page, contentId }) => {

  return (    
  <FestivalAPI page={page}>
   {(updatedApiData) => {
        const festivalData = updatedApiData && updatedApiData.find(item => item.contentid.toString() === contentId);

        return (
          <Container>
            <Description>{festivalData && festivalData.overview}</Description>
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
                  <span>{festivalData && `${festivalData.eventStartDate} ~ ${festivalData.eventEndDate}`}</span>
                </InfoItem>
                <InfoItem>
                  <LocationOnIcon />
                  <span>{festivalData && festivalData.address}</span>
                </InfoItem>
                <InfoItem>
                  <PaidIcon />
                  <span>{festivalData && festivalData.fee}</span>
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
      }}
    </FestivalAPI>
  );
};

export default FestivalSummary;
