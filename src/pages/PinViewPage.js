import React from "react";
import AppLayout from "../components/common/AppLayout";
import PostHeader from "../components/PinView/PostHeader";
import PostContent1 from "../components/PinView/PostContent1";
import PostContent2 from "../components/PinView/PostContent2";

const PinViewPage = () => {

  return (
    <>
      <AppLayout>
        <PostHeader />
        <PostContent1 />
        <PostContent2 />
      </AppLayout>
    </>
  );
}

export default PinViewPage;