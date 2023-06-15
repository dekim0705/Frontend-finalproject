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
  const dummyData = [
    {
      inquiryNum: 1,
      content: "문의합니다!! 안녕하세요 ~~~~ 이거 어떻게하는거죵???????? 너무어렵네요.. 관리자님.. 도와주세요 ㅜ-ㅜ",
      nickname: "겨울잠자는중",
      date: "2023/06/06",
      email: "user1@gmail.com",
      status: "대기"
    },
    {
      inquiryNum: 2,
      content: "문의합니다.이거 어떻게하는거죵???????? 너무어렵네요.. 관리자님.. 도와주세요 ㅜ-ㅜ이거 어떻게하는거죵???????? 너무어렵네요.. 관리자님.. 도와주세요 ㅜ-ㅜ",
      nickname: "리액트흑흑",
      date: "2023/06/06",
      email: "user1@gmail.com",
      status: "대기"
    },
    {
      inquiryNum: 3,
      content: "문의해요!! ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ\n 문의입니당 ㅇㅇㅇㅇㅇㅇ",
      nickname: "자바광팬아님",
      date: "2023/06/06",
      email: "user1@gmail.com",
      status: "완료"
    },
    {
      inquiryNum: 4,
      content: "문의드려요 관리자님!!!! 네네네??",
      nickname: "흠냐릥",
      date: "2023/06/03",
      email: "user3@gmail.com",
      status: "완료"
    },


  ];
  
  const [inquiries, setInquiries] = useState(dummyData);
  const [selectedInquiry, setSelectedInquiry] = useState([]); 
  const [selectAll, setSelectAll] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [Details, setDetails] = useState(null);



  const handleSelectAllChange = (event) => {
    const checked = event.target.checked;
    setSelectAll(checked);
    if (checked) {
      const allPostNums = inquiries.map((inquiry) => inquiry.inquirytNum);
      setSelectedInquiry(allPostNums);
    } else {
      setSelectedInquiry([]);
    }
  };

  const isPostSelected = (inquirytNum) => {
    return selectedInquiry.includes(inquirytNum);
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
        return { ...inquiry, status: '완료' };
      }
      return inquiry;
    });
  
    setInquiries(updatedInquiries);
  
    // 선택된 문의를 초기화
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
                {inquiry.content.length > 15 ? `${inquiry.content.substring(0, 16)}···` : inquiry.content} 
               </td>
                <td>{inquiry.nickname}</td>
                <td>{inquiry.date}</td>
                <td>
               <div> <StatusBadge status={inquiry.status}> {inquiry.status} </StatusBadge> </div>
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
                <TextBox readOnly value={Details.content} />
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
