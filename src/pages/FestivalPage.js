import React from "react";
import styled from "styled-components";
import AppLayout from "../components/common/AppLayout";
import BottomNav from "../components/common/BottomNav";
import SelectBox from "../components/Festival/Selectbox";
import Button from "../components/Festival/Button";
import DetailButton from "../components/Festival/DetailButton";
import FestivalContainer from "../components/Festival/FestivalContainer";
import SortButtons from "../components/Festival/SortButton";
import FestivalAPI from "../components/Festival/FestivalAPI";

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
  return (
    <>
      <AppLayout>
        <Container>
          <SelectBox />
          <ButtonWrapper>
            <Button>둘러보기</Button>
            <DetailButton />
          </ButtonWrapper>
        </Container>
        <SortButtonsContainer>
          <SortButtons />
        </SortButtonsContainer>
        <FestivalAPI>
  {apiData => <FestivalContainer apiData={apiData} />}
</FestivalAPI>

      </AppLayout>
      <BottomNav />
    </>
  );
};


export default FestivalPage;
