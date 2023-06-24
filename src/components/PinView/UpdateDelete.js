import React from "react";
import { Container as BaseContainer } from "../../util/ViewFormStyle";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PostAxiosApi from "../../api/PostAxiosApi";

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
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(`/edit/${postId}`);
  }
  const handleDelete = () => {
    
  }

  return (
    <Container>
      <ButtonStyled onClick={handleUpdate}>수정</ButtonStyled>
      <ButtonStyled onClick={handleDelete}>삭제</ButtonStyled>
    </Container>
  );
}

export default UpdateDelete;
