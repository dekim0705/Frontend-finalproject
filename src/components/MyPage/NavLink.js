import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  margin: 10px 0;
  color: var(--text-color);
  text-decoration: none;
  position: relative;
  font-size: 1.2rem;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  &:hover {
    font-weight: bold;
  }
`;

const PinkUnderline = styled.span`
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: var(--point-color);
`;

const NavLink = ({ to, label, isActive }) => {
  return (
    <StyledLink to={to} isActive={isActive ? true : false }>
      {label}
      {isActive && <PinkUnderline />}
    </StyledLink>
  );
};

export default NavLink;
