import React from "react";
import AppLayout from "../components/common/AppLayout";
import FestivalMap from "../components/Festival/Info/FestivalMap";
import BottomNav from "../components/common/BottomNav";
import FestivalHeader from "../components/Festival/Info/FestivalHeader";
import FestivalCarousel from "../components/Festival/Info/FestivalCarousel";
import FestivalSummary from "../components/Festival/Info/FestivalSummary";
import Recommend from "../components/Festival/Info/FestivalRecommend";
import Carousel from "../components/Festival/Info/Carousel";
import { useParams, useLocation } from 'react-router-dom';

const FestivalDetailPage = () => {
  const { contentId } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get('page');


  return (
    <>
    <AppLayout>
    <FestivalHeader page={page} contentId={contentId} />
      <Carousel/>
      <FestivalSummary page={page} contentId={contentId} />
      <FestivalMap page={page} contentId={contentId} />
      <Recommend/>
      </AppLayout>
     <BottomNav/>
     </>
  );
}

export default FestivalDetailPage;