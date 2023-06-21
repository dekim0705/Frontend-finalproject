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
  min-width: 350px;
  border: 1px solid var(--line-color);
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  h2 {
    font-weight: bold;
    font-size: 1.2em;
  }
  p {
    font-size: 0.8em;
    color: var(--input-text-color);
  }
  textarea {
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
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
`;

const ReportModal = ({ open, handleClose }) => {
  const handleReportClose = () => {
    handleClose(true);
  }

  return (
    <ModalBackground open={open}>
      <ModalContainer>
        <h2>사용자 신고하기 🚫</h2>
        <p>누적 신고 3회시 자동 탈퇴 됩니다.</p>
        <textarea name="reportContent" id="" cols="30" rows="10"></textarea>
        <button onClick={handleReportClose}>관리자에게 전송</button>
      </ModalContainer>
    </ModalBackground>
  );
}

export default ReportModal;