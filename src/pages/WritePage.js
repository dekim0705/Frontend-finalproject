import React from "react";
import styled from "styled-components";
import AppLayout from "../components/common/AppLayout";
import BottomNav from "../components/common/BottomNav";
import WriteForm from "../components/Write/WriteForm";
import RouteByKakao from "../components/Write/RouteByKakao";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const WritePage = () => {

  return (
    <Container>
      <AppLayout>
        <WriteForm />
        <RouteByKakao />
      </AppLayout>
      <BottomNav />
    </Container>
  );
}

export default WritePage;