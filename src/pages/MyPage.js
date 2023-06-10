import React from 'react';
import { Route, Routes } from "react-router-dom";
import MyPageMain from '../components/MyPage/Main';
import AppLayout from '../components/common/AppLayout';
import PinList from '../components/MyPage/MyPinReply/PinList';
import ReplyList from '../components/MyPage/MyPinReply/ReplyList';
import Membership from '../components/MyPage/MySetting/Membership';
import Notification from '../components/MyPage/MySetting/Notification';
import EditInfo from '../components/MyPage/MySetting/EditInfo';
import EditPwd from '../components/MyPage/MySetting/EditPwd';
import BookmarkPage from '../components/MyPage/MyBookmark/BookmarkMain';
import BookmarkDetailPage from '../components/MyPage/MyBookmark/BookmarkDetail';
import BottomNav from "../components/common/BottomNav";

const MyPage = () => {

  return(
    <>
      <AppLayout>
        <Routes>
          <Route index path="/" element={<MyPageMain />} />
          <Route index path="pin-list" element={<PinList />} />
          <Route index path="replies" element={<ReplyList />} />
          <Route index path="bookmarks" element={<BookmarkPage />} />
          <Route index path="bookmarks/:folderName" element={<BookmarkDetailPage />} />
          <Route index path="settings/membership" element={<Membership />} />
          <Route index path="settings/notification" element={<Notification />} />
          <Route index path="settings/information" element={<Notification />} />
          <Route index path="settings/info" element={<EditInfo />} />
          <Route index path="settings/info/password" element={<EditPwd />} />
        </Routes>  
      </AppLayout>  
      <BottomNav />
    </>
  );
}
export default MyPage;