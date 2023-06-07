import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import StyledSwitch from './Switch'
import { RowWrapper } from '../Join/Wrappers';
import NavLink from './NavLink';
import { Text } from './Membership';

const Container = styled.div`
  margin: 80px auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 70%;
  height: 140px;
  border: 1px solid #FF62AD;
  border-radius: 15px;
  box-shadow: 3px 3px 3px #999;
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 100px;
    margin: 20px auto;
  }
`;

const Notification = () => {
  const location = useLocation();

  return(
    <>
      <RowWrapper gap="10px">
        <NavLink to='/mypage/settings/membership' label='멤버십 설정' isActive={location.pathname === '/mypage/settings/membership'}/>
        <NavLink to='/mypage/settings/notification' label='알림 설정' isActive={location.pathname === '/mypage/settings/notification'}/>
        <NavLink to='/mypage/settings/info' label='정보 수정' isActive={location.pathname === '/mypage/settings/info'}/>
      </RowWrapper>
      <Container width='90%' height='100px' margin="80px auto">
        <Text>PUSH 알림</Text>
        <StyledSwitch />
      </Container>    
</>
  );
}
export default Notification;