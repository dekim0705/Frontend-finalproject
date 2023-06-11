import React from 'react';
import { PfImg, Nickname } from '../UserProfile';
import styled from 'styled-components';
import ProfileImage from '../../../resource/profile.jpeg';
import Star from '../../../resource/membership_star.svg';
import Container from '../Container';
import { ColumnWrapper, RowWrapper } from '../../Join/Wrappers';
import Counts from './Counts';

const PfImg2 = styled(PfImg)`
  width: 100px;
  height: 100px;
  margin: 0.6rem;
  @media screen and (max-width: 768px) {
    width: 70px;
    height: 70px;
    margin: 10px auto;
  }
`;

const Nickname2 = styled(Nickname)`
  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
    margin-top: 10px;
  }
`;

const Membership = styled.img`
  width: 1.2rem;
  margin: 0;
  margin-top: -10px;
`;

// const MembershipDesc = styled.p`
//   font-size: 0.8rem;
//   position: relative;
//   margin-top: -34px;
// `;



const Divider = styled.span`
  color: #eee;
`;


const ProfileBar2= () => {

  let totalPins = 230;
  let totalReplies = 255;

  return(
    <ColumnWrapper alignItems='center'>
      <Container width='60%'>
        <RowWrapper gap='10px'>
          <PfImg2 src={ProfileImage} alt='프로필 이미지'/>
            <ColumnWrapper gap='6px'>
              <RowWrapper>
                <Nickname2>자바광팬아님</Nickname2>
                <Membership src={Star} alt='멤버쉽 이미지'/>
              </RowWrapper>
              <RowWrapper width="50vw">
                <Counts count={totalPins} label="총 게시물 "/>
                <Divider>|</Divider>
                <Counts count={totalReplies} label="총 댓글 " />
              </RowWrapper>
            </ColumnWrapper>
        </RowWrapper>
      </Container>
    </ColumnWrapper>
  );
}
export default ProfileBar2