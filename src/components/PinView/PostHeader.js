import React from "react";
import styled from "styled-components";
import { Container } from "../../util/ViewFormStyle";
import profileImg from "../../resource/profile.jpeg";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShareIcon from '@mui/icons-material/Share';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReportBlockDropdown from "../../util/ReportBlockDropdown";

const AuthorHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  img {
    border-radius: 100%;
    width: 30px;
    height: 30px;
  }
  h1 {
    font-size: 0.75em;
    font-weight: 700;
  }
`;

const PostInfo = styled.div`
  p {
    font-size: 0.8em;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 1.2em;
    font-weight: bold;
  }
  .iconWrapper {
    display: flex;
    cursor: pointer;
  }
`;

const CommonStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  .form {
    display: flex;
    align-items: center;
    p {
      font-size: 0.8em;
      margin-top: 3px;
    }
  }
`;
const PostDetailInfo = styled(CommonStyle)``;
const PostConcept = styled(CommonStyle)``;

const PostHeader = () => {
  return (
    <Container>
      <AuthorHeader>
        <img src={profileImg} alt="" />
        <h1>닉네임이들어가요</h1>
      </AuthorHeader>
      <PostInfo>
        <Wrapper>
          <h1>서울의 고즈넉한 한옥 즐기기</h1>
          <div className="iconWrapper">
            <BookmarkBorderIcon />
            <ReportBlockDropdown />
          </div>
        </Wrapper>
        <p>서울시 중구</p>
      </PostInfo>
      <PostDetailInfo>
        <div className="form">
          <BookmarkBorderIcon />
          <p>132</p>
        </div>
        <div className="form">
          <VisibilityIcon />
          <p>1232</p>
        </div>
        <div className="form">
          <ShareIcon style={{ color: '#FF62AD'}} />
          <p style={{ color: '#FF62AD', fontWeight: 'bold', cursor: 'pointer' }}>공유하기</p>
        </div>
      </PostDetailInfo>
      <PostConcept>
        <div className="form">
          <CalendarMonthIcon />
          <p>당일 치기</p>
        </div>
        <div className="form">
          <FavoriteBorderIcon />
          <p>힐링 코스</p>
        </div>
      </PostConcept>
    </Container>
  );
}

export default PostHeader;