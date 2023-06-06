import React from 'react';
import styled from 'styled-components';
import { BsSliders } from 'react-icons/bs';

const StyledDetailButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  border: none;
  background-color: transparent;
  color: var(--point-color);
  font-size: 2.5rem;
  opacity: 100%;
  cursor: pointer;
  
`;

const DetailButton = ({ onClick }) => {
  return (
    <StyledDetailButton onClick={onClick}>
      <BsSliders />
    </StyledDetailButton>
  );
};

export default DetailButton;
