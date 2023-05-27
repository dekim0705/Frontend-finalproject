import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../resource/로그인 로고.svg';
import styled from 'styled-components';
const StyledLink = styled(Link)`
  .navbar__logo {
    width: ${props => props.size || '17rem'};
  }
`;

const LoginLogo = ({ size }) => {
  return (
    <StyledLink to='/' size={size}>
      <img className="navbar__logo" src={logo} alt="오늘의 데이트 로고" />
    </StyledLink>
  );
}

export default LoginLogo;