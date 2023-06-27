import React, { useState } from "react";
import styled from "styled-components";
import PostAxiosApi from "../../api/PostAxiosApi";
import Functions from "../../util/Functions";
import UserPopUp from "../../util/modal/UserPopUp";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

  h2 {
    font-size: 0.8em;
    color: #67666c;
    &:hover {
      font-weight: bold;
    }
    cursor: pointer;
  }
`;

const UpdateDeleteReply = ({ replyId, onEdit }) => {
  const token = localStorage.getItem("accessToken");
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    const delReply = async () => {
      try {
        const response = await PostAxiosApi.deleteReply(replyId, token);
        if (response.data === "댓글 삭제 성공 ❤️") {
          setIsOpen(true);
        }
      } catch (error) {
        await Functions.handleApiError(error);
        const newToken = Functions.getAccessToken();
        if (newToken !== token) {
          const response = await PostAxiosApi.deleteReply(replyId, token);
          if (response.data === "댓글 삭제 성공 ❤️") {
            setIsOpen(true);
          }
        }
      }
    };
    delReply();
  };

  const handleClose = () => {
    setIsOpen(false);
    window.location.reload();
  };

  return (
    <Container>
      <h2 onClick={onEdit}>수정</h2>
      <h2 onClick={handleDelete}>삭제</h2>
      <UserPopUp
        open={isOpen}
        close={handleClose}
        header={"❗️"}
        closeText="돌아가기"
      >
        댓글이 삭제되었습니다.
      </UserPopUp>
    </Container>
  );
};

export default UpdateDeleteReply;
