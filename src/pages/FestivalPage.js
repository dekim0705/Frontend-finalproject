import React , {useState}from "react";
import styled from "styled-components";
import AppLayout from "../components/common/AppLayout";
import BottomNav from "../components/common/BottomNav";
import SelectBox from "../components/Festival/Selectbox";
import Button from "../components/Festival/Button";
import DetailButton from "../components/Festival/DetailSearch";
import FestivalContainer from "../components/Festival/FestivalContainer";
import SortButtons from "../components/Festival/SortButton";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 30px;
  flex-wrap: wrap;
  gap: 15px;

  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

const SortButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
`;


const FestivalPage = () => {
  const [sortBy, setSortBy] = useState('name');
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [savedCity, setSavedCity] = useState("");
  const [savedMonth, setSavedMonth] = useState("");
  


  const handleSort = (type) => {
    setSortBy(type);
  };

  const handleFilter = (city, month) => {
    setSelectedCity(city);
    setSelectedMonth(month);
  };

  const handleButtonClick = () => {
    setIsButtonClicked(true);
    setSavedCity(selectedCity);
    setSavedMonth(selectedMonth);
  };

  


  return (
    <>
      <AppLayout>
        <Container>
          <SelectBox onFilter={handleFilter} />
          <ButtonWrapper>
            <Button onClick={handleButtonClick}>둘러보기</Button>
          </ButtonWrapper>
        </Container>
        <SortButtonsContainer>
          <SortButtons handleSort={handleSort} sortBy={sortBy} />
        </SortButtonsContainer>
        {isButtonClicked ? (
          <FestivalContainer
            sortBy={sortBy}
            selectedCity={selectedCity}
            selectedMonth={selectedMonth}
            isButtonClicked={isButtonClicked}
          />
        ) : (
          <FestivalContainer
            sortBy={sortBy}
            selectedCity=""
            selectedMonth=""
            isButtonClicked={isButtonClicked}
          />
        )}
      </AppLayout>
      <BottomNav />
    </>
  );
};

export default FestivalPage;
