import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Navbar from "./Navbar";
import Rank from "./Rank";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
`;
const AppLayout = () => {

  return (
    <Container>
      <Navbar />
      <Header />
      <Rank />
    </Container>
  );
}

export default AppLayout;