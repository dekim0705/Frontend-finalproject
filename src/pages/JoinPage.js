import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MuiTextField from "../components/Join/TextField";
import styled from 'styled-components';
import Symbol from '../components/Join/Symbol';
import { ColumnWrapper } from '../components/Join/Wrappers';
import Button from '../components/Join/Button';
import Agreement from '../components/Join/Agreement';
import EmailVerificationPopup from '../components/Join/EmailVerificationPopup';
import UserAxiosApi from '../api/UserAxiosApi';

const StyledContainer = styled.div`
  margin: 20px auto;
  display: flex;
  flex-direction: column ;
  align-items: center;
  gap : 30px;
  width: 20%;
  @media screen and (max-width:768px) {
    width: 80%;
  }
`;

const StyledH1 = styled.h1`
  margin: 0;
  color: var(--hover-extra-color);
  font-weight: 800;
  font-size: 2.4rem;
`;

const JoinPage = () => {

  // 키보드 입력
  const [inputEmail, setInputEmail] = useState('');
  const [inputNickname, setInputNickname] = useState('');
  const [inputPwd, setInputPwd] = useState('');
  const [inputConPwd, setInputConPwd] = useState('');
  
  // 유효성 검사
  const [isEmail, setIsEmail] = useState(false);
  const [isNickname, setIsNickname] = useState(false);
  const [isPwd, setIsPwd] = useState(false);
  const [isConPwd, setIsConPwd] = useState(false);

  const navigate = useNavigate();
  const [showEmailVerificationPopup, setShowEmailVerificationPopup] = useState(false);

  // 이메일
  const onChangeEmail = (e) => {
    const emailRegEx = /^[a-zA-Z0-9+-/_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const emailCurrent = e.target.value
    setInputEmail(e.target.value);
    console.log('❗️ email : ', inputEmail)
    setIsEmail(emailRegEx.test(emailCurrent))
  }
  // 비밀번호 (정규식 : 8 ~ 16자 영문, 숫자, 특수문자를 최소 한가지씩 조합)
  const onChangePwd = (e) => {
    const pwdRegex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    const pwdCurrent = e.target.value;
    setInputPwd(pwdCurrent);
    console.log('❗️ pwd : ', inputPwd)
    setIsPwd(pwdRegex.test(pwdCurrent));
  }
  // 비밀번호 확인
  const onChangeConPwd = (e) => {
    const conPwdCurrent = e.target.value;
    setInputConPwd(conPwdCurrent);
    console.log('❗️ conPwd : ', inputConPwd)
    setIsConPwd(conPwdCurrent === inputPwd)
  }
  // 닉네임 (정규식 : 2 ~ 10자 한글, 영문, 숫자 사용 가능)
  const onChangeNickname = (e) => {
    const nicknameRegex = /^(?=.*[a-zA-Z0-9가-힣])[a-z0-9가-힣]{2,10}$/;
    const nicknameCurrent = e.target.value;
    setInputNickname(nicknameCurrent);
    setIsNickname(nicknameRegex.test(nicknameCurrent))
  }

  const handleJoinBtn = async() => {
    if (isNickname && isPwd && isConPwd && isEmail) {
      const userData = {
        email : inputEmail,
        pwd : inputPwd,
        nickname : inputNickname
      };
      try {
        await UserAxiosApi.createUser(userData);
        setShowEmailVerificationPopup(true);
        
        }catch (error) {
          console.log("회원가입 실패", error)
      } 
    }
  }

  const handleVerificationSuccess = () => {
    alert('인증되었습니다! 로그인해 주세요.');
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  return (
    <StyledContainer gap="30px">
      <ColumnWrapper alignItems='center' justifyContent='center'>
        <Symbol />
        <StyledH1>회원가입</StyledH1>
      </ColumnWrapper>
      <MuiTextField 
        type="text"
        label="닉네임" 
        variant="outlined"
        value={inputNickname} 
        onChange={onChangeNickname}
        placeholder="닉네임을 입력하세요"
        required
        helperText={inputNickname ? isNickname ? '사용가능한 닉네임 입니다' : '2~10자의 닉네임을 입력해 주세요.(한글, 영문, 숫자 사용 가능)' : ''}
        isValid={isNickname}
        errorColor="#66002f"
      />
      <MuiTextField 
        type="password"
        label="비밀번호" 
        variant="outlined"
        value={inputPwd} 
        onChange={onChangePwd}
        placeholder="비밀번호를 입력하세요"
        required
        helperText={inputPwd ? (isPwd ? '올바른 형식입니다.' : '숫자+영문자+특수문자 조합으로 8자리 이상 입력해 주세요.') : ''}
        isValid={isPwd}
        errorColor="#66002f"
        />
      <MuiTextField 
        type="password"
        label="비밀번호 확인" 
        variant="outlined"
        value={inputConPwd} 
        onChange={onChangeConPwd}
        placeholder="비밀번호를 재입력하세요"
        required
        helperText={inputConPwd ? (isConPwd ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다.') : ''}
        isValid={isConPwd}
        errorColor="#66002f"
        />
      <MuiTextField 
        type="email"
        label="이메일" 
        variant="outlined"
        value={inputEmail} 
        onChange={onChangeEmail}
        placeholder="이메일을 입력하세요"
        required
        helperText={inputEmail ? (isEmail ? '올바른 형식입니다.' : '이메일 주소를 확인해 주세요.') : ''}
        isValid={isEmail}
        errorColor="#66002f"
      />
      <Agreement />
      <Button onClick={handleJoinBtn}>가 입 하 기</Button>
      {showEmailVerificationPopup && (
        <EmailVerificationPopup
          onVerify={() => {}}
          onVerificationSuccess={handleVerificationSuccess}
        />
      )}
    </StyledContainer>
  );
}
export default JoinPage;