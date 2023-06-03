// 본문, 사진
import React from "react";
import { Container } from"../../util/ViewFormStyle";
import Image from "../../resource/썸네일.jpeg";

const PostContent2 = () => {
  return (
    <Container>
      <p>1일차 부평 지하상가 구경하고 인천 차이나 타운 들렀다가 을왕리 해수욕장 가서 구경하고 근처 숙소에서 취침 2일차 월미도에서 디스코팡팡 타주고 맛난거 먹어줍니다.</p>
      <img src={Image} alt="" />
    </Container>
  );
}

export default PostContent2;