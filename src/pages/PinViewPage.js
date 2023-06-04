import React from "react";
import AppLayout from "../components/common/AppLayout";
import PostHeader from "../components/PinView/PostHeader";
import PostContent1 from "../components/PinView/PostContent1";
import PostContent2 from "../components/PinView/PostContent2";
import ReplyWrite from "../components/PinView/ReplyWrite";
import ReplyList from "../components/PinView/ReplyList";

const PinViewPage = () => {

  return (
    <>
      <AppLayout>
        <PostHeader />
        <PostContent1 />
        <PostContent2 />
        <ReplyWrite />
        <ReplyList />
      </AppLayout>
    </>
  );
}

export default PinViewPage;