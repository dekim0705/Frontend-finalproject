import React from 'react';
import { Route, Routes } from "react-router-dom";
import MyPageMain from '../components/MyPage/Main';
import AppLayout from '../components/common/AppLayout';
import PinListPage from '../components/MyPage/PinListMain';
import ReplyListPage from '../components/MyPage/ReplyListMain';
import Membership from '../components/MyPage/Membership';

const MyPage = () => {

  return(
    <>
      <AppLayout>
        <Routes>
          <Route index path="/" element={<MyPageMain />} />
          <Route index path="pin-list" element={<PinListPage />} />
          <Route index path="replies" element={<ReplyListPage />} />
          <Route index path="settings/membership" element={<Membership />} />
          
        </Routes>  
      </AppLayout>  
    </>
  );
}
export default MyPage;