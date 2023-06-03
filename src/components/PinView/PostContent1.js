// 경로 코멘트, 지도, 장소명 캐러셀
import React from "react";
import styled from "styled-components";
import { Container } from "../../util/ViewFormStyle";
import KakaoMap from "./KakaoMap";
import PlaceCarousel from "./PlaceCarousel";

const CommentField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  .form {
    text-align: center;
    background-color: #fff;
    border: 1px solid #c8c8c8;
    flex: 1;
    padding: 20px 10px;
    border-radius: 8px;
    p {
      font-size: 0.8em;
    }
  }
`;

const PostContent1 = () => {

  return (
    <Container>
      <CommentField>
        <div className="form">
          <p>조용한 분위기</p>
        </div>
        <div className="form">
          <p>웨이팅을 할 수 있어요</p>
        </div>
        <div className="form">
          <p>대중교통이 편해요</p>
        </div>
      </CommentField>
      <KakaoMap />
      <PlaceCarousel />
    </Container>
  );
}

export default PostContent1;