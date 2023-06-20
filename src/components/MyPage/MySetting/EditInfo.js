import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import ProfileImage from '../../../resource/profile.jpeg';
import MuiTextField from '../../Join/TextField';
import Button from '../../Join/Button';
import { EditInfoNav, SettingsNav } from '../Navs';
import { ColumnWrapper } from '../../Join/Wrappers';
import Withdraw from './Withdraw';
import RegionSelectBox from './RegionSelectBox';
import ProfileImageUploader from './EditPfImg';

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
  .align_start {
    align-self: flex-start;
  }
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

  const dummyData = useMemo(
      () => [
        { id: 1, nickname: '자바광팬아님', comment: '안녕하세요! 재밌는 데이트를 즐겨볼까용?', email: 'nojava@gmail.com' }
      ],[]
  );

  const [nickname, setNickname] = useState(dummyData[0].nickname);
  const [isNickname, setIsNickname] = useState(false);
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(false);

  const [comment, setComment] = useState(dummyData[0].comment);
  const [isComment, setIsComment] = useState(false);
  const [isCommentValid, setIsCommentValid] = useState(false);

  const [region, setRegion] = useState("");

  const email = dummyData[0].email;

  const dummyNicknameList = ['user1', 'user2', 'user3'];


  const onChangeNickname = (e) => {
    const nicknameRegex = /^(?=.*[a-zA-Z0-9가-힣])[a-z0-9가-힣]{2,10}$/;
    const nicknameCurrent = e.target.value;
    setNickname(nicknameCurrent);
    setIsNicknameValid(nicknameRegex.test(nicknameCurrent));

    const isNicknameAvailable =
      nicknameCurrent !== dummyData[0].nickname &&
      !dummyNicknameList.includes(nicknameCurrent);
      setIsNicknameAvailable(isNicknameAvailable);

    if (nicknameCurrent === dummyData[0].nickname || (nicknameRegex.test(nicknameCurrent) && isNicknameAvailable)) {
      setIsNickname(true);
    } else {
      setIsNickname(false);
    }
  };

  useEffect(() => {
    if (nickname === dummyData[0].nickname) {
      setIsNickname(true);
    } else {
      setIsNickname(isNicknameValid && isNicknameAvailable);
    }
  }, [nickname, isNicknameValid, isNicknameAvailable, dummyData]);

  const onChangeComment = (e) => {
    const commentRegex = /^.{0,30}$/;
    const commentCurrent = e.target.value;
    setComment(commentCurrent);
    setIsCommentValid(commentRegex.test(commentCurrent));
    setIsComment(commentCurrent === dummyData[0].comment || isCommentValid);
  };
  
  useEffect(() => {
    setIsComment(comment === dummyData[0].comment || isCommentValid);
  }, [comment, isCommentValid, dummyData]);
  
  const getHelperText = () => {
    if (comment === dummyData[0].comment || isCommentValid) {
      return '';
    } else {
      return '한 줄 소개는 30자 이내로 입력 가능합니다.';
    }
  };

  const handleRegionChange = (value) => {
    setRegion(value);
  };

  const handleUpdateInfo = () => {
    if (isNickname && isComment) {
      console.log('🩷수정 성공 : ');
      console.log(nickname, comment, region);
    } else {
      console.log('🖤수정 실패');
    }
  };


  return (
    <>
      <SettingsNav />
      <Container>
        <EditInfoNav /> 
        <ColumnWrapper gap="2rem" width="60%" alignItems="center">
            <ProfileImageUploader defaultImage={ProfileImage} />
          <MuiTextField 
            label='닉네임' 
            value={nickname} 
            onChange={onChangeNickname} 
            helperText={
              (nickname === '자바광팬아님') ? '' :
              (isNicknameValid && isNicknameAvailable) ? '사용 가능한 닉네임입니다.' :
              (isNicknameValid && !isNicknameAvailable) ? '이미 사용 중인 닉네임입니다.' :
              (!isNicknameValid && isNicknameAvailable) ? '닉네임은 2~10자의 영문, 숫자, 한글로 이루어져야 합니다.' :
              '닉네임은 2~10자의 영문, 숫자, 한글로 이루어져야 합니다.'
            }            
            isValid={isNickname}
            errorColor="#66002f"
          />
          <MuiTextField 
            label='이메일 주소' 
            value={email} 
            readOnly 
          />
          <Notice>이메일 변경은 고객센터로 문의해 주세요.</Notice>
          <MuiTextField
            label="한 줄 소개"
            value={comment}
            onChange={onChangeComment}
            helperText={getHelperText()}
            isValid={isCommentValid}
            errorColor="#66002f"
          />
          <div className='align_start'>
            <RegionSelectBox value={region} onChange={handleRegionChange} />
          </div>          
          <Button onClick={handleUpdateInfo}>회원정보 수정</Button>
        </ColumnWrapper>
      </Container>
      <Withdraw>회원 탈퇴</Withdraw>
    </>
  );
}
export default EditInfo;