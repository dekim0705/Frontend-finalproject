import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledButton = styled.button`
  width: 240px;
  height: 50px;
  border: none;
  background-color: var(--point-color);
  color: #fff;
  font-weight: 900;
  font-size: 1.4em;
  opacity: 50%;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    opacity: 100%;
  }
`;

const StyledChangePasswordLink = styled(Link)`
  align-self: flex-end;
  color: var(--point-color);
  text-decoration: underline;
  font-size: 0.9em;
`;

const LoginForm = () => {
  
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Container>
        <TextField
          id="outlined-basic"
          label="아이디(이메일)"
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: "#FF62AD",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#FF62AD",
              },
            },
            "& .MuiInputLabel-root": {
              "&.Mui-focused": {
                color: "#FF62AD",
              },
            },
          }}
        />
        <TextField
          id="outlined-basic"
          label="비밀번호"
          variant="outlined"
          type="password"
          sx={{
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: "#FF62AD",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#FF62AD",
              },
            },
            "& .MuiInputLabel-root": {
              "&.Mui-focused": {
                color: "#FF62AD",
              },
            },
          }}
        />
        <StyledChangePasswordLink to="/password">
          비밀번호 재설정🔒
        </StyledChangePasswordLink>
        <StyledButton>로 그 인</StyledButton>
      </Container>
    </Box>
  );
};

export default LoginForm;
