import React from 'react';
import styled from 'styled-components';

const FolderContainer = styled.div`
  margin: ${({ margin }) => margin || ''};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #FF62AD;
  border-radius: 15px;
  box-shadow: 3px 3px 3px #999;
  width: ${({ width }) => width || '10rem'};
  height: ${({ height }) => height || '10rem'};
    @media screen and (max-width: 768px) {
      width: 16rem;
      height: 16rem;
      flex-direction: column;
    }
`;

const BookmarkFolder = ({ children }) => {

  return(
    <>
      <FolderContainer>{children}</FolderContainer>
    </>
  );
}
export default BookmarkFolder;