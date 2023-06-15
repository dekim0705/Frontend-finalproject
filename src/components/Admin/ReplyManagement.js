import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Box from '@mui/system/Box';
import SearchIcon from '@mui/icons-material/Search';
import Checkbox from '@mui/material/Checkbox'; 
import { pink } from '@mui/material/colors';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 60px 0px;
`;

const SearchContainer = styled.div`
  padding : 10px;
  margin-bottom: 20px;

  input {
    border: none;
    height: 40px;
    background-color: #fff;
    border: 1px solid var(--point-color);
    border-radius: 4px;
    padding: 15px 10px;
    width: 22%;
    margin-right: 4px;
  }
  .wrapper {
    display: flex;
    align-items: center;
  }
  `;

const Title = styled.h1`
  font-size: 1.6rem;
  padding : 40px 20px 30px;
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  color: var(--text-color);
  font-weight: normal;
  &:hover {
    text-decoration: underline;
  }
`;


const Table = styled.table`
  width: 100%;
  tbody :hover {
    background-color : #f5f5f5;
  }
  th,td {
    padding: 1px;
    border-bottom: 1px solid var(--line-color);
    text-align: center;
  }
  th {
    font-weight: bold;
    padding: 2px;
  }
`;


  const Button = styled.button`
  margin: 10px 0 0 10px;
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


const ReplyManagement = () => {
  

  const dummyData = [
    {
      replyNum: 1,
      nickname: "겨울잠자는중",
      content: "재밌었어요! 추천합니다~",
      date: "2023/06/06",
    },
    {
      replyNum: 2,
      nickname: "겨울잠자는중",
      content: "댓글 내용 블라블라",
      date: "2023/06/06",
    },
    {
      replyNum: 3,
      nickname: "겨울잠자는중",
      content: "댓글 내용 블라블라~",
      date: "2023/06/06",
    },
    {
      replyNum: 4,
      nickname: "겨울잠자는중",
      content: "댓글 내용 블라블라~",
      date: "2023/06/06",
    },

  ];

  const [replies] = useState(dummyData); 
  const [selectedreplies, setSelectedReplies] = useState([]); 
  const [selectAll, setSelectAll] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearch = () => {
    // 검색 기능 구현 예정
  };

 
  const handleSelectAllChange = (event) => {
    const checked = event.target.checked;
    setSelectAll(checked);
    if (checked) {
      const allReply = replies.map((reply) => reply.replyNum);
      setSelectedReplies(allReply);
    } else {
      setSelectedReplies([]);
    }
  };

  const isReplieSelected = (replyNum) => {
    return selectedreplies.includes(replyNum);
  };

  // 체크박스 선택 함수
  const handleCheckboxChange = (event, replyNum) => {
    if (event.target.checked) {
      setSelectedReplies((prevSelected) => [...prevSelected, replyNum]);
      console.log(selectedreplies);
    } else {
      setSelectedReplies((prevSelected) => prevSelected.filter((id) => id !== replyNum));
    }
  };
  
  const handleDeletePosts = () => {
    console.log('댓글 삭제 ! ')
  };

  return (
    <>
      <Container>
        <Title>댓글 관리</Title>
        <SearchContainer>
          <div className="wrapper">
            <input
              type="text"
              onKeyDown={handleSearch}
              placeholder="댓글 내용 / 작성자"
            />
            <Box sx={{ backgroundColor: '#FF62AD', borderRadius: '15%', padding: '3px' }}>
              <SearchIcon sx={{ color: '#FFFFFF', fontSize: 30 }} />
            </Box>
          </div>
        </SearchContainer>
        <Table>
          <thead>
            <tr>
              <th>
                <Checkbox
                  checked={selectAll}
                  onChange={handleSelectAllChange}
                  {...label} 
                  sx={{
                  color: pink[200],
                   '&.Mui-checked': {
                     color: pink[300],
                     },
                    }}
                />
              </th>
              <th>댓글 번호</th>
              <th>댓글 내용</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {replies.map((post) => (
              <tr key={post.replyNum}>
                <td>
                <Checkbox
                checked={isReplieSelected(post.replyNum)}
                onChange={(event) => handleCheckboxChange(event, post.replyNum)}
                 {...label} 
                 sx={{
                 color: pink[200],
                  '&.Mui-checked': {
                    color: pink[300],
                    },
                   }}
                   />
                </td>
                <td>{post.replyNum}</td>
                <td>
                <TitleLink >
                      {post.content}
                </TitleLink>
                </td>
                <td>{post.nickname}</td>
                <td>{post.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button onClick={handleDeletePosts}>
          삭제
        </Button>
      </Container>
    </>
  );
};  

export default ReplyManagement;
