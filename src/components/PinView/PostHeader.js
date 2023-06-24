import React from "react";
import styled from "styled-components";
import { Container } from "../../util/ViewFormStyle";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReportBlockDropdown from "../../util/modal/ReportBlockDropdown";
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
} from "react-share";
import FacebookIcon from "../../resource/facebook.png";
import TwitterIcon from "../../resource/twitter.png";
import LineIcon from "../../resource/line.png";

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
    gap: 3px;
    align-items: center;
    p {
      font-size: 0.8em;
      margin-top: 3px;
    }
  }
`;
const PostDetailInfo = styled(CommonStyle)`
  .forms {
    margin-top: 4px;
  }
`;
const PostConcept = styled(CommonStyle)``;

const PostHeader = ({ postData }) => {
  if (!postData) {
    return <p>데이터 가지고 오는 중 입니다!</p>;
  }
  return (
    <Container>
      <AuthorHeader>
        <img src={postData.pfImg} alt="" />
        <h1>{postData.nickname}</h1>
      </AuthorHeader>
      <PostInfo>
        <Wrapper>
          <h1>{postData.title}</h1>
          <div className="iconWrapper">
            <BookmarkBorderIcon />
            <ReportBlockDropdown />
          </div>
        </Wrapper>
        <p>{postData.district}</p>
      </PostInfo>
      <PostDetailInfo>
        <div className="form">
          <BookmarkBorderIcon />
          <p>{postData.bookmarkCount}</p>
        </div>
        <div className="form">
          <VisibilityIcon />
          <p>{postData.viewCount}</p>
        </div>
        <div className="forms">
          <FacebookShareButton url={window.location.href} quote={postData.title}>
            <img
              src={FacebookIcon}
              alt="Facebook"
              style={{ width: "22px", height: "22px" }}
            />
          </FacebookShareButton>
          <TwitterShareButton url={window.location.href} title={postData.title}>
            <img
              src={TwitterIcon}
              alt="Twitter"
              style={{ width: "22px", height: "22px" }}
            />
          </TwitterShareButton>
          <LineShareButton url={window.location.href} subject={postData.title}>
            <img
              src={LineIcon}
              alt="Line"
              style={{ width: "22px", height: "22px" }}
            />
          </LineShareButton>
        </div>
      </PostDetailInfo>
      <PostConcept>
        <div className="form">
          <CalendarMonthIcon />
          <p>{postData.course}</p>
        </div>
        <div className="form">
          <FavoriteBorderIcon />
          <p>{postData.theme}</p>
        </div>
      </PostConcept>
    </Container>
  );
};

export default PostHeader;
