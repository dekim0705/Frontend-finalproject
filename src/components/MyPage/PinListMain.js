import React from 'react';
import { useLocation } from 'react-router-dom';
import ProfileBar2 from './ProfileBar2';
import NavLink from './NavLink';
import { RowWrapper } from '../Join/Wrappers';
import PinList from './PinList';



const PinListPage = () => {
  const location = useLocation();


  return(
    <>
      <ProfileBar2 />
      <RowWrapper gap='1rem'>
        <NavLink to='/mypage/pin-list' label='내 게시글' isActive={location.pathname === '/mypage/pin-list'} />
        <NavLink to='/mypage/replies' label='내 댓글' isActive={location.pathname === '/mypage/replies'} />
      </RowWrapper>
      <PinList />
    </>
  );
}
export default PinListPage;