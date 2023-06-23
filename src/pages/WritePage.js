import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AppLayout from "../components/common/AppLayout";
import WriteForm from "../components/Write/WriteForm";
import RouteByKakao from "../components/Write/RouteByKakao";
import ContentField from "../components/Write/ContentField";
import PlaceTag from "../components/Write/PlaceTag";

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
  const [post, setPost] = useState({
    title: "",
    district: "",
    comments: ["", "", ""],
    region: "",
    course: "",
    theme: ""
  });
  const [comment1, setComment1] = useState("");
  const [comment2, setComment2] = useState("");
  const [comment3, setComment3] = useState("");
  // const [pins, setPins] = useState([]);

  const handleTitleChange = (e) => {
    setPost({ ...post, title: e.target.value });
  };
  const handleDistrictChange = (e) => {
    setPost({ ...post, district: e.target.value });
  };
  const handleComment1Change = (event) => {
    setPost({
      ...post,
      comments: [event.target.value, post.comments[1], post.comments[2]],
    });
  };
  const handleComment2Change = (event) => {
    setPost({
      ...post,
      comments: [post.comments[0], event.target.value, post.comments[2]],
    });
  };
  const handleComment3Change = (event) => {
    setPost({
      ...post,
      comments: [post.comments[0], post.comments[1], event.target.value],
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

  // 👞 테스트용!!!
  useEffect(() => {
    console.log("🍉 상세 지역 : " + post.theme);
  }, [post.theme]);

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
        <RouteByKakao />
        <ContentField />
        <PlaceTag />
        <StyledButton>등록</StyledButton>
      </AppLayout>
    </Container>
  );
};

export default WritePage;
