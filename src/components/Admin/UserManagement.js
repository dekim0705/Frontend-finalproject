import { useState } from 'react';
import styled from 'styled-components';
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
  padding : 40px 20px 30px;
`;


const Table = styled.table`
  width: 100%;
  tbody :hover {
    background-color : #f5f5f5;
  }
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
      userNum: 1,
      nickname: "겨울잠자는중",
      email: "user1@naver.com",
      date: "2023/06/06",
      membership: "Y",
      block: ''
    },
    {
      userNum: 2,
      nickname: "자바광팬아님",
      email: "user2@naver.com",
      date: "2023/06/06",
      membership: "Y",
      block: '겨울잠자는중'
    },
    {
      userNum: 3,
      nickname: "짱구는못말려",
      email: "user3@naver.com",
      date: "2023/06/06",
      membership: "N",
      block: ''
    },
    {
      userNum: 4,
      nickname: "닉네임입니당",
      email: "user4@naver.com",
      date: "2023/06/06",
      membership: "N",
      block: '짱구는못말려'
    },
    {
      userNum: 5,
      nickname: "겨울잠자는중",
      email: "user5@naver.com",
      date: "2023/06/06",
      membership: "Y",
      block: ''
    },
  ];

  const [users] = useState(dummyData); 
  const [selectedPosts, setSelectedPosts] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSearch = () => {
    // 검색 기능 구현 로직
  };

  // 전체 선택 체크박스 변경 이벤트 핸들러
  const handleSelectAllChange = (event) => {
    const checked = event.target.checked;
    setSelectAll(checked);
    if (checked) {
      const allPostNums = users.map((user) => user.userNum);
      setSelectedPosts(allPostNums);
    } else {
      setSelectedPosts([]);
    }
  };

  const isUserSelected = (userNum) => {
    return selectedPosts.includes(userNum);
  };

  // 체크박스 선택 함수
  const handleCheckboxChange = (event, userNum) => {
    if (event.target.checked) {
      setSelectedPosts((prevSelected) => [...prevSelected, userNum]);
      console.log(selectedPosts);
    } else {
      setSelectedPosts((prevSelected) => prevSelected.filter((id) => id !== userNum));
    }
  };
  
  const handleDeleteUsers = () => {
    console.log('회원 삭제 ! ')
  };

  return (
    <>
      <Container>
        <Title>회원 관리</Title>
        <SearchContainer>
          <div className="wrapper">
            <input
              type="text"
              onKeyDown={handleSearch}
              placeholder="회원 닉네임"
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
              <th>회원번호</th>
              <th>닉네임</th>
              <th>이메일</th>
              <th>가입일자</th>
              <th>멤버십</th>
              <th>차단회원</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.userNum}>
                <td>
                <Checkbox
                checked={isUserSelected(user.userNum)}
                onChange={(event) => handleCheckboxChange(event, user.userNum)}
                 {...label} 
                 sx={{
                 color: pink[200],
                  '&.Mui-checked': {
                    color: pink[300],
                    },
                   }}
                   />
                </td>
                <td>{user.userNum}</td>
                <td>{user.nickname}</td>
                <td>{user.email}</td>
                <td>{user.date}</td>
                <td>{user.membership}</td>
                <td>{user.block}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button onClick={handleDeleteUsers}>
          삭제
        </Button>
      </Container>
    </>
  );
            };  

export default UserManagement;
