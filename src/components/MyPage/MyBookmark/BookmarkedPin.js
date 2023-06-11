import React from "react";
import styled from "styled-components";
import thumbnailImage from '../../../resource/썸네일.jpeg';
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  color: var(--text-color);
`;

const PostTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-left: 0.4rem;
  h1 {
    font-size: 1em;
    font-weight: 800;
    @media screen and (max-width: 768px) {
      font-size: 1.2em;
    }
  }
  p {
    font-size: 0.8rem;
    font-weight: 500;
    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const StyledThumbnail = styled(Link)`
  img {
    width: 12rem;
    height: 12rem;
    border-radius: 15px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      width: 16rem;
      height: 16rem;
    }
  }
`;

const BookmarkedPin = () => {

  return (
    <Container>
      <StyledThumbnail to="/view">
      <img src={thumbnailImage} alt="썸네일" />
      </StyledThumbnail> 
      <PostTitle>
        <h1>제목이 들어가는 자리 💙</h1>
        <p>주소 자리 !</p>
      </PostTitle>
    </Container>
  );
}

export default BookmarkedPin;