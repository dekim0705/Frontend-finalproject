import React from "react";
import { Container } from "../../util/WriteFormStyle";
import styled from "styled-components";

const ContentContainer = styled(Container)`
  textarea {
    padding: 20px;
    border: 1.5px solid var(--line-color);
    font-size: 1em;
  }
`;

const ContentField = () => {
  return (
    <ContentContainer>
      <h1>📝 본문</h1>
      <textarea id="content" cols="30" rows="10"></textarea>
    </ContentContainer>
  );
}

export default ContentField;