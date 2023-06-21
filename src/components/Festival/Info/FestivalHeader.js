import React from 'react';
import styled from 'styled-components';
import ShareIcon from '@mui/icons-material/Share';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  justify-content: space-between;
  padding: 15px 40px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 30px;
    width: 90%;
  }
`;

const FestivalTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FestivalTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
  padding: 0px 10px;
`;

const FestivalSubtitle = styled.p`
  font-size: 1.1rem;
  color: #888;
  padding: 12px;
  padding-bottom: 20px;
`;

const FestivalDate = styled.span`
  font-size: 1rem;
  padding: 12px;
  margin-bottom: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding-top: 50px;
  @media (max-width: 768px) {
    padding-top: 15px;
  }
`;

const ShareButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const FestivalHeader = ({ contentId, apiData }) => {
  const festivalData = apiData && apiData.find((item) => item.contentid.toString() === contentId);

  const startDate = festivalData && festivalData.eventStartDate;
  const endDate = festivalData && festivalData.eventEndDate;
  const formattedStartDate = startDate && `${startDate.slice(0, 4)}.${startDate.slice(4, 6)}.${startDate.slice(6)}`;
  const formattedEndDate = endDate && `${endDate.slice(0, 4)}.${endDate.slice(4, 6)}.${endDate.slice(6)}`;
  const duration = formattedStartDate && formattedEndDate && `${formattedStartDate} ~ ${formattedEndDate}`;

  return (
    <HeaderContainer>
      <FestivalTitleWrapper>
        <FestivalSubtitle>축제 소개</FestivalSubtitle>
        {festivalData && (
          <>
            <FestivalTitle>{festivalData.title}</FestivalTitle>
            <FestivalDate>{duration}</FestivalDate>
          </>
        )}
        {/* <ButtonWrapper>
          <ShareButton>
            <ShareIcon /> 공유하기
          </ShareButton>
        </ButtonWrapper> */}
      </FestivalTitleWrapper>
    </HeaderContainer>
  );
};

export default FestivalHeader;
