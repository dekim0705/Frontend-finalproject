import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MapContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  color: var(--text-color);
  font-weight: normal;
  &:hover {
    text-decoration: underline;
  }
`;

const Checkbox = styled.input`
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

const Table = styled.table`
  width: 100%;
  th, td {
    padding: 10px;
    border-bottom: 1px solid var(--line-color);
    text-align: center;
  }
  th {
    font-weight: bold;
  }
`;

export const Button = styled.button`
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

const PinList = () => {

  const dummyData = [
    {
      postNum: 1,
      title: "한옥마을에서 한복 입고 데이트~",
      content: "저는 개나리색 한복을 입었는데 너무 화사하구 정말 예쁘더라구요!",
      date: "2023.06.06",
      view: "100"
    },
    {
      postNum: 2,
      title: "한옥마을에서 한복 입고 데이트~",
      content: "저는 개나리색 한복을 입었는데 너무 화사하구 정말 예쁘더라구요!",
      date: "2023.06.06",
      view: "123"
    },
    {
      postNum: 3,
      title: "한옥마을에서 한복 입고 데이트~",
      content: "저는 개나리색 한복을 입었는데 너무 화사하구 정말 예쁘더라구요!",
      date: "2023.06.06",
      view: "123"
    },
    {
      postNum: 4,
      title: "한옥마을에서 한복 입고 데이트~",
      content: "저는 개나리색 한복을 입었는데 너무 화사하구 정말 예쁘더라구요!",
      date: "2023.06.06",
      view: "123"
    },
    {
      postNum: 5,
      title: "한옥마을에서 한복 입고 데이트~",
      content: "저는 개나리색 한복을 입었는데 너무 화사하구 정말 예쁘더라구요!",
      date: "2023.06.06",
      view: "123"
    },
  ];

  // const [userPosts, setUserPosts] = useState(dummyData); // 회원의 모든 게시글
  const [userPosts] = useState(dummyData); // 회원의 모든 게시글
  const [selectedPosts, setSelectedPosts] = useState([]); // 선택되는 게시글
  const [selectAll, setSelectAll] = useState(false);

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
      <MapContainer>
          <Table>
            <thead>
              <tr>
                <th>
                  <Checkbox
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAllChange}
                  />
                </th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>조회수</th>
              </tr>
            </thead>
            <tbody>
              {userPosts.map((post) => (
                <tr key={post.postNum}>
                  <td>
                    <Checkbox
                      type="checkbox"
                      checked={isPostSelected(post.postNum)}
                      onChange={(event) => handleCheckboxChange(event, post.postNum)}
                    />
                  </td>
                  <td>
                    <TitleLink className="ellipsis" to={`/mypage`}>
                      {post.title}
                    </TitleLink>
                  </td>
                  <td>자바광팬아님</td>
                  <td>{post.date}</td>
                  <td>{post.view}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        <Button onClick={handleDeletePosts}>
          삭제
        </Button>
      </MapContainer>
    </>
  );
};

export default PinList;
