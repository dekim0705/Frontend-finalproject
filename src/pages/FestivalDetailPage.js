import React from "react";
import AppLayout from "../components/common/AppLayout";
import FestivalMap from "../components/Festival/Info/FestivalMap";
import BottomNav from "../components/common/BottomNav";
import FestivalHeader from "../components/Festival/Info/FestivalHeader";
import FestivalCarousel from "../components/Festival/Info/FestivalCarousel";
import FestivalSummary from "../components/Festival/Info/FestivalSummary";
import Recommend from "../components/Festival/Info/FestivalRecommend";
import Carousel from "../components/Festival/Info/Carousel";



const FestivalDetailPage = () => {

  return (
    <>
    <AppLayout>
      <FestivalHeader/>
      <Carousel/>
      <FestivalSummary/>
      <FestivalMap/>
      <Recommend/>
      </AppLayout>
     <BottomNav/>
     </>
  );
}

export default FestivalDetailPage;