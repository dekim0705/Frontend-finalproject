import React from "react";
import styled from "styled-components";

const StyledCity = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 60%;
  gap: 10px;
  margin: auto;

  li {
    padding: 15px 28px;
    border: 1px solid var(--line-color);
    border-radius: 35px;
    font-weight: bold;
    cursor: pointer;
    list-style: none;
    text-align: center;
  }
  li:hover {
    background-color: var(--hover-extra-color);
    color: #fff;
  }

  @media screen and (max-width:768px) {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 75%;
  }
`;

const City = () => {

  return (
    <StyledCity>
      <li>서울</li>
      <li>인천</li>
      <li>경기</li>
      <li>대전</li>
      <li>강원</li>
      <li>대구</li>
      <li>부산</li>
      <li>제주</li>
      <li>경북</li>
      <li>전남</li>
    </StyledCity>
  );
}

export default City;