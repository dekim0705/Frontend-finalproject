import React from 'react';
import { Container } from './EditInfo'
import MuiTextField from '../../Join/TextField';
import Button from '../../Join/Button';
import { EditInfoNav, SettingsNav } from '../Navs';
import { ColumnWrapper } from '../../Join/Wrappers';

const EditPwd = () => {

  return(
    <>
    <SettingsNav />
      <Container>
        <EditInfoNav />
        <ColumnWrapper gap="2rem" width="60%" alignItems="center" margin="20px 0 0 0">
          <MuiTextField type='password' label='새로운 비밀번호' />
          <MuiTextField type='password' label='새로운 비밀번호 확인' />
          <Button>비밀번호 변경</Button>
        </ColumnWrapper>
      </Container>
    </>
  );
}
export default EditPwd;