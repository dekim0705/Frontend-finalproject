import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DefaultImage from "../../resource/축제기본이미지.jpeg";

const ItemContainer = styled.div`
  width: calc(100% / 3 - 2%);
  margin: 1%;
  position: relative;
  justify-content : center;
  border-radius: 15px;
  height: 320px;
  padding-bottom: 40px; 
 
  @media (max-width: 768px) {
    width: 80%;
    margin: 2.5%;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 210px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }

`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  font-weight:bold;
  text-align: center;
  margin: 0;
  padding: 0 10px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${Overlay}:hover & {
    opacity: 1;
  }
`;
const Thumbnail = styled.img`
  width: 100%;
  height: 210px;
  border-radius: 15px;
  margin-bottom: 10px;
`;

const Title = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Duration = styled.p`
  font-size: 1rem;
  color: #777;
  margin-bottom: 5px;
`;

const Location = styled.p`
  font-size: 0.9rem;
`;

const FestivalItem = ({ item }) => {
  const startDate = item.eventStartDate;
  const endDate = item.eventEndDate;

  const formattedStartDate = `${startDate.slice(0, 4)}.${startDate.slice(4, 6)}.${startDate.slice(6)}`;
  const formattedEndDate = `${endDate.slice(0, 4)}.${endDate.slice(4, 6)}.${endDate.slice(6)}`;

  const duration = `${formattedStartDate} ~ ${formattedEndDate}`;
  const thumbnailSrc = item.mainImage || DefaultImage; // 이미지 없을 경우 기본 이미지 사용

  return (
    <ItemContainer>
      {item.mainImage ? (
        <Thumbnail src={thumbnailSrc} alt={item.title} />
      ) : (
        <Thumbnail src={DefaultImage} alt="기본 이미지" />
      )}
      <Overlay>
        <StyledLink to="/festival/info">상세보기</StyledLink>
      </Overlay>
      <Title>{item.title}</Title>
      <Duration>{duration}</Duration>
      <Location>{item.address}</Location>
    </ItemContainer>
  );
};

export default FestivalItem;
