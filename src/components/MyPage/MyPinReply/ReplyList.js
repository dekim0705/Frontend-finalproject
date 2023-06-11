import { useState } from 'react';
import styled from 'styled-components';
import ProfileBar2 from './ProfileBar2';
import { PinReplyNav } from '../Navs';
import { StyledCheckbox, Button, TitleLink } from './PinListWeb';
import { RowWrapper, MapContainer, SelectAllButton } from './PinListMobile';

const ParentContainer = styled.div`
  width: 70%;
  margin: 1rem auto;
  .content_align, .author_date {
    margin-left: 3rem;
  }
  @media screen and (max-width: 768px) {
    width: 80%;  
    .author_date {
      display: none;
    }
  }
`;

const Content = styled.span`
  font-size: 0.8rem;
  color: var(--input-text-color);
`;

const StyledP = styled.span`
  font-size: 0.8rem;
  color: var(--text-color);
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
            <RowWrapper>
              <StyledCheckbox
                type="checkbox"
                checked={isReplySelected(reply.replyNum)}
                onChange={(event) => handleCheckboxChange(event, reply.replyNum)}
              />
              <TitleLink to={`/mypage`}>{reply.content}</TitleLink>
            </RowWrapper>
            <Content className='content_align'>원문제목: {reply.title}</Content>
            <RowWrapper className='author_date' gap='1rem'>
              <StyledP>자바광팬아님</StyledP>
              <StyledP>{reply.date}</StyledP>
            </RowWrapper>
            </MapContainer>
        </div>
      ))}
      <RowWrapper gap="1rem">
        <SelectAllButton>
          <StyledCheckbox
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAllChange}
          />
          <p>전체선택</p>
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
