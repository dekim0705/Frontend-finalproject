import React, { useState, useEffect } from 'react';
import { PfImg, Nickname, Membership } from '../UserProfile';
import styled from 'styled-components';
import Star from '../../../resource/membership_star.svg';
import Container from '../Container';
import { ColumnWrapper, RowWrapper } from '../../Join/Wrappers';
import Counts from './Counts';
import UserAxiosApi from '../../../api/UserAxiosApi';
import Functions from "../../../util/Functions";

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

const Membership2 = styled(Membership)`
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
  const [profileData, setProfileData] = useState(null);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const response = await UserAxiosApi.userProfile(token);
        setProfileData(response.data);
        // console.log("🍒 UserProfile")
      } catch (error) {
        await Functions.handleApiError(error);
        const newToken = Functions.getAccessToken();
        if (newToken !== token) {
          const response = await UserAxiosApi.userProfile(newToken);
          setProfileData(response.data);
        }
      }
    };
    getUserProfile();
  }, [token]);

  return(
    <ColumnWrapper alignItems='center'>
      <Container width='60%'>
        <RowWrapper gap='10px'>
          {profileData && <PfImg2 src={profileData.pfImg} alt='프로필 이미지'/>}
            <ColumnWrapper gap='6px'>
              <div>
                {profileData && <Nickname2>{profileData.nickname}  {profileData && profileData.isMembership === 'MEMBERSHIP' && (
                  <Membership2 src={Star} alt='멤버쉽 이미지'/>
                )}  </Nickname2>}
            
              </div>
              <RowWrapper width="50vw">
                {profileData && <Counts count={profileData.postCount} label="총 게시물 "/>}
                <Divider>|</Divider>
                {profileData && <Counts count={profileData.replyCount} label="총 댓글 " />}
              </RowWrapper>
            </ColumnWrapper>
        </RowWrapper>
      </Container>
    </ColumnWrapper>
  );
}
export default ProfileBar2