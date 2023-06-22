import React, { useState } from "react";
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

const FestivalContainer = ({ apiData, page, searchKeyword }) => {
  const [currentPage, setCurrentPage] = useState(page);
  const navigate = useNavigate();

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    navigate(`/festival/${newPage}`); // 페이지 변경 시 URL 업데이트
  };

  // 검색어 필터링 로직 추가
  const filteredData = apiData.filter((item) => {
    const title = item.title.toLowerCase();
    const keyword = searchKeyword.toLowerCase();
    return title.includes(keyword);
  });

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
        <div>검색 결과가 없습니다 🥲</div>
      )}
    </div>
  );
};

export default FestivalContainer;
