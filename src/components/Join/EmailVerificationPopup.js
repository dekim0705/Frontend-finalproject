import React, { useState } from 'react';
import styled from 'styled-components';

const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  background-color: #ffffff;
  padding: 15px;
  border: 1px solid gray;
  border-radius: 10px;
  z-index: 9999;
  display: flex;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const PopupContent = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const PopupTitle = styled.h2`
  margin-bottom: 0.6rem;
  font-size: 1.1rem;
  font-weight: 700;
`;

const PopupInput = styled.input`
  width: 80%;
  align-self: center;
  padding: 0.6rem;
  border: 1px solid var(--line-color);
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const Divider = styled.div`
  border-bottom: 1px solid #ccc;
  margin-bottom: 1rem;
  width: 100%;
`;

const PopupButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const PopupButton = styled.button`
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: var(--line-color);
  color: var(--text-color);
  cursor: pointer;
  &:hover {
    background-color: var(--point-color);
    color: #fff;
  }
`;

const EmailVerificationPopup = ({ onVerify, onVerificationSuccess }) => {
  const [verificationKey, setVerificationKey] = useState('');

  const handleVerificationKeyChange = (event) => {
    setVerificationKey(event.target.value);
  };

  const handleVerifyEmail = () => {
    if (verificationKey === 'authKey') {
      onVerify();
      onVerificationSuccess();
    } else {
      alert('인증키를 확인해 주세요.');
      setVerificationKey('');
    }
  };

  return (
    <>
      <PopupContainer>
        <PopupContent>
          <PopupTitle>이메일 인증</PopupTitle>
          <Divider />
          <PopupInput
            type="text"
            placeholder="인증 키를 입력하세요"
            value={verificationKey}
            onChange={handleVerificationKeyChange}
          />
          <PopupButtonContainer>
            <PopupButton onClick={handleVerifyEmail}>인증하기</PopupButton>
          </PopupButtonContainer>
        </PopupContent>
      </PopupContainer>
    </>
  );
};

export default EmailVerificationPopup;
