import React, { useState } from "react";
import '../../reactTags.css';
import { WithContext as ReactTags } from 'react-tag-input';
import { Container } from "../../util/WriteFormStyle";

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const PlaceTag = ({ onTagUpdate }) => {
  const [tags, setTags] = useState([]);

  const handleDelete = i => {
    const newTags = tags.filter((tag, index) => index !== i);
    setTags(newTags);
    onTagUpdate(newTags);
  };

  const handleAddition = tag => {
    const newTags = [...tags, tag];
    setTags(newTags);
    onTagUpdate(newTags);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    setTags(newTags);
    onTagUpdate(newTags);
  };

  return (
    <Container>
      <h1>📌 데이트 장소명</h1>
      <p>경로로 설정한 곳의 <span>장소명</span>을 <span>경로 순서대로</span> 입력해주세요.</p>
      <ReactTags
        tags={tags}
        delimiters={delimiters}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        handleDrag={handleDrag}
        autofocus={true}
        inputFieldPosition="inline"
        placeholder="작성하신 후 엔터 눌러주세요😊"
        autocomplete
      />
    </Container>
  );
}

export default PlaceTag;