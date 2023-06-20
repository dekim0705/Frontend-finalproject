import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FestivalAPI from "./FestivalAPI";
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

const FestivalContainer = ({ sortBy, selectedCity, selectedMonth }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    navigate(`/festival/${newPage}`); // 페이지 변경 시 URL 업데이트
  };

  return (
    <div>
      <FestivalAPI
        page={currentPage}
        selectedCity={selectedCity}
        selectedMonth={selectedMonth}
      >
        {(apiData, totalPages) => (
          <div>
            {apiData.length > 0 ? (
              <>
                <Container>
                  {apiData.map((item, index) => (
                    <FestivalItem key={index} item={item} currentPage={currentPage}  />
                  ))}
                </Container>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            ) : (
              <div>Loading...</div>
            )}
          </div>
        )}
      </FestivalAPI>
    </div>
  );
};

export default FestivalContainer;
