import React from 'react';
import styled from "styled-components";
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 95%; 
  justify-content: space-between;
  padding: 15px 45px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 30px ;
    width: 90%;
  }
`;

const FestivalTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
 
`;

const FestivalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0px 10px;
`;

const FestivalSubtitle = styled.p`
  font-size: 1.1rem;
  color: #888;
  padding: 12px;
`;

const FestivalDate = styled.p`
  font-size: 1rem;
  padding: 12px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25px;
  padding-top: 50px;
  @media (max-width: 768px) {
    padding-top: 15px;
  }
`;

const ShareButton = styled.button`
  display: flex;
  align-items: center;
  padding: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const LikeButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  padding-right: 10px;
  cursor: pointer;
`;
const LikeCount = styled.span`
  margin: 0 auto; 
`;

const FestivalHeader = () => {
  return (
    <HeaderContainer>
      <FestivalTitleWrapper>
      <FestivalSubtitle>마음의 평화, 지혜의 빛</FestivalSubtitle>
        <FestivalTitle>형산강 연등문화축제</FestivalTitle>
        <FestivalDate>2023.05.03 ~ 2023.05.29</FestivalDate>
      </FestivalTitleWrapper>
      <ButtonWrapper>
        <ShareButton>
          <ShareIcon />
          공유하기
        </ShareButton>
        <LikeButton>
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        {/* <FavoriteBorderIcon /> */}
        <LikeCount>13</LikeCount>
        </LikeButton>
      </ButtonWrapper>
    </HeaderContainer>
  );
};

export default FestivalHeader;
