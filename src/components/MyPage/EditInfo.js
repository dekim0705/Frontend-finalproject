import React from 'react';
import styled from 'styled-components';
import { PfImg } from './UserProfile';
import ProfileImage from '../../resource/profile.jpeg';
import MuiTextField from '../Join/TextField';
import Button from '../Join/Button';
import SettingsNav, { EditInfoNav } from './SettingsNav';
import { ColumnWrapper } from '../Join/Wrappers';

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

const EditInfo = () => {
  let nickname = '자바광팬아님'
  let email = 'nojava@email.com'
  let comment = '안냐세요! 더 많은 데이트를 하고 시포요'

  return(
    <>
      <SettingsNav />
      <Container >
        <EditInfoNav />
        <ColumnWrapper gap="2rem" width="60%" alignItems="center">
          <PfImg src={ProfileImage} alt='프로필 이미지'/>
          <MuiTextField label='닉네임' value={nickname}/>
            <MuiTextField label='이메일 주소'value={email} readOnly/>
            <Notice>이메일 변경은 고객센터로 문의해 주세요.</Notice>
          <MuiTextField label='한 줄 소개' value={comment}/>
          <MuiTextField label='내 관심 지역' value='서울ㅋ'/>
          <Button>회원정보 수정</Button>
        </ColumnWrapper>
      </Container>
    </>
  );
}
export default EditInfo;