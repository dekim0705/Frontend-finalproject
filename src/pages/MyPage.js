import React from 'react';
import ProfileBar from '../components/MyPage/ProfileBar';
import Header from '../components/common/Header';
import Folder from '../components/MyPage/Folder';
import styled from 'styled-components';
import BookmarkIcon from '../resource/mypage_icon/bookmark-heart.svg';
import PinIcon from '../resource/mypage_icon/pin.svg';
import ReplyIcon from '../resource/mypage_icon/reply.svg';
import SettingIcon from '../resource/mypage_icon/settings2.svg';

const ProfileContainer = styled.div`
  margin: 80px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  @media screen and (max-width:768px) {
    width: 80%;
    flex-direction: column;
    margin: 20px auto;
    gap: 20px;
  }
`;

const FolderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  width: 700px;
  @media screen and (max-width:768px) {
    width: 84%;
    gap: 4px;
  }
`;

const MyPage = () => {
  return(
    <>
      <Header />
      <ProfileContainer>
        <ProfileBar />
          <FolderContainer>
          <Folder 
            to='/mypage/pin-list'
            icon={PinIcon} 
            title="나의 핀 목록" 
            desc="내가 작성한 모든 핀 목록을 볼 수 있어요!"
          />
          <Folder 
            to='/mypage/replies'
            icon={ReplyIcon} 
            title="나의 댓글" 
            desc="내가 작성한 모든 댓글을 볼 수 있어요! "
          />
          <Folder 
            to='/mypage/bookmarks'
            icon={BookmarkIcon} 
            title="나의 북마크" 
            desc="내가 찜해둔 모든 게시글을 볼 수 있어요!"
          />
          <Folder 
            to='/mypage/settings'
            icon={SettingIcon} 
            title="나의 설정" 
            desc="나의 정보와 알림 설정을 관리할 수 있어요! "
          />
          </FolderContainer>           
      </ProfileContainer>
    </>
  );
}
export default MyPage;