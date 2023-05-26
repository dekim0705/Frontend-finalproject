import React from "react";
import adImg from "../../resource/광고.png"
import styled from "styled-components";

const StyledImage = styled.div`
  width: 85%;
  margin: 0 auto;
  img {
    width: 100%;
    height: auto;
  }
`;

const Ad = () => {

  return (
    <StyledImage>
      <img src={adImg} alt="" />
    </StyledImage>
  );
}

export default Ad;