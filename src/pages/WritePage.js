import React from "react";
import styled from "styled-components";
import AppLayout from "../components/common/AppLayout";
import BottomNav from "../components/common/BottomNav";
import WriteForm from "../components/Write/WriteForm";
import RouteByKakao from "../components/Write/RouteByKakao";
import ContentField from "../components/Write/ContentField";
import PlaceTag from "../components/Write/PlaceTag";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--text-color);
`;

const WritePage = () => {

  return (
    <Container>
      <AppLayout>
        <WriteForm />
        <RouteByKakao />
        <ContentField />
        <PlaceTag />
      </AppLayout>
      <BottomNav />
    </Container>
  );
}

export default WritePage;