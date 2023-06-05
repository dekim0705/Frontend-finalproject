import React from "react";
import { Container } from "../../util/ViewFormStyle";
import styled from "styled-components";
import ReportBlockDropdown from "../../util/ReportBlockDropdown";
import profileImg from "../../resource/profile.jpeg";

const StyledContainer = styled(Container)`
  color: var(--text-color);
  border-bottom: none;
  flex-direction: row;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

const StyledReplyForm = styled.div`
  display: flex;
  flex-direction: column;
  .subContainer {
    display: flex;
    align-items: center;
    h1 {
      font-size: 0.9em;
      font-weight: 900;
    }
  }
  .writeDate {
    font-size: 0.75em;
    color: var(--input-text-color);
  }
  .content {
    font-size: 0.9em;
    margin-top: 10px;
  }
`;
const ReplyList = () => {
  return (
    <StyledContainer>
      <img src={profileImg} alt="" />
      <StyledReplyForm>
        <div className="subContainer">
          <h1>닉네임이들어간다구요</h1>
          <ReportBlockDropdown />
        </div>
        <p className="writeDate">3분전</p>
        <p className="content">재미있었어요 추천합니다! 근데 집에 돌아갈 때 버스 차편 잘 보고 가시는 것을 추천드립니다. 막차가 일찍 끊겨요.</p>
      </StyledReplyForm>
    </StyledContainer>
  );
}

export default ReplyList;