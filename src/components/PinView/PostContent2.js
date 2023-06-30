// 본문, 사진
import React from "react";
import { Container } from "../../util/ViewFormStyle";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  line-height: 1.8em;
`;

const PostContent2 = ({ postData }) => {
  if (!postData) {
    return <p>데이터가 없습니다!</p>;
  }

  return (
    <StyledContainer>
      <div dangerouslySetInnerHTML={{ __html: postData.content }} />
      <img src={postData.imgUrl} alt="" />
    </StyledContainer>
  );
};

export default PostContent2;
