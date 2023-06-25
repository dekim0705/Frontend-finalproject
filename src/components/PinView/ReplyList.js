import React, { useEffect, useState } from "react";
import { Container } from "../../util/ViewFormStyle";
import styled from "styled-components";
import ReportBlockDropdown from "../../util/modal/ReportBlockDropdown";
import profileImg from "../../resource/profile.jpeg";
import PostAxiosApi from "../../api/PostAxiosApi";
import moment from "moment";

const StyledContainer = styled(Container)`
  color: var(--text-color);
  border-bottom: none;
  flex-direction: row;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

const StyledReplyForm = styled.div`
  display: flex;
  flex-direction: column;
  .subContainer {
    display: flex;
    align-items: center;
    h1 {
      width: 100px;
      font-size: 0.9em;
      font-weight: 900;
    }
  }
  .writeDate {
    font-size: 0.75em;
    color: var(--input-text-color);
  }
`;

const ContentStyled = styled.div`
  width: 48vw;
  background-color: var(--hover-color);
  padding: 20px;
  font-size: 0.9em;
  margin-top: 10px;
  line-height: 1.3em;
  border-radius: 8px;
  @media screen and (max-width:768px) {
    width: 75vw;
  }
`;

const ReplyList = ({ postData }) => {
  const token = localStorage.getItem("accessToken");
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    const getReplies = async () => {
      try {
        const response = await PostAxiosApi.viewReply(postData.postId, token);
        console.log("🦊 : " + JSON.stringify(response.data, null, 2));
        setReplies(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getReplies();
  }, [postData, token]);
  return (
    <div>
      {replies.map((reply) => (
        <StyledContainer key={reply.id}>
          <img 
            src={reply.pfImg || profileImg} 
            alt="프사" />
          <StyledReplyForm>
            <div className="subContainer">
              <h1>{reply.nickname}</h1>
              <ReportBlockDropdown />
            </div>
            <p className="writeDate">{moment(reply.writeDate).fromNow()}</p>
            <ContentStyled>{reply.content}</ContentStyled>
          </StyledReplyForm>
        </StyledContainer>
      ))}
    </div>
  );
};

export default ReplyList;
