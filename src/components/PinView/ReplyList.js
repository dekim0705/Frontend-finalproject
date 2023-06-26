import React, { useContext, useEffect, useState } from "react";
import { Container } from "../../util/ViewFormStyle";
import styled from "styled-components";
import ReportBlockDropdown from "../../util/modal/ReportBlockDropdown";
import profileImg from "../../resource/profile.jpeg";
import PostAxiosApi from "../../api/PostAxiosApi";
import moment from "moment";
import UpdateDeleteReply from "./UpdateDeleteReply";
import { UserContext } from "../../context/UserContext";
import Functions from "../../util/Functions";
import UpdateReplyInput from "./UpdateReplyInput";

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
      width: fit-content;
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
  width: 47.5vw;
  background-color: var(--input-color);
  padding: 20px;
  margin-top: 10px;
  line-height: 1.3em;
  border-radius: 6px;
  @media screen and (max-width: 768px) {
    width: 75vw;
  }
`;

const ReplyList = ({ postData }) => {
  const token = localStorage.getItem("accessToken");
  const [replies, setReplies] = useState([]);
  const { userPfImg } = useContext(UserContext);
  const [editingReplyId, setEditingReplyId] = useState(null);

  useEffect(() => {
    const getReplies = async () => {
      try {
        const response = await PostAxiosApi.viewReply(postData.postId, token);
        setReplies(response.data);
      } catch (error) {
        await Functions.handleApiError(error);
        const newToken = Functions.getAccessToken();
        if (newToken !== token) {
          const response = await PostAxiosApi.viewReply(postData.postId, token);
          setReplies(response.data);
        }
      }
    };
    getReplies();
  }, [postData, token, userPfImg]);

  return (
    <div>
      {replies.map((reply) => (
        <StyledContainer key={reply.id}>
          <img src={reply.pfImg || profileImg} alt="프사" />
          <StyledReplyForm>
            <div className="subContainer">
              <h1>{reply.nickname}</h1>
              <ReportBlockDropdown />
              {userPfImg === reply.pfImg && (
                <UpdateDeleteReply
                  replyId={reply.id}
                  onEdit={() => setEditingReplyId(reply.id)}
                />
              )}
            </div>
            <p className="writeDate">{moment(reply.writeDate).fromNow()}</p>
            <ContentStyled>{reply.content}</ContentStyled>
            {editingReplyId === reply.id && (
              <UpdateReplyInput
                replyContent={reply.content}
                replyId={reply.id}
                cancelEdit={() => setEditingReplyId(null)}
              />
            )}
          </StyledReplyForm>
        </StyledContainer>
      ))}
    </div>
  );
};

export default ReplyList;
