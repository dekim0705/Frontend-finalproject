import React from "react";
import adImg from "../../resource/광고.png"
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #fff;
  top: 90px;
  position: sticky;
  z-index: 10;
  @media screen and (max-width:768px) {
    position: sticky;
    top: 140px;
    z-index: 250;
  }
`;

const StyledImage = styled.div`
  width: 85%;
  margin: 0 auto;
  img {
    width: 100%;
    height: fit-content;
  }
`;

const Ad = () => {

  return (
    <Container>
      <StyledImage>
        <img src={adImg} alt="" />
      </StyledImage>
    </Container>
  );
}

export default Ad;