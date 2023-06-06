import React from "react";
import AppLayout from "../components/common/AppLayout";

import BottomNav from "../components/common/BottomNav";
import FestivalHeader from "../components/Festival/Info/FestivalHeader";
import FestivalCarousel from "../components/Festival/Info/FestivalCarousel";
import FestivalSummary from "../components/Festival/Info/FestivalSummary";




const FestivalDetailPage = () => {

  return (
    <>
    <AppLayout>
      <FestivalHeader/>
      <FestivalCarousel/>
      <FestivalSummary/>
      </AppLayout>
     <BottomNav/>
     </>
  );
}

export default FestivalDetailPage;