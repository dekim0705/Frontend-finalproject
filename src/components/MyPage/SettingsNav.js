import React from 'react';
import { useLocation } from 'react-router-dom';
import { RowWrapper } from '../Join/Wrappers';
import NavLink from './NavLink';

const SettingsNav = () => {
  const location = useLocation();

  return (
    <RowWrapper gap="10px">
      <NavLink to='/mypage/settings/membership' label='멤버십 설정' isActive={location.pathname === '/mypage/settings/membership'} />
      <NavLink to='/mypage/settings/notification' label='알림 설정' isActive={location.pathname === '/mypage/settings/notification'} />
      <NavLink to='/mypage/settings/info' label='정보 수정' isActive={location.pathname.startsWith('/mypage/settings/info')} />
    </RowWrapper>
  );
};

export const BookmarkNav = ({encodedFolderName, folderName }) => {
  const location = useLocation();

  return (
    <>
      <RowWrapper gap="10px" margin='0 0 0 1rem'>
        <NavLink to='/mypage/bookmarks' label='나의 북마크' isActive={location.pathname.startsWith('/mypage/bookmarks')}/>
        <NavLink to={`/mypage/bookmarks/${encodedFolderName}`} label={folderName} isActive={location.pathname === `/mypage/bookmarks/${encodedFolderName}`}/>
      </RowWrapper>
    </>
  );
};


export const EditInfoNav = () => {
  const location = useLocation();
  return(
    <>
      <RowWrapper gap="10px">
        <NavLink to='/mypage/settings/info' label='회원 정보 수정' isActive={location.pathname === '/mypage/settings/info'}/>
        <NavLink to='/mypage/settings/info/password' label='비밀번호 변경' isActive={location.pathname === '/mypage/settings/info/password'}/>
      </RowWrapper>
    </>
  );
}
export default SettingsNav;
