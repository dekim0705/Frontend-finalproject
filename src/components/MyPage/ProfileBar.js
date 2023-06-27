import React from 'react';
import UserProfile from './UserProfile';
import ShortcutBar from './Shortcuts';
import { ColumnWrapper } from '../Join/Wrappers';
import Container from './Container';
import styled from 'styled-components';

export const Divider = styled.div`
  border-bottom: 2px solid var(--line-color);
  width: 90%;
  margin: 0 auto;
  @media screen and (max-width:768px) {
    display: none;
  }
`;
const ProfileBar = () => {

  return(
    <Container width='28%' height='400px'>
      <ColumnWrapper alignItems='center' gap='15px'>
        <UserProfile />
        <Divider />
        <ShortcutBar />
      </ColumnWrapper>
    </Container>
  );
}
export default ProfileBar;