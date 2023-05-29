import React, { useState } from "react";
import styled from "styled-components";
import AppLayout from "../components/common/AppLayout";
import Ad from "../components/Home/Ad";
import City from "../components/Home/City";
import CityPost from "../components/Home/CityPost";
import BottomNav from "../components/common/BottomNav";

const PostWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

const HomePage = () => {
  // 📌 추후 멤버십 유무에 따라 광고 노출 여부 결정할 예정
  const [showAd, setShowAd] = useState(true);

  return (
    <>
      <AppLayout>
        {showAd && <Ad />}
        <City />
        <PostWrapper>
          <CityPost />
          <CityPost />
          <CityPost />
          <CityPost />
        </PostWrapper>
      </AppLayout>
      <BottomNav />
    </>
  );
}

export default HomePage;