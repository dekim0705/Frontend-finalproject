import React from "react";
import { Container as BaseContainer } from "../../util/ViewFormStyle";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PostAxiosApi from "../../api/PostAxiosApi";
import Functions from "../../util/Functions";

const Container = styled(BaseContainer)`
  flex-direction: row;
  justify-content: flex-end;
`;

const ButtonStyled = styled.div`
  padding: 10px 20px;
  background-color: #eee;
  border-radius: 8px;
  font-size: 0.7em;
  margin-bottom: 6px;
  cursor: pointer;
  &:hover {
    background-color: var(--point-color);
    color: #fff;
    font-weight: bold;
  }
`;

const UpdateDelete = ({ postId }) => {
  const token = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(`/edit/${postId}`);
  }
  const handleDelete = () => {
    const getPost = async () => {
      try {
        const response = await PostAxiosApi.deletePost(postId, token);
        if (response.data === "게시글 삭제 성공 ❤️") {
          navigate('/home');
        }
      } catch (error) {
        await Functions.handleApiError(error);
        const newToken = Functions.getAccessToken();
        if (newToken !== token) {
          const response = await PostAxiosApi.deletePost(postId, token);
          if (response.data === "게시글 삭제 성공 ❤️") {
            navigate('/home');
          }
        }
      }
    };
    getPost();
  }

  return (
    <Container>
      <ButtonStyled onClick={handleUpdate}>수정</ButtonStyled>
      <ButtonStyled onClick={handleDelete}>삭제</ButtonStyled>
    </Container>
  );
}

export default UpdateDelete;
