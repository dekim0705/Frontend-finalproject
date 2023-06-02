import React, { useState } from "react";
import '../../reactTags.css';
import { WithContext as ReactTags } from 'react-tag-input';
import { Container } from "../../util/WriteFormStyle";

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const PlaceTag = () => {
  const [tags, setTags] = useState([]);

  const handleDelete = i => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = tag => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    setTags(newTags);
  };

  return (
    <Container>
      <h1>📌 데이트 장소명</h1>
      <p>장소별 <span>공백을 기준</span>으로 작성해주세요.</p>
      <p>최대 <span>10개</span>까지 가능합니다.</p>
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