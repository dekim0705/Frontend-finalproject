import React from 'react';
import styled from 'styled-components';
import Bookmark from '../../resource/mypage_icon/bookmark-heart.svg';
import Pin from '../../resource/mypage_icon/pin.svg';
import Setting from '../../resource/mypage_icon/settings.svg';
import { Link } from 'react-router-dom'
import { RowWrapper } from '../Join/Wrappers';

const ShortcutLink = styled(Link)`
  margin-top: -10px;
  text-decoration: none;
  width: 50px;
  text-align: center;
  &:hover {
    background-color: var(--hover-color);
    border-radius: 8px;
  }
  @media screen and (max-width:768px) {
    margin-bottom: 4px;
    display: none;
  }
`;

const Icon = styled.img`
  width: 40px;
  padding-top: 8px;
  @media screen and (max-width:768px) {
    padding-top: 4px;
}
`;

const Title = styled.p`
  color: var(--text-color);  
  font-size: 0.2rem;
  margin-bottom: 8px;
  padding-bottom: 2px;
  @media screen and (max-width:768px) {
    display: none;
}

`;

const ShortcutBar = () => {

  return(
  <RowWrapper gap='4px' justifyContent='center'>
    <ShortcutLink to='/mypage/bookmarks'>
      <Icon src={Bookmark} alt='북마크 아이콘' />
      <Title>북마크</Title>
    </ShortcutLink>
    <ShortcutLink to='/mypage/pin-list'>
      <Icon src={Pin} alt='핀목록 아이콘'/>
      <Title>핀목록</Title>
    </ShortcutLink>
    <ShortcutLink to='/mypage/settings/membership'>
      <Icon src={Setting} alt='설정 아이콘'/>
      <Title>설정</Title>
    </ShortcutLink>
  </RowWrapper>
  );
}
export default ShortcutBar;