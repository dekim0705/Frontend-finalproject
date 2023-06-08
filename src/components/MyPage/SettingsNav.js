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
      <NavLink to='/mypage/settings/info' label='정보 수정' isActive={location.pathname === '/mypage/settings/info' || location.pathname === '/mypage/settings/info/password'} />
    </RowWrapper>
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
