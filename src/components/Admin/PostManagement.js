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
  @media screen and (max-width:768px) {
    input {
      width: 100%;
    }
  }
  `;

const Title = styled.h1`
  font-size: 1.6rem;
  padding : 40px 20px 10px;
  margin-bottom: 20px;
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  color: var(--text-color);
  font-weight: normal;
`;

const Table = styled.table`
  width: 100%;
  /* tbody :hover {
    background-color : #f5f5f5;
  } */
  th,td {
    padding: 2px;
    border-bottom: 1px solid var(--line-color);
    text-align: center;
  }
  th {
    font-weight: bold;
    /* background-color: #FFA8D2;  */
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


const UserManagement = () => {
  

  const dummyData = [
    {
      postNum: 1,
      nickname: "겨울잠자는중",
      title: "한옥마을에서 한복 입고 데이트~",
      date: "2023/06/06",
    },
    {
      postNum: 2,
      nickname: "겨울잠자는중",
      title: "한옥마을에서 한복 입고 데이트~",
      date: "2023/06/06",
    },
    {
      postNum: 3,
      nickname: "겨울잠자는중",
      title: "한옥마을에서 한복 입고 데이트~",
      date: "2023/06/06",
    },
    {
      postNum: 4,
      nickname: "겨울잠자는중",
      title: "한옥마을에서 한복 입고 데이트~",
      date: "2023/06/06",
    },
    {
      postNum: 5,
      nickname: "겨울잠자는중",
      title: "한옥마을에서 한복 입고 데이트~",
      date: "2023/06/06",
    },
  ];

  const [userPosts] = useState(dummyData); // 회원의 모든 게시글
  const [selectedPosts, setSelectedPosts] = useState([]); // 선택되는 게시글
  const [selectAll, setSelectAll] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearch = () => {
    // 검색 기능 구현 예정
  };

  // 전체 선택 체크박스 변경 이벤트 핸들러
  const handleSelectAllChange = (event) => {
    const checked = event.target.checked;
    setSelectAll(checked);
    if (checked) {
      const allPostNums = userPosts.map((post) => post.postNum);
      setSelectedPosts(allPostNums);
    } else {
      setSelectedPosts([]);
    }
  };

  // 게시글 선택 여부
  const isPostSelected = (postNum) => {
    return selectedPosts.includes(postNum);
  };

  // 체크박스 선택 함수
  const handleCheckboxChange = (event, postNum) => {
    if (event.target.checked) {
      setSelectedPosts((prevSelected) => [...prevSelected, postNum]);
      console.log(selectedPosts);
    } else {
      setSelectedPosts((prevSelected) => prevSelected.filter((id) => id !== postNum));
    }
  };
  
  const handleDeletePosts = () => {
    console.log('핀 삭제 ! ')
  };

  return (
    <>
      <Container>
        <Title>게시글 관리</Title>
        <SearchContainer>
          <div className="wrapper">
            <input
              type="text"
              onKeyDown={handleSearch}
              placeholder="글 제목 / 작성자 "
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
              <th>글 번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {userPosts.map((post) => (
              <tr key={post.postNum}>
                <td>
                <Checkbox
                checked={isPostSelected(post.postNum)}
                onChange={(event) => handleCheckboxChange(event, post.postNum)}
                 {...label} 
                 sx={{
                 color: pink[200],
                  '&.Mui-checked': {
                    color: pink[300],
                    },
                   }}
                   />
                </td>
                <td>{post.postNum}</td>
                <td>
                <TitleLink >
                      {post.title}
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

export default UserManagement;
