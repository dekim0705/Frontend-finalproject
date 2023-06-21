import React, { useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  color: var(--text-color);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: visibility 0.2s linear, opacity 0.2s linear;
  z-index: 1;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: white;
  padding: 20px;
  border-radius: 8px;
  min-width: 250px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  border: 1px solid var(--line-color);
  p {
    margin-top: 5px;
  }
  h2 {
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 1.2em;
  }
  select {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid var(--line-color);
  }
  button {
    padding: 10px;
    border-radius: 4px;
    border: 1px solid var(--line-color);
    background-color: var(--point-color);
    color: #fff;
    font-weight: bold;
    cursor: pointer;
  }
  .newContainer {
    width: 100%;
    input {
      padding: 10px;
      border-radius: 4px;
      border: 1px solid var(--line-color);
      margin: 0 4px;
    }
    button {
      padding: 10px;
      border-radius: 4px;
      border: 1px solid var(--line-color);
      background-color: var(--point-color);
      color: #fff;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

const BookmarkModal = ({ open, handleClose, folders, addFolder, handleBookmark }) => {
  const [folderName, setFolderName] = useState("");
  const [selectedFolder, setSelectedFolder] = useState("");

  const handleFolderNameChange = (event) => {
    setFolderName(event.target.value);
  };

  const handleFolderSelect = (event) => {
    setSelectedFolder(event.target.value);
  };

  const handleAddFolder = () => {
    addFolder(folderName);
    setFolderName("");
  };

  const handleAddBookmark = () => {
    handleBookmark();
    handleClose(true);
  }

  return (
    <ModalBackground open={open} onClick={handleClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <h2>북마크 폴더 📚</h2>
        <div className="newContainer">
          <input
            type="text"
            value={folderName}
            onChange={handleFolderNameChange}
            placeholder="폴더 이름"
          />
          <button onClick={handleAddFolder}>추가</button>
        </div>
        {folders.length > 0 ? (
          <select value={selectedFolder} onChange={handleFolderSelect}>
            {folders.map((folder, index) => (
              <option key={index} value={folder}>
                {folder}
              </option>
            ))}
          </select>
        ) : (
          <p>폴더가 없습니다. 추가해주세요.</p>
        )}
        <button onClick={handleAddBookmark}>북마크 추가</button>
      </ModalContainer>
    </ModalBackground>
  );
};

export default BookmarkModal;