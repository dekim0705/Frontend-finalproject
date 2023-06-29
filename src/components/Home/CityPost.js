import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkModal from "../../util/modal/BookmarkModal";
import HomeAxiosApi from "../../api/HomeAxiosApi";
import Functions from "../../util/Functions";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import BookmarkAxiosApi from "../../api/BookmarkAxiosApi";
import noImage from "../../resource/no_image.jpeg";
import blockImage from "../../resource/차단 썸네일.png";
import UserPopUp from "../../util/modal/UserPopUp";
import ReportAxiosApi from "../../api/ReportAxiosApi";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 8px;
  flex-wrap: wrap;
  color: var(--text-color);
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AuthorHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const AuthorInfo = styled.div`
  h1 {
    font-size: 0.9em;
  }
  p {
    padding-top: 4px;
    color: var(--input-text-color);
    font-size: 0.75em;
  }
`;
const PostTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  cursor: pointer;
  h1 {
    font-weight: 800;
    font-size: 1.3em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 320px;
  }
  p {
    font-size: 1.1em;
    font-weight: 500;
  }
`;
const StyledThumbnail = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    height: 350px;
    border-radius: 15px;
  }
`;

const StyledBlockedPost = styled.div`
  h1 {
    font-weight: bold;
    font-size: 1.3em;
  }
`;

const BlockedContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  button {
    background-color: var(--hover-color);
    color: var(--input-text-color);
    border: 0.8px solid #eee;
    padding: 6px;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      background-color: var(--point-color);
      color: #fff;
      font-weight: bold;
    }
  }
`;

const CityPost = ({ selectedCity }) => {
  const navigate = useNavigate();
  const [bookmarked, setBookmarked] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [folders, setFolders] = useState([]);
  const token = localStorage.getItem("accessToken");
  // 게시글 정보 🌸
  const [postInfos, setPostInfos] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(0);
  const [bookmarkInfo, setBookmarkInfo] = useState({});

  const [showPopUp, setShowPopUp] = useState(false);

  const handleBookmark = async (postId) => {
    setSelectedPostId(postId);
    if (bookmarked.includes(postId)) {
      // 북마크 삭제
      try {
        const folderName = bookmarkInfo[postId];
        await HomeAxiosApi.deleteBookmark(postId, folderName, token);
        setBookmarked((prevBookmarked) =>
          prevBookmarked.filter((id) => id !== postId)
        );
      } catch (error) {
        console.error(error);
      }
    } else {
      setBookmarked((prevBookmarked) => [...prevBookmarked, postId]);
    }
  };

  const handleAddFolder = (folderName) => {
    setFolders((prevFolders) => [...prevFolders, folderName]);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const getPosts = async () => {
    try {
      let response;
      if (!selectedCity) {
        response = await HomeAxiosApi.allPosts(token);
        console.log("🐸 : " + JSON.stringify(response.data, null, 2));
      } else {
        response = await HomeAxiosApi.regionAllPosts(selectedCity, token);
      }
      setPostInfos(
        response.data.map((post) => ({
          ...post,
          writeDate: moment(post.writeDate).fromNow(),
        }))
      );
    } catch (error) {
      await Functions.handleApiError(error);
      const newToken = Functions.getAccessToken();
      if (newToken !== token) {
        let response;
        if (!selectedCity) {
          response = await HomeAxiosApi.allPosts(token);
        } else {
          response = await HomeAxiosApi.regionAllPosts(selectedCity, token);
        }
        setPostInfos(
          response.data.map((post) => ({
            ...post,
            writeDate: moment(post.writeDate).fromNow(),
          }))
        );
      }
    }
  };
  
  useEffect(() => {
    setPostInfos([]);
    getPosts();
  }, [selectedCity, token]);

  useEffect(() => {
    const getBookmarkedPosts = async () => {
      try {
        const bookmarkedPostsInfo = await Promise.all(
          postInfos.map((post) =>
            BookmarkAxiosApi.isBookmarkAndFolderName(post.postId, token)
          )
        );

        const bookmarkedPosts = bookmarkedPostsInfo
          .map((info, index) =>
            info.data.isBookmarked ? postInfos[index].postId : null
          )
          .filter(Boolean);

        setBookmarkInfo(
          bookmarkedPostsInfo.reduce((acc, info, index) => {
            if (info.data.isBookmarked) {
              acc[postInfos[index].postId] = info.data.folderName;
            }
            return acc;
          }, {})
        );

        setBookmarked(bookmarkedPosts);
      } catch (error) {
        console.error(error);
      }
    };

    if (postInfos.length > 0) {
      getBookmarkedPosts();
    }
  }, [postInfos, token]);

  const handleClickPost = (postId) => {
    navigate(`/post/${postId}`);
  };

  // 차단 해제 관련 로직
  const deleteBlock = async (id, token) => {
    try {
      const response = await ReportAxiosApi.deleteBlockUser(id, token);
      console.log("🧢🧢 : " + response.data);
      if (response.data === true) {
        getPosts();
      }
    } catch (error) {
      console.error(error);
    }
  }
  const handleDeleteBlock = (id) => {
    deleteBlock(id, token);
  };
  const confirmDeleteBlock = () => {
    setShowPopUp(true);
  };
  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  return (
    <>
      {postInfos.length > 0 ? (
        postInfos.map((postInfo) =>
          postInfo.blocked ? (
            <Container key={postInfo.postId}>
              <BlockedContainer>
                <StyledBlockedPost>
                  <h1>✖︎ 차단한 사용자의 게시글입니다.</h1>
                </StyledBlockedPost>
                <button onClick={confirmDeleteBlock}>차단 해제</button>
                <UserPopUp
                  open={showPopUp}
                  confirm={() => handleDeleteBlock(postInfo.id)}
                  close={handleClosePopUp}
                  type="confirm"
                  header={"❗️"}
                  confirmText="확인"
                  closeText="취소"
                >
                  해당 사용자를 차단 해제 하시겠습니까?
                </UserPopUp>
              </BlockedContainer>
              <StyledThumbnail>
                <img src={blockImage} alt="차단 게시글 썸네일" />
              </StyledThumbnail>
            </Container>
          ) : (
            <Container key={postInfo.postId}>
              <PostHeader>
                <AuthorHeader>
                  <img
                    src={postInfo.pfImg}
                    alt="작성자 프로필"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                    }}
                  />
                  <AuthorInfo>
                    <h1>{postInfo.nickname}</h1>
                    <p>{postInfo.writeDate}</p>
                  </AuthorInfo>
                </AuthorHeader>
                {bookmarked.includes(postInfo.postId) ? (
                  <BookmarkIcon
                    sx={{ cursor: "pointer", color: "#FF62AD" }}
                    onClick={() => handleBookmark(postInfo.postId)}
                  />
                ) : (
                  <BookmarkBorderIcon
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      handleBookmark(postInfo.postId);
                      toggleModal();
                    }}
                  />
                )}
              </PostHeader>
              <BookmarkModal
                open={isModalOpen}
                handleClose={toggleModal}
                folders={folders}
                addFolder={handleAddFolder}
                postId={selectedPostId}
                handleBookmark={() => handleBookmark(postInfo.postId)}
              />
              <PostTitle onClick={() => handleClickPost(postInfo.postId)}>
                <h1>{postInfo.title}</h1>
                <p>{postInfo.district}</p>
              </PostTitle>
              <StyledThumbnail>
                {postInfo.thumbnail ? (
                  <img src={postInfo.thumbnail} alt="" />
                ) : (
                  <img src={noImage} alt="" />
                )}
              </StyledThumbnail>
            </Container>
          )
        )
      ) : (
        <p>게시글이 없습니다 ㅜㅜ </p>
      )}
    </>
  );
};

export default CityPost;
