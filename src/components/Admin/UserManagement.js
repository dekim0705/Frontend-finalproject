import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Box from '@mui/system/Box';
import SearchIcon from '@mui/icons-material/Search';
import Checkbox from '@mui/material/Checkbox'; 
import { pink } from '@mui/material/colors';
import AdminAxiosApi from '../../api/AdminAxiosApi';
import Functions from "../../util/Functions";


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
    const [users, setUsers] = useState([]);
    const [selectedPosts, setSelectedPosts] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await AdminAxiosApi.getAllUsers(token);
        setUsers(response.data);
      } catch (error) {
        await Functions.handleApiError(error);
        const newToken = Functions.getAccessToken();
        if (newToken !== token) {
          const response = await AdminAxiosApi.getAllUsers(newToken);
          setUsers(response.data);
          console.log('회원가져오기 실패',error);
      }
    }
  };
    getUsers();
  }, [token]);

  const handleSearch = () => {
    // 검색 기능 구현 로직
  };

  // 전체 선택 체크박스 변경 이벤트 핸들러
  const handleSelectAllChange = (event) => {
    const checked = event.target.checked;
    setSelectAll(checked);
    if (checked) {
      const allPostNums = users.map((user) => user.id);
      setSelectedPosts(allPostNums);
    } else {
      setSelectedPosts([]);
    }
  };

  const isUserSelected = (id) => {
    return selectedPosts.includes(id);
  };

  // 체크박스 선택 함수
  const handleCheckboxChange = (event, id) => {
    if (event.target.checked) {
      setSelectedPosts((prevSelected) => [...prevSelected, id]);
      console.log(selectedPosts);
    } else {
      setSelectedPosts((prevSelected) => prevSelected.filter((id) => id !== id));
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
              <tr key={user.id}>
                <td>
                <Checkbox
                checked={isUserSelected(user.id)}
                onChange={(event) => handleCheckboxChange(event, user.id)}
                 {...label} 
                 sx={{
                 color: pink[200],
                  '&.Mui-checked': {
                    color: pink[300],
                    },
                   }}
                   />
                </td>
                <td>{user.id}</td>
                <td>{user.nickname}</td>
                <td>{user.email}</td>
                <td>{user.regDate}</td>
                <td>{user.isMembership}</td>
                <td>{user.blockedNickname}</td>
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
