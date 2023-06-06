import React from "react";
import styled from 'styled-components';
import thumbnail from '../../resource/축제썸네일.jpg';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 30px; 
  margin: 0 auto; 

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 20px;
  }
`;

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

const FestivalItem = ({ item }) => (
  <ItemContainer>
    <Thumbnail src={item.thumbnail} alt={item.title} />
    <Overlay>
      <StyledLink to={`/festival/${item.postNum}`}>상세보기</StyledLink>
    </Overlay>
    <Title>{item.title}</Title>
    <Duration>{item.duration}</Duration>
    <Location>{item.location}</Location>
  </ItemContainer>
);

const FestivalContainer = () => {
  // 더미 데이터
  const dummyData = [
    {
      id: 1,
      thumbnail: thumbnail,
      title: "형산강 연등문화축제",
      duration: "2023년 6월 10일 - 6월 15일",
      location: "경상북도 경주시"
    },
    {
      id: 2,
      thumbnail: thumbnail,
      title: "형산강 연등문화축제",
      duration: "2023년 6월 10일 - 6월 15일",
      location: "경상북도 경주시"
    },
    {
      id: 3,
      thumbnail: thumbnail,
      title: "형산강 연등문화축제",
      duration: "2023년 6월 10일 - 6월 15일",
      location: "경상북도 경주시"
    },
    {
      id: 4,
      thumbnail: thumbnail,
      title: "형산강 연등문화축제",
      duration: "2023년 6월 10일 - 6월 15일",
      location: "경상북도 경주시"
    },
    {
      id: 5,
      thumbnail: thumbnail,
      title: "형산강 연등문화축제",
      duration: "2023년 6월 10일 - 6월 15일",
      location: "경상북도 경주시"
    },
    {
      id: 6,
      thumbnail: thumbnail,
      title: "형산강 연등문화축제",
      duration: "2023년 6월 10일 - 6월 15일",
      location: "경상북도 경주시"
    },

   
  ];

  return (
    <Container>
      {dummyData.slice(0, 6).map((item) => (
        <FestivalItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default FestivalContainer;
