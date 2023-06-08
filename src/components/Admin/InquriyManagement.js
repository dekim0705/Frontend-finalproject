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


const InquiryManagement = () => {
  const dummyData = [
    {
      inquiryNum: 1,
      content: "문의합니다.",
      nickname: "겨울잠자는중",
      date: "2023/06/06",
    },
    {
      inquiryNum: 2,
      content: "문의합니다.",
      nickname: "리액트흑흑",
      date: "2023/06/06",
    },
    {
      inquiryNum: 3,
      content: "문의해요!!",
      nickname: "자바광팬아님",
      date: "2023/06/06",
    },
    {
      inquiryNum: 4,
      content: "문의합니다릴라",
      nickname: "짱구는못말려",
      date: "2023/06/06",
    },

  ];
  
  const [inquiries] = useState(dummyData); 
  const [selectedInquiry, setSelectedInquiry] = useState([]); 
  const [selectAll, setSelectAll] = useState(false);


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
    console.log('문의 확인 ! ')
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
            </tr>
          </thead>
          <tbody>
            {inquiries.map((inquiry) => (
              <tr key={inquiry.reportNum}>
                <td>
                <Checkbox
                checked={isPostSelected(inquiry.reportNum)}
                onChange={(event) => handleCheckboxChange(event, inquiry.reportNum)}
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
                <td> {inquiry.content}
                </td>
                <td>{inquiry.nickname}</td>
                <td>{inquiry.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button onClick={handleConfirm}>
          확인
        </Button>
      </Container>
    </>
  );
                  };  

export default InquiryManagement;
