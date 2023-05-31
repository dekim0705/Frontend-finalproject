import React from "react";
import styled from "styled-components";
import InputField from "./InputField";
import Region from "./Select/Region";
import Schedule from "./Select/Schedule";
import Theme from "./Select/Theme";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  p {
    /* 본문 텍스트 */
    font-size: 1em;
    padding: 10px 30px;
    line-height: 1.8em;
  }
`;

const SelectWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const WriteForm = () => {
  return (
    <Container>
      <InputField />
      <SelectWrapper>
        <Region />
        <Schedule />
        <Theme />
      </SelectWrapper>
    </Container>
  );
}

export default WriteForm;