import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 8px;
  margin-bottom: 20px;
  h1 {
    font-size: 1.5em;
    font-weight: 700;
  }
  textarea {
    padding: 20px;
    border: 1.5px solid #eee;
    font-size: 1em;
  }
`;

const ContentField = () => {
  return (
    <Container>
      <h1>📝 본문</h1>
      <textarea id="content" cols="30" rows="10"></textarea>
    </Container>
  );
}

export default ContentField;