import React from "react";
import { Container } from "../../util/ViewFormStyle";
import styled from "styled-components";
import profileImg from "../../resource/profile.jpeg";
import CreateIcon from '@mui/icons-material/Create';

const StyledContainer = styled(Container)`
  color: var(--text-color);
  border-bottom: none;
  h1 {
    font-size: 1.5em;
    font-weight: 700;
  }
`;

const StyledReplyForm = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  textarea {
    width: 100%;
    border: 1.5px solid var(--line-color);
    border-radius: 4px;
    height: 70px;
    padding: 10px;
  }
`;

const ReplyWrite = () => {

  return (
    <StyledContainer>
      <h1>후기</h1>
      <StyledReplyForm>
        <img src={profileImg} alt="" />
        <textarea type="text" placeholder="감정을 존중하며 표현해주시길 바랍니다. 좋은 후기는 모두에게 도움이 됩니다." />
        <CreateIcon style={{ cursor: 'pointer' }} />
      </StyledReplyForm>
    </StyledContainer>
  );
}

export default ReplyWrite;