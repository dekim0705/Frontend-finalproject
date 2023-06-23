import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProfileBar2 from './ProfileBar2';
import { PinReplyNav } from '../Navs';
import { StyledCheckbox, Button, TitleLink } from './PinListWeb';
import { RowWrapper, MapContainer, SelectAllButton } from './PinListMobile';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import UserAxiosApi from '../../../api/UserAxiosApi';
import Functions from '../../../util/Functions';

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
  const token = Functions.getAccessToken();

  const [replies, setReplies] = useState([]); // 회원의 모든 댓글
  const [selectedReplies, setSelectedReplies] = useState([]); // 선택되는 댓글
  const [selectAll, setSelectAll] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const totalPages = Math.ceil(replies.length / postsPerPage);
  const indexOfLastReply = currentPage * postsPerPage;
  const indexOfFirstReply = indexOfLastReply - postsPerPage;
  const currentReplies = replies.slice(indexOfFirstReply, indexOfLastReply);
  
  useEffect(() => {
    const getUserReplies = async () => {
      try {
        const response = await UserAxiosApi.userReplies(token);
        setReplies(response.data);
        console.log("🍒 UserReplies :", response);
      } catch (error) {
        await Functions.handleApiError(error);
        const newToken = Functions.getAccessToken();
        if (newToken !== token) {
          const response = await UserAxiosApi.userReplies(newToken);
          setReplies(response.data);
        }
      }
    };
    getUserReplies();
  }, [token])

  const handleDeleteBtn = async () => {
    try {
      const response = await UserAxiosApi.deleteReplies(selectedReplies, token);
      console.log('📌 삭제된 댓글번호:', response);

      setReplies((prevReplies) =>
      prevReplies.filter((reply) => !selectedReplies.includes(reply.replyNum))
      );
      setSelectedReplies([]); 
      setSelectAll(false);
    } catch (error) {
      await Functions.handleApiError(error);
      const newToken = Functions.getAccessToken();
      if (newToken !== token) {
        const response = await UserAxiosApi.userPosts(newToken);
        setReplies(response.data);
      }    
    }
  };

  const handleSelectAllChange = (event) => {
    const checked = event.target.checked;
    setSelectAll(checked);
    if (checked) {
      const allReplyNums = currentReplies.map((reply) => reply.replyNum);
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

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    navigate(`/mypage/replies/${newPage}`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
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
          <StyledP>{formatDate(reply.writeDate)}</StyledP>
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
    <Button onClick={handleDeleteBtn}>삭제</Button>
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
