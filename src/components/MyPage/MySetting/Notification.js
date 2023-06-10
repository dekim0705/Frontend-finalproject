import React from 'react';
import styled from 'styled-components';
import StyledSwitch from './Switch'
import { Text } from './Membership';
import { SettingsNav } from '../Navs';

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

  return(
    <>
      <SettingsNav />
      <Container width='90%' height='100px' margin="80px auto">
        <Text>PUSH 알림</Text>
        <StyledSwitch />
      </Container>    
    </>
  );
}
export default Notification;