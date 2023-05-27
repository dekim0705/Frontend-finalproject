import React from "react";
import styled from "styled-components";
import AppLayout from "../components/common/AppLayout";
import Ad from "../components/Home/Ad";
import City from "../components/Home/City";
import CityPost from "../components/Home/CityPost";

const PostWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

const HomePage = () => {

  return (
      <AppLayout>
        <Ad />
        <City />
        <PostWrapper>
          <CityPost />
          <CityPost />
          <CityPost />
          <CityPost />
        </PostWrapper>
      </AppLayout>
  );
}

export default HomePage;