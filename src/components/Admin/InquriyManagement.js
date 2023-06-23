import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox'; 
import { pink } from '@mui/material/colors';
import Functions from "../../util/Functions";
import AdminAxiosApi from '../../api/AdminAxiosApi';


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
  th,
  td {
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
const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 55%;
  transform: translate(-50%, -50%);
  width: 40%;
  background-color: white;
  padding: 20px;
  border: 1px solid gray;
  border-radius: 10px;
`;


const PopupContent = styled.p`
  margin-bottom: 30px;
`;

const TextBox = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid var(--line-color);
  border-radius: 4px;
  font-size: 0.9rem;
`;

const Email = styled.div`
  width: 100%;
  height: 30px;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid var(--line-color);
  border-radius: 4px;
  font-size: 0.9rem;
`;

const PopupCloseButton = styled.button`
  padding: 5px 10px;
  background-color: var(--point-color);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const PopupTitle = styled.p`
  margin-bottom: 10px;
  font-size: 0.9rem;
`;

const StatusBadge = styled.div`
  display: inline-block;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #fff;
  background-color: ${({ status }) => (status === '대기' ? 'var(--line-color)' : 'var(--point-color)')};
  color: ${({ status }) => (status === '대기' ? 'var(--text-color)' : '#fff')};
  font-weight: ${({ status }) => (status === '대기' ? '' : 'bold')};
`;


const InquiryManagement = () => {
  const [inquiries, setInquiries] = useState([]);
  const [selectedInquiry, setSelectedInquiry] = useState([]); 
  const [selectAll, setSelectAll] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [Details, setDetails] = useState(null);
  const token = localStorage.getItem("accessToken");


  useEffect(() => {
    const getInquiries = async () => {
      try {
        const response = await AdminAxiosApi.getAllinquiries(token);
        setInquiries(response.data);
      } catch (error) {
        await Functions.handleApiError(error);
        const newToken = Functions.getAccessToken();
        if (newToken !== token) {
          const response = await AdminAxiosApi.getAllinquiries(newToken);
          setInquiries(response.data);
      }
    }
  };
    getInquiries();
  }, [token]);

  const handleSelectAllChange = (event) => {
    const checked = event.target.checked;
    setSelectAll(checked);
    if (checked) {
      const allinqiriesNum = inquiries.map((inquiry) => inquiry.inquiryNum);
      setSelectedInquiry(allinqiriesNum);
    } else {
      setSelectedInquiry([]);
    }
  };

  const isPostSelected = (inquiryNum) => {
    return selectedInquiry.includes(inquiryNum);
  };


  const handleCheckboxChange = (event, inquiryNum) => {
    if (event.target.checked) {
      setSelectedInquiry((prevSelected) => [...prevSelected, inquiryNum]);
      console.log(selectedInquiry);
    } else {
      setSelectedInquiry((prevSelected) => prevSelected.filter((id) => id !== inquiryNum));
    }
  };
  
  const handleConfirm = () => {
    const updatedInquiries = inquiries.map((inquiry) => {
      if (selectedInquiry.includes(inquiry.inquiryNum)) {
        return { ...inquiry, inquiryStatus: '완료' };
      }
      return inquiry;
    });
  
    setInquiries(updatedInquiries);
    setSelectedInquiry([]);
  };

  const handleInquiryContentClick = (inquiry) => {
    setDetails(inquiry);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setDetails(null);
  };

  return (
    <>
      <Container>
        <Title>문의 관리</Title>
        <Table>
          <thead>
            <tr>
              <th>
                <Checkbox
                  checked={selectAll}
                  onChange={handleSelectAllChange}
                  {...label} 
                  sx={{
                  color: pink[300],
                   '&.Mui-checked': {
                     color: pink[300],
                     },
                    }}
                />
              </th>
              <th>문의 번호</th>
              <th>문의 내용</th>
              <th>문의자</th>
              <th>문의일</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((inquiry) => (
              <tr key={inquiry.inquiryNum}>
                <td>
                <Checkbox
                checked={isPostSelected(inquiry.inquiryNum)}
                onChange={(event) => handleCheckboxChange(event, inquiry.inquiryNum)}
                 {...label} 
                 sx={{
                 color: pink[300],
                  '&.Mui-checked': {
                    color: pink[300],
                    },
                   }}
                   />
                </td>
                <td>{inquiry.inquiryNum}</td>
                <td onClick={() => handleInquiryContentClick(inquiry)} style={{ cursor: 'pointer' }}>
                {inquiry.inquiryContent.length > 15 ? `${inquiry.inquiryContent.substring(0, 16)}···` : inquiry.inquiryContent} 
               </td>
                <td>{inquiry.nickname}</td>
                <td>{inquiry.inquiryDate}</td>
                <td>
               <div> <StatusBadge status={inquiry.inquiryStatus}> {inquiry.inquiryStatus} </StatusBadge> </div>
              </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button onClick={handleConfirm}>
          확인
        </Button>
      </Container>
      {popupVisible && (
        <PopupContainer>
          {Details && (
            <>
              <PopupContent>
                <PopupTitle>문의 내용</PopupTitle>
                <TextBox readOnly value={Details.inquiryContent} />
              </PopupContent>
              <PopupContent>
                <PopupTitle>회원 이메일</PopupTitle>
                <Email>{Details.email}</Email>
              </PopupContent>
            </>
          )}
          <PopupCloseButton onClick={closePopup}>닫기</PopupCloseButton>
        </PopupContainer>
      )}
    </>
  );
};


export default InquiryManagement;
