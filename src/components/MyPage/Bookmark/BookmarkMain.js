import React, { useState } from 'react';
import styled from 'styled-components';
import { BookmarkNav } from '../SettingsNav';
import BookmarkFolder from './BookmarkFolder';
import AddCircle from '../../../resource/mypage_icon/add-circle.svg'
import { Button } from'../PinList';
import { RowWrapper } from '../../Join/Wrappers';

const FolderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;
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

const BookmarkPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');

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
    console.log(`새로운 폴더 이름 : ${newFolderName}`);
    handleCloseModal();
  };

  return(
    <>
      <BookmarkNav />
      <FolderContainer>
        <BookmarkFolder />
        <BookmarkFolder><AddIcon src={AddCircle} alt='폴더 추가' onClick={handleAddFolder} /></BookmarkFolder>
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