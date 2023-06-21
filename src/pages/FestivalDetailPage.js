import React from "react";
import styled from "styled-components";
import AppLayout from "../components/common/AppLayout";
import FestivalMap from "../components/Festival/Info/FestivalMap";
import BottomNav from "../components/common/BottomNav";
import FestivalHeader from "../components/Festival/Info/FestivalHeader";
import FestivalSummary from "../components/Festival/Info/FestivalSummary";
import Recommend from "../components/Festival/Info/FestivalRecommend";
import Carousel from "../components/Festival/Info/Carousel";
import { useParams, useLocation } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
`;

const FestivalDetailPage = () => {
  const { contentId } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get('page');

  return (
    <AppLayout>
      <Container>
        <FestivalHeader page={page} contentId={contentId} />
        <Carousel contentId={contentId}/>
        <FestivalSummary page={page} contentId={contentId} />
        <FestivalMap page={page} contentId={contentId} />
        <Recommend page={page} contentId={contentId}/>
      </Container>
      <BottomNav/>
    </AppLayout>
  );
}

export default FestivalDetailPage;
