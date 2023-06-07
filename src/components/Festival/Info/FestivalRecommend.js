import React from "react";
import styled from 'styled-components';
import thumbnail from '../../../resource/축제썸네일.jpg';
import thumbnail2 from '../../../resource/축제썸네일2.png';
import thumbnail3 from '../../../resource/축제썸네일3.jpg';
import { Link } from 'react-router-dom';

const Line = styled.hr`
  width: 100%;
  margin: 20px 0;
`;

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
const Desc = styled.h1`
  font-size: 1.4rem; 
  margin-left : 10px;
  width: 100%;
  padding-left: 30px;
  font-weight: bold;
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
  height: 180px;
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
  height: 180px;
  border-radius: 15px;
  margin-bottom: 10px;
`;

const Title = styled.p`
  font-size: 1.2rem;
  padding : 5px;
  text-align: center;
`;


const Item = ({ item }) => (
  <ItemContainer>
    <Thumbnail src={item.thumbnail} alt={item.title} />
    <Overlay>
      <StyledLink to={`/festival/${item.postNum}`}>상세보기</StyledLink>
    </Overlay>
    <Title>{item.title}</Title>
  </ItemContainer>
);

  const dummyData = [
    {
      id: 1,
      thumbnail: thumbnail,
      title: "고양호수예술축제",
    },
    {
      id: 2,
      thumbnail: thumbnail2,
      title: "수원화성문화제",
    },
    {
      id: 3,
      thumbnail: thumbnail3,
      title: "진주 남강유등축제",
    },

   
  ];
const Recommend = () => {

  return (
    <>
     <Line/>
    <Desc>이런 축제도 추천해요!</Desc>
    <Container>
      {dummyData.slice(0, 3).map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Container>
    </>
  );
};

export default Recommend;