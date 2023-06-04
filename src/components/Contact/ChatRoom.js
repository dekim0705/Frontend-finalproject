import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Profile from "../../resource/chat_profile.jpeg";
import SendIcon from '@mui/icons-material/Send';

const ChatRoomContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 550px;
  min-height: 90vh; 
  height: fit-content; 
  border: 3px solid var(--point-color);
  padding: 20px;
  box-shadow: 0px 4px 4px 3px rgba(255, 98, 173, 0.2);
  border-radius: 30px;
  margin: 0px auto;
  overflow-y: auto; 

  @media screen and (max-width:768px) {
    max-width: 80%;
  }

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
  @media screen and (max-width:768px) {
    height: 65px;
    font-size: 1.1rem;
    padding: 0 25px;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 2.3rem;
  cursor: pointer;
  @media screen and (max-width:768px) {
    font-size: 1.3rem;
  }
`;

const ChatMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto; 
  max-height: calc(80vh - 250px);
  margin-top: 100px;
  margin-bottom: 150px;
  @media screen and (max-width:768px) {
  margin-top: 60px;
  }
`;

const MessageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: ${({ isUser }) => (isUser ? "flex-end" : "flex-start")};
  margin-bottom: 20px;
  font-size: 1.2rem;
  @media screen and (max-width:768px) {
  width: 95%;
  font-size: 1rem;
  margin-bottom: 10px;
  }
`;

const ProfileImage = styled.img`
  width: 70px;
  height: 60px;
  border-radius: 50%;
  margin-right: 13px;
  @media screen and (max-width:768px) {
  width: 40px;
  height: 30px;
  margin-right: 7px;
  }
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
  flex-wrap: wrap;
  justify-content: center;
  position: absolute;
  bottom: 85px;
  width: 100%;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const MenuButton = styled.button`
  padding: 14px 20px;
  border-radius: 30px;
  margin-right: 6px; 
  border: 1px solid var(--point-color);
  background-color: #fff;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px, 16px;
    margin-bottom: 5px;
    border-radius: 25px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 5px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  input {
    height: 60px;
    border-radius: 25px;
    padding: 10px;
    border: none;
    background-color: var(--input-color);
    width: 93%; 
    font-size: 1.3rem;
  }
`;
const SendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--point-color);
  color: white;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  cursor: pointer;

  &:hover {
    background-color: #FFA8D2;
  }

`;

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const messageContainerRef = useRef(null);

  useEffect(() => {
    const startMessage = {
      text: "안녕하세요. 오늘의 데이트 고객센터 챗봇입니다. 무엇을 도와드릴까요?",
      isUserMessage: false,
    };
    setMessages([startMessage]);
  }, []);

  const handleCloseChat = () => {
    console.log("Chat closed");
  };

  const handleMenuSelect = (menuName) => {
    const menuNumber = getMenuNumber(menuName);
    
    if (menuNumber !== 0) {
      const userMessage = {
        text: menuName,
        isUserMessage: true,
      };

      const botMessage = {
        text: test(menuNumber),
        isUserMessage: false,
      };

      setMessages([...messages, userMessage, botMessage]);
    }
  };

  const getMenuNumber = (menuName) => {
    switch (menuName) {
      case "이용가이드":
        return 1;
      case "광고문의":
        return 2;
      case "멤버십":
        return 3;
      case "신고":
        return 4;
      case "기타":
        return 5;
      default:
        return 0;
    }
  };

  const test = (menuNumber) => {
    switch (menuNumber) {
      case 1:
        return "이용가이드에 대한 답변입니다.";
      case 2:
        return <> 광고 신청 절차 및 관련 자세한 문의사항은 <br /> 아래 이메일로 연락주시면 도움을 드리겠습니다. <br /> <bold>todaysdate@naver.com</bold> </>
      case 3:
        return "멤버십문의에 대한 답변입니다.";
      case 4:
        return "신고문의에 대한 답변입니다.";
      case 5:
        return "기타문의에 대한 답변입니다.";
      default:
        return "메뉴를 선택해주세요.";
    }
  };

  useEffect(() => {
    if (messageContainerRef.current) {
      // 스크롤 자동으로 아래로 내리기
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    console.log('메세지 보냄')
  };

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
        <MenuButton onClick={() => handleMenuSelect("광고문의")}>광고문의</MenuButton>
        <MenuButton onClick={() => handleMenuSelect("멤버십")}>멤버십</MenuButton>
        <MenuButton onClick={() => handleMenuSelect("신고")}>신고</MenuButton>
        <MenuButton onClick={() => handleMenuSelect("기타")}>기타</MenuButton>
      </MenuContainer>
      <InputContainer>
      <input type="text" />
        <SendButton onClick={handleSendMessage}>
        <SendIcon />
        </SendButton>
      </InputContainer>
    </ChatRoomContainer>
    
  );
};

export default ChatRoom;
