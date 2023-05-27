import React from "react";
import styled from "styled-components";

const StyledCity = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-around;
  gap: 10px;
  flex-wrap: wrap;
  margin: auto;

  li {
    padding: 15px 28px;
    border: 1px solid var(--line-color);
    border-radius: 35px;
    font-weight: bold;
    cursor: pointer;
    list-style: none;
  }
  li:hover {
    background-color: var(--hover-extra-color);
    color: #fff;
  }

  @media screen and (max-width:768px) {
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