import React from "react";
import styled from "styled-components";

const StyledRank = styled.div`
  width: 18%;
  border-left: 1px solid var(--line-color);
  height: 100%;
  position: fixed;
  background-color: #fff;
  z-index: 100;
  right: 63px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px 10px 0 10px;
`;

const Title = styled.h1`
  font-size: 1.6em;
  font-weight: 900;
  background-color: var(--input-color);
  padding: 20px;
  border-radius: 8px;
`;

const RankItem = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
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
  const rankData = [
    { title: "따뜻한 봄바람 맞으러 떠나는 드라이브 코스", pin: "1232 Pin" },
    { title: "야경이 아름다운 낭만적인 산책로", pin: "1130 Pin" },
    { title: "신비로운 자연 풍경을 즐길 수 있는 등산 코스", pin: "1023 Pin" },
    { title: "역사와 문화가 살아있는 박물관 투어", pin: "965 Pin" },
    { title: "평온한 분위기의 카페 투어", pin: "872 Pin" },
  ];

  return (
    <StyledRank>
      <Container>
        <Title>인기 데이트 코스📍</Title>
        {rankData.map((item, index) => (
          <RankItem key={index}>
            <h1>{index + 1}</h1>
            <RankDetail>
              <h2>{item.title}</h2>
              <p>{item.pin}</p>
            </RankDetail>
          </RankItem>
        ))}
      </Container>
    </StyledRank>
  );
};

export default Rank;
