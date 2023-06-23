import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import AppLayout from "../components/common/AppLayout";
// import Ad from "../components/Home/Ad";
import City from "../components/Home/City";
import CityPost from "../components/Home/CityPost";

const GlobalStyle = createGlobalStyle`
  body {
    max-width: 1470px;
    margin: 0 auto;
  }
`;

const PostWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

const HomePage = () => {
  // 📌 추후 멤버십 유무에 따라 광고 노출 여부 결정할 예정
  // const [showAd, setShowAd] = useState(true);

  // 지역 선택 상태 관리
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <>
      <AppLayout>
        {/* {showAd && <Ad />} */}
        <GlobalStyle />
        <City setSelectedCity={setSelectedCity}/>
        <PostWrapper>
          <CityPost selectedCity={selectedCity} />
        </PostWrapper>
      </AppLayout>
    </>
  );
}

export default HomePage;