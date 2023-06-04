import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Profile from "../../resource/chat_profile.jpeg";

const ChatRoomContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 650px;
  min-height: 80vh; 
  height: fit-content; 
  border: 3px solid var(--point-color);
  padding: 20px;
  box-shadow: 0px 4px 4px 3px rgba(255, 98, 173, 0.2);
  border-radius: 30px;
  margin: 30px auto;
  overflow-y: auto; 
`;

const ChatRoomHeader = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  height: 85px;
  background: var(--point-color);
  border-radius: 25px 25px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 1.7rem;
  font-weight: bold;
  padding: 0 30px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 2.3rem;
  cursor: pointer;
`;

const ChatMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto; 
  max-height: calc(80vh - 120px);
  margin-top: 100px;
  margin-bottom: 150px;
`;

const MessageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: ${({ isUser }) => (isUser ? "flex-end" : "flex-start")};
  margin-bottom: 20px;
  font-size: 1.3rem;
  margin-bottom: 10px;
`;

const ProfileImage = styled.img`
  width: 70px;
  height: 60px;
  border-radius: 50%;
  margin-right: 13px;
`;

const Message = styled.div`
  margin-top: 10px;
  padding: 20px;
  background-color: ${({ isUser }) => (isUser ? "#FFA8D2" : "#ECECEC")};
  color: #000;
  border-radius: ${({ isUser }) => (isUser ? "25px 25px 0px 25px" : "0px 25px 25px 25px")};
  max-width: 400px;
  `;

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 80px;
  width: 100%;
`;

const MenuButton = styled.button`
  padding: 10px 20px;
  border-radius: 30px;
  margin-right: 7px; 
  border : 1px solid var(--point-color);
  background-color: #fff;
  font-size: 1.2rem;
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  input {
    height: 50px;
    border-radius: 25px;
    padding: 10px;
    border: none;
    background-color: var(--input-color);
    width: 95%; 
    font-size: 1.3rem;
  }
`;

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const messageContainerRef = useRef(null);

  useEffect(() => {
    const startMessage = {
      text: "안녕하세요. 오늘의 데이트 고객센터입니다. 무엇을 도와드릴까요?",
      isUserMessage: false,
    };
    setMessages([startMessage]);
  }, []);

  const handleCloseChat = () => {
    console.log("Chat closed");
  };

const handleMenuSelect = (menuName) => {
  const userMessage = {
    text: menuName,
    isUserMessage: true,
  };

  const botMessage = {
    text: test(menuName),
    isUserMessage: false,
  };

  setMessages([...messages, userMessage, botMessage]);

};

  const test = (message) => {
    return "답변입니다~~ 블라블라";
  };

  useEffect(() => {
    if (messageContainerRef.current) {
      // 스크롤 자동으로 아래로 내리기
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <ChatRoomContainer>
      <ChatRoomHeader>
        고객센터 Chat
        <CloseButton onClick={handleCloseChat}>✕</CloseButton>
      </ChatRoomHeader>
      <ChatMessageContainer ref={messageContainerRef}>
        {messages.map((message, index) => (
          <MessageContainer key={index} isUser={message.isUserMessage}>
            {!message.isUserMessage && (
              <ProfileImage src={Profile} alt="Profile" />
            )}
            <Message isUser={message.isUserMessage}>
              {message.text}
            </Message>
          </MessageContainer>
        ))}
      </ChatMessageContainer>
      <MenuContainer>
      <MenuButton onClick={() => handleMenuSelect("이용가이드")}>이용가이드</MenuButton>
      <MenuButton onClick={() => handleMenuSelect("멤버십")}>멤버십</MenuButton>
        <MenuButton onClick={() => handleMenuSelect("광고문의")}>광고 문의</MenuButton>
        <MenuButton onClick={() => handleMenuSelect("신고문의")}>신고 문의</MenuButton>
        <MenuButton onClick={() => handleMenuSelect("기타문의")}>기타 문의</MenuButton>
      </MenuContainer>
      <InputContainer>
            <input type="text" />
      </InputContainer>
    </ChatRoomContainer>
  );
};

export default ChatRoom;
