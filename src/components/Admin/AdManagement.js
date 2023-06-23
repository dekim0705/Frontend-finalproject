import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox'; 
import { pink } from '@mui/material/colors';
import AdPopup from './AdPopUp';
import AdminAxiosApi from '../../api/AdminAxiosApi';
import Functions from "../../util/Functions";


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
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  margin-left: 10px;
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
  const [ads, setAds] = useState([]);
  const [selectedAds, setSelectedAds] = useState([]); 
  const [selectAll, setSelectAll] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const getAds = async () => {
      try {
        const response = await AdminAxiosApi.getAllAds(token);
        setAds(response.data);
      } catch (error) {
        await Functions.handleApiError(error);
        const newToken = Functions.getAccessToken();
        if (newToken !== token) {
          const response = await AdminAxiosApi.getAllAds(newToken);
          setAds(response.data);
        }
      }
    };
    getAds();
  }, [token]);

  const handleSelectAllChange = (event) => {
    const checked = event.target.checked;
    setSelectAll(checked);
    if (checked) {
      const allAdNums = ads.map((ad) => ad.adNum);
      setSelectedAds(allAdNums);
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
  
  const handleDeleteAd = async() => {
    try {
      if (selectedAds.length === 0) {
        return;
      }
      await AdminAxiosApi.deleteAds(selectedAds, token);
      setSelectedAds([]);

      const newToken = Functions.getAccessToken();
      const newResponse = await AdminAxiosApi.getAllAds(newToken);
      setAds(newResponse.data);
      alert('광고가 삭제되었습니다.');
    } catch (error) {
      await Functions.handleApiError(error);
    }
  };
  
  const handleAddAd = (name) => {
    console.log('광고 추가:', name);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

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
            {ads.map((ad) => (
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
                <td>{ad.name}</td>
                <td>{ad.imgUrl}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ButtonContainer>
        <Button onClick={handleAddAd}>추가</Button>
        <Button onClick={handleDeleteAd}>삭제</Button>
      </ButtonContainer>
      </Container>
       {showPopup && <AdPopup onAddAd={handleAddAd} onClosePopup={handleClosePopup} />}
    </>
  );
};  

export default AdManagement;

