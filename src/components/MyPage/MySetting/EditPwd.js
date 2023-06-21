import React, { useState } from 'react';
import { Container } from './EditInfo'
import MuiTextField from '../../Join/TextField';
import Button from '../../Join/Button';
import { EditInfoNav, SettingsNav } from '../Navs';
import { ColumnWrapper } from '../../Join/Wrappers';
import { useNavigate } from 'react-router-dom';

const EditPwd = () => {
  const navigate = useNavigate();
  const [pwd, setPwd] = useState('');
  const [conPwd, setConPwd]  = useState('');  
  const [isPwd, setIsPwd] = useState(false);
  const [isConPwd, setIsConPwd] = useState(false);

    const onChangePwd = (e) => {
      const pwdRegex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
      const pwdCurrent = e.target.value;
      setPwd(pwdCurrent);
      if(!pwdRegex.test(pwdCurrent)) {
      } else {
        setIsPwd(true);
      }
    }
  
    // 비밀번호 확인
    const onChangeConPwd = (e) => {
      const conPwdCurrent = e.target.value;
      setConPwd(conPwdCurrent)
      if (conPwdCurrent !== pwd) {
        setIsConPwd(false)
      } else {
        setIsConPwd(true);
      }
    }

    // 닉네임 변경 버튼 클릭
    const handleBtnClick  = async() => {
      if (!isPwd || !isConPwd) {
        alert('비밀번호를 확인해 주세요')
        return;
      }
      try {
        alert('비밀번호가 변경 되었습니다.')
        navigate('/mypage')
      } catch (error) {
        console.error('비밀번호 변경 실패..');
      }
    }
      
  return(
    <>
    <SettingsNav />
      <Container>
        <EditInfoNav />
        <ColumnWrapper gap="2rem" width="60%" alignItems="center" margin="30px 0 0 0">
          <MuiTextField 
            type='password' 
            label='새로운 비밀번호'
            onChange={onChangePwd}
            value={pwd}
            isValid={isPwd}
            helperText={
              (pwd === '') ? '' :
              (!isPwd) ? '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.' : '올바른 형식입니다.'
            }
            errorColor="#66002f"
          />
          <MuiTextField 
            type='password' 
            label='새로운 비밀번호 확인' 
            onChange={onChangeConPwd}
            value={conPwd}
            isValid={isConPwd}
            helperText={
              (conPwd === '') ? '':
              (!isConPwd) ? '비밀번호가 일치하지 않습니다.' : '비밀번호가 일치 합니다.'
            }
            errorColor='#66002f'
          />
          <Button onClick={handleBtnClick}>비밀번호 변경</Button>
        </ColumnWrapper>
      </Container>
    </>
  );
}
export default EditPwd;