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
  const [selectedDate, setSelectedDate] = useState("");


  const handleSort = (type) => {
    setSortBy(type);
  };

  const handleFilter = (city, date) => {
    setSelectedCity(city);
    setSelectedDate(date);
  };

  return (
    <>
      <AppLayout>
        <Container>
        <SelectBox onFilter={handleFilter} />
          <ButtonWrapper>
          <Button onClick={() => handleFilter(selectedCity, selectedDate)}>둘러보기</Button>
            <DetailButton />
          </ButtonWrapper>
        </Container>
        <SortButtonsContainer>
        <SortButtons handleSort={handleSort} sortBy={sortBy} />
        </SortButtonsContainer>
        <FestivalContainer sortBy={sortBy} />
      </AppLayout>
      <BottomNav />
    </>
  );
};


export default FestivalPage;
