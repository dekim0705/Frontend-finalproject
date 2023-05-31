import React from "react";
import styled from "styled-components";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import authorProfile from '../../resource/profile.jpeg';
import thumbnailImage from '../../resource/썸네일.jpeg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 8px;
  flex-wrap: wrap;
  color: var(--text-color);
  @media screen and (max-width:768px) {
    width: 90%;
  }
`;
const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AuthorHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const AuthorInfo = styled.div`
  p {
    padding-top: 4px;
    color: var(--input-text-color);
    font-size: 0.75em;
  }
`;
const PostTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  h1 {
    font-weight: 800;
    font-size: 1.3em;
  }
  p {
    font-size: 1.1em;
    font-weight: 500;
  }
`;
const StyledThumbnail = styled.div`
  img {
    width: 100%;
    height: 350px;
    border-radius: 15px;
  }
`;

const CityPost = () => {

  return (
    <Container>
      <PostHeader>
        <AuthorHeader>
          <img src={authorProfile} alt="작성자 프로필"
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%'
              }} />
          <AuthorInfo>
            <h1>닉네임이들어가요</h1>
            <p>3분전</p>
          </AuthorInfo>
        </AuthorHeader>
        <BookmarkBorderIcon />
      </PostHeader>
      <PostTitle>
        <h1>제목이 들어가는 자리 입니다.</h1>
        <p>서울시 중구</p>
      </PostTitle>
      <StyledThumbnail>
        <img src={thumbnailImage} alt="" />
      </StyledThumbnail>
    </Container>
  );
}

export default CityPost;