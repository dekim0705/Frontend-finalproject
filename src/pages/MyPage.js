import React from 'react';
import { Route, Routes } from "react-router-dom";
import MyPageMain from '../components/MyPage/Main';

const MyPage = () => {

  return(
    <>
      <Routes>
        <Route index path="/" element={<MyPageMain />} />
      </Routes>    
    </>
  );
}
export default MyPage;