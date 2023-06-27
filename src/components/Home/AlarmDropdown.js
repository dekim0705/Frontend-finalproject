import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HomeAxiosApi from "../../api/HomeAxiosApi";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: fit-content;
  padding: 1em;
  gap: 20px;
  color: var(--text-color);
  @media screen and (max-width: 768px) {
    width: fit-content;
  }
`;

const AlarmListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
  &:hover {
    background-color: var(--hover-color);
    border-radius: 4px;
  }
  .subcontainer {
    display: flex;
    align-items: center;
  }
  .circle {
    width: 8px;
    height: 8px;
    background-color: var(--point-color);
    border-radius: 50%;
    margin-right: 10px;
  }
  .header {
    h1 {
      font-size: 0.9em;
      font-weight: bold;
    }
  }
  .content {
    justify-content: space-between;
    p {
      font-size: 0.8em;
      color: var(--input-text-color);
    }
  }
`;

const AlarmDropdown = () => {
  const token = localStorage.getItem("accessToken");
  const [pushes, setPushes] = useState([]);

  useEffect(() => {
    const getPushList = async () => {
      try {
        const response = await HomeAxiosApi.pushList(token);
        console.log("🦊 : " + JSON.stringify(response.data, null, 2));
        setPushes(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getPushList();
  }, [token]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  return (
    <StyledWrapper>
      {pushes.map((push) => (
        <AlarmListContainer>
          <div className="subcontainer header">
            <div className="circle"></div>
            <h1>회원님이 구독하신 {push.postId} 게시글이 올라왔습니다.</h1>
          </div>
          <div className="subcontainer content">
            <p>글 제목이 들어갑니다.</p>
            <p>{formatDate(push.sendDate)}</p>
          </div>
        </AlarmListContainer>
      ))}
    </StyledWrapper>
  );
};

export default AlarmDropdown;
