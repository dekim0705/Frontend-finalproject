import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Star from '../../resource/membership_star.svg';
import UserAxiosApi from '../../api/UserAxiosApi';
import Functions from "../../util/Functions";

export const PfImg = styled.img`
  margin-top: 1rem;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  @media screen and (max-width:768px) {
    margin: 6px auto;
    width: 110px;
    height: 110px;
  }
`;
export const Nickname = styled.h1`
  position: relative;
  color: var(--text-color);  
  font-size: 1.8rem;
  font-weight: 700;
  @media screen and (max-width:768px) {
    font-size: 1.4rem;
    margin-top: -12px;
  }
`;
export const Membership = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  margin-top: -15px;
  margin-left: -5px;
  @media screen and (max-width:768px) {
    width: 20px;
    height: 20px;
    margin-top: -6px;
    margin-left: -2px;
  }
`;
const Comment = styled.p`
  color: var(--text-color);  
  font-size: 0.8rem;
  margin-top: -14px;
  @media screen and (max-width:768px) {
    padding-bottom: 4px;
    border: none;
    padding-bottom: 0;
  }
`;

const UserProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const token = Functions.getAccessToken();

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const response = await UserAxiosApi.userProfile(token);
        setProfileData(response.data);
        console.log("🍒 UserProfile :", response)
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
    <>
      {profileData && <PfImg src={profileData.pfImg} alt='프로필 이미지'/>}
      <div>
      {profileData && <Nickname>{profileData.nickname}          
        {profileData && profileData.isMembership === 'MEMBERSHIP' && (
        <Membership src={Star} alt='멤버쉽 이미지'/>
        )}
      </Nickname>}

      </div>
      {profileData && <Comment>{profileData.userComment}</Comment>}
    </>
  );
}
export default UserProfile;