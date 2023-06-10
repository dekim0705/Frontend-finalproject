import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RowWrapper } from '../../Join/Wrappers';
import { Button } from'./PinList';
import ProfileBar2 from '../ProfileBar2';
import { PinReplyNav } from '../Navs';

const ParentContainer = styled.div`
  margin: 20px auto;
`;

const MapContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid var(--line-color);
  padding: 10px 0;
  gap: 10px;
  margin: 0 auto;
`;

const TitleLink = styled(Link)`
  margin-left: 1.8rem;
  text-decoration: none;
  color: var(--text-color);
  &:hover {
    text-decoration: underline;
  }
`;

const Content = styled.p`
  margin-left: 1.8rem;
  font-size: 0.9rem;
  color: var(--input-text-color);
`;

const Author = styled.p`
  font-size: 0.9rem;
  color: var(--text-color);
  font-weight: bold;
  margin-left: 0.4rem;
  padding-right: 0.4rem;
`;

const Date = styled.p`
  font-size: 0.8rem;
`;

const Checkbox = styled.input`
  margin-bottom: -2px;
  appearance: none;
  width: 15px;
  height: 15px;
  border: 1px solid var(--point-color);
  border-radius: 2px;
  outline: none;
  transition: border-color 0.4s ease-in-out;
  &:checked {
    background-color: var(--point-color);
  }
`;

const SelectAllButton = styled.button`
  margin: 10px 0 0 -8px;
  align-self: flex-start;
  line-height: 1.4rem;
  background-color: var(--line-color);
  border: 1px solid var(--hover-color);
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: var(--hover-color);
  }
`;

const ReplyList = () => {

  const dummyData = [
    {
      replyNum: 1,
      title: "한옥마을 데이트 좋은 것 같아요~",
      content: "한복 대여해주는 곳 많나요?",
      date: "23.06.06",
    },
    {
      replyNum: 2,
      title: "부산으로 당일치기 데이트 왔어요 >< ",
      content: "제가 부산에 갔을때는 말이죠, 기러기가 제 새우깡을 먹어서 너무 놀랐던 기억이있는데요 어쩌구~ 부산 회 맛있죠~ 기러기 무서워요! ",
      date: "23.06.06",
    },
    {
      replyNum: 3,
      title: "데이트하다가 맞짱떴네요",
      content: "대화로 풀어보세요 ㅠㅠ",
      date: "23.06.06",
    },
    {
      replyNum: 4,
      title: "한옥마을 데이트 좋은 것 같아요~",
      content: "한복 대여해주는 곳 많나요?",
      date: "23.06.06",
    },
    {
      replyNum: 5,
      title: "부산으로 당일치기 데이트 왔어요 >< ",
      content: "부산갈매기",
      date: "23.06.06",
    },
  ];

  // const [userReplies, setUserReplies] = useState(dummyData); // 회원의 모든 댓글
  const [userReplies] = useState(dummyData); // 회원의 모든 댓글
  const [selectedReplies, setSelectedReplies] = useState([]); // 선택되는 댓글
  const [selectAll, setSelectAll] = useState(false);

// 전체 선택 체크박스 변경 이벤트 핸들러
  const handleSelectAllChange = (event) => {
    const checked = event.target.checked;
    setSelectAll(checked);
    if (checked) {
      const allReplyNums = userReplies.map((reply) => reply.replyNum);
      setSelectedReplies(allReplyNums);
    } else {
      setSelectedReplies([]);
    }
  };

// 댓글 선택 여부
  const isReplySelected = (replyNum) => {
    return selectedReplies.includes(replyNum);
  };

  // 체크박스 선택 함수
  const handleCheckboxChange = (event, replyNum) => {
    if (event.target.checked) {
      setSelectedReplies((prevSelected) => [...prevSelected, replyNum]);
      console.log(selectedReplies);
    } else {
      setSelectedReplies((prevSelected) => prevSelected.filter((id) => id !== replyNum));
    }
  };

  const handleDeleteReplies = () => {
    console.log('댓글 삭제 ! ')
  };

  return (
    <>
    <ProfileBar2 />
    <PinReplyNav />
    <ParentContainer>
      {userReplies.map((reply) => (
        <div key={reply.replyNum}>
          <MapContainer>
            <RowWrapper alignItems="start" margin="0">
              <Checkbox
                type="checkbox"
                checked={isReplySelected(reply.replyNum)}
                onChange={(event) => handleCheckboxChange(event, reply.replyNum)}
              />
              <Author>자바광팬아님</Author>
              <Date> {reply.date}</Date>
            </RowWrapper>
            <TitleLink to={`/mypage`}>{reply.content}</TitleLink>
            <Content>원문제목: {reply.title}</Content>
            </MapContainer>
        </div>
      ))}
      <RowWrapper margin="0">
        <SelectAllButton>
          <Checkbox
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAllChange}
          />
          전체선택
        </SelectAllButton>
        <Button onClick={handleDeleteReplies}>
          삭제
        </Button>
      </RowWrapper>
    </ParentContainer>
    </>

  );
};

export default ReplyList;
