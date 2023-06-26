import React, { useState } from "react";
import styled from "styled-components";
import CreateIcon from "@mui/icons-material/Create";
import { Container } from "../../util/ViewFormStyle";
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import Functions from "../../util/Functions";
import PostAxiosApi from "../../api/PostAxiosApi";

const StyledContainer = styled(Container)`
  color: var(--text-color);
  border-bottom: none;
  h1 {
    margin-top: 15px;
    font-size: 1em;
    font-weight: 700;
  }
`;

const ReplyHeaderStyled = styled.div`
  display: flex;
  align-items: center;
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
    line-height: 1.3em;
    border: 1.5px solid var(--line-color);
    border-radius: 4px;
    height: 70px;
    padding: 10px;
  }
`;

const UpdateReplyInput = ({ content, replyId }) => {
  const token = localStorage.getItem('accessToken');
  const [reply, setReply] = useState("");

  const handleContentChange = (e) => {
    setReply(e.target.value);
  };

  const handleClick = async () => {
    try {
      const replyUserDto = {
        content: reply,
      };
      const response = await PostAxiosApi.updateReply(
        replyId,
        replyUserDto,
        token
      );
      console.log("🍔 : " + response.data);
      if (response.data === "댓글 수정 성공! ❤️") {
        alert("댓글이 수정되었습니다.");
        window.location.reload();
      }
    } catch (error) {
      await Functions.handleApiError(error);
      const newToken = Functions.getAccessToken();
      if (newToken !== token) {
        const replyUserDto = {
          content: reply,
        };
        const response = await PostAxiosApi.updateReply(
          replyId,
          replyUserDto,
          token
        );
        console.log("🍔 : " + response.data);
        if (response.data === "댓글 수정 성공! ❤️") {
          alert("댓글이 수정되었습니다.");
          window.location.reload();
        }
      }
    }
  };

  return (
    <StyledContainer>
      <ReplyHeaderStyled>
        <SubdirectoryArrowRightIcon />
        <h1>댓글 수정 💬</h1>
      </ReplyHeaderStyled>
      <StyledReplyForm>
        <textarea type="text" onChange={handleContentChange} />
        <CreateIcon style={{ cursor: "pointer" }} onClick={handleClick} />
      </StyledReplyForm>
    </StyledContainer>
  );
}

export default UpdateReplyInput;