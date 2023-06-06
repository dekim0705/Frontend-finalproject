import React from 'react';
import UserProfile from './UserProfile';
import ShortcutBar from './Shortcuts';
import { ColumnWrapper } from '../Join/Wrappers';
import Container from './Container';

const ProfileBar = () => {

  return(
    <Container width='28%' height='400px'>
      <ColumnWrapper alignItems='center' gap='20px'>
        <UserProfile />
        <ShortcutBar />
      </ColumnWrapper>
    </Container>
  );
}
export default ProfileBar;