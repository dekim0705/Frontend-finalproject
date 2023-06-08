import { useState } from 'react';
import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox'; 
import { pink } from '@mui/material/colors';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 60px 0px;
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
    padding: 1px;
    border-bottom: 1px solid var(--line-color);
    text-align: center;
  }
  th {
    font-weight: bold;
    /* background-color: #FFA8D2;  */
  }
`;

const ButtonContainer = styled.div`
  display: flex;
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


const AdManagement = () => {
  

  const dummyData = [
    {
      adNum: 1,
      nickname: "광고이름",
      email: "광고이미지url",
    },
    {
      adNum: 2,
      nickname: "광고이름2",
      email: "광고이미지url",
    },
    {
      adNum: 3,
      nickname: "광고이름3",
      email: "광고이미지url",
    },
  ];

  const [userPosts] = useState(dummyData); 
  const [selectedAds, setSelectedAds] = useState([]); 
  const [selectAll, setSelectAll] = useState(false);


  const handleSelectAllChange = (event) => {
    const checked = event.target.checked;
    setSelectAll(checked);
    if (checked) {
      const allPostNums = userPosts.map((ad) => ad.adNum);
      setSelectedAds(allPostNums);
    } else {
      setSelectedAds([]);
    }
  };

  
  const isPostSelected = (adNum) => {
    return selectedAds.includes(adNum);
  };


  const handleCheckboxChange = (event, adNum) => {
    if (event.target.checked) {
      setSelectedAds((prevSelected) => [...prevSelected, adNum]);
      console.log(selectedAds);
    } else {
      setSelectedAds((prevSelected) => prevSelected.filter((id) => id !== adNum));
    }
  };
  
  const handleDeleteAd = () => {
    console.log('광고 삭제 ! ')
  };
  
  const handleAddAd = () => {
    console.log('광고 추가')
  }

  return (
    <>
      <Container>
        <Title>광고 관리</Title>
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
              <th>광고번호</th>
              <th>광고이름</th>
              <th>광고이미지</th>
            </tr>
          </thead>
          <tbody>
            {userPosts.map((ad) => (
              <tr key={ad.adNum}>
                <td>
                <Checkbox
                checked={isPostSelected(ad.adNum)}
                onChange={(event) => handleCheckboxChange(event, ad.adNum)}
                 {...label} 
                 sx={{
                 color: pink[200],
                  '&.Mui-checked': {
                    color: pink[300],
                    },
                   }}
                   />
                </td>
                <td>{ad.adNum}</td>
                <td>{ad.nickname}</td>
                <td>{ad.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ButtonContainer>
        <Button onClick={handleAddAd}>추가</Button>
        <Button onClick={handleDeleteAd}>삭제</Button>
      </ButtonContainer>
      </Container>
    </>
  );
};  

export default AdManagement;

