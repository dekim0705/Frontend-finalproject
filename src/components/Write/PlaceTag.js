import React, { useState } from "react";
import { Container } from "../../util/WriteFormStyle";

const PlaceTag = () => {

  return (
    <Container>
      <h1>📌 데이트 장소명</h1>
      <p>장소별 <span>공백을 기준</span>으로 작성해주세요.</p>
      <p>최대 <span>10개</span>까지 가능합니다.</p>
      
    </Container>
  );
}

export default PlaceTag;