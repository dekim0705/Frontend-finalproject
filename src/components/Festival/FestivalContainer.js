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
  justify-content: flex-start; 

  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 0 auto;
    justify-content: center;
  }
`;

const NoResultContainer = styled.div`
  display: flex;
  text-align: center;
  font-size: 1.2rem;
  justify-content: center;
  @media screen and (max-width: 412px) {
    margin-left: 20px;
  }
`;

const FestivalContainer = ({ apiData, selectedCity, selectedStatus, isButtonClicked, searchKeyword, sortBy, page }) => {
  const [currentPage, setCurrentPage] = useState(page);
  const navigate = useNavigate();

  const [filteredData, setFilteredData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false); 

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    navigate(`/festival/${newPage}`);
  };

  useEffect(() => {
    let filtered = apiData;

    if (isButtonClicked && selectedCity && selectedCity !== 0) {
      filtered = filtered.filter((festival) => festival.areaCode === selectedCity.toString());
    }

    if (isButtonClicked && selectedStatus && selectedStatus !== 0) {
      const currentDate = new Date();
      const formattedDate = parseInt(
        `${currentDate.getFullYear()}${String(currentDate.getMonth() + 1).padStart(2, "0")}${String(
          currentDate.getDate()
        ).padStart(2, "0")}`
      );
      if (selectedStatus === 1) {
        filtered = filtered.filter(
          (festival) =>
            parseInt(festival.eventStartDate) <= formattedDate &&
            parseInt(festival.eventEndDate) >= formattedDate
        );
      } else if (selectedStatus === 2) {
        filtered = filtered.filter((festival) => parseInt(festival.eventStartDate) > formattedDate);
      }
    }

    setFilteredData(filtered);
  }, [apiData, selectedCity, selectedStatus, isButtonClicked]);

  useEffect(() => {
    let dataToSearch = searchKeyword ? apiData : filteredData;

    if (searchKeyword) {
      const keyword = searchKeyword.toLowerCase();
      dataToSearch = dataToSearch.filter((festival) => festival.title.toLowerCase().includes(keyword));
    }

    setSearchedData(dataToSearch);
    setDataLoaded(true)
  }, [searchKeyword, filteredData]);

  useEffect(() => {
    let sortedData = [...searchedData];
    if (sortBy === "name") {
      sortedData.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "date") {
      sortedData.sort((a, b) => parseInt(a.eventStartDate) - parseInt(b.eventStartDate));
    }
    setSearchedData(sortedData);
  }, [sortBy]);

  const startIndex = (currentPage - 1) * 6;
  const endIndex = currentPage * 6;  
  const itemsToShow = searchedData.slice(startIndex, endIndex);

  const shouldShowPagination = searchedData.length >= 6;

  return (
    <div>
       {dataLoaded && searchedData.length > 0 ? (
        <>
          <Container>
            {itemsToShow.map((item, index) => (
              <FestivalItem key={index} item={item} currentPage={currentPage} />
            ))}
          </Container>
          {shouldShowPagination && (
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(searchedData.length / 6)}
              onPageChange={handlePageChange}
            />
          )}
        </>
      ) : (
        dataLoaded && <NoResultContainer>데이터가 없습니다 🥲</NoResultContainer>
      )}
    </div>
  );
};

export default FestivalContainer;
