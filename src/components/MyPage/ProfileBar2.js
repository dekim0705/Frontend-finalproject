import React from 'react';
import { PfImg, Nickname } from './UserProfile';
import styled from 'styled-components';
import ProfileImage from '../../resource/profile.jpeg';
import Star from '../../resource/membership_star.svg';
import Container from './Container';
import { ColumnWrapper, RowWrapper } from '../Join/Wrappers';
import Counts from './Counts';

const PfImg2 = styled(PfImg)`
  width: 100px;
  height: 100px;
  margin: 0.6rem;
`;

const Nickname2 = styled(Nickname)`

`;

const Membership = styled.img`
  width: 1.2rem;
  margin: 0;
  margin-top: -30px;
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
        <RowWrapper gap='20px'>
          <PfImg2 src={ProfileImage} alt='프로필 이미지'/>
<ColumnWrapper gap='6px'>
            <RowWrapper>
              <Nickname2>자바광팬아님</Nickname2>
              {/* <MembershipDesc>멤버십 회원<Membership src={Star} alt='멤버쉽 이미지'/></MembershipDesc> */}
              <Membership src={Star} alt='멤버쉽 이미지'/>
            </RowWrapper>
            <RowWrapper>
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