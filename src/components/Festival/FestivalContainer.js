import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import FestivalItem from "./FestivalItem";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 30px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 20px;
  }
`;

const NoResultContainer = styled.div`
  display: flex;
  text-align: center;
  font-size: 1.2rem;
  @media (max-width: 768px) {
    margin-left: 30px;
  }
`;

const FestivalContainer = ({ apiData, selectedCity, selectedStatus, isButtonClicked, searchKeyword, page }) => {
  const [currentPage, setCurrentPage] = useState(page);
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    navigate(`/festival/${newPage}`); // 페이지 변경 시 URL 업데이트
  };

  useEffect(() => {
    let filtered = apiData;

    // 도시가 선택되었을 경우 도시별로 필터링!
    if (isButtonClicked && selectedCity && selectedCity !== 0) {
      filtered = filtered.filter(festival => festival.areaCode === selectedCity.toString());
    }

    // 개최여부가 선택되었을 경우 개최여부 필터링!
    if (isButtonClicked && selectedStatus && selectedStatus !== 0) {
      const currentDate = new Date();
      const formattedDate = parseInt(
        `${currentDate.getFullYear()}${String(currentDate.getMonth() + 1).padStart(2, "0")}${String(currentDate.getDate()).padStart(2, "0")}`
      );
      if (selectedStatus === 1) {
        filtered = filtered.filter(
          festival =>
            parseInt(festival.eventStartDate) <= formattedDate &&
            parseInt(festival.eventEndDate) >= formattedDate
        );
      } else if (selectedStatus === 2) {
        filtered = filtered.filter(
          festival => parseInt(festival.eventStartDate) > formattedDate
        );
      }
    }

    // 검색어 필터링 로직 추가
    if (searchKeyword) {
      const keyword = searchKeyword.toLowerCase();
      filtered = filtered.filter(item => item.title.toLowerCase().includes(keyword));
    }

    setFilteredData(filtered);
  }, [apiData, selectedCity, selectedStatus, isButtonClicked, searchKeyword]);

  // 한 페이지에 6개씩 아이템을 표시
  const startIndex = (currentPage - 1) * 6;
  const endIndex = startIndex + 6;
  const itemsToShow = filteredData.slice(startIndex, endIndex);

  // 검색 결과가 6개 미만인 경우 페이지 처리를 적용하지 않음
  const shouldShowPagination = filteredData.length >= 6;

  return (
    <div>
      {filteredData.length > 0 ? (
        <>
          <Container>
            {itemsToShow.map((item, index) => (
              <FestivalItem key={index} item={item} currentPage={currentPage} />
            ))}
          </Container>
          {shouldShowPagination && (
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(filteredData.length / 6)}
              onPageChange={handlePageChange}
            />
          )}
        </>
      ) : (
        <NoResultContainer>데이터가 없습니다 🥲</NoResultContainer>
      )}
    </div>
  );
};

export default FestivalContainer;
