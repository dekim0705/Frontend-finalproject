import React from 'react';
import styled from 'styled-components';
import { PfImg } from './UserProfile';
import ProfileImage from '../../resource/profile.jpeg';
import MuiTextField from '../Join/TextField';
import Button from '../Join/Button';
import SettingsNav, { EditInfoNav } from './SettingsNav';
import { ColumnWrapper } from '../Join/Wrappers';
import Withdraw from './Withdraw';

export const Container = styled.div`
  margin: 40px auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 90%;
  border: 1px solid #FF62AD;
  border-radius: 15px;
  box-shadow: 3px 3px 3px #999;
  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 20px auto;
  }
`;

const Notice = styled.p`
  align-self: flex-start;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--point-color);
  position: relative;
  margin-top: -1.8rem;
  margin-left: 1rem;
`;

const PfImgWrapper = styled.div`
  position: relative;
  margin-top: 1rem;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    &:before {
      content: '프로필사진변경';
      border-radius: 50%;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      margin-top: 1rem;
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
      font-size: 1rem;
      opacity: 1;
      transition: opacity 0.3s;
    }
  }
  @media screen and (max-width: 768px) {
    margin: 6px auto;
    width: 110px;
    height: 110px;
    &:hover {
      &:before {
        margin-top: 0.3rem;
      }
    }
  }
`;

const EditInfo = () => {

  let nickname = '자바광팬아님'
  let email = 'nojava@email.com'
  let comment = '안냐세요! 더 많은 데이트를 하고 시포요'

  return (
    <>
      <SettingsNav />
      <Container>
        <EditInfoNav />
        <ColumnWrapper gap="2rem" width="60%" alignItems="center">
        <PfImgWrapper>
            <PfImg src={ProfileImage} alt='프로필 이미지' />
          </PfImgWrapper>
          <MuiTextField label='닉네임' value={nickname} />
          <MuiTextField label='이메일 주소' value={email} readOnly />
          <Notice>이메일 변경은 고객센터로 문의해 주세요.</Notice>
          <MuiTextField label='한 줄 소개' value={comment}/>
          <MuiTextField label='내 관심 지역' value='서울ㅋ'/>
          <Button>회원정보 수정</Button>
        </ColumnWrapper>
      </Container>
      <Withdraw>회원 탈퇴</Withdraw>
    </>
  );
}
export default EditInfo;