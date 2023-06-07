import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: fit-content;
  padding: 1em;
  gap: 20px;
  color: var(--text-color);
`;

const AlarmListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
  &:hover {
    background-color: var(--hover-color);
    border-radius: 4px;
  }
  .subcontainer {
    display: flex;
    align-items: center;
  }
  .circle {
    width: 8px;
    height: 8px;
    background-color: var(--point-color);
    border-radius: 50%;
    margin-right: 10px;
  }
  .header {
    h1 {
      font-size: 0.9em;
      font-weight: bold;
    }
  }
  .content {
    justify-content: space-between;
    p {
      font-size: 0.8em;
      color: var(--input-text-color);
    }
  }
`;

const AlarmDropdown = () => {

  return (
    <StyledWrapper>
      <AlarmListContainer>
        <div className="subcontainer header">
          <div className="circle"></div>
          <h1>회원님이 구독하신 '서울' 게시글이 올라왔습니다.</h1>
        </div>
        <div className="subcontainer content">
          <p>글 제목이 들어갑니다.</p>
          <p>2023-07-25</p>
        </div>
      </AlarmListContainer>
      <AlarmListContainer>
        <div className="subcontainer header">
          <div className="circle"></div>
          <h1>회원님이 구독하신 '서울' 게시글이 올라왔습니다.</h1>
        </div>
        <div className="subcontainer content">
          <p>글 제목이 들어갑니다.</p>
          <p>2023-07-25</p>
        </div>
      </AlarmListContainer>
    </StyledWrapper>
  );
}

export default AlarmDropdown;