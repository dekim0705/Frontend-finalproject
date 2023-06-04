import React from 'react';
import styled from 'styled-components';

const StyledFolder = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #FF62AD;
  border-radius: 15px;
  background-color: var(--hover-color);
  margin: 0 auto;
  cursor: pointer;
  box-shadow: 3px 3px 3px #999;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  &:hover {
    background-color: var(--point-color);
    opacity: 0.2;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const Folder = () => {

  return(
    <>
      <StyledFolder width='280px' height='140px' />
    </>
  );
}
export default Folder;