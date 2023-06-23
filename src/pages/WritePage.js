import React, { useState } from "react";
import styled from "styled-components";
import AppLayout from "../components/common/AppLayout";
import WriteForm from "../components/Write/WriteForm";
import RouteByKakao from "../components/Write/RouteByKakao";
import ContentField from "../components/Write/ContentField";
import PlaceTag from "../components/Write/PlaceTag";
import PostAxiosApi from "../api/PostAxiosApi";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--text-color);
`;

const StyledButton = styled.button`
  align-self: flex-end;
  margin-right: 50px;
  width: 150px;
  height: 50px;
  border: none;
  background-color: var(--input-text-color);
  color: #fff;
  font-weight: 900;
  font-size: 1.4em;
  opacity: 50%;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: var(--point-color);
    opacity: 100%;
  }
`;

const WritePage = () => {
  const token = localStorage.getItem('accessToken');
  const [post, setPost] = useState({
    title: "",
    region: "",
    course: "",
    theme: "",
    district: "",
    comment: ["", "", ""],
    placeTag: [],
    content: "",
    imgUrl: "https://firebasestorage.googleapis.com/v0/b/todaysdate-final-project.appspot.com/o/images%2F%E1%84%91%E1%85%B5%E1%86%AB1.jpeg?alt=media"
  });
  // const [comment1, setComment1] = useState("");
  // const [comment2, setComment2] = useState("");
  // const [comment3, setComment3] = useState("");
  const [pins, setPins] = useState([]);

  const handleTitleChange = (e) => {
    setPost({ ...post, title: e.target.value });
  };
  const handleDistrictChange = (e) => {
    setPost({ ...post, district: e.target.value });
  };
  const handleComment1Change = (event) => {
    setPost({
      ...post,
      comment: [event.target.value, post.comment[1], post.comment[2]],
    });
  };
  const handleComment2Change = (event) => {
    setPost({
      ...post,
      comment: [post.comment[0], event.target.value, post.comment[2]],
    });
  };
  const handleComment3Change = (event) => {
    setPost({
      ...post,
      comment: [post.comment[0], post.comment[1], event.target.value],
    });
  };
  const handleRegionChange = (e) => {
    setPost({ ...post, region: e.target.value });
  };
  const handleScheduleChange = (e) => {
    setPost({ ...post, course: e.target.value });
  };
  const handleThemeChange = (e) => {
    setPost({ ...post, theme: e.target.value });
  };
  const handleContentChange = (e) => {
    setPost({ ...post, content: e.target.value });
  };
  const handleTagUpdate = (newTags) => {
    setPost({ ...post, placeTag: newTags });
  };

  // 👞 테스트용!!!
  // useEffect(() => {
  //   console.log("🍉 상세 지역 :");
  //   pins.map((pin) => console.log(pin));
  // }, [pins]);

  // useEffect(() => {
  //   console.log("🦜 : " + JSON.stringify(post.placeTag));
  // }, [post.placeTag]);

  const handleClick = async () => {
    try {
      const postPinDto = {
        post,
        pins
      };
      const response = await PostAxiosApi.createPost(postPinDto, token);
      console.log("🔴 제발 .. : " + response);
    } catch (error) {
      console.error("🔴 : " + JSON.stringify(error.response.data));
    }
  };

  return (
    <Container>
      <AppLayout>
        <WriteForm
          onTitleChange={handleTitleChange}
          onDistrictChange={handleDistrictChange}
          onComment1Change={handleComment1Change}
          onComment2Change={handleComment2Change}
          onComment3Change={handleComment3Change}
          onRegionChange={handleRegionChange}
          onScheduleChange={handleScheduleChange}
          onThemeChange={handleThemeChange}
        />
        <RouteByKakao setPins={setPins} />
        <ContentField onContentChange={handleContentChange} />
        <PlaceTag onTagUpdate={handleTagUpdate} />
        <StyledButton onClick={handleClick}>등록</StyledButton>
      </AppLayout>
    </Container>
  );
};

export default WritePage;
