import React from "react";
import AppLayout from "../components/common/AppLayout";
import BottomNav from "../components/common/BottomNav";
import Desc from "../components/Membership/Desc";

const MembershipPage = () => {

  return (
    <>
      <AppLayout>
        <Desc />
      </AppLayout>
      <BottomNav />
    </>
  );
}

export default MembershipPage;