import React from "react";
import AppLayout from "../components/common/AppLayout";
import Ad from "../components/Home/Ad";
import City from "../components/Home/City";

const HomePage = () => {

  return (
    <AppLayout>
      <Ad />
      <City />
    </AppLayout>
  );
}

export default HomePage;