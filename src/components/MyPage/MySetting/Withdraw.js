import React from 'react';
import styled from 'styled-components';


const StyledWithdraw = styled.button`
  position: relative;
  align-self: flex-end;
  margin-right: 4rem;
  margin-top: -1.6rem;
  color: var(--input-text-color);
  background-color: var(--line-color);
  border: 1px solid var(--hover-color);
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: var(--hover-color);
    font-weight: bold;
  }
`;

const Withdraw = ({children}) => {

  return(
    <>
      <StyledWithdraw>{children}</StyledWithdraw>
    </>
  );
}
export default Withdraw;

