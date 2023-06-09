import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const FolderContainer = styled.div`
  margin: ${({ margin }) => margin || ''};
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--hover-extra-color);
  font-size: 1.4rem;
  font-weight: bold;
  border: 1px solid #FF62AD;
  border-radius: 15px;
  box-shadow: 3px 3px 3px #999;
  width: 12rem;
  height: 12rem;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    transition: opacity 0.3s ease-in-out;
  }
    @media screen and (max-width: 768px) {
      width: 16rem;
      height: 16rem;
      flex-direction: column;
    }
`;

export const AddFolderContainer = styled(FolderContainer)`
  cursor: default;
  &:hover {
    background-color: inherit;
  }
`;

const BookmarkFolder = ({ folderName }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const encodedFolderName = encodeURIComponent(folderName);
    navigate(`/mypage/bookmarks/${encodedFolderName}`);
  };

  return(
    <>
      <FolderContainer onClick={handleClick}>
        {folderName}
      </FolderContainer>
    </>
  );
}
export default BookmarkFolder;
