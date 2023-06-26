import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BookmarkNav } from '../Navs';
import BookmarkFolder, { AddFolderContainer } from './BookmarkFolder';
import AddCircle from '../../../resource/mypage_icon/add-circle.svg'
import { Button } from'../MyPinReply/PinListWeb';
import { RowWrapper } from '../../Join/Wrappers';
import Functions from '../../../util/Functions';
import UserAxiosApi from '../../../api/UserAxiosApi';

export const FolderContainer = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 4rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem auto;
    gap: 2rem;
  }
`;

const AddIcon = styled.img`
  width: 4rem;
  height: 4rem;
  cursor: pointer;
`;

const InputField = styled.input`
  border: none;
  height: 40px;
  background-color: var(--input-color);
  border-radius: 4px;
  padding: 5px 10px;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 15%;
  height: auto;
  background-color: #fff;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  z-index: 300;
  @media screen and (max-width: 768px) {
      width: 70%;
    }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 200;
`;

const BookmarkPage = ( ) => {
  const [showModal, setShowModal] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [folders, setFolders] = useState([]);

  const token = Functions.getAccessToken();

  useEffect(() => {
    const getUserFolders = async () => {
      try {
        const response = await UserAxiosApi.userBookmarkFolders(token);
        // console.log("🍒 폴더 : ", response.data)
        setFolders(response.data);
      } catch (error) {
        await Functions.handleApiError(error);
        const newToken = Functions.getAccessToken();
        if (newToken !== token) {
          const response = await UserAxiosApi.userBookmarkFolders(newToken);
          setFolders(response.data);
        }
      }
    };
    getUserFolders();
  }, [token])

  const handleAddFolder = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNewFolderName('');
  };

  const handleFolderNameChange = (e) => {
    setNewFolderName(e.target.value);
  };

  const handleCreateFolder = () => {
    const newFolder = {
      id: folders.length + 1,
      name: newFolderName,
    };
    setFolders([...folders, newFolder]);
    setNewFolderName('');
    handleCloseModal();
  };
  
  return(
    <>
      <BookmarkNav />
      <FolderContainer>
        {folders.map((folder) => (
          <BookmarkFolder 
            key={folder.id} 
            folderName={folder.name} 
            folderId={folder.id}
            bookmarks={folder.bookmarks}
          />
        ))}
        <AddFolderContainer>
          <AddIcon src={AddCircle} alt='폴더 추가' onClick={handleAddFolder} />
        </AddFolderContainer>
      </FolderContainer>
      {showModal && (
        <>
          <ModalOverlay onClick={handleCloseModal} />
          <Modal>
            <InputField
              type='text'
              value={newFolderName}
              onChange={handleFolderNameChange}
              placeholder='북마크 폴더 이름'
            />
            <RowWrapper justifyContent='center'>
              <Button onClick={handleCreateFolder}>추가</Button>
              <Button onClick={handleCloseModal}>취소</Button>
            </RowWrapper>
          </Modal>
        </>
      )}
    </>
  );
}
export default BookmarkPage;