import { useState } from 'react';
import styled from 'styled-components';
import ProfileBar2 from './ProfileBar2';
import { PinReplyNav } from '../Navs';
import { StyledCheckbox, Button, TitleLink } from './PinListWeb';
import { RowWrapper, MapContainer, SelectAllButton } from './PinListMobile';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';

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
  const navigate = useNavigate();

  const dummyData = [];
  for (let i = 1; i <= 53; i++) {
    dummyData.push({
      replyNum: i,
      title: `댓글 제목 ${i}`,
      content: `댓글 내용 ${i}`,
      nickname: '자바광팬아님',
      date: "23.06.06",
    });
  }

  // const [userReplies, setUserReplies] = useState(dummyData); // 회원의 모든 댓글
  const [userReplies] = useState(dummyData); // 회원의 모든 댓글
  const [selectedReplies, setSelectedReplies] = useState([]); // 선택되는 댓글
  const [selectAll, setSelectAll] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const totalPages = Math.ceil(userReplies.length / postsPerPage);
  const indexOfLastReply = currentPage * postsPerPage;
  const indexOfFirstReply = indexOfLastReply - postsPerPage;
  const currentReplies = userReplies.slice(indexOfFirstReply, indexOfLastReply);
  
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

  const isReplySelected = (replyNum) => {
    return selectedReplies.includes(replyNum);
  };

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

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    navigate(`/mypage/replies/${newPage}`);
  };

  return (
    <>
    <ProfileBar2 />
    <PinReplyNav />
    <ParentContainer>
  {currentReplies.map((reply) => (
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
          <StyledP>{reply.nickname}</StyledP>
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
    <Button onClick={handleDeleteReplies}>삭제</Button>
  </RowWrapper>
  <Pagination
    currentPage={currentPage}
    totalPages={totalPages}
    onPageChange={handlePageChange}
    maxPageNumbers={5}
  />
</ParentContainer>
  </>
  );
};

export default ReplyList;
