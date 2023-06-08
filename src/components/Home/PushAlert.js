import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import 'react-toastify/dist/ReactToastify.css';

const StyledMsg = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h1 {
    color: var(--text-color);
    font-size: 0.9em;
  }
  span {
    font-weight: bold;
    color: var(--point-color);
    font-size: 1.2em;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 900;
  color: var(--input-text-color);
  font-size: 0.85em;
`;

const StyledToastContainer = styled(ToastContainer)`
  &&&.Toastify__toast-container {
    width: 420px;
  }
  .Toastify__progress-bar {
    background-color: var(--point-color);
  }
`;

const PushAlert = () => {
  const notify = () => toast.info(
    <StyledMsg>
      <h1>회원님이 구독하신 <span>'서울'</span> 게시글이 올라왔습니다.</h1>
      <StyledLink to="/view">바로가기</StyledLink>
    </StyledMsg>, 
    {
      icon: "📨"
    }
  );

  return (
    <div>
      <button onClick={notify}>테스트</button>
      <StyledToastContainer />
    </div>
  );
}

export default PushAlert;