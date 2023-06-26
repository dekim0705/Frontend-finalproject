import React from "react";
import styled from "styled-components";
import PostAxiosApi from "../../api/PostAxiosApi";
import Functions from "../../util/Functions";

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

const UpdateDeleteReply = ({ replyId }) => {
  const token = localStorage.getItem('accessToken');
  const handleDelete = () => {
    const delReply = async () => {
      try {
        const response = await PostAxiosApi.deleteReply(replyId, token);
        if (response.data === "댓글 삭제 성공 ❤️") {
          alert("댓글이 삭제되었습니다.");
          window.location.reload();
        }
      } catch (error) {
        await Functions.handleApiError(error);
        const newToken = Functions.getAccessToken();
        if (newToken !== token) {
          const response = await PostAxiosApi.deleteReply(replyId, token);
          if (response.data === "댓글 삭제 성공 ❤️") {
            window.location.reload();
          }
        }
      }
    };
    delReply();
  }

  return (
    <Container>
      <h2>수정</h2>
      <h2 onClick={handleDelete}>삭제</h2>
    </Container>
  );
};

export default UpdateDeleteReply;
