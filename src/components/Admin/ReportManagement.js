import { useState } from 'react';
import styled from 'styled-components';


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
    padding: 14px;
    border-bottom: 1px solid var(--line-color);
    text-align: center;
  }
  th {
    font-weight: bold;
    padding: 14px;
  }
`;
const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 55%;
  transform: translate(-50%, -50%);
  width: 35%;
  background-color: white;
  padding: 20px;
  border: 1px solid gray;
  border-radius: 10px;
`;


const PopupContent = styled.p`
  margin-bottom: 30px;
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

const PopupTitle = styled.p`
  margin-bottom: 10px;
  font-size: 0.9rem;
`;

const ReportManagement = () => {
  const dummyData = [
    {
      reportNum: 1,
      content: "이 사람 신고합니다! 관리자님 ㅜㅜ",
      nickname: "겨울잠자는중",
      date: "2023/06/06",
    },
    {
      reportNum: 2,
      content: "신고합니다 !!!!!!!!!!",
      nickname: "리액트흑흑",
      date: "2023/06/06",
    },
    {
      reportNum: 3,
      content: "이 사람 신고합니다! 관리자님 ㅜㅜ",
      nickname: "자바광팬아님",
      date: "2023/06/06",
    },
    {
      reportNum: 4,
      content: "이 사람 신고합니다! 관리자님 ㅜㅜ!!!",
      nickname: "짱구는못말려",
      date: "2023/06/06",
    },

  ];
  
  const [reports] = useState(dummyData); 
  const [popupVisible, setPopupVisible] = useState(false);
  const [Details, setDetails] = useState(null);

  const handleReportContentClick = (report) => {
    setDetails(report);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setDetails(null);
  };

  return (
    <>
      <Container>
        <Title>신고 관리</Title>
        <Table>
          <thead>
            <tr>
              <th>신고 번호</th>
              <th>신고 내용</th>
              <th>신고자</th>
              <th>신고일</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.reportNum}>
                <td>{report.reportNum}</td>
                <td onClick={() => handleReportContentClick(report)} style={{ cursor: 'pointer' }}>
                {report.content.length > 15 ? `${report.content.substring(0, 15)}···` : report.content} 
               </td>
                <td>{report.nickname}</td>
                <td>{report.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      {popupVisible && (
        <PopupContainer>
          {Details && (
            <>
              <PopupContent>
                <PopupTitle>신고 내용</PopupTitle>
                <TextBox readOnly value={Details.content} />
              </PopupContent>
            </>
          )}
          <PopupCloseButton onClick={closePopup}>닫기</PopupCloseButton>
        </PopupContainer>
      )}
    </>
  );
};  

export default ReportManagement;
