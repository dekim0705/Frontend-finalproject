import React from "react";
import AppLayout from "../components/common/AppLayout";
import BottomNav from "../components/common/BottomNav";
import WriteForm from "../components/Write/WriteForm";

const WritePage = () => {

  return (
    <>
      <AppLayout>
        <WriteForm />
      </AppLayout>
      <BottomNav />
    </>
  );
}

export default WritePage;