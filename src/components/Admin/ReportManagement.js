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


const ReportManagement = () => {
  const dummyData = [
    {
      reportNum: 1,
      content: "신고합니다.",
      nickname: "겨울잠자는중",
      date: "2023/06/06",
    },
    {
      reportNum: 2,
      content: "신고합니다.",
      nickname: "리액트흑흑",
      date: "2023/06/06",
    },
    {
      reportNum: 3,
      content: "신고합니다.",
      nickname: "자바광팬아님",
      date: "2023/06/06",
    },
    {
      reportNum: 4,
      content: "신고합니다.",
      nickname: "짱구는못말려",
      date: "2023/06/06",
    },

  ];
  
  const [reports] = useState(dummyData); 
  const [selectedReports, setSelectedReports] = useState([]); 
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
      const allPostNums = reports.map((report) => report.reportNum);
      setSelectedReports(allPostNums);
    } else {
      setSelectedReports([]);
    }
  };

  const isReportSelected = (reportNum) => {
    return selectedReports.includes(reportNum);
  };


  const handleCheckboxChange = (event, reportNum) => {
    if (event.target.checked) {
      setSelectedReports((prevSelected) => [...prevSelected, reportNum]);
      console.log(selectedReports);
    } else {
      setSelectedReports((prevSelected) => prevSelected.filter((id) => id !== reportNum));
    }
  };
  
  const handleConfirm = () => {
    console.log('신고 확인 ! ')
  };

  return (
    <>
      <Container>
        <Title>신고 관리</Title>
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
              <th>신고 번호</th>
              <th>신고 내용</th>
              <th>신고자</th>
              <th>신고일</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.reportNum}>
                <td>
                <Checkbox
                checked={isReportSelected(report.reportNum)}
                onChange={(event) => handleCheckboxChange(event, report.reportNum)}
                 {...label} 
                 sx={{
                 color: pink[300],
                  '&.Mui-checked': {
                    color: pink[300],
                    },
                   }}
                   />
                </td>
                <td>{report.reportNum}</td>
                <td> {report.content}
                </td>
                <td>{report.nickname}</td>
                <td>{report.date}</td>
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

export default ReportManagement;
