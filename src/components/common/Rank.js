import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HomeAxiosApi from "../../api/HomeAxiosApi";

const StyledRank = styled.div`
  width: 16%;
  border-left: 1px solid var(--line-color);
  height: 100%;
  position: fixed;
  background-color: #fff;
  z-index: 100;
  right: 63px;
  @media screen and (max-width:768px) {
    visibility: hidden;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px 10px 0 10px;
`;

const Title = styled.h1`
  font-size: 1.4em;
  font-weight: 900;
  background-color: var(--input-color);
  padding: 20px;
  border-radius: 8px;
`;

const RankItem = styled.div`
  width: 100%;
  display: flex;
  gap: 1px;
  align-self: flex-start;
  align-items: flex-start;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: var(--hover-color);
    border-radius: 8px;
  }
  h1 {
    color: var(--point-color);
    font-size: 2.8em;
    font-weight: 900;
  }
`;

const RankDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  h2 {
    font-size: 1.2em;
    font-weight: 600;
  }
  p {
    font-size: 0.8em;
    color: var(--input-text-color);
  }
`;
const Rank = () => {
  const token = localStorage.getItem('accessToken');
  const [rankData, setRankData] = useState([]);

  useEffect(() => {
    const getTop5Bookmark = async () => {
      try {
        const response = await HomeAxiosApi.top5Bookmark(token);
        setRankData(response.data.content);
      } catch (error) {

      }
    };
    getTop5Bookmark();
  }, [token]);

  return (
    <StyledRank>
      <Container>
        <Title>인기 데이트 코스📍</Title>
        {rankData.map((item, index) => (
          <RankItem key={index}>
            <h1>{index + 1}</h1>
            <RankDetail>
              <h2>{item.title}</h2>
              <p>{item.bookmarkCount} Likes</p>
            </RankDetail>
          </RankItem>
        ))}
      </Container>
    </StyledRank>
  );
};

export default Rank;
