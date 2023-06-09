import React from 'react';
import { Route, Routes } from "react-router-dom";
import MyPageMain from '../components/MyPage/Main';
import AppLayout from '../components/common/AppLayout';
import PinListPage from '../components/MyPage/PinListMain';
import ReplyListPage from '../components/MyPage/ReplyListMain';
import Membership from '../components/MyPage/Membership';
import Notification from '../components/MyPage/Notification';
import EditInfo from '../components/MyPage/EditInfo';
import EditPwd from '../components/MyPage/EditPwd';
import BookmarkPage from '../components/MyPage/Bookmark/BookmarkMain';

const MyPage = () => {

  return(
    <>
      <AppLayout>
        <Routes>
          <Route index path="/" element={<MyPageMain />} />
          <Route index path="pin-list" element={<PinListPage />} />
          <Route index path="replies" element={<ReplyListPage />} />
          <Route index path="bookmarks" element={<BookmarkPage />} />
          <Route index path="settings/membership" element={<Membership />} />
          <Route index path="settings/notification" element={<Notification />} />
          <Route index path="settings/information" element={<Notification />} />
          <Route index path="settings/info" element={<EditInfo />} />
          <Route index path="settings/info/password" element={<EditPwd />} />
        </Routes>  
      </AppLayout>  
    </>
  );
}
export default MyPage;