import React from "react";
import AppLayout from "../components/common/AppLayout";
import BottomNav from "../components/common/BottomNav";
import SelectBox from "../components/Festival/Selectbox";




const FestivalPage = () => {

  return (
    <>
    <AppLayout>
      <SelectBox/>
      </AppLayout>
     <BottomNav/>
     </>
  );
}

export default FestivalPage;