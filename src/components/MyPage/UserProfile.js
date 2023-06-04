import React from 'react';
import styled from 'styled-components';
import ProfileImage from '../../resource/profile.jpeg';
import Star from '../../resource/membership_star.svg';

const PfImg = styled.img`
  margin-top: 1rem;
  width: 180px;
  height: 180px;
  border-radius: 50%;
`;
const Nickname = styled.h1`
  color: var(--text-color);  
  font-size: 1.8rem;
  font-weight: 600;
`;
const Membership = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  margin-left: 170px;
  margin-top: 200px;
`;
const Comment = styled.p`
  color: var(--text-color);  
  font-size: 0.8rem;
  margin-top: -16px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--line-color);
`;


const UserProfile = () => {

  return(
    <>
      <PfImg src={ProfileImage} alt='프로필 이미지'/>
      <Nickname>자바광팬아님</Nickname>
      <Membership src={Star} alt='멤버쉽 이미지'/>
      <Comment>저는 자바광팬이 아닙니다. 데이트 좋아요!</Comment>
    </>
  );
}
export default UserProfile;